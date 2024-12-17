
// import Navbar from "@/components/Navbar";


import Header from "@/components/Header";
import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";



export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen bg-black text-white font-sans">
      {/* Left Sidebar (Desktop) */}

      <LeftBar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-black border-r border-l border-gray-800 relative lg:max-w-[600px]">
        {/* Sticky Top Bar */}
        <Header />

        {/* Scrollable Content */}
        <div className="p-4">
          {children}
        </div>
      </main>

      <RightBar />



    </div>
  );
}