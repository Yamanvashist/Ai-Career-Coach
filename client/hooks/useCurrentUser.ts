import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "@/api/user";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: checkAuth,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
