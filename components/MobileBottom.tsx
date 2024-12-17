import Link from 'next/link'
import React from 'react'
import {
    Home,
    Bell,
    Mail,
    Search,
    User2,
    BadgePlus,
    LogOut,
    MoreHorizontal,

} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { auth } from '@/auth';
import { signIn, signOut } from 'next-auth/react';

const MobileBottom = async () => {
    const session = await auth()
    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 bg-black lg:hidden z-50">
                <div className="flex justify-around py-3">
                    {[
                        { icon: Home, href: "/" },
                        { icon: Search, href: "/explore" },
                        { icon: Bell, href: "/notifications" },
                        { icon: Mail, href: "/messages" }
                    ].map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="hover:bg-gray-800 p-2 rounded-full"
                        >
                            <item.icon className="size-6" />
                        </Link>
                    ))}

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
                </div>
            </div>

        </>
    )
}

export default MobileBottom
