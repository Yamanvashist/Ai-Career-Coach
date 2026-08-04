import { Sparkles, Zap } from "lucide-react";
import { Resume } from "./interfaces/resume";

type ResumeImprovementsProps = {
  analysis: Resume | null;
  isLoading: boolean;
};

const ResumeImprovements = ({
  analysis,
  isLoading,
}: ResumeImprovementsProps) => {
  if (isLoading) {
    return (
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm opacity-60 transition-colors">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          <h2 className="text-sm font-bold tracking-tight text-slate-600 dark:text-slate-300">
            Key Improvements
          </h2>
        </div>

        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-14 w-full rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (analysis) {
    return (
      <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
          <h2 className="text-sm font-bold tracking-tight text-slate-700 dark:text-slate-200">
            Key Improvements
          </h2>
        </div>

        <div className="space-y-3">
          {analysis.improvements.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 p-3 transition-all hover:border-indigo-200 dark:hover:border-indigo-500/50"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-500/20">
                <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400">
                  {idx + 1}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-80 flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-center shadow-sm transition-colors">
      <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-indigo-100 dark:bg-indigo-900/20 opacity-60 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-blue-100 dark:bg-blue-900/20 opacity-60 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50 dark:bg-indigo-950/40 shadow-sm">
          <Sparkles className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />
        </div>

        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          Nothing to analyze yet
        </h3>

        <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          Upload your resume and our AI will generate personalized improvement
          suggestions.
        </p>
      </div>
    </div>
  );
};

export default ResumeImprovements;