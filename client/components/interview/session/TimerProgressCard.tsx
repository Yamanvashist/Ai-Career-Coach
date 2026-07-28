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
    <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-emerald-600" />
          Timer
        </span>
        <span className="text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full font-bold">
          {formattedTime ?? "00"}
        </span>
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-semibold">
          <span className="text-slate-500">Progress</span>
          <span className="text-emerald-700">{progressPercent}%</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100">
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60 text-center">
          <p className="text-2xl font-bold text-emerald-600">
            {Math.min(currentQuestionIndex + 1, totalQuestions)}
          </p>
          <p className="text-[11px] text-slate-500 font-medium mt-0.5">Current Q</p>
        </div>
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/60 text-center">
          <p className="text-2xl font-bold text-slate-800">{totalQuestions}</p>
          <p className="text-[11px] text-slate-500 font-medium mt-0.5">Total Qs</p>
        </div>
      </div>
    </div>
  );
};

export default TimerProgressCard;