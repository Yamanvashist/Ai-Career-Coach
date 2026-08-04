export const HistoryStatsSkeleton = () => {
  return (
    <main className="min-h-60 p-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm transition-colors"
          >
            <div className="h-4 w-28 rounded bg-slate-200 dark:bg-slate-800" />

            <div className="mt-4 h-9 w-14 rounded bg-slate-200 dark:bg-slate-800" />

            <div className="mt-4 hidden space-y-2 sm:block">
              <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-3 w-4/5 rounded bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};