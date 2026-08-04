"use client";
import { Target, AlertCircle } from "lucide-react";

interface ImprovementsCardProps {
  improvements?: string[];
}

export default function ImprovementsCard({
  improvements = [],
}: ImprovementsCardProps) {
  return (
    <div className="bg-amber-50/40 dark:bg-amber-950/20 rounded-2xl border border-amber-100/80 dark:border-amber-900/40 p-6 shadow-sm transition-colors">
      <div className="flex items-center gap-2 mb-6">
        <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
        <h3 className="font-bold text-slate-900 dark:text-white">Areas for Improvement</h3>
      </div>
      <div className="space-y-4">
        {improvements.length > 0 ? (
          improvements.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 fill-amber-100 dark:fill-amber-900/40" />
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                {item}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No specific improvements listed.
          </p>
        )}
      </div>
    </div>
  );
}