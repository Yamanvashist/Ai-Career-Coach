"use client";

import React from "react";
import Link from "next/link";
import { Send, Menu,Bot } from "lucide-react";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useLogout } from "@/hooks/auth/useLogOut";
import ThemeToggle from "../ThemeToggle";
import { useSidebarStore } from "@/store/sidebarStore";

interface NavPage {
  id: string;
  name: string;
  href: string;
}

const pages: NavPage[] = [
  { id: "features", name: "Features", href: "#features" },
  { id: "how-it-works", name: "How It Works", href: "#how-it-works" },
  { id: "pricing", name: "Pricing", href: "#pricing" },
  { id: "resources", name: "Resources", href: "#resources" },
];

const Navbar = () => {
  const { open } = useSidebarStore();
  const { data: user, isLoading } = useCurrentUser();
  const mutatedLogOut = useLogout();

  const handleLogOut = () => {
    mutatedLogOut.mutateAsync();
  };

  return (
    <nav className="sticky top-0 z-50 h-20 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 transition-colors">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 ring-1 ring-blue-200 dark:ring-blue-900/60">
            <Bot color="#2080fe" size={22} className="hidden md:block" />
            <Menu onClick={open} color="#2080fe" size={22} className="block md:hidden cursor-pointer" />
          </div>

          <Link
            href="/"
            className="text-2xl font-poppins font-bold tracking-tight text-slate-900 dark:text-white"
          >
            CareerPilot
          </Link>
        </div>

        <ul className="hidden md:flex md:mr-16 items-center gap-2">
          {pages.map((page) => (
            <li key={page.id} className="shrink-0">
              <Link
                href={page.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {isLoading ? (
            <div className="hidden md:flex items-center gap-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/70 to-transparent dark:via-slate-500/20" />
              </div>

              <div className="flex flex-col gap-2">
                <div className="relative h-3 w-24 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/70 to-transparent dark:via-slate-500/20" />
                </div>

                <div className="relative h-2.5 w-36 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/70 to-transparent dark:via-slate-500/20" />
                </div>
              </div>
            </div>
          ) : user ? (
            <div className="hidden md:flex items-center gap-4">
              <button className="h-10 w-10 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </button>

              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {user.name}
                </span>

                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {user.email || "guest@mail.com"}
                </span>
              </div>

              <button
                onClick={handleLogOut}
                className="px-4 py-2 text-sm font-medium border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4 md:gap-6">
              <Link
                href="/sign-in"
                className="shrink-0 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-3 py-2 rounded-lg transition-all"
              >
                Sign Up
              </Link>
            </div>
          )}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;