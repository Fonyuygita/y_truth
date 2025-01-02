import { currentUser } from "@clerk/nextjs/server";
import { db } from "./dbConnection";

export const FindUser = async () => {
  const user = await currentUser();
  console.log(user);
  // if(user) {
  //     return user;
  // }

  const existingUser = await db.user.findUnique({
    where: { clerkId: user?.id },
  });

  if (existingUser) {
    return existingUser;
  }

  // if the user is not found in the database, create a new user
  const newUser = await db.user.create({
    data: {
      clerkId: user?.id,
      email: user?.emailAddresses[0].emailAddress,
      name: `${user?.firstName}${user?.lastName}`,
      imageUrl: user?.imageUrl,
    },
  });

  return newUser;
};
