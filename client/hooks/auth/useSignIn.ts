import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/auth/auth";

const useSignIn = () => {
  return useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      window.location.href = "/dashboard";
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useSignIn;
