"use client";

const BarChartSkeleton = () => {
  return (
    <div className="h-96 w-full rounded-xl bg-white p-6 shadow-sm dark:bg-slate-950 flex flex-col justify-end gap-4 animate-pulse">
      <div className="flex items-end justify-between gap-3 h-full px-4 pt-8">
        {[65, 40, 85, 35, 75, 50].map((height, i) => (
          <div key={i} className="flex flex-col items-center gap-2 flex-1 h-full justify-end">
            <div 
              className="w-full max-w-[48px] rounded-t-md bg-slate-200 dark:bg-slate-800"
              style={{ height: `${height}%` }}
            />
            <div className="h-3 w-10 rounded bg-slate-200 dark:bg-slate-800" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChartSkeleton;