"use client";

import { useQuery } from "@tanstack/react-query";
import getHistory from "@/api/history/getHistory";

const useHistory = (page = 1) => {
  return useQuery({
    queryKey: ["history", page],
    queryFn: () => getHistory(page),
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    throwOnError: false,
  });
};

export default useHistory;
