"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Compass, Eye, EyeClosed, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn } from "@/api/auth/auth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { GoogleLoginButton } from "@/components/GoogleAuth/GoogleLoginButton";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const signInMutation = useMutation({
    mutationFn: signIn,
    onSuccess: (user) => {
      console.log(user);
      router.push("/dashboard");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data.message ?? "Something went wrong");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) return;

    signInMutation.mutate({
      email,
      password,
    });
  };

  return (
    <div className="relative min-h-[92.5vh] bg-[#FAF9F6] flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <header className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-gray-950 font-bold text-2xl tracking-tight">
            <Compass className="w-6 h-6 text-gray-950 animate-spin-slow" />
            <span>CareerPilot</span>
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Welcome back
            </h1>
            <p className="text-sm text-gray-500">
              Enter your details to access your account
            </p>
          </div>

          <div className="mt-2 flex justify-center w-full">
            <GoogleLoginButton />
          </div>
        </header>

        <div className="flex items-center my-5">
          <div className="grow border-t border-gray-200"></div>
          <span className="px-3 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
            Or sign in with email
          </span>
          <div className="grow border-t border-gray-200"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage("");
                }}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 text-sm rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-gray-500 hover:text-gray-950 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 text-sm rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-3 text-gray-600 cursor-pointer"
              >
                {showPassword ? <Eye /> : <EyeClosed />}
              </div>
            </div>
          </div>

          {errorMessage && (
            <div className="flex items-center gap-3 rounded-xl border justify-center border-red-200 bg-red-50 px-4 py-3 text-red-700 shadow-sm">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p className="text-sm font-medium">{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={signInMutation.isPending}
            className={`w-full mt-2 py-3 ${signInMutation.isPending ? "bg-gray-500" : "bg-gray-950"}  text-white font-medium text-sm rounded-xl transition-colors duration-200 shadow-sm shadow-gray-950/10`}
          >
            {signInMutation.isPending ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Do not have an account?{" "}
          <Link
            href="/sign-up"
            className="text-gray-950 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
