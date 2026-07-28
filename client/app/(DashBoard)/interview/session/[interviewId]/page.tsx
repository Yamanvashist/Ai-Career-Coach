"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

import useInterviewGet from "@/hooks/interview/useInterviewGet";
import useCountDown from "@/hooks/countdown/useCountDown";

import SessionLoading from "@/components/interview/session/SessionLoading";
import SessionError from "@/components/interview/session/SessionError";
import AiAvatarCard from "@/components/interview/session/AiAvatarCard";
import TimerProgressCard from "@/components/interview/session/TimerProgressCard";
import SessionMetadataCard from "@/components/interview/session/SessionMetadataCard";
import SessionHeader from "@/components/interview/session/SessionHeader";
import QuestionPanel from "@/components/interview/session/QuestionPanel";
import AnswerInput from "@/components/interview/session/AnswerInput";

interface Answer {
  questionId: number;
  answer: string;
}

const Session = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  const id = Number(interviewId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isMuted, setIsMuted] = useState(true);

  const { formattedTime } = useCountDown(10);
  const { data: interview, isPending, error } = useInterviewGet(id);

  if (isPending) return <SessionLoading />;
  if (error || !interview) return <SessionError />;

  const {
    category,
    difficulty,
    experience,
    inputMode,
    totalQuestions,
    questions,
  } = interview.interview;

  const isCompleted = currentQuestionIndex >= totalQuestions;
  const currentQuestion = questions[currentQuestionIndex];
  const progressPercent = Math.min(
    100,
    Math.round((currentQuestionIndex / totalQuestions) * 100)
  );

  const handleSubmit = () => {
    if (!currentAnswer.trim() || isCompleted) return;

    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        answer: currentAnswer,
      },
    ]);
    setCurrentAnswer("");
    setCurrentQuestionIndex((prev) => prev + 1);
  };



  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50/40 via-slate-50 to-teal-50/30 text-slate-800 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans selection:bg-emerald-100">
      <div className="w-full max-w-7xl bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row overflow-hidden">

        {/* Sidebar */}
        <aside className="w-full lg:w-[320px] xl:w-90 bg-slate-50/70 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-200/80 flex flex-col justify-between gap-6 shrink-0">
          <div className="space-y-6">
            <AiAvatarCard inputMode={inputMode} />
            <TimerProgressCard
              formattedTime={formattedTime}
              progressPercent={progressPercent}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={totalQuestions}
            />
          </div>
          <SessionMetadataCard
            category={category}
            difficulty={difficulty}
            experience={experience}
          />
        </aside>

        {/* Main Area */}
        <main className="flex-1 p-5 sm:p-8 flex flex-col justify-between gap-6 bg-white">
          <div>
            <SessionHeader
              category={category}
              difficulty={difficulty}
              experience={experience}
              inputMode={inputMode}
            />
            <QuestionPanel
              isCompleted={isCompleted}
              currentQuestion={currentQuestion}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={totalQuestions}
            />
          </div>

          {!isCompleted && (
            <AnswerInput
              currentAnswer={currentAnswer}
              setCurrentAnswer={setCurrentAnswer}
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              onSubmit={handleSubmit}
              isLastQuestion={currentQuestionIndex === totalQuestions - 1}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Session;