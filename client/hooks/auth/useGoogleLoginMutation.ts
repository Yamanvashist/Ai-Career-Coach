import { useMutation } from "@tanstack/react-query";
import { googleLogin } from "@/api/auth/auth";

export const useGoogleLoginMutation = () => {
  return useMutation({
    mutationFn: googleLogin,
  });
};