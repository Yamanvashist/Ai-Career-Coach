export const RecentHistorySkeleton = () => {
  return (
    <div className="min-h-75 animate-pulse rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="flex min-h-10 items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="h-7 w-44 rounded bg-slate-200" />
          <div className="h-4 w-72 rounded bg-slate-200" />
        </div>

        <div className="h-9 w-24 rounded-full bg-slate-200" />
      </header>

      <main className="mt-4 flex flex-1 flex-col">
        <div className="rounded-tl-2xl rounded-tr-2xl bg-slate-100 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="h-4 w-20 rounded bg-slate-200" />

            <div className="flex items-center gap-6">
              <div className="h-4 w-12 rounded bg-slate-200" />
              <div className="h-4 w-14 rounded bg-slate-200" />
              <div className="h-4 w-16 rounded bg-slate-200" />
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-200">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="h-5 w-52 rounded bg-slate-200" />

              <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-8">
                <div className="h-4 w-20 rounded bg-slate-200" />
                <div className="h-4 w-10 rounded bg-slate-200" />
                <div className="h-4 w-20 rounded bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};