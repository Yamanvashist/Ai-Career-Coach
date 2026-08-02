"use client";

import { useMemo } from "react";
import { HistoryStatsSkeleton } from "./skeletonLoading/HistoryStatsSkeleton";
import { HistoryProps } from "./interfaces/historyProps";

interface HistoryStatsProps {
  history: HistoryProps[];
  Loading: boolean;
}

export const HistoryStats = ({ history, Loading }: HistoryStatsProps) => {
  const totalActivities = useMemo(
    () => (history ? history.length : 0),
    [history],
  );

  const resumeLength = useMemo(
    () =>
      history ? history.filter((item) => item.type === "RESUME").length : 0,
    [history],
  );

  const codeAnalysisLength = useMemo(
    () =>
      history
        ? history.filter((item) => item.type === "CODE_ANALYSIS").length
        : 0,
    [history],
  );

  const interviewLength = useMemo(
    () =>
      history ? history.filter((item) => item.type === "INTERVIEW").length : 0,
    [history],
  );

  if (Loading) return <HistoryStatsSkeleton />;

  return (
    <main className="min-h-60 p-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">TOTAL ACTIVITIES</p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {totalActivities}
          </h2>

          <p className="mt-2 hidden text-sm text-slate-500 sm:block">
            All recorded activities in your history
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">RESUME ANALYSES</p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {resumeLength}
          </h2>

          <p className="mt-2 hidden text-sm text-slate-500 sm:block">
            Resume reviews and improvements completed
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">CODE ANALYSES</p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {codeAnalysisLength}
          </h2>

          <p className="mt-2 hidden text-sm text-slate-500 sm:block">
            Code reviews and analysis sessions completed
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">INTERVIEWS GIVEN</p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {interviewLength}
          </h2>

          <p className="mt-2 hidden text-sm text-slate-500 sm:block">
            AI-powered interview sessions completed
          </p>
        </div>
      </div>
    </main>
  );
};
