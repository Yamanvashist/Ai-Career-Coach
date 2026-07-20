"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, Compass, Eye, EyeClosed } from "lucide-react";
import { useSignUp } from "@/hooks/auth/useSignUp";

import { GoogleLoginButton } from "@/components/GoogleLoginButton";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const signupMutation = useSignUp();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) return;
    signupMutation.mutate({
      name,
      email,
      password,
    });
  };

  return (
    <div className="relative min-h-[92.5vh] bg-[#FAF9F6] flex items-center justify-center p-4 overflow-hidden">
      <div className="absolu  te inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <header className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-gray-950 font-bold text-2xl tracking-tight">
            <Compass className="w-6 h-6 text-gray-950 animate-spin-slow" />
            <span>CareerPilot</span>
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Create your account
            </h1>
            <p className="text-sm text-gray-500">
              Get started with your career journey today
            </p>
          </div>

          <div className="mt-2 flex justify-center w-full">
            <GoogleLoginButton />
          </div>
        </header>

        <div className="flex items-center my-5">
          <div className="grow border-t border-gray-200"></div>
          <span className="px-3 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
            Or register with email
          </span>
          <div className="grow border-t border-gray-200"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 text-sm rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                required
              />
            </div>
          </div>

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
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 text-sm rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <button
            type="submit"
            className="w-full mt-2 py-3 bg-gray-950 hover:bg-gray-800 text-white font-medium text-sm rounded-xl transition-colors duration-200 shadow-sm shadow-gray-950/10"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-gray-950 font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
