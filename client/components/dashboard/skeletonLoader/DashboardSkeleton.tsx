"use client";

const DashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8 space-y-8 font-sans animate-pulse ">
      <div className="space-y-2">
        <div className="h-8 w-40 bg-slate-200 dark:bg-slate-800 rounded-lg" />
        <div className="h-4 w-64 bg-slate-200 dark:bg-slate-800 rounded-md" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        <div className="w-full rounded-2xl bg-white dark:bg-slate-900 p-6 md:p-8 h-full shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <div className="h-6 w-52 bg-slate-200 dark:bg-slate-800 rounded-lg" />
            <div className="h-3 w-40 bg-slate-100 dark:bg-slate-800/60 rounded" />
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-48 h-48 sm:w-52 sm:h-52 shrink-0 rounded-full border-8 border-slate-100 dark:border-slate-800/80 flex items-center justify-center p-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="h-8 w-16 bg-slate-200 dark:bg-slate-800 rounded-md" />
                <div className="h-3 w-10 bg-slate-100 dark:bg-slate-800/60 rounded" />
              </div>
            </div>

            <div className="flex flex-col gap-5 flex-1 w-full">
              <div className="h-3 w-24 bg-slate-200 dark:bg-slate-800 rounded" />

              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-slate-100 dark:bg-slate-800 rounded-md" />
                      <div className="h-4 w-28 bg-slate-200 dark:bg-slate-800 rounded" />
                    </div>
                    <div className="h-4 w-10 bg-slate-200 dark:bg-slate-800 rounded" />
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <div className="h-6 w-36 bg-slate-200 dark:bg-slate-800 rounded-lg" />
            <div className="h-3 w-56 bg-slate-100 dark:bg-slate-800/60 rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col justify-between bg-slate-50/50 dark:bg-slate-800/40 min-h-55"
              >
                <div>
                  <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-xl" />
                  <div className="h-4 w-20 bg-slate-200 dark:bg-slate-800 rounded mt-4" />
                  <div className="h-3 w-28 bg-slate-100 dark:bg-slate-800/60 rounded mt-2" />
                  <div className="mt-4 space-y-2">
                    <div className="h-3 w-24 bg-slate-100 dark:bg-slate-800/60 rounded" />
                    <div className="h-3 w-20 bg-slate-100 dark:bg-slate-800/60 rounded" />
                  </div>
                </div>
                <div className="w-full mt-6 h-9 bg-slate-200 dark:bg-slate-800 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full rounded-2xl bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm border border-slate-200 dark:border-slate-800 mt-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 bg-slate-100 dark:bg-slate-800 rounded-lg" />
          <div className="h-6 w-40 bg-slate-200 dark:bg-slate-800 rounded-lg" />
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 -mx-4 px-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <div className="h-4 w-48 sm:w-64 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="h-3 w-36 sm:w-44 bg-slate-100 dark:bg-slate-800/60 rounded" />
                </div>
              </div>
              <div className="h-6 w-20 bg-slate-100 dark:bg-slate-800 rounded-full self-start sm:self-center" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;