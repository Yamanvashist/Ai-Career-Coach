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
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6 flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Left: Score Circle + Verdict */}
      <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
        <div className="relative w-36 h-36 flex items-center justify-center shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              className="text-gray-100 stroke-current"
              strokeWidth="10"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              className="text-green-600 stroke-current"
              strokeWidth="10"
              strokeDasharray={251.2}
              strokeDashoffset={strokeOffset}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold text-gray-900">
              {overallScore}
            </span>
            <span className="text-xs text-gray-400 font-medium">/ 100</span>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <BarChart3 className="w-3.5 h-3.5" /> Overall Score
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {overallScore >= 75
              ? "Great Performance!"
              : overallScore >= 50
              ? "Good Attempt!"
              : "Needs Improvement"}
          </h2>
          <p className="text-sm text-gray-500 mt-1 max-w-xs">
            {overallScore >= 75
              ? "You demonstrated strong technical knowledge with a few areas to improve."
              : "Keep practicing the core concepts to level up your score next time."}
          </p>
          {recommendation && (
            <div
              className={`mt-4 inline-flex items-center gap-2 px-3 py-1.5 border rounded-lg ${
                recommendation === "Reject"
                  ? "bg-red-50 border-red-200"
                  : "bg-green-50 border-green-200"
              }`}
            >
              {recommendation === "Reject" ? (
                <XCircle className="w-5 h-5 text-red-600 shrink-0 fill-red-100" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 fill-green-100" />
              )}
              <div>
                <span
                  className={`text-xs font-bold uppercase mr-1 ${
                    recommendation === "Reject"
                      ? "text-red-800"
                      : "text-green-800"
                  }`}
                >
                  Recommendation
                </span>
                <span className="text-xs text-gray-600">
                  {recommendation}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right: Stat Columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full lg:w-auto border-t lg:border-t-0 pt-6 lg:pt-0">
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-2">
            <HelpCircle className="w-5 h-5" />
          </div>
          <span className="text-xs text-gray-500">Total Questions</span>
          <span className="text-xl font-bold text-gray-900 mt-0.5">
            {totalQuestions}
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-2">
            <Target className="w-5 h-5" />
          </div>
          <span className="text-xs text-gray-500">Score Rating</span>
          <span className="text-xl font-bold text-gray-900 mt-0.5">
            {overallScore}%
          </span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-2">
            <Clock className="w-5 h-5" />
          </div>
          <span className="text-xs text-gray-500">Status</span>
          <span className="text-xl font-bold text-gray-900 mt-0.5 capitalize">
            Completed
          </span>
        </div>
      </div>
    </div>
  );
}