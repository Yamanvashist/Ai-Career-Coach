import React from 'react'
import ProgressBar from '../ProgressBar';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { CircleCheckBig, Eye, ShieldCheck, Wrench, Zap } from 'lucide-react';


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



const OverallScore = () => {
  return (
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
  )
}

export default OverallScore