export const QuickAccessSkeleton = () => {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 h-5 w-28 rounded bg-slate-200" />

      <div className="grid grid-cols-1 gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-14 rounded-xl bg-slate-200"
          />
        ))}
      </div>
    </div>
  );
};