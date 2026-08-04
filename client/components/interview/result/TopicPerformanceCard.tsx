"use client";
import { BarChart3 } from "lucide-react";

interface TopicScore {
  topic: string;
  score: number;
}

interface TopicPerformanceCardProps {
  topicScores?: TopicScore[];
}

export default function TopicPerformanceCard({
  topicScores = [],
}: TopicPerformanceCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-6 shadow-sm transition-colors">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="w-5 h-5 text-green-600 dark:text-green-400" />
        <h3 className="font-bold text-slate-900 dark:text-white">Topic Performance</h3>
      </div>
      <div className="space-y-4">
        {topicScores.length > 0 ? (
          topicScores.map((item, index) => {
            const colorClass =
              item.score < 50
                ? "bg-red-500"
                : item.score < 70
                ? "bg-amber-500"
                : "bg-green-600 dark:bg-green-500";

            return (
              <div key={index}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {item.topic}
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    <span
                      className={
                        item.score < 50
                          ? "text-red-500 dark:text-red-400"
                          : item.score < 70
                          ? "text-amber-500 dark:text-amber-400"
                          : "text-green-600 dark:text-green-400"
                      }
                    >
                      {item.score}
                    </span>{" "}
                    <span className="text-slate-400 dark:text-slate-500 font-normal">/ 100</span>
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className={`${colorClass} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-sm text-slate-500 dark:text-slate-400">No topic scores available.</p>
        )}
      </div>
    </div>
  );
}