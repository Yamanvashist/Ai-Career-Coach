import React from "react";
import { HistoryProps } from "./interfaces/historyProps";
import { RecentHistorySkeleton } from "./skeletonLoading/RecentHistorySkeleton";

export interface PaginationProps {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface RecentHistoryProps {
  history: HistoryProps[];
  Loading: boolean;
  pagination?: PaginationProps;
  onPageChange?: (page: number) => void;
}

export const RecentHistory = ({
  history,
  Loading,
  pagination,
  onPageChange,
}: RecentHistoryProps) => {
  if (Loading) return <RecentHistorySkeleton />;

  return (
    <div className="flex min-h-75 flex-1 flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
      <div>
        <header className="flex min-h-10 items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Recent History
            </h1>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Filter by activity type and explore your latest activity.
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300">
            {pagination?.totalItems ?? history.length} total results
          </span>
        </header>

        <main className="mt-4 overflow-x-auto">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/60 text-left text-sm uppercase tracking-wide text-slate-600 dark:text-slate-400">
                <th className="rounded-tl-2xl px-5 py-4 font-medium">
                  Activity
                </th>
                <th className="px-5 py-4 font-medium">Type</th>
                <th className="px-5 py-4 font-medium">Score</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="rounded-tr-2xl px-5 py-4 font-medium">
                  Created At
                </th>
              </tr>
            </thead>

            <tbody>
              {history.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-8 text-center text-slate-500 dark:text-slate-400"
                  >
                    No activity history found.
                  </td>
                </tr>
              ) : (
                history.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-200 dark:border-slate-800/80 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40"
                  >
                    <td className="px-5 py-4 font-medium text-slate-900 dark:text-slate-100">
                      {item.title}
                    </td>

                    <td className="px-5 py-4 text-slate-600 dark:text-slate-400">
                      {item.type}
                    </td>

                    <td className="px-5 py-4 font-medium text-slate-900 dark:text-slate-100">
                      {item.score ?? 0}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                          item.status === "COMPLETED"
                            ? "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                            : "bg-yellow-200 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 font-medium text-slate-900 dark:text-slate-100">
                      {new Date(item.createdAt).toLocaleString("en-IN")}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </main>
      </div>

      {pagination && onPageChange && (
        <footer className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-800 pt-4 sm:flex-row">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Page{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              {pagination.currentPage}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              {pagination.totalPages || 1}
            </span>
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onPageChange(pagination.currentPage - 1)}
              disabled={!pagination.hasPrevPage}
              className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition hover:bg-slate-50 dark:hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
            >
              Previous
            </button>

            <button
              onClick={() => onPageChange(pagination.currentPage + 1)}
              disabled={!pagination.hasNextPage}
              className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition hover:bg-slate-50 dark:hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
            >
              Next
            </button>
          </div>
        </footer>
      )}
    </div>
  );
};