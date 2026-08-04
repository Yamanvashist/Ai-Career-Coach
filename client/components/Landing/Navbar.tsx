"use client";
import React from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useLogout } from "@/hooks/auth/useLogOut";
import ThemeToggle from "../ThemeToggle";

interface NavPage {
  id: string;
  name: string;
  href: string;
}

const pages: NavPage[] = [
  { id: "features", name: "Features", href: "/features" },
  { id: "how-it-works", name: "How It Works", href: "/how-it-works" },
  { id: "pricing", name: "Pricing", href: "/pricing" },
  { id: "resources", name: "Resources", href: "/resources" },
];

const Navbar = () => {
  const { data: user } = useCurrentUser();

  const mutatedLogOut = useLogout();

  const handleLogOut = () => {
    mutatedLogOut.mutateAsync();
  };

  return (
    <nav className="h-18 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <Send color="#2080fe" size={30} />
          <Link
            href="/"
            className="text-2xl font-poppins font-bold text-gray-900 dark:text-white"
          >
            CareerPilot
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-10">
          {pages.map((page) => (
            <li key={page.id}>
              <Link
                href={page.href}
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <button className="h-10 w-10 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center">
                {user.name.charAt(0).toUpperCase()}
              </button>

              <div className="hidden md:flex flex-col">
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
            <div className="flex items-center gap-4 md:gap-6">
              <Link
                href="/sign-in"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                Sign In
              </Link>

              <Link
                href="/sign-up"
                className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all"
              >
                Get Started
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