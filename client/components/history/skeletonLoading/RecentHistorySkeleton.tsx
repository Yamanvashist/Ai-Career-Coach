export const RecentHistorySkeleton = () => {
  return (
    <div className="min-h-75 animate-pulse rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
      <header className="flex min-h-10 items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="h-7 w-44 rounded bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-72 rounded bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="h-9 w-24 rounded-full bg-slate-200 dark:bg-slate-800" />
      </header>

      <main className="mt-4 overflow-x-auto">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/60">
              <th className="rounded-tl-2xl px-5 py-4">
                <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-800" />
              </th>

              <th className="px-5 py-4">
                <div className="h-4 w-14 rounded bg-slate-200 dark:bg-slate-800" />
              </th>

              <th className="px-5 py-4">
                <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-800" />
              </th>

              <th className="px-5 py-4">
                <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-800" />
              </th>

              <th className="rounded-tr-2xl px-5 py-4">
                <div className="h-4 w-14 rounded bg-slate-200 dark:bg-slate-800" />
              </th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 6 }).map((_, index) => (
              <tr key={index} className="border-b border-slate-200 dark:border-slate-800">
                <td className="px-5 py-5">
                  <div className="h-5 w-48 rounded bg-slate-200 dark:bg-slate-800" />
                </td>

                <td className="px-5 py-5">
                  <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-800" />
                </td>

                <td className="px-5 py-5">
                  <div className="h-4 w-10 rounded bg-slate-200 dark:bg-slate-800" />
                </td>

                <td className="px-5 py-5">
                  <div className="h-7 w-24 rounded-full bg-slate-200 dark:bg-slate-800" />
                </td>

                <td className="px-5 py-5">
                  <div className="h-4 w-36 rounded bg-slate-200 dark:bg-slate-800" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};