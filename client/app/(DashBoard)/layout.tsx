import DesktopSidebar from "@/components/Desktop/DesktopSidebar";
import MobileHeader from "@/components/Mobile/MobileHeader";
import MobileSidebar from "@/components/Mobile/MobileSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ProtectedRoute>
      <div className="flex h-dvh w-full overflow-hidden">
        <DesktopSidebar />
        <MobileSidebar />

        <div className="flex flex-1 flex-col min-w-0">
          <MobileHeader />
          <main className="flex-1 overflow-y-auto bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
