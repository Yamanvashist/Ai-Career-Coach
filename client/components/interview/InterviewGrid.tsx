import { ArrowRight, Clock3 } from "lucide-react";
import Interviews from "./InterviewData";

const InterviewGrid = () => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Interviews.map((item) => {
                const Icon = item.icon

                return (
                    <button
                        key={item.title}
                        className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-xl"
                    >
                        <div className="flex items-start justify-between">
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}
                            >
                                <Icon size={28} />
                            </div>

                            <ArrowRight className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-600" />
                        </div>

                        <h2 className="mt-6 text-xl font-semibold text-slate-900">
                            {item.title}
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-500">
                            {item.description}
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                                {item.difficulty}
                            </span>

                            <div className="flex items-center gap-1 text-sm text-slate-500">
                                <Clock3 size={15} />
                                {item.duration}
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                            <span className="text-sm font-medium text-indigo-600">
                                Start Interview
                            </span>

                            <ArrowRight
                                size={18}
                                className="text-indigo-600 transition group-hover:translate-x-1"
                            />
                        </div>
                    </button>
                )
            })}
        </div>
    );

}

export default InterviewGrid