import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "@/api/auth/auth";

export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: updatePassword,
  });
};
