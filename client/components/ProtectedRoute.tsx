"use client";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: user, isLoading } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/sign-in");
    }
  }, [isLoading, user, router]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <div className="w-60  md:w-160 space-y-4">
          <div className="h-8 w-48 rounded-md bg-gray-200 animate-pulse" />
          <div className="h-4 w-full rounded-md bg-gray-200 animate-pulse" />
          <div className="h-4 w-3/4 rounded-md bg-gray-200 animate-pulse" />
          <div className="h-12 w-full rounded-xl bg-gray-200 animate-pulse" />
        </div>
      </div>
    );
  }

  if (!user) return null;

  return <>{children}</>;
}
