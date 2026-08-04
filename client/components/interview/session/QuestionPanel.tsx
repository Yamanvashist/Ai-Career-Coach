import { CheckCircle2 } from "lucide-react";

interface Question {
  id: string;
  question: string;
  topic?: string;
}

interface QuestionPanelProps {
  isCompleted: boolean;
  currentQuestion?: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuestionPanel = ({
  isCompleted,
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
}: QuestionPanelProps) => {
  if (isCompleted) {
    return (
      <div className="mt-6 space-y-3 rounded-2xl border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50 dark:bg-emerald-950/20 p-8 text-center transition-colors">
        <div className="inline-flex p-3 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Session Complete!
        </h2>
        <p className="mx-auto max-w-md text-sm text-slate-600 dark:text-slate-300">
          You answered all {totalQuestions} questions. Your responses have been submitted for review.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-3 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 bg-emerald-50/30 dark:bg-emerald-950/20 p-6 shadow-xs transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide bg-emerald-100/80 dark:bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-200/60 dark:border-emerald-500/20">
          {currentQuestion?.topic || "Technical Core"}
        </span>
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
      </div>

      <p className="pt-1 text-base font-semibold leading-relaxed text-slate-900 dark:text-slate-100 sm:text-lg">
        {currentQuestion?.question}
      </p>
    </div>
  );
};

export default QuestionPanel;