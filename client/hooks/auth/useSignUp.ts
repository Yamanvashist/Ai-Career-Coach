"use client";

import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/api/auth/auth";
import { useRouter } from "next/navigation";

export const useSignUp = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: signUp,

    onSuccess: (user) => {
      console.log(user);
      router.push("/dashboard");
    },

    onError: (error) => {
      console.error(error);
    },
  });
};

