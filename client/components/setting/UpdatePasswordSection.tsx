"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useUpdatePassword } from "@/hooks/auth/useUpdatePassword";
import { toast } from "sonner";

export default function UpdatePasswordSection() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const mutateUpdatePassword = useUpdatePassword();

  const updatePassword = async () => {
    if (!password.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      return toast.error("Please fill all password fields.");
    }

    if (password === newPassword) {
      return toast.error("New password can't be the same as the old password.");
    }

    if (newPassword !== confirmPassword) {
      return toast.error("New passwords do not match.");
    }

    if (newPassword.length < 8) {
      return toast.error("Password must be at least 8 characters.");
    }

    try {
      await mutateUpdatePassword.mutateAsync({ password, newPassword });
      toast.success("Password updated successfully!");

      setPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      toast.error("Error updating password");
    }
  };

  return (
    <section className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm transition-colors">
      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">
        Update Password
      </h3>
      <p className="text-xs text-slate-400 dark:text-slate-500 mb-5">
        Make sure to use a strong password.
      </p>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Current Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter current password"
              className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 rounded-xl px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              New Password
            </label>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="Enter new password"
              className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 rounded-xl px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm new password"
                className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 rounded-xl px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              >
                {showConfirm ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            disabled={mutateUpdatePassword.isPending}
            onClick={updatePassword}
            className={`${
              mutateUpdatePassword.isPending
                ? "bg-indigo-500"
                : "bg-indigo-600 dark:bg-indigo-500"
            } text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-sm shadow-indigo-100 dark:shadow-none transition disabled:opacity-70 cursor-pointer`}
          >
            {mutateUpdatePassword.isPending
              ? "Saving changes..."
              : "Save Changes"}
          </button>
        </div>
      </div>
    </section>
  );
}