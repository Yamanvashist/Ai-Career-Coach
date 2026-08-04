"use client";

import { HistoryHeader } from "@/components/history/HistoryHeader";
import { HistoryStats } from "@/components/history/HistoryStats";
import { RecentHistory } from "@/components/history/RecentHistory";
import { QuickAccess } from "@/components/history/QuickAccess";
import { CareerInsightCard } from "@/components/history/CareerInsightCard";

import { AllFilters } from "@/components/history/interfaces/historyProps";
import useHistory from "@/hooks/history/useHistory";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const History = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedFilter, setSelectedFilter] = useState<AllFilters>("ALL");

  const page = Number(searchParams.get("page") || "1");

  const { data, isPending } = useHistory(page);

  const { history, pagination } = data ?? {};

  const handlePageChange = (newPage: number) => {
    router.push(`/history?page=${newPage}`);
  };

  const filteredHistory = useMemo(
    () =>
      history?.filter(
        (item: { type?: string }) =>
          selectedFilter === "ALL" || item.type === selectedFilter,
      ) ?? [],
    [history, selectedFilter],
  );

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 p-6 transition-colors duration-200">
      <div className="mx-auto w-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-colors">
        <HistoryHeader setSelectedFilter={setSelectedFilter} />
        <HistoryStats history={history ?? []} Loading={isPending} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[70%_30%]">
        <RecentHistory
          history={filteredHistory}
          Loading={isPending}
          pagination={pagination}
          onPageChange={handlePageChange}
        />

        <div className="flex flex-col gap-4">
          <QuickAccess Loading={isPending} />
          <CareerInsightCard Loading={isPending} />
        </div>
      </div>
    </div>
  );
};

export default History;