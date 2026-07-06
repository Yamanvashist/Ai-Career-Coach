"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Compass, Eye, EyeClosed } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
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

          <button className="w-full flex items-center justify-center cursor-pointer gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 font-medium text-sm rounded-xl hover:bg-gray-50 transition-all duration-200 mt-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.96 1 12 1 7.35 1 3.4 3.65 1.5 7.5l3.6 2.8C6.01 7.12 8.78 5.04 12 5.04z"
              />
              <path
                fill="#4285F4"
                d="M23.5 12.25c0-.82-.07-1.6-.2-2.35H12v4.45h6.45c-.28 1.47-1.11 2.71-2.36 3.55l3.66 2.84c2.14-1.97 3.37-4.87 3.37-8.49z"
              />
              <path
                fill="#FBBC05"
                d="M5.1 14.7c-.25-.75-.4-1.55-.4-2.4s.15-1.65.4-2.4L1.5 7.1C.54 9.05 0 11.24 0 12.5s.54 3.45 1.5 5.4l3.6-2.8z"
              />
              <path
                fill="#34A853"
                d="M12 23c3.24 0 5.97-1.08 7.96-2.91l-3.66-2.84c-1.1.74-2.51 1.18-4.3 1.18-3.22 0-5.99-2.08-6.96-5.26l-3.6 2.8C3.4 20.35 7.35 23 12 23z"
              />
            </svg>
            Sign in with Google
          </button>
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 text-sm rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
                required
              />
              <div onClick={()=>setShowPassword(!showPassword)} className="absolute top-2 right-3 text-gray-600 cursor-pointer">
                {showPassword ? <Eye /> : <EyeClosed />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3 bg-gray-950 hover:bg-gray-800 text-white font-medium text-sm rounded-xl transition-colors duration-200 shadow-sm shadow-gray-950/10"
          >
            Sign In
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
