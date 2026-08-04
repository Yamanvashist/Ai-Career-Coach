import { Sparkles, BarChart, Layers } from "lucide-react";

interface SessionHeaderProps {
  category: string;
  difficulty: string;
  experience: string;
  inputMode: string;
}

const SessionHeader = ({
  category,
  difficulty,
  experience,
  inputMode,
}: SessionHeaderProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4 transition-colors">
      <div>
        <h1 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-slate-100 sm:text-2xl">
          <span>{category} Assessment</span>
        </h1>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Answer thoroughly and structure your key technical points clearly.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
          <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
          {difficulty}
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
          <BarChart className="w-3 h-3 text-blue-600 dark:text-blue-400" />
          {experience}
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20">
          <Layers className="w-3 h-3 text-purple-600 dark:text-purple-400" />
          {inputMode}
        </span>
      </div>
    </div>
  );
};

export default SessionHeader;