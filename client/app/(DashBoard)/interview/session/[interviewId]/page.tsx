"use client";

import Image from "next/image";
import { MicOff } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

import useInterviewGet from "@/hooks/interview/useInterviewGet";

const Session = () => {
  const { interviewId } = useParams<{ interviewId: string }>();

  const id = Number(interviewId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const { data: interview, isPending, error } = useInterviewGet(id);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading Interview...
      </div>
    );
  }

  if (error || !interview) {
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">
        Failed to load interview.
      </div>
    );
  }

  const {
    category,
    difficulty,
    experience,
    inputMode,
    totalQuestions,
    questions,
  } = interview.interview;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f0fdf6] to-white flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-7xl bg-white rounded-3xl sm:rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col lg:flex-row p-4 sm:p-6 gap-6 border border-gray-50">

        {/* Left Panel */}

        <div className="w-full lg:w-[30%] flex flex-col sm:flex-row lg:h-180 lg:flex-col gap-4 sm:gap-6">

          <div className="relative w-full sm:w-1/2 lg:w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-48 sm:h-52 bg-gray-100 shrink-0">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMj6Ygd8adN9Tl-9tKBzRP53SrGwchxBGC6jkaD9-5ALzxXtNFT40RkQA&s=10"
              alt="AI Avatar"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col justify-between">

            <div>
              <h3 className="text-xs font-medium text-gray-400">
                Interview Status
              </h3>

              <hr className="my-5 border-gray-100" />

              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-[#00a878] flex items-center justify-center">
                  <span className="text-[#c73a3a] font-semibold">
                    60s
                  </span>
                </div>
              </div>

              <hr className="my-5 border-gray-100" />

              <div className="flex justify-around">

                <div className="text-center">
                  <p className="text-[#00a878] text-xl font-bold">
                    {currentQuestionIndex + 1}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    Current Question
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-[#00a878] text-xl font-bold">
                    {totalQuestions}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    Total Questions
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-6 space-y-2 text-sm">

              <div className="flex justify-between">
                <span className="text-gray-500">Category</span>
                <span className="font-medium">{category}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Difficulty</span>
                <span className="font-medium">{difficulty}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Experience</span>
                <span className="font-medium">{experience}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Mode</span>
                <span className="font-medium">{inputMode}</span>
              </div>

            </div>

          </div>
        </div>

        {/* Right Panel */}

        <div className="w-full lg:w-[70%] flex flex-col border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-2 lg:pl-6">

          <h1 className="text-[#00a878] text-xl font-bold">
            {category} Interview
          </h1>

          <div className="flex flex-wrap gap-2 mt-3 mb-6">

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              {difficulty}
            </span>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              {experience}
            </span>

            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
              {inputMode}
            </span>

          </div>

          <div className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-6 mb-4">

            <p className="text-xs text-gray-400 mb-2 font-medium">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </p>

            <p className="text-xs uppercase tracking-wide font-semibold text-[#00a878] mb-2">
              {currentQuestion?.topic}
            </p>

            <p className="text-gray-800 font-medium text-[15px] leading-relaxed">
              {currentQuestion?.question}
            </p>

          </div>

          <textarea
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            className="w-full min-h-45 lg:flex-1 bg-[#f8f9fa] border border-gray-100 rounded-2xl p-6 text-gray-700 outline-none resize-none placeholder-gray-400 text-sm"
            placeholder="Type your answer here..."
          />

          <div className="flex items-center gap-3 mt-4">

            <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
              <MicOff size={18} />
            </button>

            <button className="flex-1 h-12 bg-[#00a878] hover:bg-[#009469] text-white rounded-xl text-sm font-medium transition-colors">
              {currentQuestionIndex === totalQuestions - 1
                ? "Finish Interview"
                : "Submit Answer"}
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Session;