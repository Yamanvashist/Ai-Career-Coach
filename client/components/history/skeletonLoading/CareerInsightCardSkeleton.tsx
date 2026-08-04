export const CareerInsightCardSkeleton = () => {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-5 w-32 rounded bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-3 w-4/5 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="mt-5 flex items-center gap-2">
        <div className="h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-800" />
        <div className="h-4 w-40 rounded bg-slate-200 dark:bg-slate-800" />
      </div>
    </div>
  );
};