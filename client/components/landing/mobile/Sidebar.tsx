"use client";

import Link from "next/link";
import { useSidebarStore } from "@/store/sidebarStore";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useLogout } from "@/hooks/auth/useLogOut";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Resources", href: "#resources" },
];

const Sidebar = () => {
  const { isOpen, close } = useSidebarStore();
  const { data: user, isLoading } = useCurrentUser();

  const mutatedLogOut = useLogout();

  const handleLogOut = () => {
    mutatedLogOut.mutateAsync();
    close();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-72 flex-col border-r border-slate-200 bg-white text-slate-900 transition-all duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-black">
              Ai
            </div>
            <div>
              <h1 className="font-semibold text-slate-900 dark:text-white">
                Career Coach
              </h1>
            </div>
          </div>

          <button
            onClick={close}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white cursor-pointer"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={close}
              className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Dynamic Auth Section */}
        <div className="border-t border-slate-100 p-4 dark:border-slate-800 space-y-3">
          {isLoading ? (
            <div className="h-10 w-full animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
          ) : user ? (
            <>
              <div className="flex items-center gap-3 px-2 py-1">
                <div className="h-10 w-10 shrink-0 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <div className="flex flex-col truncate">
                  <span className="text-sm font-semibold truncate text-gray-900 dark:text-gray-100">
                    {user.name}
                  </span>
                  <span className="text-xs truncate text-gray-500 dark:text-gray-400">
                    {user.email || "guest@mail.com"}
                  </span>
                </div>
              </div>

              <button
                onClick={handleLogOut}
                className="w-full py-2.5 text-sm font-medium border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                href="/sign-in"
                onClick={close}
                className="flex w-full items-center justify-center rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900 transition-all"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                onClick={close}
                className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
