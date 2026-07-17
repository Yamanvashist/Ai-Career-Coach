import { CircleCheckBig, Eye, ShieldCheck, Wrench, Zap } from "lucide-react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressBar from "../ProgressBar";
import { CodeAnalysis } from "./codeAnalysisInterface";

type OverallScoreProps = {
  analysis: CodeAnalysis | null;
};

const OverallScore = ({ analysis }: OverallScoreProps) => {
  const metricsData = [
    {
      name: "Correctness",
      score: analysis?.correctness ?? 0,
      icon: CircleCheckBig,
      color: "text-green-500",
      barColor: "bg-green-500",
    },
    {
      name: "Performance",
      score: analysis?.performance ?? 0,
      icon: Zap,
      color: "text-blue-500",
      barColor: "bg-blue-500",
    },
    {
      name: "Readability",
      score: analysis?.readability ?? 0,
      icon: Eye,
      color: "text-purple-500",
      barColor: "bg-purple-500",
    },
    {
      name: "Best Practices",
      score: analysis?.bestPractices ?? 0,
      icon: ShieldCheck,
      color: "text-amber-500",
      barColor: "bg-amber-500",
    },
    {
      name: "Maintainability",
      score: analysis?.maintainability ?? 0,
      icon: Wrench,
      color: "text-cyan-500",
      barColor: "bg-cyan-500",
    },
  ];

  const overallScore = analysis?.overallScore ?? 0;

  const rating =
    overallScore < 40
      ? "Poor"
      : overallScore < 60
        ? "Fair"
        : overallScore < 80
          ? "Good"
          : "Excellent";

  return (
    <section className="bg-white flex flex-col rounded-2xl p-6 shadow-sm min-h-62.5">
      <h1 className="font-semibold text-slate-900 mb-4">Overall Score</h1>

      <div className="flex flex-col gap-4 items-center justify-center flex-1">
        <div className="w-40 h-40">
          <CircularProgressbarWithChildren
            value={overallScore}
            styles={buildStyles({
              pathColor: "#4F46E5",
              trailColor: "#e2e8f0",
              strokeLinecap: "round",
            })}
          >
            <div className="text-center">
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-slate-800">
                  {overallScore}
                </span>

                <span className="text-xl text-slate-400">/100</span>
              </div>

              <span className="text-sm font-semibold text-indigo-600 mt-1">
                {rating}
              </span>
            </div>
          </CircularProgressbarWithChildren>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {metricsData.map((metric) => {
            const Icon = metric.icon;

            return (
              <div
                key={metric.name}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-2 min-w-36">
                  <Icon className={`w-4 h-4 ${metric.color}`} />

                  <span className="text-sm font-medium text-slate-700">
                    {metric.name}
                  </span>
                </div>

                <div className="flex-1">
                  <ProgressBar value={metric.score} color={metric.barColor} />
                </div>

                <span className="text-sm font-semibold text-slate-800">
                  {metric.score}
                  <span className="text-slate-400 font-normal">/100</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OverallScore;
