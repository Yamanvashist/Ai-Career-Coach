"use client";
import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "@/api/dashboard/dashboard";

export const useDashboard = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    throwOnError: false,
  });
};
