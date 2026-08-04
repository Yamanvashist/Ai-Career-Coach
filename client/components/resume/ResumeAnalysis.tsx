import { ALargeSmall, BarChart2, PanelsTopLeft, Star, Zap } from "lucide-react";
import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Resume } from "./interfaces/resume";

type ResumeAnalysisProps = {
  analysis: Resume | null;
};

const ResumeAnalysis = ({ analysis }: ResumeAnalysisProps) => {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden transition-colors">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold z-40 tracking-tight text-slate-900 dark:text-white">
          AI Analysis
        </h2>
        <BarChart2 className="w-5 h-5 text-slate-400 dark:text-slate-500" />
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-32 h-32 mx-auto">
          <CircularProgressbar
            value={analysis?.atsScore ?? 0}
            text={`${analysis?.atsScore ?? 0}`}
            styles={buildStyles({
              pathColor: "#4F46E5",
              trailColor: "rgba(100, 116, 139, 0.2)",
              textColor: "#4F46E5",
              strokeLinecap: "round",
            })}
          />
        </div>
        <p className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
          ATS Score
        </p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Upload a resume to generate your score
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-6">
          {[
            {
              label: "Skills",
              icon: Zap,
              score: analysis?.skills ?? 0,
            },
            {
              label: "Projects",
              icon: PanelsTopLeft,
              score: analysis?.projects ?? 0,
            },
            {
              label: "Experience",
              icon: Star,
              score: analysis?.experience ?? 0,
            },
            {
              label: "Formatting",
              icon: ALargeSmall,
              score: analysis?.formatting ?? 0,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-xl p-3"
              >
                <div className="bg-green-600/10 dark:bg-green-500/10 p-1.5 rounded shrink-0">
                  <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex flex-col text-left">
                  <h1 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {item.label}
                  </h1>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    {item.score}/100
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalysis;