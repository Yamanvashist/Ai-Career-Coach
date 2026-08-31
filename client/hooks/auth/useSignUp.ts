"use client";

import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/api/auth/auth";

export const useSignUp = () => {

  return useMutation({
    mutationFn: signUp,

    onSuccess: (user) => {
      window.location.href = "/dashboard";
    },

    onError: (error) => {
      console.error(error);
    },
  });
};
