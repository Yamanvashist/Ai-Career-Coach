"use client";

import DashboardHeaderSkeleton from "./skeletonLoader/DashboardHeaderSkeleton";

interface DashboardHeaderProps {
  userName?: string;
  isLoading?: boolean;
}

const DashboardHeader = ({ userName = "Guest", isLoading = false }: DashboardHeaderProps) => {
  if (isLoading) return <DashboardHeaderSkeleton />;

  return (
    <div className="space-y-1">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Dashboard
      </h1>
      <p className="text-slate-700 dark:text-slate-400">
        Welcome back,{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          {userName}
        </span>
      </p>
    </div>
  );
};

export default DashboardHeader;