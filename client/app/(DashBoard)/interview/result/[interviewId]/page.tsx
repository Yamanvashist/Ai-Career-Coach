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
  const { interviewId } = useParams<{ interviewId: string }>();
  const id = Array.isArray(interviewId) ? interviewId[0] : interviewId;

  const { data: interviewResult } = useGetInterviewResult(id ?? "");

  if (!interviewResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50/50">
        <p className="text-gray-500 font-medium">
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
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8 font-sans text-gray-800">
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

      <ActionButtons />
    </div>
  );
}
