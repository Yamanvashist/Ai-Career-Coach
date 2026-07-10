import React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Users,
  Settings,
} from "lucide-react";
import Image from "next/image";

const DesktopSidebar = () => {
  return (
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

      <div className="border-b border-slate-800 pt-4">
        <Link
          href="/settings"
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all hover:bg-slate-800 hover:text-blue-400"
        >
          <Settings size={20} />
          Settings
        </Link>
      </div>
      <div className="mt-5 rounded-xl border border-slate-800 bg-slate-800/70 p-3 transition hover:bg-slate-800">
        <div className="flex items-center gap-3">
          <Image
            alt="Profile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_iS6ah90lEufyitkFEND2e98ccufb7spcgCLbb2gY1vw7151sSqjaXGp&s=10"
            width={42}
            height={42}
            className="rounded-full object-cover border-2 border-blue-400"
          />

          <div className="flex-1 overflow-hidden">
            <h3 className="truncate text-sm font-semibold text-white">Gojo</h3>

            <p className="truncate text-xs text-slate-400">gojo@example.com</p>
          </div>

          <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
        </div>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
