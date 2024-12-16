
// import Navbar from "@/components/Navbar";
import {
  Home,
  Bell,
  Mail,
  Search,
  Rocket,
  TrendingUp,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const TrustedNewsSources = [
  {
    name: "Reuters",
    description: "Global news organization",
    verified: true
  },
  {
    name: "Associated Press",
    description: "Independent news agency",
    verified: true
  },
  {
    name: "BBC News",
    description: "British public service broadcaster",
    verified: true
  },
  {
    name: "NPR",
    description: "Non-profit media organization",
    verified: true
  }
];

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen bg-black text-white font-sans">
      {/* Left Sidebar (Desktop) */}
      <nav className="hidden lg:flex lg:w-[275px] lg:flex-col lg:border-r lg:border-gray-800 lg:p-4 lg:space-y-4">
        <div className="mb-4">
          <Rocket className="size-8 text-white" />
        </div>

        <div className="space-y-2">
          {[
            { icon: Home, text: "Home", href: "/" },
            { icon: Search, text: "Explore", href: "/explore" },
            { icon: Bell, text: "Notifications", href: "/notifications" },
            { icon: Mail, text: "Messages", href: "/messages" },
            { icon: MessageCircle, text: "Communities", href: "/communities" },
            { icon: TrendingUp, text: "Trending", href: "/trending" }
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center space-x-3 p-3 hover:bg-gray-800 rounded-full transition-colors"
            >
              <item.icon className="size-6" />
              <span className="text-xl">{item.text}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
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
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-black border-r border-l border-gray-800 relative lg:max-w-[600px]">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 bg-black/70 backdrop-blur-md z-40 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Home</h2>
          <div className="flex items-center space-x-4">
            <TrendingUp className="size-6" />
            <Bell className="size-6" />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-4">
          {children}
        </div>
      </main>

      {/* Right Sidebar (Desktop & Mobile) */}
      <aside className="hidden lg:block lg:w-[350px] lg:p-4 overflow-y-auto">
        <div className="sticky top-0 bg-black pt-4">
          <Input
            placeholder="Search"
            className="w-full mb-4 bg-gray-800 text-white border-none"
          />

          <div className="bg-gray-900 rounded-xl p-4 space-y-4">
            <h3 className="text-xl font-bold mb-4">News Sources to Trust</h3>
            {TrustedNewsSources.map((source, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Avatar className="size-10">
                  <AvatarFallback>{source.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">{source.name}</span>
                    {source.verified && (
                      <Rocket className="size-4 text-blue-500" />
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">{source.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile Right Sidebar as Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <button className="fixed bottom-20 right-4 bg-blue-500 text-white p-3 rounded-full lg:hidden z-50">
            <TrendingUp className="size-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-black text-white overflow-y-auto">
          <div className="p-4">
            <Input
              placeholder="Search"
              className="w-full mb-4 bg-gray-800 text-white border-none"
            />

            <div className="bg-gray-900 rounded-xl p-4 space-y-4">
              <h3 className="text-xl font-bold mb-4">News Sources to Trust</h3>
              {TrustedNewsSources.map((source, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Avatar className="size-10">
                    <AvatarFallback>{source.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold">{source.name}</span>
                      {source.verified && (
                        <Rocket className="size-4 text-blue-500" />
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{source.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}