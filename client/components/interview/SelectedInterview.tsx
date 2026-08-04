import {
  Layers,
  CircleCheck,
  ArrowRight,
  MessageSquareText,
  Mic,
} from "lucide-react";
import {
  Difficulty,
  Experience,
  InputMode,
  SelectedInterviewProps,
  TotalQuestions,
  DIFFICULTY_OPTIONS,
  EXPERIENCE_OPTIONS,
  INPUT_MODE_OPTIONS,
} from "./Interfaces/interfaces";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { useInterviewStart } from "@/hooks/interview/useInterviewStart";
import { useState } from "react";

const SelectedInterview = ({
  selectedInterview,
  setSelectedInterview,
}: SelectedInterviewProps) => {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty>("MEDIUM");
  const [selectedTotalQuestions, setSelectedTotalQuestions] =
    useState<TotalQuestions>(10);
  const [selectedExperience, setSelectedExperience] =
    useState<Experience>("FRESHER");
  const [selectedInput, setSelectedInput] = useState<InputMode>("TEXT");

  const router = useRouter();

  const { mutateAsync, isPending } = useInterviewStart();

  const handleStartInterview = async () => {
    try {
      if (!selectedInterview) return;

      const { interviewId, message } = await mutateAsync({
        category: selectedInterview.title,
        topics: selectedInterview.description,
        difficulty: selectedDifficulty,
        totalQuestions: selectedTotalQuestions,
        experience: selectedExperience,
        inputMode: selectedInput,
      });

      router.push(`/interview/session/${interviewId}`);
      toast.success(message);
    } catch (error) {
      toast.error("Failed to start interview");
    }
  };

  return (
    <>
      <div
        onClick={() => setSelectedInterview(null)}
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      />

      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 px-4">
        <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 border dark:border-slate-800 p-5 shadow-2xl md:p-8 transition-colors">
          {/* Header */}
          <header className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <h1 className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl md:text-3xl">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-500/10">
                      <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span>
                      {selectedInterview?.title ?? "Unknown Interview"}
                    </span>
                  </h1>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 md:text-base">
                    Comprehensive evaluation covering full-stack architecture,
                    API design, and modern React patterns.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedInterview(null)}
                className="rounded-lg p-2 text-xl text-slate-500 dark:text-slate-400 transition hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>
          </header>

          {/* Body */}
          <main className="mt-8">
            <div className="hidden sm:block rounded-xl border border-slate-200 dark:border-slate-800 bg-indigo-50/60 dark:bg-slate-800/40 p-5">
              <div className="mb-5">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  Evaluation Topics
                </h3>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  These are the skills the AI will evaluate during your
                  interview.
                </p>
              </div>

              <div className="grid grid-cols-2 overflow-x-clip gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {selectedInterview?.description.map((desc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <CircleCheck
                      size={18}
                      className="shrink-0 text-indigo-600 dark:text-indigo-400"
                    />
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 w-full gap-4">
              <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white/10 dark:bg-slate-800/20 p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Difficulty
                </p>

                <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
                  {DIFFICULTY_OPTIONS.map((difficulty) => (
                    <button
                      onClick={() => setSelectedDifficulty(difficulty.value)}
                      key={difficulty.value}
                      className={`flex-1 rounded-lg py-2 text-xs sm:text-sm cursor-pointer transition-all duration-100 ease-in-out
                      ${
                        selectedDifficulty === difficulty.value
                          ? "bg-white dark:bg-slate-700 shadow-sm text-indigo-600 dark:text-indigo-400 font-semibold"
                          : "bg-transparent text-gray-500 dark:text-slate-400"
                      }`}
                    >
                      {difficulty.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white/10 dark:bg-slate-800/20 p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Questions
                </p>

                <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
                  {([5, 10, 15] as const).map((questions, idx) => (
                    <button
                      onClick={() => setSelectedTotalQuestions(questions)}
                      key={idx}
                      className={`flex-1 rounded-lg py-2 text-xs sm:text-sm cursor-pointer transition-all duration-100 ease-in-out
                      ${
                        selectedTotalQuestions === questions
                          ? "bg-white dark:bg-slate-700 shadow-sm text-indigo-600 dark:text-indigo-400 font-semibold"
                          : "bg-transparent text-gray-500 dark:text-slate-400"
                      }`}
                    >
                      {questions}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 w-full gap-4">
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Input Mode
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {INPUT_MODE_OPTIONS.map((mode) => {
                    const ModeIcon =
                      mode.value === "TEXT" ? MessageSquareText : Mic;
                    const desc =
                      mode.value === "TEXT" ? "Chat with AI" : "Coming Soon";
                    const isDisabled = mode.value === "VOICE";
                    const isSelected = selectedInput === mode.value;

                    return (
                      <button
                        key={mode.value}
                        disabled={isDisabled}
                        onClick={() => setSelectedInput(mode.value)}
                        className={`group flex aspect-square flex-col items-center justify-center rounded-xl border transition-all duration-200 cursor-pointer
                        ${
                          isSelected
                            ? "border-indigo-600 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 shadow-sm"
                            : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/10"
                        }`}
                      >
                        <ModeIcon
                          size={20}
                          className={`mb-3 transition-colors ${
                            isSelected
                              ? "text-indigo-600 dark:text-indigo-400"
                              : "text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                          }`}
                        />
                        <h3
                          className={`font-semibold text-sm sm:text-base ${
                            isSelected
                              ? "text-indigo-900 dark:text-indigo-200"
                              : "text-slate-800 dark:text-slate-200"
                          }`}
                        >
                          {mode.label}
                        </h3>
                        <p
                          className={`mt-1 text-center text-xs ${
                            isSelected
                              ? "text-indigo-600/80 dark:text-indigo-300/80"
                              : "text-slate-500 dark:text-slate-400"
                          }`}
                        >
                          {desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                <p className="mb-8 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Experience Level
                </p>

                <div className="flex flex-col items-center">
                  <div className="flex w-full flex-wrap sm:flex-nowrap rounded-xl bg-slate-100 dark:bg-slate-800 p-1">
                    {EXPERIENCE_OPTIONS.map((level) => (
                      <button
                        key={level.value}
                        onClick={() => setSelectedExperience(level.value)}
                        className={`flex-1 rounded-lg px-2 sm:px-5 py-2 text-xs sm:text-sm transition-all duration-150 cursor-pointer
                        ${
                          selectedExperience === level.value
                            ? "bg-white dark:bg-slate-700 font-semibold text-indigo-600 dark:text-indigo-400 shadow-sm"
                            : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                        }`}
                      >
                        {level.label}
                      </button>
                    ))}
                  </div>

                  <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
                    Tailors the interview questions to your professional
                    experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                disabled={isPending}
                onClick={handleStartInterview}
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-indigo-600 dark:bg-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 dark:hover:bg-indigo-400 hover:shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
              >
                {isPending ? "Generating..." : "Start Interview Session"}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SelectedInterview;
