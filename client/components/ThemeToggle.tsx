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
      className="group flex h-10 w-10 items-center justify-center rounded-xl cursor-pointer border border-slate-200/80 bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:scale-105 hover:border-emerald-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-700"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-amber-500 transition-transform duration-300 group-hover:rotate-180" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-slate-200" />
      )}
    </button>
  );
}
