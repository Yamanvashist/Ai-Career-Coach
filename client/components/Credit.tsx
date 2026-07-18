import { HandCoins } from "lucide-react";
import React from "react";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

const Credit = () => {
  const { data: user } = useCurrentUser();

  return (
    <div className="flex items-center gap-2 rounded-xl border border-indigo-500/10 shrink-0 bg-white/10 backdrop-blur-2xl shadow-md px-4 py-2 text-sm font-medium text-black">
      <HandCoins className="h-4 w-4 text-indigo-400" />
      <span>{user?.credits} Credits Left</span>
    </div>
  );
};

export default Credit;
