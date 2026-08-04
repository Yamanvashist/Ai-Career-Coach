"use client";

import React from "react";
import Link from "next/link";
import { FileText, Code2, Briefcase, CheckCircle2 } from "lucide-react";

const QuickActionsCard = () => {
  return (
    <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
      <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
        Quick Actions
      </h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
        Jump into your most important tasks
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div className="group border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 rounded-xl p-5 flex flex-col justify-between bg-slate-50/50 dark:bg-slate-800/40 hover:bg-blue-50/30 dark:hover:bg-blue-500/10 hover:shadow-md transition-all duration-200 min-h-55">
          <div>
            <div className="w-12 h-12 bg-white dark:bg-slate-800 shadow-sm text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center border border-slate-100 dark:border-slate-700 group-hover:scale-105 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mt-4 text-sm">
              Resume
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Upload updated CV
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />{" "}
                Get AI feedback
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />{" "}
                Improve score
              </li>
            </ul>
          </div>
          <Link
            href="/resume-review"
            className="w-full mt-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:border-blue-600 dark:hover:border-blue-600 text-slate-700 dark:text-slate-200 text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            Resume <span>&rarr;</span>
          </Link>
        </div>

        <div className="group border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-500/50 rounded-xl p-5 flex flex-col justify-between bg-slate-50/50 dark:bg-slate-800/40 hover:bg-emerald-50/30 dark:hover:bg-emerald-500/10 hover:shadow-md transition-all duration-200 min-h-55">
          <div>
            <div className="w-12 h-12 bg-white dark:bg-slate-800 shadow-sm text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center border border-slate-100 dark:border-slate-700 group-hover:scale-105 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mt-4 text-sm">
              Code Critic
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Paste a new function
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />{" "}
                Instant review
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />{" "}
                Identify issues
              </li>
            </ul>
          </div>
          <Link
            href="/analysis"
            className="w-full mt-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:hover:text-white hover:border-emerald-600 dark:hover:border-emerald-600 text-slate-700 dark:text-slate-200 text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            Code Critic <span>&rarr;</span>
          </Link>
        </div>

        <div className="group border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 rounded-xl p-5 flex flex-col justify-between bg-slate-50/50 dark:bg-slate-800/40 hover:bg-indigo-50/30 dark:hover:bg-indigo-500/10 hover:shadow-md transition-all duration-200 min-h-55">
          <div>
            <div className="w-12 h-12 bg-white dark:bg-slate-800 shadow-sm text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center border border-slate-100 dark:border-slate-700 group-hover:scale-105 transition-transform">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mt-4 text-sm">
              Interview
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Launch 5-min drill
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />{" "}
                Practice with AI
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />{" "}
                Boost confidence
              </li>
            </ul>
          </div>
          <Link
            href="/interview"
            className="w-full mt-6 bg-indigo-600 dark:bg-indigo-500 border border-indigo-600 dark:border-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-400 text-white text-xs font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            Start <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickActionsCard;