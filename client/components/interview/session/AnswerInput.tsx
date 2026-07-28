import { Mic, MicOff, ArrowRight } from "lucide-react";

interface AnswerInputProps {
  currentAnswer: string;
  setCurrentAnswer: (value: string) => void;
  isMuted: boolean;
  setIsMuted: (value: boolean) => void;
  onSubmit: () => void;
  isLastQuestion: boolean;
}

const AnswerInput = ({
  currentAnswer,
  setCurrentAnswer,
  isMuted,
  setIsMuted,
  onSubmit,
  isLastQuestion,
}: AnswerInputProps) => {
  const wordCount = currentAnswer.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <div className="relative">
        <textarea
          value={currentAnswer}
          onChange={(e) => setCurrentAnswer(e.target.value)}
          className="w-full h-44 sm:h-52 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition duration-200 resize-none shadow-xs"
          placeholder="Type your structured response here..."
        />
        <div className="absolute bottom-3 right-3 text-[11px] font-medium text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-xs">
          {wordCount} words
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsMuted(!isMuted)}
          className={`h-12 w-12 rounded-xl flex items-center justify-center border transition-all duration-200 ${
            isMuted
              ? "bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100"
              : "bg-emerald-50 border-emerald-200 text-emerald-600 hover:bg-emerald-100"
          }`}
          title={isMuted ? "Unmute Mic" : "Mute Mic"}
        >
          {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </button>

        <button
          type="button"
          onClick={onSubmit}
          disabled={!currentAnswer.trim()}
          className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-emerald-600/15"
        >
          <span>{isLastQuestion ? "Finish Interview" : "Submit Answer"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AnswerInput;