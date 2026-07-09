"use client";

import Link from "next/link";
import { useSidebarStore } from "@/store/sidebarStore";
import {
  X,
  LayoutDashboard,
  Briefcase,
  FileText,
  Users,
  History,
  Settings,
} from "lucide-react";

const MobileSidebar = () => {
  const { isOpen, close } = useSidebarStore();

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={close}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      />

      <aside className="fixed top-0 left-0 z-50 flex h-screen w-72 flex-col bg-slate-900 p-6 text-white shadow-2xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Path<span className="text-blue-400">Way</span>
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Your Career. Your Path.
            </p>
          </div>

          <button
            onClick={close}
            className="rounded-lg p-2 transition hover:bg-slate-800"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                onClick={close}
                className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800 hover:text-blue-400"
              >
                <LayoutDashboard size={20} />
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/resume-review"
                onClick={close}
                className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800 hover:text-blue-400"
              >
                <Briefcase size={20} />
                Resume
              </Link>
            </li>

            <li>
              <Link
                href="/analysis"
                onClick={close}
                className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800 hover:text-blue-400"
              >
                <FileText size={20} />
                Analysis
              </Link>
            </li>

            <li>
              <Link
                href="/interview"
                onClick={close}
                className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800 hover:text-blue-400"
              >
                <Users size={20} />
                Interview
              </Link>
            </li>

            <li>
              <Link
                href="/history"
                onClick={close}
                className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800 hover:text-blue-400"
              >
                <History size={20} />
                History
              </Link>
            </li>
          </ul>
        </nav>

        <div className="border-t border-slate-800 pt-4">
          <Link
            href="/settings"
            onClick={close}
            className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800 hover:text-blue-400"
          >
            <Settings size={20} />
            Settings
          </Link>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
