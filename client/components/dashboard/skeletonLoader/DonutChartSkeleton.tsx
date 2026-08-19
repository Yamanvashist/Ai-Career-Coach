"use client";

const DonutChartSkeleton = () => {
  return (
    <div className="h-96 w-full rounded-xl bg-white p-4 shadow-sm dark:bg-slate-950 flex flex-col items-center justify-center gap-6 animate-pulse">
      <div className="relative flex items-center justify-center w-52 h-52 rounded-full border-[18px] border-slate-200 dark:border-slate-800">
        <div className="flex flex-col items-center justify-center">
          <div className="h-8 w-14 bg-slate-200 dark:bg-slate-800 rounded mb-1" />
          <div className="h-3 w-10 bg-slate-200 dark:bg-slate-800 rounded" />
        </div>
      </div>
      <div className="flex gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="h-3 w-12 bg-slate-200 dark:bg-slate-800 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChartSkeleton;