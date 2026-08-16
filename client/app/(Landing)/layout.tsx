import "../globals.css";
import Navbar from "@/components/Landing/Navbar";
import Sidebar from "@/components/Landing/mobile/Sidebar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="">{children}</main>
    </div>
  );
}
