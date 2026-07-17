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
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">Details</h2>

      <div className="divide-y divide-gray-50">
        {details.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between py-4">
            <span className="text-sm font-medium text-gray-500">
              {item.title}
            </span>

            {item.title === "Complexity" ? (
              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  item.result === "LOW"
                    ? "bg-green-100 text-green-700"
                    : item.result === "MEDIUM"
                      ? "bg-amber-100 text-amber-700"
                      : item.result === "HIGH"
                        ? "bg-red-100 text-red-700"
                        : "bg-slate-100 text-slate-600"
                }`}
              >
                {item.result}
              </span>
            ) : (
              <span className="text-sm font-semibold text-gray-900">
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
