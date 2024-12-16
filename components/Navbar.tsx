import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { Home, Search, MessageCircle, User2, TwitterIcon, MoreHorizontal, BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="fixed bottom-0 left-0 right-0 bg-black text-white lg:top-0 lg:bottom-auto lg:w-[275px] lg:h-screen lg:border-r lg:border-gray-800">
      {/* Mobile Bottom Navigation */}
      <nav className="flex justify-around items-center py-3 lg:hidden">
        <Link href="/" className="hover:bg-gray-800 p-2 rounded-full">
          <Home className="size-6" />
        </Link>
        <Link href="/search" className="hover:bg-gray-800 p-2 rounded-full">
          <Search className="size-6" />
        </Link>
        <Link href="/messages" className="hover:bg-gray-800 p-2 rounded-full">
          <MessageCircle className="size-6" />
        </Link>

        {session?.user ? (
          <Sheet>
            <SheetTrigger asChild>
              <button className="hover:bg-gray-800 p-2 rounded-full">
                <MoreHorizontal className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="bg-black text-white">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/startup/create" className="flex items-center space-x-2">
                  <BadgePlus className="size-6" />
                  <span>Create</span>
                </Link>
                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <button type="submit" className="flex items-center space-x-2">
                    <LogOut className="size-6 text-red-500" />
                    <span>Logout</span>
                  </button>
                </form>
                <Link href="/user" className="flex items-center space-x-2">
                  <Avatar className="size-8">
                    <AvatarImage
                      src={session?.user?.image || ""}
                      alt={session?.user?.name || ""}
                    />
                    <AvatarFallback>AV</AvatarFallback>
                  </Avatar>
                  <span>Profile</span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button type="submit" className="hover:bg-gray-800 p-2 rounded-full">
              <User2 className="size-6" />
            </button>
          </form>
        )}
      </nav>

      {/* Desktop Sidebar Navigation */}
      <nav className="hidden lg:flex lg:flex-col lg:h-full lg:p-4 lg:space-y-4">
        <Link href="/" className="mb-4">
          <TwitterIcon className="size-8 text-white" />
        </Link>

        <div className="flex flex-col space-y-2">
          <Link
            href="/"
            className="flex items-center space-x-3 p-3 hover:bg-gray-800 rounded-full transition-colors"
          >
            <Home className="size-6" />
            <span className="text-xl">Home</span>
          </Link>
          <Link
            href="/search"
            className="flex items-center space-x-3 p-3 hover:bg-gray-800 rounded-full transition-colors"
          >
            <Search className="size-6" />
            <span className="text-xl">Explore</span>
          </Link>
          <Link
            href="/messages"
            className="flex items-center space-x-3 p-3 hover:bg-gray-800 rounded-full transition-colors"
          >
            <MessageCircle className="size-6" />
            <span className="text-xl">Messages</span>
          </Link>

          {session?.user ? (
            <>
              <Link
                href="/startup/create"
                className="flex items-center space-x-3 p-3 hover:bg-gray-800 rounded-full transition-colors"
              >
                <BadgePlus className="size-6" />
                <span className="text-xl">Create</span>
              </Link>

              <Link
                href="/user"
                className="flex items-center space-x-3 p-3 hover:bg-gray-800 rounded-full transition-colors"
              >
                <Avatar className="size-8">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
                <span className="text-xl">Profile</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
                className="mt-auto"
              >
                <button
                  type="submit"
                  className="flex items-center space-x-3 p-3 hover:bg-gray-800 rounded-full transition-colors w-full"
                >
                  <LogOut className="size-6 text-red-500" />
                  <span className="text-xl">Logout</span>
                </button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button
                type="submit"
                className="flex items-center space-x-3 p-3 hover:bg-gray-800 rounded-full transition-colors w-full"
              >
                <User2 className="size-6" />
                <span className="text-xl">Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;