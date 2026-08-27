"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 ring-1 ring-slate-900/5 transition-all duration-300 ease-out hover:bg-slate-200 hover:ring-slate-900/15 active:scale-90 dark:bg-slate-800 dark:ring-white/10 dark:hover:bg-slate-700 dark:hover:ring-white/20"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-amber-400 transition-all duration-300 group-hover:rotate-45 group-active:scale-75" />
      ) : (
        <Moon className="h-5 w-5 text-slate-600 transition-all duration-300 group-hover:-rotate-12 group-active:scale-75 dark:text-slate-300" />
      )}
    </button>
  );
}
