import { useQueryClient, useMutation } from "@tanstack/react-query"
import { logOut } from "@/api/auth/auth"

export const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: logOut,
        onSuccess: () => {
            queryClient.setQueryData(["user"], null)
        }
    })
}

