"use client";
import { FileText, Award } from "lucide-react";

interface SummaryCardProps {
  summary?: string;
}

export default function SummaryCard({ summary }: SummaryCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-6 shadow-sm mb-6 flex items-center justify-between gap-6 transition-colors">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg">
            <FileText className="w-5 h-5" />
          </span>
          <h3 className="font-bold text-slate-900 dark:text-white">Overall Summary</h3>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {summary || "No summary provided for this interview session."}
        </p>
      </div>
      <div className="hidden lg:flex items-center justify-center w-28 h-28 bg-green-50/60 dark:bg-green-950/20 rounded-2xl border border-green-100 dark:border-green-900/40 text-green-600 dark:text-green-400 shrink-0">
        <Award className="w-12 h-12" />
      </div>
    </div>
  );
}