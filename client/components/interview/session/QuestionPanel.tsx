import { CheckCircle2 } from "lucide-react";

interface Question {
  id: number;
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
      <div className="mt-6 bg-emerald-50 rounded-2xl border border-emerald-200 p-8 text-center space-y-3">
        <div className="inline-flex p-3 rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">Session Complete!</h2>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          You answered all {totalQuestions} questions. Your responses have been submitted for review.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 bg-emerald-50/30 rounded-2xl border border-emerald-100 p-6 shadow-xs space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide bg-emerald-100/80 px-2.5 py-1 rounded-lg border border-emerald-200/60">
          {currentQuestion?.topic || "Technical Core"}
        </span>
        <span className="text-xs font-medium text-slate-500">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
      </div>

      <p className="text-slate-900 font-semibold text-base sm:text-lg leading-relaxed pt-1">
        {currentQuestion?.question}
      </p>
    </div>
  );
};

export default QuestionPanel;