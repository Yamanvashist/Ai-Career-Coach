"use client";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useLogout } from "@/hooks/auth/useLogOut";
import useDeleteAccount from "@/hooks/auth/useDeleteAccount";
import { Coins, Sparkles, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface ProfileSidebarProps {
  targetRole?: string;
}

export default function ProfileSidebar({ targetRole }: ProfileSidebarProps) {
  const { data: user } = useCurrentUser();
  const router = useRouter();
  const queryClient = useQueryClient();
  const logoutMutation = useLogout();
  const { mutate: deleteAccount } = useDeleteAccount();

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        queryClient.clear();
        router.push("/sign-in");
        toast.success("User logged out");
      },
      onError: () => {
        toast.error("Failed to logout");
      },
    });
  };

  return (
    <section className="lg:col-span-1 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 text-center shadow-sm transition-colors">
      <div className="relative w-28 h-28 mx-auto">
        <div className="relative">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-indigo-600 text-white shadow-xl ring-4 ring-violet-100 dark:ring-violet-900/30 mx-auto">
            <User className="h-10 w-10" />
          </div>
        </div>
        <button className="absolute bottom-0 right-0 p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-md text-slate-500 dark:text-slate-300 hover:text-slate-700 dark:hover:text-white transition cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </button>
      </div>

      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-0.5 mt-2">
        {user?.name ?? "Guest"}
      </h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
        {user?.email ?? "guest@mail.com"}
      </p>
      <span className="inline-block bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold px-4 py-1.5 rounded-md mb-6">
        {targetRole || "Role Not Set"}
      </span>

      <div className="relative overflow-hidden rounded-2xl border border-blue-200/60 dark:border-slate-800 bg-linear-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-800/80 dark:via-slate-900 dark:to-indigo-950/40 p-6 shadow-sm mb-4 text-left transition-colors">
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-amber-200/20 dark:bg-amber-500/10 blur-3xl" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Credit Wallet
              </p>

              <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                {user?.credits ?? 0}
                <span className="ml-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                  Credits
                </span>
              </h3>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-amber-500/30 dark:shadow-none">
              <Coins className="h-7 w-7" />
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Usage</span>
              <span>{user?.credits ?? 0} Remaining</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-amber-100 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-indigo-500 transition-all"
                style={{
                  width: `${Math.min(((user?.credits ?? 0) / 50) * 100, 100)}%`,
                }}
              />
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl bg-white/80 dark:bg-slate-800/60 p-3">
            <Sparkles className="mt-0.5 h-4 w-4 text-amber-500 shrink-0" />
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Credits refresh every month. Spend them to generate resumes,
              analyze ATS scores, and unlock AI career insights.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
        >
          Logout
        </button>
        <div className="border border-rose-100 dark:border-rose-900/40 rounded-xl p-4 bg-rose-50/20 dark:bg-rose-950/20 text-center">
          <button
            onClick={() => deleteAccount()}
            className="w-full border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 py-2.5 rounded-lg text-sm font-semibold hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer"
          >
            Delete Account
          </button>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-3 leading-normal">
            Deleting your account is permanent and cannot be undone.
          </p>
        </div>
      </div>
    </section>
  );
}