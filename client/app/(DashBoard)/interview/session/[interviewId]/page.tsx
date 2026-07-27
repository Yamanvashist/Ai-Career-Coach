"use client"
import Image from "next/image";
import { MicOff } from "lucide-react";
import { useParams } from "next/navigation";

import useInterviewGet from "@/hooks/interview/useInterviewGet";
import { useState } from "react";

const Session = () => {

  const { interviewId } = useParams<{ interviewId: string }>();

  const id = Number(interviewId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const { data: interview, isPending, error } = useInterviewGet(id);

  const questions = interview?.interview.questions ?? [];

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#f0fdf6] to-white flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-7xl bg-white rounded-3xl sm:rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col lg:flex-row p-4 sm:p-6 gap-6 border border-gray-50">

        <div className="w-full lg:w-[30%] flex flex-col sm:flex-row lg:h-180 lg:flex-col gap-4 sm:gap-6">
          <div className="relative w-full sm:w-1/2 lg:w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-48 sm:h-52 bg-gray-100 shrink-0">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMj6Ygd8adN9Tl-9tKBzRP53SrGwchxBGC6jkaD9-5ALzxXtNFT40RkQA&s=10"
              alt="AI Avatar"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-full bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 flex flex-col justify-between">
            <h3 className="text-xs text-gray-400 mb-3 sm:mb-4 font-medium">Interview Status</h3>

            <hr className="border-gray-50 w-full mb-4 sm:mb-6" />

            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#00a878] flex items-center justify-center shadow-sm">
                <span className="text-[#c73a3a] font-medium text-sm sm:text-base">64s</span>
              </div>
            </div>

            <hr className="border-gray-50 w-full mb-4" />

            <div className="flex justify-around text-center w-full">
              <div>
                <p className="text-[#00a878] font-bold text-lg sm:text-xl">3</p>
                <p className="text-[10px] text-gray-400 capitalize mt-1">Current Question</p>
              </div>
              <div>
                <p className="text-[#00a878] font-bold text-lg sm:text-xl">5</p>
                <p className="text-[10px] text-gray-400 capitalize mt-1">Total Questions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[70%] flex flex-col border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-2 lg:pl-6">

          <h1 className="text-[#00a878] font-bold text-lg sm:text-xl mb-4 sm:mb-6">AI Smart Interview</h1>

          <div className="bg-[#f8f9fa] border border-gray-100 rounded-2xl p-4 sm:p-6 mb-4">
            <p className="text-xs text-gray-400 mb-2 font-medium">Question 3 of 5</p>
            <p className="text-gray-800 font-medium text-sm sm:text-[15px] leading-relaxed">
              How do you ensure your web designs are responsive across different devices and screen sizes?
            </p>
          </div>

          <textarea
            className="w-full min-h-45 lg:flex-1 bg-[#f8f9fa] border border-gray-100 rounded-2xl p-4 sm:p-6 text-gray-700 outline-none resize-none placeholder-gray-400 text-sm"
            placeholder="Type your answer here..."
          ></textarea>

          <div className="flex items-center gap-3 sm:gap-4 mt-4">
            <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shrink-0 hover:bg-gray-800 transition">
              <MicOff size={18} />
            </button>

            <button className="flex-1 h-12 bg-[#00a878] hover:bg-[#009469] text-white rounded-xl text-sm font-medium transition-colors shadow-sm">
              Submit Answer
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Session;