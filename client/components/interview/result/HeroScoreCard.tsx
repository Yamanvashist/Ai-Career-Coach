"use client";
import {
  BarChart3,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Target,
  Clock,
} from "lucide-react";

interface HeroScoreCardProps {
  overallScore: number;
  totalQuestions?: number;
  recommendation?: string;
}

export default function HeroScoreCard({
  overallScore = 0,
  totalQuestions = 0,
  recommendation,
}: HeroScoreCardProps) {
  const strokeOffset = 251.2 - (251.2 * overallScore) / 100;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-6 shadow-sm mb-6 flex flex-col lg:flex-row items-center justify-between gap-8 transition-colors">
      <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
        <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              className="text-gray-100 dark:text-slate-800 stroke-current"
              strokeWidth="10"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              className="text-green-600 dark:text-green-500 stroke-current"
              strokeWidth="10"
              strokeDasharray={251.2}
              strokeDashoffset={strokeOffset}
              strokeLinecap="butt"
              fill="transparent"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold text-slate-900 dark:text-white">
              {overallScore}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">/ 100</span>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <BarChart3 className="w-3.5 h-3.5" /> Overall Score
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {overallScore >= 75
              ? "Great Performance!"
              : overallScore >= 50
              ? "Good Attempt!"
              : "Needs Improvement"}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xs">
            {overallScore >= 75
              ? "You demonstrated strong technical knowledge with a few areas to improve."
              : "Keep practicing the core concepts to level up your score next time."}
          </p>
          {recommendation && (
            <div
              className={`mt-4 inline-flex items-center gap-2 px-3 py-1.5 border rounded-lg ${
                recommendation === "Reject"
                  ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50"
                  : "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900/50"
              }`}
            >
              {recommendation === "Reject" ? (
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 fill-red-100 dark:fill-red-900/40" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 fill-green-100 dark:fill-green-900/40" />
              )}
              <div>
                <span
                  className={`text-xs font-bold uppercase mr-1 ${
                    recommendation === "Reject"
                      ? "text-red-800 dark:text-red-300"
                      : "text-green-800 dark:text-green-300"
                  }`}
                >
                  Recommendation
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300">
                  {recommendation}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full lg:w-auto border-t border-slate-100 dark:border-slate-800 lg:border-t-0 pt-6 lg:pt-0">
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
            <HelpCircle className="w-5 h-5" />
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">Total Questions</span>
          <span className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
            {totalQuestions}
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
            <Target className="w-5 h-5" />
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">Score Rating</span>
          <span className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
            {overallScore}%
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
            <Clock className="w-5 h-5" />
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">Status</span>
          <span className="text-xl font-bold text-slate-900 dark:text-white mt-0.5 capitalize">
            Completed
          </span>
        </div>
      </div>
    </div>
  );
}