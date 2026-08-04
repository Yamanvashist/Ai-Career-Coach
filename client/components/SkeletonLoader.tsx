import React from 'react';

export default function SkeletonLoader() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 transition-colors">
      <div className="w-full max-w-md animate-pulse rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-800"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800"></div>
            <div className="h-3 w-1/2 rounded bg-slate-200 dark:bg-slate-800"></div>
          </div>
        </div>
        
        <div className="mt-6 space-y-3">
          <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-800"></div>
          <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-800"></div>
          <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-800"></div>
        </div>

        <div className="mt-6 h-10 w-full rounded-xl bg-slate-200 dark:bg-slate-800"></div>
      </div>
    </div>
  );
}