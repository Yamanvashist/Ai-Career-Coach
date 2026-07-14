"use client"
import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "@/api/auth/auth";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: checkAuth,
     retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
