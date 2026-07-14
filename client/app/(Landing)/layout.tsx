import "../globals.css";
import Navbar from "@/components/Landing/Navbar";

export default function RootLayout({
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
