import React from "react";
import { Sparkles, User } from "lucide-react";
import { QuickAccessSkeleton } from "./skeletonLoading/QuickAccessSkeleton";

interface CareerInsightCardProps {
  Loading: boolean;
}
export const CareerInsightCard = ({ Loading }: CareerInsightCardProps) => {
  if (Loading) return <QuickAccessSkeleton />;
  return (
    <div className="rounded-2xl border border-slate-200 bg-linear-to-br from-emerald-500 to-green-600 p-6 text-white shadow-sm">
      <div className="flex items-center gap-2">
        <Sparkles size={20} />
        <h3 className="font-semibold">AI Career Insight</h3>
      </div>
      <p className="mt-3 text-sm text-indigo-100">
        Keep improving your skills and complete more AI assessments to boost
        your career readiness.
      </p>
      <div className="mt-4 flex items-center gap-2 text-sm">
        <User size={16} />
        <span>Your profile is getting stronger</span>
      </div>
    </div>
  );
};
