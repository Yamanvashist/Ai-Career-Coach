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

import ThemeToggle from "../ThemeToggle";

const MobileSidebar = () => {
  const { isOpen, close } = useSidebarStore();

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-72 flex-col bg-slate-900 border-r border-slate-800 p-6 text-white shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Path<span className="text-indigo-400">Way</span>
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Your Career. Your Path.
            </p>
          </div>

          <button
            onClick={close}
            className="rounded-lg p-2 text-slate-400 hover:text-white transition hover:bg-slate-800 cursor-pointer"
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
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800/80 hover:text-indigo-400"
              >
                <LayoutDashboard size={20} />
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/resume-review"
                onClick={close}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800/80 hover:text-indigo-400"
              >
                <Briefcase size={20} />
                Resume
              </Link>
            </li>

            <li>
              <Link
                href="/analysis"
                onClick={close}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800/80 hover:text-indigo-400"
              >
                <FileText size={20} />
                Analysis
              </Link>
            </li>

            <li>
              <Link
                href="/interview"
                onClick={close}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800/80 hover:text-indigo-400"
              >
                <Users size={20} />
                Interview
              </Link>
            </li>

            <li>
              <Link
                href="/history"
                onClick={close}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800/80 hover:text-indigo-400"
              >
                <History size={20} />
                History
              </Link>
            </li>
          </ul>
        </nav>

        <div className="border-t border-slate-800 pt-4 space-y-1">
          <Link
            href="/settings"
            onClick={close}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800/80 hover:text-indigo-400"
          >
            <Settings size={20} />
            Settings
          </Link>

          <div className="flex items-center justify-between px-4 py-2 text-slate-300">
            <span className="text-sm font-medium">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;