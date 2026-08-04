export default function SettingsPageSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 font-sans antialiased text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <header className="flex min-h-20 items-center bg-white dark:bg-slate-900 justify-between border-b border-slate-200 dark:border-slate-800 pl-6 mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Settings
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-5 items-start animate-pulse">
        <section className="lg:col-span-1 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 text-center shadow-sm">
          <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-800 mx-auto mb-4" />

          <div className="h-6 w-32 bg-slate-200 dark:bg-slate-800 rounded-md mx-auto mb-2" />
          <div className="h-4 w-44 bg-slate-200 dark:bg-slate-800 rounded-md mx-auto mb-4" />

          <div className="h-6 w-24 bg-slate-200 dark:bg-slate-800 rounded-md mx-auto mb-6" />

          <div className="h-48 w-full rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 mb-6 p-6" />

          <div className="space-y-3">
            <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 rounded-xl" />
            <div className="h-24 w-full bg-slate-200 dark:bg-slate-800 rounded-xl" />
          </div>
        </section>

        <main className="lg:col-span-2 space-y-6">
          <div className="border-b border-slate-200/80 dark:border-slate-800 pb-3 mb-6">
            <div className="h-5 w-16 bg-slate-200 dark:bg-slate-800 rounded-md" />
          </div>

          <section className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <div className="h-5 w-48 bg-slate-200 dark:bg-slate-800 rounded-md mb-2" />
            <div className="h-3 w-64 bg-slate-200 dark:bg-slate-800 rounded-md mb-6" />

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-4 w-16 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="h-10 w-full bg-slate-100 dark:bg-slate-800 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-20 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="h-10 w-full bg-slate-100 dark:bg-slate-800 rounded-xl" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="h-4 w-12 bg-slate-200 dark:bg-slate-800 rounded" />
                <div className="h-20 w-full bg-slate-100 dark:bg-slate-800 rounded-xl" />
              </div>

              <div className="space-y-2 mt-6">
                <div className="h-5 w-24 bg-slate-200 dark:bg-slate-800 rounded mb-2" />
                <div className="h-32 w-full bg-slate-100 dark:bg-slate-800 rounded-xl" />
              </div>

              <div className="flex justify-end pt-2">
                <div className="h-10 w-28 bg-slate-200 dark:bg-slate-800 rounded-xl" />
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
            <div className="h-5 w-40 bg-slate-200 dark:bg-slate-800 rounded-md mb-2" />
            <div className="h-3 w-56 bg-slate-200 dark:bg-slate-800 rounded-md mb-6" />

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="h-4 w-28 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="h-10 w-full bg-slate-100 dark:bg-slate-800 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="h-10 w-full bg-slate-100 dark:bg-slate-800 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-36 bg-slate-200 dark:bg-slate-800 rounded" />
                  <div className="h-10 w-full bg-slate-100 dark:bg-slate-800 rounded-xl" />
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-2">
                <div className="h-10 w-28 bg-slate-200 dark:bg-slate-800 rounded-xl" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
