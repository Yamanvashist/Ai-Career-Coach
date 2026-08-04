"use client";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: user, isLoading, isError } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user === null) {
      router.replace("/sign-in");
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-slate-950 transition-colors">
        <div className="w-60 md:w-160 space-y-4">
          <div className="h-8 w-48 rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
          <div className="h-4 w-full rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
          <div className="h-4 w-3/4 rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
          <div className="h-13 w-full rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-slate-950 transition-colors px-6">
        <div className="flex max-w-md flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-950/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v4m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Something went wrong
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            We couldn't load this page. Please try again or refresh your
            browser.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-8 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700 active:scale-[0.98]"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return <>{children}</>;
}
