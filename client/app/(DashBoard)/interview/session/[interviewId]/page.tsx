"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import useInterviewGet from "@/hooks/interview/useInterviewGet";
import useCountDown from "@/hooks/countdown/useCountDown";
import useTTS from "@/hooks/tts/useTts";
import useInterviewSubmit from "@/hooks/interview/useInterviewSubmit";

import SessionLoading from "@/components/interview/session/SessionLoading";
import SessionError from "@/components/interview/session/SessionError";
import AiAvatarCard from "@/components/interview/session/AiAvatarCard";
import TimerProgressCard from "@/components/interview/session/TimerProgressCard";
import SessionMetadataCard from "@/components/interview/session/SessionMetadataCard";
import SessionHeader from "@/components/interview/session/SessionHeader";
import QuestionPanel from "@/components/interview/session/QuestionPanel";
import AnswerInput from "@/components/interview/session/AnswerInput";

import { toast } from "sonner";

interface Answer {
  questionId: string;
  answer: string;
}

const Session = () => {
  const { interviewId } = useParams<{
    interviewId: string | string[];
  }>();

  const id = Array.isArray(interviewId) ? interviewId[0] : interviewId;

  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isMuted, setIsMuted] = useState(true);

  const hasSubmittedRef = useRef(false);

  const { mutateAsync: speak } = useTTS();
  const mutatedSubmit = useInterviewSubmit();

  const { data: interview, isPending, error } = useInterviewGet(id ?? "");

  const totalTime = interview?.interview?.totalTime ?? 0;

  const submitInterview = useCallback(
    async (finalAnswers: Answer[]) => {
      if (mutatedSubmit.isPending || hasSubmittedRef.current) return;

      hasSubmittedRef.current = true;

      try {
        const result = await mutatedSubmit.mutateAsync({
          interviewId: id ?? "",
          answers: finalAnswers,
        });

        if (result.success) {
          toast.success("Interview submitted successfully!");
          router.push(`/interview/result/${id}`);
          return;
        }

        toast.error(result.message || "Failed to submit interview.");

        hasSubmittedRef.current = false;
      } catch (err) {
        console.error(err);
        toast.error("Failed to submit interview.");

        hasSubmittedRef.current = false;
      }
    },
    [id, mutatedSubmit, router]
  );


  const handleTimeUp = useCallback(async () => {
    if (!interview?.interview || hasSubmittedRef.current) return;

    const questions: Array<{ id: string }> = interview.interview.questions;

    const finalAnswers: Answer[] = questions.map(
      (question: { id: string }) => {
        const existingAnswer = answers.find(
          (answer) => answer.questionId === question.id
        );

      return {
        questionId: question.id,
        answer: existingAnswer?.answer || "Not answered",
      };
    });

    await submitInterview(finalAnswers);
  }, [answers, interview, submitInterview]);

  const { formattedTime } = useCountDown({
    initialTime: isPending ? 0 : 1,
    onComplete: handleTimeUp,
  });

  const currentQuestion =
    interview?.interview?.questions?.[currentQuestionIndex];

 
  useEffect(() => {
    if (!currentQuestion?.speech) return;

    let audio: HTMLAudioElement | null = null;
    let audioUrl: string | null = null;
    let isMounted = true;

    const playSpeech = async () => {
      try {
        const blob = await speak(currentQuestion.speech);

        if (!isMounted) return;

        audioUrl = URL.createObjectURL(blob);
        audio = new Audio(audioUrl);

        audio.onended = () => {
          if (audioUrl) {
            URL.revokeObjectURL(audioUrl);
          }
        };

        await audio.play();
      } catch (err) {
        console.error("TTS Error:", err);
      }
    };

    playSpeech();

    return () => {
      isMounted = false;

      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }

      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [currentQuestion?.speech, speak]);

  if (isPending) return <SessionLoading />;

  if (error || !interview?.interview) {
    return <SessionError />;
  }

  const {
    category,
    difficulty,
    experience,
    inputMode,
    totalQuestions,
  } = interview.interview;

  const isCompleted = currentQuestionIndex >= totalQuestions;

  const progressPercent = Math.min(
    100,
    Math.round((currentQuestionIndex / totalQuestions) * 100)
  );

  const handleSubmit = async () => {
    if (
      !currentAnswer.trim() ||
      isCompleted ||
      !currentQuestion ||
      mutatedSubmit.isPending ||
      hasSubmittedRef.current
    ) {
      return;
    }

    const newAnswer: Answer = {
      questionId: currentQuestion.id,
      answer: currentAnswer.trim(),
    };

    const updatedAnswers = [...answers, newAnswer];

    setAnswers(updatedAnswers);
    setCurrentAnswer("");

 
    if (currentQuestionIndex === totalQuestions - 1) {
      await submitInterview(updatedAnswers);
      return;
    }

    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50/40 via-slate-50 to-teal-50/30 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/20 text-slate-800 dark:text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans selection:bg-emerald-100 dark:selection:bg-emerald-900/50 transition-colors duration-200">
      <div className="w-full max-w-7xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col lg:flex-row overflow-hidden transition-colors">

        <aside className="w-full lg:w-[320px] xl:w-90 bg-slate-50/70 dark:bg-slate-900/60 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-slate-800 flex flex-col justify-between gap-6 shrink-0 transition-colors">

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

        <main className="flex-1 p-5 sm:p-8 flex flex-col justify-between gap-6 bg-white dark:bg-slate-900 transition-colors">

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
              isLastQuestion={
                currentQuestionIndex === totalQuestions - 1
              }
              isSubmitting={mutatedSubmit.isPending}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default Session;