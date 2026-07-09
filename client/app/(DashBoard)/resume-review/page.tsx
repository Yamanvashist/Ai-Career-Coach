"use client";
import React, { useState } from "react";
import {
  HandCoins,
  UploadCloud,
  AlertCircle,
  FileQuestion,
  BarChart2,
  Lock,
  Zap,
} from "lucide-react";

const ResumeReview = () => {
  const [file, setFile] = useState<File | null>(null);

  const formData = new FormData();
  if (file) {
    formData.append("file", file);
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 lg:overflow-hidden">
      <nav className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:px-8 shrink-0">
        <h1 className="font-bold text-2xl text-slate-900 tracking-tight">
          Resume Review
        </h1>
        <div className="px-3 py-1.5 border border-orange-200 rounded-full text-sm font-semibold bg-orange-50 flex items-center gap-2 text-orange-700 shadow-sm">
          <HandCoins className="w-4 h-4 text-orange-500" />
          <span>0 Credits left</span>
        </div>
      </nav>

      <main className="flex-1 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 h-full lg:h-[calc(100vh-5rem)]">
        <div className="lg:col-span-3 flex flex-col gap-6 lg:overflow-y-auto hide-scrollbar">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold tracking-tight mb-4">
              Upload File
            </h2>

            <label
              htmlFor="resume-upload"
              className="w-full relative border-2 border-dashed border-slate-300 hover:border-indigo-400 bg-slate-50 hover:bg-indigo-50/50 transition-all duration-200 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer group min-h-50"
            >
              <div className="w-12 h-12 bg-white text-indigo-600 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform">
                <UploadCloud className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-700 text-sm">
                Drag & drop your CV
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                PDF format, up to 5MB
              </p>

              {/* Hidden input linked to the label above via id */}
              <input
                id="resume-upload"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setFile(file);
                  } else {
                    return;
                  }
                }}
              />
            </label>

            <div className="mt-5 flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Target Role
              </label>
              <input
                type="text"
                placeholder="e.g. Full Stack Web Developer"
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none text-sm rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 transition-all"
              />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-blue-900">
                How it works
              </h4>
              <p className="text-xs text-blue-700 mt-1 leading-relaxed">
                Upload your resume, and our AI will instantly parse it, grade it
                against industry standards, and offer actionable improvements.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-200/60 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 min-h-125 lg:min-h-0 relative">
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          </div>

          <div className="flex flex-col items-center text-slate-400">
            <FileQuestion className="w-20 h-20 mb-4 opacity-50" />
            <h2 className="text-xl font-bold text-slate-500">
              No Resume Uploaded
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xs text-center">
              Your document preview will appear here once you upload a valid PDF
              file.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-6 lg:overflow-y-auto hide-scrollbar">
          {/* Empty Score Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold tracking-tight">AI Analysis</h2>
              <BarChart2 className="w-5 h-5 text-slate-400" />
            </div>

            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center text-center p-4">
              <Lock className="w-8 h-8 text-slate-400 mb-2" />
              <p className="text-sm font-semibold text-slate-600">
                Awaiting document
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Upload a file to unlock insights
              </p>
            </div>

            <div className="space-y-6 opacity-40 blur-[1px]">
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-5xl font-black text-slate-300">--</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">
                  Score
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-slate-600">
                      Impact Metrics
                    </span>
                    <span className="text-slate-400">0%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-slate-600">Brevity</span>
                    <span className="text-slate-400">0%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-slate-600">
                      ATS Match
                    </span>
                    <span className="text-slate-400">0%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm opacity-60">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-slate-400" />
              <h2 className="text-sm font-bold tracking-tight text-slate-600">
                Key Improvements
              </h2>
            </div>
            <div className="space-y-3">
              <div className="h-10 w-full bg-slate-100 rounded-lg animate-pulse"></div>
              <div className="h-10 w-full bg-slate-100 rounded-lg animate-pulse delay-75"></div>
              <div className="h-10 w-full bg-slate-100 rounded-lg animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </div>
  );
};

export default ResumeReview;
