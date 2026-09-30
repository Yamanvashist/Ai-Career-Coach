"use client";

import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { toast } from "sonner";
import { useGoogleLoginMutation } from "@/hooks/auth/useGoogleLoginMutation";

export const GoogleLoginButton = () => {
  const { mutate: loginWithGoogle, isPending } = useGoogleLoginMutation();

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      toast.error("Google login failed.");
      return;
    }

    loginWithGoogle(
      {
        credential: credentialResponse.credential,
      },
      {
        onSuccess: () => {
          toast.success("Logged in successfully!");
          window.location.href = "/dashboard";
        },

        onError: (error) => {
          console.error(error);
          toast.error("Google login failed.");
        },
      },
    );
  };

  return (
    <>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => toast.error("Google Login Failed")}
        theme="outline"
        size="large"
        shape="pill"
        text="signin_with"
        width="280"
        useOneTap={false}
      />

      {isPending && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 p-4 backdrop-blur-[3px]">
          <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-500/10">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600 dark:border-blue-500/20 dark:border-t-blue-400" />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
              Signing you in
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-400">
              We&apos;re connecting your Google account.
              <br />
              Please don&apos;t refresh or close this page.
            </p>

            <div className="mt-5 h-1 overflow-hidden rounded-full bg-gray-100 dark:bg-slate-800">
              <div className="h-full w-1/2 animate-pulse rounded-full bg-blue-600" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};