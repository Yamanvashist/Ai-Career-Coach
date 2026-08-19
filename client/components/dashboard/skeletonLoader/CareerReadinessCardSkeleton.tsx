"use client";

const CareerReadinessCardSkeleton = () => {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-900 p-6 md:p-8 h-full shadow-sm border border-slate-200 dark:border-slate-800 transition-colors animate-pulse">
      <div className="space-y-1">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Career Readiness Index
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Your overall readiness score
        </p>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
        <div className="w-48 h-48 sm:w-52 sm:h-52 shrink-0 bg-slate-100 dark:bg-slate-800/40 rounded-full flex flex-col items-center justify-center p-4 border border-slate-200 dark:border-slate-800">
          <div className="h-9 w-20 bg-slate-200 dark:bg-slate-800 rounded-md mb-2" />
          <div className="h-3 w-12 bg-slate-200 dark:bg-slate-800 rounded" />
        </div>

        <div className="flex flex-col gap-5 flex-1 w-full">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Top Factors
          </h3>

          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-2">
              <div className="flex justify-between items-end">
                <div className="h-5 w-32 bg-slate-200 dark:bg-slate-800 rounded" />
                <div className="h-4 w-12 bg-slate-200 dark:bg-slate-800 rounded" />
              </div>
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerReadinessCardSkeleton;