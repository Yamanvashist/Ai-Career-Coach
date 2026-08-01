"use client";

import { useQuery } from "@tanstack/react-query";
import getHistory from "@/api/history/getHistory";

const useHistory = async () => {
  return useQuery({
    queryKey: ["history"],
    queryFn: getHistory,
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};


export default useHistory