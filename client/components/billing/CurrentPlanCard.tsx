interface CurrentPlanCardProps {
  credits: number;
}

export function CurrentPlanCard({ credits }: CurrentPlanCardProps) {
  const totalCredts = credits < 30 ? 30 : credits < 200 ? 200 : 500;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="space-y-2">
        <span className="inline-block text-xs font-semibold px-2.5 py-1 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-full">
          Current Plan
        </span>
        <h2 className="text-2xl font-bold">Starter</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Subscription:{" "}
          <span className="font-medium text-slate-700 dark:text-slate-300">
            No Active Subscription
          </span>
        </p>
      </div>

      <div className="flex-1 max-w-sm">
        <div className="flex justify-between text-sm font-medium mb-1.5">
          <span>Credits Left</span>
          <span className="font-bold text-purple-600 dark:text-purple-400">
            {credits} / {totalCredts}
          </span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
          <div
            className="bg-purple-600 h-full rounded-full"
            style={{ width: `${Math.min(credits ?? 0, totalCredts) * (100 / totalCredts)}%` }}
          />
        </div>
      </div>

      <div>
        <a
          href="#subscriptions"
          className="inline-flex items-center justify-center px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors shadow-sm"
        >
          Upgrade Plan →
        </a>
      </div>
    </div>
  );
}
