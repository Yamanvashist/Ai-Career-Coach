"use client";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AuthLoadingScreen from "./AuthLoadingScreen";

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
  if (isLoading) return <AuthLoadingScreen/>
  

  if (!user || isError) return null;

  return <>{children}</>;
}
