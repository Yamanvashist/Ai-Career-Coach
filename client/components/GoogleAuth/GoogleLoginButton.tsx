"use client";

import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { toast } from "sonner";
import api from "@/api/api";

export const GoogleLoginButton = () => {

  const handleSuccess = async (
    credentialResponse: CredentialResponse | null,
  ) => {
    try {
      if (!credentialResponse?.credential) return;

      await api.post("/user/google", {
        credential: credentialResponse.credential,
      });

      window.location.href = "/dashboard";
      toast.success("Logged in successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Google login failed.");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => toast.error("Google Login Failed")}
      theme="outline"
      size="large"
      shape="pill"
      text="signin_with"
      width="280"
    />
  );
};
