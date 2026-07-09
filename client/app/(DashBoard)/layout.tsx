import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Users,
  Settings,
} from "lucide-react";

import Link from "next/link";

export default function DashBoardLayot({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen w-full">
      <aside className="hidden md:flex w-72 flex-col bg-slate-900 text-white p-6 shadow-xl">
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Path<span className="text-blue-400">Way</span>
          </h1>

          <p className="mt-1 text-sm text-slate-400">Your Career. Your Path.</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all hover:bg-slate-800 hover:text-blue-400"
              >
                <LayoutDashboard size={20} />
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/resume-review"
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all hover:bg-slate-800 hover:text-blue-400"
              >
                <Briefcase size={20} />
                Resume
              </Link>
            </li>

            <li>
              <Link
                href="/analysis"
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all hover:bg-slate-800 hover:text-blue-400"
              >
                <FileText size={20} />
                Code
              </Link>
            </li>

             <li>
              <Link
                href="/interview"
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all hover:bg-slate-800 hover:text-blue-400"
              >
                <Users size={20} />
                Interview
              </Link>
            </li>

            <li>
              <Link
                href="/history"
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all hover:bg-slate-800 hover:text-blue-400"
              >
                <Users size={20} />
                History
              </Link>
            </li>
          </ul>
        </nav>

        <div className="border-t border-slate-800 pt-4">
          <Link
            href="/settings"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all hover:bg-slate-800 hover:text-blue-400"
          >
            <Settings size={20} />
            Settings
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto bg-gray-100">{children}</main>
    </div>
  );
}
