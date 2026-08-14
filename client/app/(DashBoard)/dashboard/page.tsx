"use client";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useDashboard } from "@/hooks/dashboard/useDashboard";
import DashboardSkeleton from "@/components/dashboard/skeletonLoader/DashboardSkeleton";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import CareerReadinessCard from "@/components/dashboard/CareerReadinessCard";
import QuickActionsCard from "@/components/dashboard/QuickActionsCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import Chart from "@/components/dashboard/Chart";

const Dashboard = () => {
  const { data: userData, isLoading: userLoading } = useCurrentUser();
  const { data: dashboardData, isLoading: dashboardLoading } = useDashboard();

  if (userLoading || dashboardLoading) return <DashboardSkeleton />;

  const { user } = userData || {};

  const {
    overallScore = 0,
    resumeAvg = 0,
    interviewAvg = 0,
    codeAnalysisAvg = 0,
    skillPerformance
  } = dashboardData || {};

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 p-4 md:p-8 space-y-8 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <DashboardHeader userName={user?.name} />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        <CareerReadinessCard
          overallScore={overallScore}
          resumeAvg={resumeAvg}
          interviewAvg={interviewAvg}
          codeAnalysisAvg={codeAnalysisAvg}
        />

        <QuickActionsCard />
      </div>

      <Chart data={skillPerformance} />

      <RecentActivityCard />
    </div>
  );
};

export default Dashboard;
