"use client";
import {
  CircleCheckBig,
  Eye,
  HandCoins,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@/components/ProgressBar";

const metricsData = [
  {
    name: "Correctness",
    score: 80,
    icon: CircleCheckBig,
    color: "text-green-500",
    barColor: "bg-indigo-500",
  },
  {
    name: "Performance",
    score: 60,
    icon: Zap,
    color: "text-blue-500",
    barColor: "bg-indigo-500",
  },
  {
    name: "Readability",
    score: 75,
    icon: Eye,
    color: "text-purple-500",
    barColor: "bg-indigo-500",
  },
  {
    name: "Best Practices",
    score: 70,
    icon: ShieldCheck,
    color: "text-blue-500",
    barColor: "bg-indigo-500",
  },
  {
    name: "Maintainability",
    score: 65,
    icon: Wrench,
    color: "text-blue-500",
    barColor: "bg-indigo-500",
  },
];
const Analysis = () => {
  return (
    <div className="min-h-screen p-4 bg-slate-50 flex flex-col font-sans text-slate-900 lg:overflow-hidden">
      <nav className="h-20 bg-transparent  flex items-center justify-between px-6 md:px-8 shrink-0">
        <div>
          {" "}
          <h1 className="font-bold text-2xl text-slate-900 tracking-tight">
            Code Analysis
          </h1>
          <p className="text-gray-600">
            Get Ai feedback and improvement for your code.
          </p>
        </div>

        <div className="px-3 py-1.5 border border-orange-200 rounded-full text-sm font-semibold bg-orange-50 flex items-center gap-2 text-orange-700 shadow-sm">
          <HandCoins className="w-4 h-4 text-orange-500" />
          <span>0 Credits left</span>
        </div>
      </nav>
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          <section className="bg-white flex flex-col rounded-2xl p-6 shadow-sm min-h-62.5">
            <h1 className="font-semibold text-slate-900 mb-4">Overall Score</h1>
            <div className="flex flex-col gap-4 items-center justify-center flex-1">
              <div className="w-40 h-40 mx-auto">
                <CircularProgressbarWithChildren
                  value={72}
                  styles={buildStyles({
                    pathColor: "#4F46E5",
                    trailColor: "#e2e8f0",
                    strokeLinecap: "round",
                  })}
                >
                  <div className="text-center flex flex-col items-center justify-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-slate-800 tracking-tight">
                        72
                      </span>
                      <span className="text-xl font-medium text-slate-400">
                        /100
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-indigo-600 mt-1">
                      Good
                    </span>
                  </div>
                </CircularProgressbarWithChildren>
              </div>

              <div className="flex flex-col gap-4 w-full">
                {metricsData.map((metric, idx) => {
                  const IconComponent = metric.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between gap-4 w-full"
                    >
                      <div className="flex items-center gap-2 min-w-30 shrink-0">
                        <IconComponent
                          size={16}
                          className="shrink-0"
                          style={{ color: metric.color }}
                        />
                        <span className="text-sm font-medium text-slate-700">
                          {metric.name}
                        </span>
                      </div>

                      <div className="flex-1 h-1.5 flex items-center">
                        <ProgressBar
                          value={metric.score}
                          color={metric.barColor}
                        />
                      </div>

                      <p className="text-sm font-semibold text-slate-800 shrink-0">
                        {metric.score}
                        <span className="text-gray-400 font-normal">/100</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm min-h-50"></section>
        </div>

        <div className="flex flex-col gap-6">
          <section className="bg-[#0b0f19] rounded-2xl p-6 min-h-87.5"></section>
          <section className="bg-white rounded-2xl p-6 shadow-sm flex-1 min-h-75"></section>
        </div>
      </main>
    </div>
  );
};

export default Analysis;
