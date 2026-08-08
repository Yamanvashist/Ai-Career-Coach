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
    if (!isLoading && (!user || isError)) {
      router.replace("/sign-in");
    }
  }, [isLoading, user, isError, router]);
  if (isLoading) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-24 w-24 animate-[spin_1.5s_linear_infinite] rounded-full border-4 border-transparent border-r-indigo-600 border-t-indigo-600 dark:border-r-indigo-500 dark:border-t-indigo-500" />

          <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/40">
            <svg
              className="h-8 w-8 text-indigo-600 dark:text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center space-y-2 text-center">
          <h3 className="animate-pulse text-lg font-bold tracking-wide text-slate-900 dark:text-slate-100">
            Authenticating...
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Hold tight, fetching your workspace.
          </p>
        </div>
      </div>
    );
  }

  if (!user || isError) return null;

  return <>{children}</>;
}
