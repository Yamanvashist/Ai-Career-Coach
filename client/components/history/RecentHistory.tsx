import React from "react";
import { HistoryProps } from "./interfaces/historyProps";

import { RecentHistorySkeleton } from "./skeletonLoading/RecentHistorySkeleton";

interface RecentHistoryProps {
  history: HistoryProps[];
  Loading: boolean;
}

export const RecentHistory = ({ history, Loading }: RecentHistoryProps) => {
  console.log(history);

  if (Loading) return <RecentHistorySkeleton />;
  return (
    <div className="min-h-75 flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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

      <main className="mt-4 flex-1 overflow-x-auto">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-slate-100 text-left text-sm uppercase tracking-wide text-slate-600">
              <th className="rounded-tl-2xl px-5 py-4 font-medium">Activity</th>
              <th className="px-5 py-4 font-medium">Type</th>
              <th className="px-5 py-4 font-medium">Score</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="rounded-tr-2xl px-5 py-4 font-medium">Created At</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-200 transition-colors hover:bg-slate-50"
              >
                <td className="px-5 py-4 font-medium text-slate-900">
                  {item.title}
                </td>

                <td className="px-5 py-4 text-slate-600">{item.type}</td>

                <td className="px-5 py-4 font-medium text-slate-900">
                  {item.score ?? 0}
                </td>

                <td className="px-5 py-4">
                  <span className={`rounded-full px-3 py-1 text-sm font-medium ${item.status === "COMPLETED" ? "bg-emerald-100 text-emerald-700" : "bg-yellow-200 text-yellow-700"}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-5 py-4 font-medium text-slate-900">
                  {new Date(item.createdAt).toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};
