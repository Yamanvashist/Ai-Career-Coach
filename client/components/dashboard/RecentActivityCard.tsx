"use client";

import { Clock, CheckCircle2, ActivityIcon } from "lucide-react";
import RecentActivityCardSkeleton from "./skeletonLoader/RecentActivityCardSkeleton";
import { useEffect } from "react";

interface Activity {
  type: string;
  title: string;
  description: string;
  time: string;
}

interface RecentActivityCardProps {
  Activities: Activity[];
  isLoading: boolean;
}

const RecentActivityCard = ({
  Activities,
  isLoading,
}: RecentActivityCardProps) => {
  if (isLoading) return <RecentActivityCardSkeleton />;

  if (!Activities.length) {
    return (
      <div className="w-full mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
       
        <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5 dark:border-slate-800 md:px-8">
          
          <div className="rounded-lg bg-slate-100 p-2 dark:bg-slate-800">
            
            <Clock className="h-5 w-5 text-slate-700 dark:text-slate-300" />{" "}
          </div>
          <h2 className="text-x l font-bold tracking-tight text-slate-900 dark:text-white">
           
            Recent Activity
          </h2>
        </div>
        <div className="relative flex min-h-70 flex-col items-center justify-center overflow-hidden px-6 py-12">
         
         
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200/50 blur-3xl dark:bg-slate-700/20" />{" "}
        
        
          <div className="relative text-center">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
             
              Your activity feed is empty
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
            
              Complete an interview, analyze your resume, or run a code review
              and your latest activity will appear here.
            </p>
          </div>
       
  
        </div>
      </div>
    );
  }

  function formatTime(date: string) {
    const dateNow = Date.now();
    const previousDate = new Date(date).getTime();

    const result = dateNow - previousDate;

    const second = Math.floor(result / 1000);
    const minute = Math.floor(second / 60);
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);
    const week = Math.floor(day / 7);
    const month = Math.floor(week / 4);

    if (second < 60) {
      return "Just now";
    }

    if (minute < 60) {
      return `${minute} minutes ago`;
    }

    if (hour < 24) {
      return `${hour} hours ago`;
    }

    if (day === 1) {
      return `${day} day ago`;
    }

    if (day < 7 && day > 1) {
      return `${day} days ago`;
    }

    if (week === 1) {
      return `${week} week ago`;
    }

    if (week < 4 && week > 1) {
      return `${week} weeks ago`;
    }

    if (week >= 4) {
      return `${month} ${month === 1 ? "month" : "months"} ago`;
    }
  }

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
        {Activities.map((activity, i) => (
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
                  {activity.description}
                </p>
              </div>
            </div>

            <span className="text-xs font-medium text-slate-400 dark:text-slate-400 whitespace-nowrap self-start sm:self-center bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
              {formatTime(activity.time)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityCard;
