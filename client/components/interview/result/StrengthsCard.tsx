"use client";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

interface StrengthsCardProps {
  strengths?: string[];
}

export default function StrengthsCard({ strengths = [] }: StrengthsCardProps) {
  return (
    <div className="bg-green-50/40 dark:bg-green-950/20 rounded-2xl border border-green-100 dark:border-green-900/40 p-6 shadow-sm transition-colors">
      <div className="flex items-center gap-2 mb-6">
        <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
        <h3 className="font-bold text-slate-900 dark:text-white">Strengths</h3>
      </div>
      <div className="space-y-4">
        {strengths.length > 0 ? (
          strengths.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5 fill-green-100 dark:fill-green-900/40" />
              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                {item}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">No specific strengths listed.</p>
        )}
      </div>
    </div>
  );
}