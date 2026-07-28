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
    <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-slate-100">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
          <span>{category} Assessment</span>
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Answer thoroughly and structure your key technical points clearly.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <Sparkles className="w-3 h-3 text-emerald-600" />
          {difficulty}
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
          <BarChart className="w-3 h-3 text-blue-600" />
          {experience}
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
          <Layers className="w-3 h-3 text-purple-600" />
          {inputMode}
        </span>
      </div>
    </div>
  );
};

export default SessionHeader;