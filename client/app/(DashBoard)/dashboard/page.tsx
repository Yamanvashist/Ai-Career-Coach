"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@/components/ProgressBar";
import {
  FileText,
  Video,
  Code2,
  Briefcase,
  Clock,
  CheckCircle2,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-500">
          Welcome back <span className="font-bold">John Doe</span>
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        {/* Career Readiness Card */}
        <div
          id="career-readiness-index"
          className="w-full rounded-xl bg-white p-6 shadow-sm"
        >
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">Career Readiness Index</h1>
            <p className="text-gray-500">Your overall score you landed</p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-6 md:gap-12 items-center">
            <div className="w-54 h-54 sm:w-56 sm:h-56 shrink-0 bg-white/90 rounded p-2 ">
              <div className="relative w-54 h-54">
                <CircularProgressbar
                  value={78}
                  styles={buildStyles({
                    pathColor: "#4F46E5",
                    trailColor: "#E5E7EB",
                    strokeLinecap: "round",
                  })}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-black">78%</span>
                  <span className="text-sm font-medium text-indigo-600 mt-1">
                    Ready
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1 w-full">
              <h1 className="text-xl font-semibold">Top Factors</h1>

              {/* Resume Score */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold flex items-center gap-2">
                    <FileText className="bg-indigo-200 p-1 w-7 h-7 rounded-sm text-indigo-700" />
                    Resume Score
                  </h2>
                  <p className="text-gray-400">
                    <span className="font-semibold text-slate-900">85</span>/100
                  </p>
                </div>
                <ProgressBar value={80} color="bg-blue-600" />
              </div>

              {/* Interview Score */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold flex items-center gap-2">
                    <Video className="bg-indigo-200 p-1 w-7 h-7 rounded-sm text-indigo-700" />
                    Interview Score
                  </h2>
                  <p className="font-semibold">
                    75<span className="text-gray-400">/100</span>
                  </p>
                </div>
                <ProgressBar value={75} color="bg-green-600" />
              </div>

              {/* Code Quality */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold flex items-center gap-2">
                    <Code2 className="bg-indigo-200 p-1 w-7 h-7 rounded-sm text-indigo-700" />
                    Skills match
                  </h2>
                  <p className="font-semibold">
                    82<span className="text-gray-400">/100</span>
                  </p>
                </div>
                <ProgressBar value={82} color="bg-indigo-600" />
              </div>

              {/* Portfolio */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold flex items-center gap-2">
                    <Briefcase className="bg-indigo-200 p-1 w-7 h-7 rounded-sm text-indigo-700" />
                    Portfolio
                  </h2>
                  <p className="font-semibold">
                    84<span className="text-gray-400">/100</span>
                  </p>
                </div>
                <ProgressBar value={84} color="bg-orange-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="w-full h-full rounded-xl bg-white p-6 shadow-sm">
          <h1 className="font-semibold text-xl text-gray-900">Quick Actions</h1>
          <p className="text-gray-400 text-sm">
            Jump into the most important tasks
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {/* Resume Card */}
            <div className="border border-gray-100 rounded-xl p-4 flex flex-col justify-between bg-gray-50/30 min-h-[220px]">
              <div>
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-lg font-bold">
                  <FileText />
                </div>
                <h2 className="font-semibold text-gray-800 mt-3 text-sm">
                  Resume
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Upload updated CV
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-gray-500">
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span> Get AI
                    feedback
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>{" "}
                    Improve your score
                  </li>
                </ul>
              </div>
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                Go to Resume <span className="text-sm">→</span>
              </button>
            </div>

            {/* Code Critic Card */}
            <div className="border border-gray-100 rounded-xl p-4 flex flex-col justify-between bg-gray-50/30 min-h-[220px]">
              <div>
                <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center text-xs font-mono font-bold">
                  <Code2 />
                </div>
                <h2 className="font-semibold text-gray-800 mt-3 text-sm">
                  Code Critic
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Paste a new function
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-gray-500">
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>{" "}
                    Instant code review
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>{" "}
                    Identify issues
                  </li>
                </ul>
              </div>
              <button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                Go to Code Critic <span className="text-sm">→</span>
              </button>
            </div>

            {/* Interview Card */}
            <div className="border border-gray-100 rounded-xl p-4 flex flex-col justify-between bg-gray-50/30 min-h-[220px]">
              <div>
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center text-lg">
                  <Briefcase />
                </div>
                <h2 className="font-semibold text-gray-800 mt-3 text-sm">
                  Interview
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Launch 5-min voice drill
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-gray-500">
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>{" "}
                    Practice with AI
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span> Boost
                    confidence
                  </li>
                </ul>
              </div>
              <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
                Start Interview <span className="text-sm">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="w-full rounded-xl bg-white p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-gray-600" />
          <h1 className="font-semibold text-xl text-gray-900">
            Recent Activity
          </h1>
        </div>

        <div className="divide-y divide-gray-100">
          <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Uploaded new resume structure
                </p>
                <p className="text-xs text-gray-400">
                  AI analyzed and updated parameters
                </p>
              </div>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap self-end sm:self-center">
              2 hours ago
            </span>
          </div>

          <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Completed basic mock interview block
                </p>
                <p className="text-xs text-gray-400">
                  Behavioral and introduction module drill
                </p>
              </div>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap self-end sm:self-center">
              Yesterday
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Completed basic mock interview block
                </p>
                <p className="text-xs text-gray-400">
                  Behavioral and introduction module drill
                </p>
              </div>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap self-end sm:self-center">
              Yesterday
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Completed basic mock interview block
                </p>
                <p className="text-xs text-gray-400">
                  Behavioral and introduction module drill
                </p>
              </div>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap self-end sm:self-center">
              Yesterday
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
