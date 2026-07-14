import DesktopSidebar from "@/components/DesktopSidebar";
import MobileHeader from "@/components/MobileHeader";
import MobileSidebar from "@/components/MobileSidebar";

export default function DashBoardLayot({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen w-full ">
      <DesktopSidebar />

      <MobileSidebar />
      <div className="flex flex-1 flex-col">
        <MobileHeader />

        <main className="flex-1  overflow-y-auto bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
