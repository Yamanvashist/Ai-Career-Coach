"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

import useTTS from "@/hooks/tts/useTts";
import useInterviewSubmit from "@/hooks/interview/useInterviewSubmit";

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
  const { mutateAsync: speak } = useTTS();
  const mutatedSubmit = useInterviewSubmit();

  const router = useRouter();

  const { data: interview, isPending, error } = useInterviewGet(id);

  const currentQuestion =
    interview?.interview?.questions?.[currentQuestionIndex];

  useEffect(() => {
    if (!currentQuestion?.speech) return;

    const playSpeech = async () => {
      try {
        const blob = await speak(currentQuestion.speech);

        const audioUrl = URL.createObjectURL(blob);

        const audio = new Audio(audioUrl);

        audio.onended = () => {
          URL.revokeObjectURL(audioUrl);
          // Start microphone here
        };

        await audio.play();
      } catch (err) {
        console.error("TTS Error:", err);
      }
    };

    playSpeech();
  }, [currentQuestion?.speech, speak]);

  if (isPending) return <SessionLoading />;
  if (error || !interview?.interview) return <SessionError />;

  const {
    category,
    difficulty,
    experience,
    inputMode,
    totalQuestions,
    questions,
  } = interview.interview;

  const isCompleted = currentQuestionIndex >= totalQuestions;

  const progressPercent = Math.min(
    100,
    Math.round((currentQuestionIndex / totalQuestions) * 100),
  );

  const handleSubmit = async () => {
    if (!currentAnswer.trim() || isCompleted || !currentQuestion) return;

    const newAnswer = {
      questionId: currentQuestion.id,
      answer: currentAnswer,
    };

    const updatedAnswers = [...answers, newAnswer];

    setAnswers(updatedAnswers);
    setCurrentAnswer("");

    if (currentQuestionIndex === totalQuestions - 1) {
      console.log(updatedAnswers);

      const result = await mutatedSubmit.mutateAsync({
        interviewId: id,
        answers: updatedAnswers,
      });

      if (result.success) {
        router.push(`/dashboard/interview/${id}/result`);
        return;
      }

      setCurrentQuestionIndex((prev) => prev + 1);
    }

    return (
      <div className="min-h-screen bg-linear-to-br from-emerald-50/40 via-slate-50 to-teal-50/30 text-slate-800 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans selection:bg-emerald-100">
        <div className="w-full max-w-7xl bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row overflow-hidden">
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
};
export default Session;
