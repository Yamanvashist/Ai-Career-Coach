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
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import Link from "next/link";
import SkeletonLoader from "@/components/SkeletonLoader";

const Dashboard = () => {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return <SkeletonLoader />;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 space-y-8 font-sans text-slate-900">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-slate-500">
          Welcome back,{" "}
          <span className="font-semibold text-indigo-600">
            {user?.name ?? "Guest"}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        <div
          id="career-readiness-index"
          className="w-full rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-200"
        >
          <div className="space-y-1">
            <h2 className="text-xl font-bold tracking-tight">
              Career Readiness Index
            </h2>
            <p className="text-sm text-slate-500">
              Your overall readiness score
            </p>
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-48 h-48 sm:w-52 sm:h-52 shrink-0 bg-white rounded-full shadow-inner p-4 border border-slate-50">
              <div className="relative w-full h-full">
                <CircularProgressbar
                  value={78}
                  strokeWidth={8}
                  styles={buildStyles({
                    pathColor: "#4F46E5",
                    trailColor: "#F1F5F9",
                    strokeLinecap: "round",
                  })}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-extrabold tracking-tighter text-slate-900">
                    78%
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mt-1">
                    Ready
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 flex-1 w-full">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Top Factors
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <span className="bg-blue-100 p-1.5 rounded-md text-blue-700">
                      <FileText className="w-4 h-4" />
                    </span>
                    Resume Score
                  </h4>
                  <p className="text-sm text-slate-400">
                    <span className="font-bold text-slate-900">85</span>/100
                  </p>
                </div>
                <ProgressBar value={85} color="bg-blue-600" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <span className="bg-emerald-100 p-1.5 rounded-md text-emerald-700">
                      <Video className="w-4 h-4" />
                    </span>
                    Interview Score
                  </h4>
                  <p className="text-sm text-slate-400">
                    <span className="font-bold text-slate-900">75</span>/100
                  </p>
                </div>
                <ProgressBar value={75} color="bg-emerald-600" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <span className="bg-indigo-100 p-1.5 rounded-md text-indigo-700">
                      <Code2 className="w-4 h-4" />
                    </span>
                    Skills Match
                  </h4>
                  <p className="text-sm text-slate-400">
                    <span className="font-bold text-slate-900">82</span>/100
                  </p>
                </div>
                <ProgressBar value={82} color="bg-indigo-600" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <span className="bg-orange-100 p-1.5 rounded-md text-orange-700">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    Portfolio
                  </h4>
                  <p className="text-sm text-slate-400">
                    <span className="font-bold text-slate-900">84</span>/100
                  </p>
                </div>
                <ProgressBar value={84} color="bg-orange-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-200">
          <h2 className="text-xl font-bold tracking-tight">Quick Actions</h2>
          <p className="text-sm text-slate-500 mt-1">
            Jump into your most important tasks
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="group border border-slate-200 hover:border-blue-300 rounded-xl p-5 flex flex-col justify-between bg-slate-50/50 hover:bg-blue-50/30 hover:shadow-md transition-all duration-200 min-h-55">
              <div>
                <div className="w-12 h-12 bg-white shadow-sm text-blue-600 rounded-xl flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mt-4 text-sm">
                  Resume
                </h3>
                <p className="text-xs text-slate-500 mt-1">Upload updated CV</p>
                <ul className="mt-4 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Get
                    AI feedback
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />{" "}
                    Improve score
                  </li>
                </ul>
              </div>
              <Link
                href="/resume-review"
                className="w-full mt-6 bg-white border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-700 text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                Resume <span>&rarr;</span>
              </Link>
            </div>

            <div className="group border border-slate-200 hover:border-emerald-300 rounded-xl p-5 flex flex-col justify-between bg-slate-50/50 hover:bg-emerald-50/30 hover:shadow-md transition-all duration-200 min-h-55">
              <div>
                <div className="w-12 h-12 bg-white shadow-sm text-emerald-600 rounded-xl flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mt-4 text-sm">
                  Code Critic
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Paste a new function
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />{" "}
                    Instant review
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />{" "}
                    Identify issues
                  </li>
                </ul>
              </div>
              <button className="w-full mt-6 bg-white border border-slate-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-slate-700 text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                Code Critic <span>&rarr;</span>
              </button>
            </div>

            <div className="group border border-slate-200 hover:border-indigo-300 rounded-xl p-5 flex flex-col justify-between bg-slate-50/50 hover:bg-indigo-50/30 hover:shadow-md transition-all duration-200 min-h-55">
              <div>
                <div className="w-12 h-12 bg-white shadow-sm text-indigo-600 rounded-xl flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mt-4 text-sm">
                  Interview
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Launch 5-min drill
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />{" "}
                    Practice with AI
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />{" "}
                    Boost confidence
                  </li>
                </ul>
              </div>
              <button className="w-full mt-6 bg-indigo-600 border border-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                Start <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-200 mt-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-slate-100 rounded-lg">
            <Clock className="w-5 h-5 text-slate-700" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Recent Activity</h2>
        </div>

        <div className="divide-y divide-slate-100">
          {[
            {
              title: "Uploaded new resume structure",
              desc: "AI analyzed and updated parameters",
              time: "2 hours ago",
            },
            {
              title: "Completed basic mock interview block",
              desc: "Behavioral and introduction module drill",
              time: "Yesterday",
            },
            {
              title: "Completed basic mock interview block",
              desc: "Behavioral and introduction module drill",
              time: "Yesterday",
            },
          ].map((activity, i) => (
            <div
              key={i}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors -mx-4 px-4 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {activity.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {activity.desc}
                  </p>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-400 whitespace-nowrap self-start sm:self-center bg-slate-100 px-2.5 py-1 rounded-full">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
