import { currentUser } from "@clerk/nextjs/server";
import { db } from "./dbConnection";

export const findUser = async () => {
  const user = await currentUser();
  console.log(user);
  // check for currently loggedin user
  if (!user) {
    return null;
  }

  // check if user is already in the database
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (loggedInUser) {
    return loggedInUser;
  }

  // if not in the database, create a new user
  const newUser = await db.user.create({
    data: {
      clerkId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });
  console.log(newUser);
  return newUser;
};

// await findUser();
