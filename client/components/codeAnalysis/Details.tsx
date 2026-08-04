import React from "react";
import { CodeAnalysis } from "./codeAnalysisInterface";

type DetailsProps = {
  analysis: CodeAnalysis | null;
};

const Details = ({ analysis }: DetailsProps) => {
  const details = [
    {
      title: "Language",
      result: analysis?.language ?? "-",
    },
    {
      title: "Lines of Code",
      result: analysis?.linesOfCode ?? "-",
    },
    {
      title: "Complexity",
      result: analysis?.complexity ?? "-",
    },
    {
      title: "Submitted",
      result: analysis ? new Date(analysis.createdAt).toLocaleString() : "-",
    },
  ];

  return (
    <section className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
      <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Details</h2>

      <div className="divide-y divide-gray-50 dark:divide-slate-800">
        {details.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between py-4">
            <span className="text-sm font-medium text-gray-500 dark:text-slate-400">
              {item.title}
            </span>

            {item.title === "Complexity" ? (
              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  item.result === "LOW"
                    ? "bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400"
                    : item.result === "MEDIUM"
                      ? "bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400"
                      : item.result === "HIGH"
                        ? "bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                {item.result}
              </span>
            ) : (
              <span className="text-sm font-semibold text-gray-900 dark:text-slate-100">
                {item.result}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;