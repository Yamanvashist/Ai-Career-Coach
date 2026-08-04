import { Mic, MicOff, ArrowRight, Loader2 } from "lucide-react";

interface AnswerInputProps {
  currentAnswer: string;
  setCurrentAnswer: (value: string) => void;
  isMuted: boolean;
  setIsMuted: (value: boolean) => void;
  onSubmit: () => void;
  isLastQuestion: boolean;
  isSubmitting?: boolean;
}

const AnswerInput = ({
  currentAnswer,
  setCurrentAnswer,
  isMuted,
  setIsMuted,
  onSubmit,
  isLastQuestion,
  isSubmitting = false,
}: AnswerInputProps) => {
  const wordCount = currentAnswer.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="relative">
        <textarea
          value={currentAnswer}
          onChange={(e) => setCurrentAnswer(e.target.value)}
          disabled={isSubmitting}
          className="h-44 w-full resize-none rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4 text-sm text-slate-800 dark:text-slate-100 shadow-xs transition duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-emerald-500 dark:focus:border-emerald-400 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-60"
          placeholder="Type your structured response here..."
        />
        <div className="absolute bottom-3 right-3 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-2 py-0.5 text-[11px] font-medium text-slate-400 dark:text-slate-400 shadow-xs">
          {wordCount} words
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsMuted(!isMuted)}
          disabled={isSubmitting}
          className={`h-12 w-12 rounded-xl flex items-center justify-center border transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${
            isMuted
              ? "bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-500/20"
              : "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-500/20"
          }`}
          title={isMuted ? "Unmute Mic" : "Mute Mic"}
        >
          {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </button>

        <button
          type="button"
          onClick={onSubmit}
          disabled={!currentAnswer.trim() || isSubmitting}
          className="flex-1 h-12 bg-emerald-600 dark:bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-emerald-600/15 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>{isLastQuestion ? "Finish Interview" : "Submit Answer"}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AnswerInput;