import { categories } from "./historyData";
import { AllFilters, HistoryHeaderProps } from "./interfaces/historyProps";

export const HistoryHeader = ({ setSelectedFilter }: HistoryHeaderProps) => {
  return (
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
              <button
                onClick={() => setSelectedFilter(item.id as AllFilters)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
              >
                <Icon size={18} />
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
