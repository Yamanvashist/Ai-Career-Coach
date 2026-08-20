"use client";
import useGetInterviewResult from "@/hooks/interview/useGetInterviewResult";
import { useParams } from "next/navigation";

import Header from "@/components/interview/result/Header";
import HeroScoreCard from "@/components/interview/result/HeroScoreCard";
import TopicPerformanceCard from "@/components/interview/result/TopicPerformanceCard";
import StrengthsCard from "@/components/interview/result/StrengthsCard";
import ImprovementsCard from "@/components/interview/result/ImprovementsCard";
import SummaryCard from "@/components/interview/result/SummaryCard";
import ActionButtons from "@/components/interview/result/ActionButtons";

export default function InterviewResults() {
  const { interviewId } = useParams<{ interviewId: string | string[] }>();
  const id = Array.isArray(interviewId) ? interviewId[0] : interviewId;

  const { data: interviewResult } = useGetInterviewResult(id ?? "");

  if (!interviewResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors">
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          Loading interview results...
        </p>
      </div>
    );
  }

  const {
    category,
    totalQuestions,
    report: {
      overallScore = 0,
      summary,
      recommendation,
      strengths = [],
      improvements = [],
      topicScores = [],
    } = {},
  } = interviewResult.interview || {};

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-8 font-sans text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <Header category={category} />

      <HeroScoreCard
        overallScore={overallScore}
        totalQuestions={totalQuestions}
        recommendation={recommendation}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <TopicPerformanceCard topicScores={topicScores} />
        <StrengthsCard strengths={strengths} />
        <ImprovementsCard improvements={improvements} />
      </div>

      <SummaryCard summary={summary} />

    </div>
  );
}