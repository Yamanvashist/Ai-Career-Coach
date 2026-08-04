import { ArrowRight, Clock3 } from "lucide-react";
import { useState } from "react";

import SelectedInterview from "./SelectedInterview";
import Interviews from "./InterviewData";
import { InterviewData } from "./Interfaces/interfaces";

const InterviewGrid = () => {
  const [selectedInterview, setSelectedInterview] = useState<InterviewData | null>(null);

  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {Interviews.map((item) => {
          const Icon = item.icon;

          return (
            <button
              onClick={() => setSelectedInterview(item)}
              key={item.title}
              className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon size={28} />
                </div>

                <ArrowRight className="text-slate-300 dark:text-slate-600 transition group-hover:translate-x-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
              </div>

              <h2 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.description.map((description, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
                  >
                    {description}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                  <Clock3 size={15} />
                  {item.duration}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-5">
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Start Interview
                </span>

                <ArrowRight
                  size={18}
                  className="text-indigo-600 dark:text-indigo-400 transition group-hover:translate-x-1"
                />
              </div>
            </button>
          );
        })}
        {selectedInterview && (
          <SelectedInterview
            selectedInterview={selectedInterview}
            setSelectedInterview={setSelectedInterview}
          />
        )}
      </div>
    </>
  );
};

export default InterviewGrid;