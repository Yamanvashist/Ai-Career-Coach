import { Clock } from "lucide-react";

interface TimerProgressCardProps {
  formattedTime: string | null;
  progressPercent: number;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const TimerProgressCard = ({
  formattedTime,
  progressPercent,
  currentQuestionIndex,
  totalQuestions,
}: TimerProgressCardProps) => {
  return (
    <div className="space-y-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-4 shadow-xs transition-colors">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          Timer
        </span>
        <span className="rounded-full border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
          {formattedTime ?? "00"}
        </span>
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-semibold">
          <span className="text-slate-500 dark:text-slate-400">Progress</span>
          <span className="text-emerald-700 dark:text-emerald-400">
            {progressPercent}%
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-full bg-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
        <div className="bg-slate-50 dark:bg-slate-800/40 rounded-xl p-3 border border-slate-200/60 dark:border-slate-800 text-center">
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
            {Math.min(currentQuestionIndex + 1, totalQuestions)}
          </p>
          <p className="mt-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Current Q
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800/40 rounded-xl p-3 border border-slate-200/60 dark:border-slate-800 text-center">
          <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            {totalQuestions}
          </p>
          <p className="mt-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Total Qs
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimerProgressCard;
