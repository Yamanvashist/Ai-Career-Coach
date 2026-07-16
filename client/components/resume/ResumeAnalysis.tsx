import { ALargeSmall, BarChart2, PanelsTopLeft, Star, Zap } from "lucide-react";
import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Resume } from "./interfaces/resume";

type ResumeAnalysisProps = {
    analysis: Resume | null;
}

const ResumeAnalysis = ({ analysis }: ResumeAnalysisProps) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold z-40 tracking-tight">AI Analysis</h2>
        <BarChart2 className="w-5 h-5 text-slate-400" />
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-32 h-32 mx-auto">
          <CircularProgressbar
            value={analysis?.atsScore ?? 0}
            text={`${analysis?.atsScore ?? 0}`}
            styles={buildStyles({
              pathColor: "#4F46E5",
              trailColor: "#e2e8f0",
              textColor: "#4F46E5",
              strokeLinecap: "round",
            })}
          />
        </div>
        <p className="mt-4 text-sm font-semibold text-slate-700">ATS Score</p>
        <p className="mt-1 text-xs text-slate-500">
          Upload a resume to generate your score
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-6">
          {[
            {
              label: "Skills",
              icon: Zap,
              score: analysis?.scores?.skills ?? 0,
            },
            {
              label: "Projects",
              icon: PanelsTopLeft,
              score: analysis?.scores?.projects ?? 0,
            },
            {
              label: "Experience",
              icon: Star,
              score: analysis?.scores?.experience ?? 0,
            },
            {
              label: "Formatting",
              icon: ALargeSmall,
              score: analysis?.scores?.formatting ?? 0,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-3"
              >
                <div className="bg-green-600/10 p-1.5 rounded shrink-0">
                  <Icon className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex flex-col text-left">
                  <h1 className="text-sm font-semibold text-slate-800">
                    {item.label}
                  </h1>
                  <p className="text-xs font-bold text-slate-500">
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
