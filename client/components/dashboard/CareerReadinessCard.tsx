"use client";

import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@/components/ProgressBar";
import { FileText, Video, Code2 } from "lucide-react";

interface CareerReadinessCardProps {
  overallScore?: number;
  resumeAvg?: number;
  interviewAvg?: number;
  codeAnalysisAvg?: number;
}

const CareerReadinessCard = ({
  overallScore = 0,
  resumeAvg = 0,
  interviewAvg = 0,
  codeAnalysisAvg = 0,
}: CareerReadinessCardProps) => {
  return (
    <div
      id="career-readiness-index"
      className="w-full rounded-2xl bg-white dark:bg-slate-900 p-6 md:p-8 h-full shadow-sm border border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="space-y-1">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Career Readiness Index
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Your overall readiness score
        </p>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
        <div className="w-48 h-48 sm:w-52 sm:h-52 shrink-0 bg-white dark:bg-slate-900 rounded-full shadow-inner p-4 border border-slate-50 dark:border-slate-800">
          <div className="relative w-full h-full">
            <CircularProgressbar
              value={overallScore}
              strokeWidth={8}
              styles={buildStyles({
                pathColor: "#4F46E5",
                trailColor: "rgba(100, 116, 139, 0.2)",
                strokeLinecap: "round",
              })}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold tracking-tighter text-slate-900 dark:text-white">
                {overallScore}%
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mt-1">
                Ready
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 flex-1 w-full">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Top Factors
          </h3>

          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <h4 className="font-semibold text-sm flex items-center gap-2 text-slate-900 dark:text-slate-200">
                <span className="bg-blue-100 dark:bg-blue-500/10 p-1.5 rounded-md text-blue-700 dark:text-blue-400">
                  <FileText className="w-4 h-4" />
                </span>
                Resume Score
              </h4>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                <span className="font-bold text-slate-900 dark:text-slate-100">
                  {resumeAvg}
                </span>
                /100
              </p>
            </div>
            <ProgressBar
              value={resumeAvg}
              color="bg-blue-600 dark:bg-blue-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <h4 className="font-semibold text-sm flex items-center gap-2 text-slate-900 dark:text-slate-200">
                <span className="bg-emerald-100 dark:bg-emerald-500/10 p-1.5 rounded-md text-emerald-700 dark:text-emerald-400">
                  <Video className="w-4 h-4" />
                </span>
                Interview Score
              </h4>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                <span className="font-bold text-slate-900 dark:text-slate-100">
                  {interviewAvg}
                </span>
                /100
              </p>
            </div>
            <ProgressBar
              value={interviewAvg}
              color="bg-emerald-600 dark:bg-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <h4 className="font-semibold text-sm flex items-center gap-2 text-slate-900 dark:text-slate-200">
                <span className="bg-indigo-100 dark:bg-indigo-500/10 p-1.5 rounded-md text-indigo-700 dark:text-indigo-400">
                  <Code2 className="w-4 h-4" />
                </span>
                Skills Match
              </h4>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                <span className="font-bold text-slate-900 dark:text-slate-100">
                  {codeAnalysisAvg}
                </span>
                /100
              </p>
            </div>
            <ProgressBar
              value={codeAnalysisAvg}
              color="bg-indigo-600 dark:bg-indigo-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerReadinessCard;