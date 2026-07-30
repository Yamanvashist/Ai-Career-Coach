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
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="w-5 h-5 text-green-600" />
        <h3 className="font-bold text-gray-900">Topic Performance</h3>
      </div>
      <div className="space-y-4">
        {topicScores.length > 0 ? (
          topicScores.map((item, index) => {
            const colorClass =
              item.score < 50
                ? "bg-red-500"
                : item.score < 70
                ? "bg-amber-500"
                : "bg-green-600";

            return (
              <div key={index}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">
                    {item.topic}
                  </span>
                  <span className="font-semibold text-gray-900">
                    <span
                      className={
                        item.score < 50
                          ? "text-red-500"
                          : item.score < 70
                          ? "text-amber-500"
                          : "text-green-600"
                      }
                    >
                      {item.score}
                    </span>{" "}
                    <span className="text-gray-400 font-normal">/ 100</span>
                  </span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={`${colorClass} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-sm text-gray-500">No topic scores available.</p>
        )}
      </div>
    </div>
  );
}