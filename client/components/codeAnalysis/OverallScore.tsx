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
      color: "text-green-500 dark:text-green-400",
      barColor: "bg-green-500",
    },
    {
      name: "Performance",
      score: analysis?.performance ?? 0,
      icon: Zap,
      color: "text-blue-500 dark:text-blue-400",
      barColor: "bg-blue-500",
    },
    {
      name: "Readability",
      score: analysis?.readability ?? 0,
      icon: Eye,
      color: "text-purple-500 dark:text-purple-400",
      barColor: "bg-purple-500",
    },
    {
      name: "Best Practices",
      score: analysis?.bestPractices ?? 0,
      icon: ShieldCheck,
      color: "text-amber-500 dark:text-amber-400",
      barColor: "bg-amber-500",
    },
    {
      name: "Maintainability",
      score: analysis?.maintainability ?? 0,
      icon: Wrench,
      color: "text-cyan-500 dark:text-cyan-400",
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
    <section className="bg-white dark:bg-slate-900 flex flex-col rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 min-h-62.5 transition-colors">
      <h1 className="font-semibold text-slate-900 dark:text-white mb-4">
        Overall Score
      </h1>

      <div className="flex flex-col gap-4 items-center justify-center flex-1">
        <div className="w-40 h-40">
          <CircularProgressbarWithChildren
            value={overallScore}
            styles={buildStyles({
              pathColor: "#4F46E5",
              trailColor: "rgba(100, 116, 139, 0.2)",
              strokeLinecap: "round",
            })}
          >
            <div className="text-center">
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-slate-800 dark:text-white">
                  {overallScore}
                </span>

                <span className="text-xl text-slate-400 dark:text-slate-500">
                  /100
                </span>
              </div>

              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
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

                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {metric.name}
                  </span>
                </div>

                <div className="flex-1">
                  <ProgressBar value={metric.score} color={metric.barColor} />
                </div>

                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {metric.score}
                  <span className="text-slate-400 dark:text-slate-500 font-normal">
                    /100
                  </span>
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
