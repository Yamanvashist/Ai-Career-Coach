import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { upsertProfile, getProfile } from "@/api/profile/profile";

export const useProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: upsertProfile,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["profile"],
            });
        },
    });
};

export const useGetProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: getProfile,
        refetchOnWindowFocus: false,
        retry : false,
        staleTime: 5 * 60 * 1000,
        
    });
};