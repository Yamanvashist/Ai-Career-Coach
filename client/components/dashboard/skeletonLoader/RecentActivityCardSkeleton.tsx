"use client";

import { Clock } from "lucide-react";

const RecentActivityCardSkeleton = () => {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 mt-8 transition-colors animate-pulse">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <Clock className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Recent Activity
        </h2>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 -mx-4 px-4"
          >
            <div className="flex items-start gap-4 flex-1">
              <div className="w-5 h-5 bg-slate-200 dark:bg-slate-800 rounded-full shrink-0 mt-0.5" />
              <div className="space-y-2 flex-1">
                <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded" />
                <div className="h-3 w-1/2 bg-slate-200 dark:bg-slate-800 rounded" />
              </div>
            </div>
            <div className="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-full self-start sm:self-center" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityCardSkeleton;