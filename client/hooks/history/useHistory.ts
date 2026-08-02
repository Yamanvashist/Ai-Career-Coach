"use client";

import { useQuery } from "@tanstack/react-query";
import getHistory from "@/api/history/getHistory";

const useHistory = () => {
  return useQuery({
    queryKey: ["history"],
    queryFn: getHistory,
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    throwOnError: false,
  });
};

export default useHistory;
