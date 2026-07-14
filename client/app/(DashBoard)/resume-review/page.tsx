"use client";
import React, { useState, useMemo } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { toast } from "sonner";

import {
  HandCoins,
  UploadCloud,
  AlertCircle,
  FileQuestion,
  BarChart2,
  Zap,
  PanelsTopLeft,
  Star,
  ALargeSmall,
  Sparkles,
} from "lucide-react";

import { useMutation } from "@tanstack/react-query";
import { resumeAnalyze } from "@/api/resume/resume";
import { Resume } from "@/interfaces/resume";

const ResumeReview = () => {
  const [file, setFile] = useState<File | null>(null);
  const [targetRole, setTargetRole] = useState<string>("");
  const [analysis, setAnalysis] = useState<Resume | null>(null);

  const pdfUrl = useMemo(() => {
    return file ? URL.createObjectURL(file) : null;
  }, [file]);

  const mutationAnalyze = useMutation({
    mutationFn: resumeAnalyze,
  });

  const analyzeResume = async () => {
    if (!file || !targetRole.trim()) return;
    if (file.size >= 5242880) return toast.error("File is too Large");
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("targetRole", targetRole);

    try {
      const result = await mutationAnalyze.mutateAsync(formData);
      setAnalysis(result);
      
    } catch (err) {
      console.log(err);
      toast.error("Server error , Please try again later");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 lg:overflow-hidden">
      <nav className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:px-8 shrink-0">
        <h1 className="font-bold text-2xl text-slate-900 tracking-tight">
          RefineAi Review
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
                {file?.name || "Drag & drop your CV"}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {file
                  ? `${(file.size / 1024).toFixed(2)} KB`
                  : "PDF format, up to 5MB"}
              </p>

              <input
                id="resume-upload"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) => {
                  const selected = e.target.files?.[0];
                  if (selected) setFile(selected);
                }}
              />
            </label>

            <div className="mt-5 flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Target Role
              </label>

              <input
                type="text"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                placeholder="e.g. Full Stack Web Developer"
                className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none text-sm rounded-xl px-4 py-2.5 text-slate-800 placeholder-slate-400 transition-all"
              />

              <button
                onClick={analyzeResume}
                disabled={
                  mutationAnalyze.isPending || !file || !targetRole.trim()
                }
                className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500"
              >
                {mutationAnalyze.isPending ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4" />
                    Analyze Resume
                  </>
                )}
              </button>
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

        <div className="lg:col-span-6 bg-slate-200/60 rounded-2xl border-2 border-dashed border-slate-300 min-h-100 relative overflow-hidden">
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="w-3 h-3 rounded-full bg-slate-300" />
            ))}
          </div>

          {!file ? (
            <div className="flex h-full flex-col items-center justify-center p-8">
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-indigo-200 rounded-full blur-xl opacity-40"></div>

                <div className="relative bg-white border border-slate-200 shadow-sm p-5 rounded-2xl flex items-center justify-center -rotate-10 hover:rotate-0 transition-all duration-300">
                  <FileQuestion className="w-10 h-10 text-indigo-500" />
                </div>
              </div>

              <h2 className="text-xl font-bold text-slate-700 tracking-tight">
                Waiting for your CV
              </h2>
              <p className="mt-2 max-w-sm text-center text-sm text-slate-500 leading-relaxed">
                Upload a PDF on the left and the preview will instantly render
                right here.
              </p>
            </div>
          ) : (
            <iframe
              src={pdfUrl ?? undefined}
              title="Resume Preview"
              className="h-full w-full rounded-2xl"
              loading="lazy"
            />
          )}
        </div>

        <div className="lg:col-span-3 flex flex-col gap-6 lg:overflow-y-auto hide-scrollbar">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold z-40 tracking-tight">
                AI Analysis
              </h2>
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
              <p className="mt-4 text-sm font-semibold text-slate-700">
                ATS Score
              </p>
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

          {mutationAnalyze.isPending ? (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm opacity-60">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-slate-400" />
                <h2 className="text-sm font-bold tracking-tight text-slate-600">
                  Key Improvements
                </h2>
              </div>
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-14 w-full bg-slate-100 rounded-xl animate-pulse"
                  />
                ))}
              </div>
            </div>
          ) : analysis?.improvements ? (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-indigo-500" />
                <h2 className="text-sm font-bold tracking-tight text-slate-700">
                  Key Improvements
                </h2>
              </div>
              <div className="space-y-3">
                {analysis.improvements.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-indigo-700">
                        {idx + 1}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-sm h-80 flex flex-col items-center justify-center text-center p-6">
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-indigo-100 blur-3xl opacity-60" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-blue-100 blur-3xl opacity-60" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 mb-4 shadow-sm">
                  <Sparkles className="w-8 h-8 text-indigo-500" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  Nothing to analyze yet
                </h3>
                <p className="mt-2 text-sm text-slate-500 max-w-xs leading-relaxed">
                  Upload your resume and our AI will generate personalized
                  improvement suggestions.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ResumeReview;
