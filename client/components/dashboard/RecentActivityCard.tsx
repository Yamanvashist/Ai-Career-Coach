"use client";

import React from "react";
import { Clock, CheckCircle2 } from "lucide-react";
import RecentActivityCardSkeleton from "./skeletonLoader/RecentActivityCardSkeleton";

interface ActivityItem {
  title: string;
  desc: string;
  time: string;
}

const ACTIVITIES: ActivityItem[] = [
  {
    title: "Uploaded new resume structure",
    desc: "AI analyzed and updated parameters",
    time: "2 hours ago",
  },
  {
    title: "Completed basic mock interview block",
    desc: "Behavioral and introduction module drill",
    time: "Yesterday",
  },
  {
    title: "Completed basic mock interview block",
    desc: "Behavioral and introduction module drill",
    time: "Yesterday",
  },
];

const RecentActivityCard = ({ isLoading = false }: { isLoading?: boolean }) => {
  if (isLoading) return <RecentActivityCardSkeleton />;
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 mt-8 transition-colors">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <Clock className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Recent Activity
        </h2>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {ACTIVITIES.map((activity, i) => (
          <div
            key={i}
            className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors -mx-4 px-4 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {activity.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {activity.desc}
                </p>
              </div>
            </div>
            <span className="text-xs font-medium text-slate-400 dark:text-slate-400 whitespace-nowrap self-start sm:self-center bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityCard;