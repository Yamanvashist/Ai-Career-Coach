"use client";
import { Menu } from "lucide-react";
import { useSidebarStore } from "@/store/sidebarStore";

const MobileHeader = () => {
  const { toggle } = useSidebarStore();

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 shadow-sm md:hidden transition-colors">
      <button
        onClick={toggle}
        className="rounded-lg p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
      >
        <Menu size={26} />
      </button>

      <h1 className="text-xl font-bold text-slate-900 dark:text-white">
        Ai<span className="text-indigo-600 dark:text-indigo-400"> CareerCoach</span>
      </h1>

      <div className="w-10.5" />
    </header>
  );
};

export default MobileHeader;