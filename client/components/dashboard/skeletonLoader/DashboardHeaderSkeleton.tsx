"use client";

const DashboardHeaderSkeleton = () => {
  return (
    <div className="space-y-1 animate-pulse">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Dashboard
      </h1>
      <div className="flex items-center gap-2">
        <span className="text-slate-700 dark:text-slate-400">Welcome back,</span>
        <div className="h-5 w-28 bg-slate-200 dark:bg-slate-800 rounded" />
      </div>
    </div>
  );
};

export default DashboardHeaderSkeleton;