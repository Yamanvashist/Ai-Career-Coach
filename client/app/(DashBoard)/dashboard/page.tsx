"use client";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useDashboard } from "@/hooks/dashboard/useDashboard";
import { useSidebarStore } from "@/store/sidebarStore";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import CareerReadinessCard from "@/components/dashboard/CareerReadinessCard";
import QuickActionsCard from "@/components/dashboard/QuickActionsCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import BarChartUi from "@/components/dashboard/BarChartUi";
import DonutChartUi from "@/components/dashboard/DonutChartUi";
import React, { useState } from "react";

const Dashboard = () => {
  const [startX, setStartX] = useState(0);
  const { data: userData, isLoading: userLoading } = useCurrentUser();
  const { data: dashboardData, isLoading: dashboardLoading } = useDashboard();
  const {open} = useSidebarStore()

  const { name } = userData ?? {};

  const {
    overallScore = 0,
    resumeAvg = 0,
    interviewAvg = 0,
    codeAnalysisAvg = 0,
    skillPerformance,
    activityData,
    recentActivities,
  } = dashboardData || {};

  const isLoading = userLoading || dashboardLoading;

  const handleStart = (e: React.TouchEvent) => {
    if (window.innerWidth >= 768) return
      setStartX(e.touches[0].clientX);
    
  };

  const handleEnd = (e : React.TouchEvent)=>{
    if (window.innerWidth >= 768) return
    const endX = e.changedTouches[0].clientX
    const diffX = endX - startX
    console.log(diffX)
    if (diffX > 100){
      open()
    }
  }

  return (
    <div
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      className="min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 p-4 md:p-8 space-y-8 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200"
    >
      <DashboardHeader userName={name} isLoading={userLoading} />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        <CareerReadinessCard
          overallScore={overallScore}
          resumeAvg={resumeAvg}
          interviewAvg={interviewAvg}
          codeAnalysisAvg={codeAnalysisAvg}
          isLoading={dashboardLoading}
        />

        <QuickActionsCard isLoading={isLoading} />
      </div>

      <div className="gap-4  grid grid-cols-1 md:grid-cols-2">
        <BarChartUi data={skillPerformance} isLoading={dashboardLoading} />
        <DonutChartUi data={activityData} isLoading={dashboardLoading} />
      </div>

      <RecentActivityCard
        Activities={recentActivities}
        isLoading={dashboardLoading}
      />
    </div>
  );
};

export default Dashboard;
