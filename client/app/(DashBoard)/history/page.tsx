import { LayoutGrid, FileText, Code2, Users } from "lucide-react";

const categories = [
  { id: "ALL", label: "All", icon: LayoutGrid },
  { id: "RESUME", label: "Resume", icon: FileText },
  { id: "CODEANALYSIS", label: "Code Analysis", icon: Code2 },
  { id: "INTERVIEW", label: "Interview", icon: Users },
] as const;

const categoriesLength = [
  {
    label: "TOTAL ACTIVITIES",
    length: 6,
    description: "All recorded activities in your history",
  },
  {
    label: "RESUME ANALYSES",
    length: 6,
    description: "Resume reviews and improvements completed",
  },
  {
    label: "CODE ANALYSES",
    length: 6,
    description: "Code reviews and analysis sessions completed",
  },
  {
    label: "INTERVIEWS COMPLETED",
    length: 6,
    description: "AI-powered interview sessions completed",
  },
];

const History = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto w-full rounded-3xl border border-slate-200 bg-white shadow-sm">
        <header className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium tracking-wide text-slate-600">
              NEW HISTORY PREVIEW
            </span>

            <h1 className="mt-4 text-3xl font-bold text-slate-900">History</h1>

            <p className="mt-2 text-sm text-slate-500">
              Browse your previous AI activities.
            </p>
          </div>

          <ul className="flex flex-wrap gap-3">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.id}>
                  <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600">
                    <Icon size={18} />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </header>

        <main className="min-h-60 p-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {categoriesLength.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-medium text-slate-500">
                  {item.label}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  {item.length}
                </h2>

                <p className="hidden sm:block mt-2 text-sm text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-6">
        <div className="min-h-75 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <header className="flex min-h-10 items-center justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold text-slate-900">
                Recent History
              </h1>

              <p className="text-sm text-slate-500">
                Filter by activity type and explore your latest activity.
              </p>
            </div>

            <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-600">
              2 results
            </span>
          </header>

        <main className="mt-4 flex flex-1 flex-col">
  <div className="rounded-tl-2xl rounded-tr-2xl bg-slate-100 p-5">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="tracking-wide text-gray-600">
        ACTIVITY
      </div>

      <div className="flex items-center gap-6 text-gray-600">
        <div className="tracking-wide">TYPE</div>
        <div className="tracking-wide">SCORE</div>
        <div className="tracking-wide">STATUS</div>
      </div>
    </div>
  </div>

  <div className="divide-y divide-slate-200">
    {[
      {
        activity: "Frontend Resume Review",
        type: "Resume",
        score: "86%",
        status: "Completed",
      },
      {
        activity: "React Code Analysis",
        type: "Code Analysis",
        score: "92%",
        status: "Completed",
      },
      {
        activity: "JavaScript Interview",
        type: "Interview",
        score: "78%",
        status: "Completed",
      },
    ].map((item) => (
      <div
        key={item.activity}
        className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="font-medium text-slate-900">
          {item.activity}
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm sm:flex sm:items-center sm:gap-8">
          <div className="text-slate-600">
            {item.type}
          </div>

          <div className="font-medium text-slate-900">
            {item.score}
          </div>

          <div className="font-medium text-emerald-600">
            {item.status}
          </div>
        </div>
      </div>
    ))}
  </div>
</main>
        </div>

        <div className="flex flex-col gap-4">
          <div className="h-35.5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"></div>

          <div className="h-35.5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default History;
