import { HandCoins } from "lucide-react";
import React from "react";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

const Credit = () => {
  const { data: user } = useCurrentUser();

  return (
    <div className="flex items-center gap-2 rounded-xl border border-indigo-200 dark:border-indigo-500/20 shrink-0 bg-indigo-50/50 dark:bg-slate-900/60 backdrop-blur-md shadow-sm px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors">
      <HandCoins className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
      <span>{user?.credits} Credits Left</span>
    </div>
  );
};

export default Credit;
