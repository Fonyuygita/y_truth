// import { auth } from '@/auth'
import { Bell, TrendingUp } from 'lucide-react'
// import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { SignedOut } from '@clerk/nextjs'
import { SignedIn, SignInButton, UserButton } from '@clerk/nextjs'

const Header = async () => {
    return (
        <>
            <div className="sticky top-0 bg-black/70 backdrop-blur-md z-40 p-4 flex justify-between items-center">
                {/* {session?.user ? (
                    <>
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

                    </>

                ) :
                    (
                        <>
                            <h2 className="text-xl font-bold">yT</h2>
                            <form
                                action={async () => {
                                    "use server";
                                    await signIn("github");
                                }}
                            >
                                <button type="submit" className="hover:bg-gray-800 p-2 rounded-full">
                                    Login
                                </button>
                            </form>
                        </>


                    )} */}
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <UserButton />
                <div className="flex items-center space-x-4">
                    <TrendingUp className="size-6" />
                    <Bell className="size-6" />
                </div>
            </div>

        </>
    )
}

export default Header
