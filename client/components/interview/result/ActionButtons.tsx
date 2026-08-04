"use client";
import { Award, Download } from "lucide-react";

interface HeaderProps {
  category?: string;
}

export default function Header({ category }: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Interview Results
          </h1>
          <span className="p-1 bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 rounded-md">
            <Award className="w-4 h-4" />
          </span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 capitalize">
          {category || "Technical"} Interview
        </p>
      </div>
      <button className="inline-flex items-center gap-2 px-4 py-2 border border-green-600 dark:border-green-500/40 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium hover:bg-green-50 dark:hover:bg-green-500/10 transition-colors bg-white dark:bg-slate-900 shadow-sm cursor-pointer">
        <Download className="w-4 h-4" />
        Download Report
      </button>
    </div>
  );
}