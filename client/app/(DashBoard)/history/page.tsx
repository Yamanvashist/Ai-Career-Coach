"use client";
import { HistoryHeader } from "@/components/history/HistoryHeader";
import { HistoryStats } from "@/components/history/HistoryStats";
import { RecentHistory } from "@/components/history/RecentHistory";
import { QuickAccess } from "@/components/history/QuickAccess";
import { CareerInsightCard } from "@/components/history/CareerInsightCard";

import { AllFilters } from "@/components/history/interfaces/historyProps";

import useHistory from "@/hooks/history/useHistory";
import { useMemo, useState } from "react";

const History = () => {
  const { data: history, isPending } = useHistory();

  const [selectedFilter, setSelectedFilter] = useState<AllFilters>("ALL");

  const filteredHistory = useMemo(
    () =>
      history?.filter(
        (item) => selectedFilter === "ALL" || item.type === selectedFilter,
      ) ?? [],
    [history, selectedFilter],
  );

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto w-full rounded-3xl border border-slate-200 bg-white shadow-sm">
        <HistoryHeader setSelectedFilter={setSelectedFilter} />
        <HistoryStats history={history ?? []} Loading={isPending} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[70%_30%]">
        <RecentHistory history={filteredHistory} Loading={isPending} />

        <div className="flex flex-col gap-4">
          <QuickAccess Loading={isPending} />
          <CareerInsightCard Loading={isPending}  />
        </div>
      </div>
    </div>
  );
};

export default History;
