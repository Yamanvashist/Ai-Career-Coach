"use client";
import { HistoryHeader } from "@/components/history/HistoryHeader";
import { HistoryStats } from "@/components/history/HistoryStats";
import { RecentHistory } from "@/components/history/RecentHistory";
import { QuickAccess } from "@/components/history/QuickAccess";
import { CareerInsightCard } from "@/components/history/CareerInsightCard";

import useHistory from "@/hooks/history/useHistory";
import { useState } from "react";

const History = () => {
  const { data: history, isPending } = useHistory();
  console.log(history);

  const [selectedFilter, setSelectecFilter] = useState("ALL");

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto w-full rounded-3xl border border-slate-200 bg-white shadow-sm">
        <HistoryHeader />
        <HistoryStats history={history} Loading={isPending} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RecentHistory />

        <div className="flex flex-col gap-4">
          <QuickAccess />
          <CareerInsightCard />
        </div>
      </div>
    </div>
  );
};

export default History;
