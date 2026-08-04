import { quickLinks } from "./historyData";
import { QuickAccessSkeleton } from "./skeletonLoading/QuickAccessSkeleton";

interface QuickAccessProps {
  Loading: boolean;
}

export const QuickAccess = ({ Loading }: QuickAccessProps) => {
  if (Loading) return <QuickAccessSkeleton />;

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm transition-colors">
      <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
        Quick Access
      </h3>

      <div className="grid grid-cols-1 gap-3">
        {quickLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl border border-transparent dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/40 px-4 py-3.5 text-sm font-medium text-slate-700 dark:text-slate-200 transition-all duration-200 hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 ${link.styles}`}
            >
              <Icon size={18} className="shrink-0 text-slate-500 dark:text-slate-400" />
              <span>{link.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};