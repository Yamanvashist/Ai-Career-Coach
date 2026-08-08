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
      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-slate-950 transition-colors">
        <div className="w-60 md:max-w-xl space-y-4">
          <div className="h-8 w-48 rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
          <div className="h-4 w-full rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
          <div className="h-4 w-3/4 rounded-md bg-slate-200 dark:bg-slate-800 animate-pulse" />
          <div className="h-12 w-full rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse" />
        </div>
      </div>
    );
  }

  if (!user || isError) return null;

  return <>{children}</>;
}
