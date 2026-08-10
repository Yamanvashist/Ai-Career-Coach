"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Compass, Eye, EyeClosed, AlertCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { GoogleLoginButton } from "@/components/GoogleAuth/GoogleLoginButton";
import ResetPassword from "@/components/resetPassword/ResetPassword";

import useResetPassword from "@/hooks/auth/useResetPassword";
import useSignIn from "@/hooks/auth/useSignIn";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("resetToken");

  const [isResetting, setIsResetting] = useState(false);

  const resetPasswordMutation = useResetPassword(setErrorMessage);
  const signInMutation = useSignIn();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) return;

    try {
      const res = await signInMutation.mutateAsync({
        email,
        password,
      });

      setErrorMessage(res);
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.message ?? "Something went wrong");
    }
  };

  const handleUpdatePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords don't match.");
      return;
    }

    if (!token) {
      setErrorMessage("Reset token is missing or invalid.");
      return;
    }

    resetPasswordMutation.mutate({ token, password: newPassword });
  };

  return (
    <div className="relative min-h-[92.5vh] bg-[#FAF9F6] dark:bg-slate-950 flex items-center justify-center p-4 overflow-hidden transition-colors duration-200">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm transition-colors">
        <header className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-gray-950 dark:text-white font-bold text-2xl tracking-tight">
            <Compass className="w-6 h-6 text-gray-950 dark:text-white animate-spin-slow" />
            <span>CareerPilot</span>
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {token
                ? "Set New Password"
                : isResetting
                  ? "Reset password"
                  : "Welcome back"}
            </h1>
            <p className="text-sm text-gray-500 dark:text-slate-400">
              {token
                ? "Type your new password below"
                : isResetting
                  ? "Enter your email to get a reset link"
                  : "Enter your details to access your account"}
            </p>
          </div>

          {!isResetting && !token && (
            <div className="mt-2 flex justify-center w-full">
              <GoogleLoginButton />
            </div>
          )}
        </header>

        {!isResetting && !token && (
          <div className="flex items-center my-5">
            <div className="grow border-t border-gray-200 dark:border-slate-800"></div>
            <span className="px-3 text-[10px] font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
              Or sign in with email
            </span>
            <div className="grow border-t border-gray-200 dark:border-slate-800"></div>
          </div>
        )}

        {token ? (
          <form onSubmit={handleUpdatePassword} className="space-y-4 mt-6">
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setErrorMessage("");
                  }}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 text-gray-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 text-sm rounded-xl focus:outline-none focus:border-gray-900 dark:focus:border-indigo-400 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setErrorMessage("");
                  }}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 text-gray-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 text-sm rounded-xl focus:outline-none focus:border-gray-900 dark:focus:border-indigo-400 transition-colors"
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-2.5 right-3 text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white cursor-pointer"
                >
                  {showPassword ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeClosed className="w-4 h-4" />
                  )}
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="flex items-center gap-3 rounded-xl border justify-center border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 px-4 py-3 text-red-700 dark:text-red-400 shadow-sm">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <p className="text-sm font-medium">{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={resetPasswordMutation.isPending}
              className={`w-full mt-2 py-3 ${
                resetPasswordMutation.isPending
                  ? "bg-gray-400 dark:bg-indigo-500/50 cursor-not-allowed"
                  : "bg-gray-950 hover:bg-gray-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 cursor-pointer"
              } text-white font-medium text-sm rounded-xl transition-colors duration-200 shadow-sm`}
            >
              {resetPasswordMutation.isPending
                ? "Updating..."
                : "Update Password"}
            </button>
          </form>
        ) : isResetting ? (
          <ResetPassword setIsResetting={setIsResetting} />
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrorMessage("");
                    }}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 text-gray-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 text-sm rounded-xl focus:outline-none focus:border-gray-900 dark:focus:border-indigo-400 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-gray-600 dark:text-slate-300 uppercase tracking-wider">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsResetting(true)}
                    className="text-xs font-medium text-gray-500 dark:text-slate-400 hover:text-gray-950 dark:hover:text-white hover:underline cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500" />
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrorMessage("");
                    }}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 text-gray-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 text-sm rounded-xl focus:outline-none focus:border-gray-900 dark:focus:border-indigo-400 transition-colors"
                    required
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-2.5 right-3 text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white cursor-pointer"
                  >
                    {showPassword ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeClosed className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>

              {errorMessage && (
                <div className="flex items-center gap-3 rounded-xl border justify-center border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 px-4 py-3 text-red-700 dark:text-red-400 shadow-sm">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={signInMutation.isPending}
                className={`w-full mt-2 py-3 ${
                  signInMutation.isPending
                    ? "bg-gray-400 dark:bg-indigo-500/50 cursor-not-allowed"
                    : "bg-gray-950 hover:bg-gray-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 cursor-pointer"
                } text-white font-medium text-sm rounded-xl transition-colors duration-200 shadow-sm`}
              >
                {signInMutation.isPending ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 dark:text-slate-400 mt-6">
              Do not have an account?{" "}
              <Link
                href="/sign-up"
                className="text-gray-950 dark:text-white font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
