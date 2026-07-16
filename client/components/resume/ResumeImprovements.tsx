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
              className="h-14 w-full rounded-xl bg-slate-100 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (analysis) {
    return (
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
              className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-all hover:border-indigo-200"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                <span className="text-xs font-bold text-indigo-700">
                  {idx + 1}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-80 flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-indigo-100 opacity-60 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-blue-100 opacity-60 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50 shadow-sm">
          <Sparkles className="h-8 w-8 text-indigo-500" />
        </div>

        <h3 className="text-lg font-bold text-slate-800">
          Nothing to analyze yet
        </h3>

        <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
          Upload your resume and our AI will generate personalized improvement
          suggestions.
        </p>
      </div>
    </div>
  );
};

export default ResumeImprovements;
