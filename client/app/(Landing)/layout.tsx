import "../globals.css";
import Navbar from "@/components/landing/Navbar";
import Sidebar from "@/components/landing/mobile/Sidebar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <Sidebar/>
      <main className="">{children}</main>
    </div>
  );
}
