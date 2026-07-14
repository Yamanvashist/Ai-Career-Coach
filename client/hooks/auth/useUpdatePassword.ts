import { useMutation } from "@tanstack/react-query"
import { updatePassword } from "@/api/user/user"

export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: updatePassword
  })
}