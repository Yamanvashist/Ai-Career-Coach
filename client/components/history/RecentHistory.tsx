import React from "react";
import { HistoryProps } from "./interfaces/historyProps";

import { RecentHistorySkeleton } from "./skeletonLoading/RecentHistorySkeleton";

interface RecentHistoryProps {
  history: HistoryProps[];
  Loading : boolean
}

export const RecentHistory = ({ history,Loading }: RecentHistoryProps) => {
  console.log(history);

  if (Loading) return <RecentHistorySkeleton />;
  return (
    <div className="min-h-75 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="flex min-h-10 items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold text-slate-900">
            Recent History
          </h1>

          <p className="text-sm text-slate-500">
            Filter by activity type and explore your latest activity.
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600">
          {history.length} results
        </span>
      </header>

      <main className="mt-4 flex flex-1 flex-col">
        <div className="rounded-tl-2xl rounded-tr-2xl bg-slate-100 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="tracking-wide text-gray-600">ACTIVITY</div>

            <div className="flex items-center gap-6 text-gray-600">
              <div className="tracking-wide">TYPE</div>
              <div className="tracking-wide">SCORE</div>
              <div className="tracking-wide">STATUS</div>
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-200">
          {history.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="font-medium text-slate-900">{item.title}</div>

              <div className="grid grid-cols-3 gap-4 text-sm sm:flex sm:items-center sm:gap-8">
                <div className="text-slate-600">{item.type}</div>

                <div className="font-medium text-slate-900">
                  {item.score ?? 0}
                </div>

                <div className="font-medium text-emerald-600">
                  {item.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
