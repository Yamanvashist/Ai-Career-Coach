import { ArrowRight, Clock3, Layers } from "lucide-react";
import Interviews from "./InterviewData";
import { useState } from "react";

const InterviewGrid = () => {

    const [selectedInterview, setSelectedInterview] = useState<typeof Interviews[number] | null>(null)


    return (
        <>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                {Interviews.map((item) => {
                    const Icon = item.icon
                    const difficultyColor = item.difficulty == "Easy" ? "bg-green-400" : item.difficulty == "Medium" ? "bg-orange-400" : "bg-red-400"


                    return (
                        <button
                            onClick={() => setSelectedInterview(item)}
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
                            <div className="mt-3 flex flex-wrap gap-2">
                                {item.description.map((description, idx) => (
                                    <span
                                        key={idx}
                                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                                    >
                                        {description}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <span className={`rounded-full ${difficultyColor} px-3 py-1 text-xs font-medium text-white`}>
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
                {selectedInterview && (
                    <>
                        <div onClick={() => setSelectedInterview(null)} className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />

                        <div className="fixed left-1/2 top-1/2 z-50 w-150 -translate-1/2 rounded-md bg-white p-4 shadow-2xl">
                            <header>
                                <div className="flex justify-between mb-4">
                                    <h1 className="flex items-center gap-4 text-3xl font-bold tracking-tight text-slate-900">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                                            <Layers className="h-6 w-6 text-indigo-600" />
                                        </div>

                                        <span>MERN Stack Interview</span>
                                    </h1>                                    <span className="text-2xl text-gray-700">X</span>
                                </div>
                                <p className="text-gray-500">Comprehensive evaluation covering full-stack architecture , API design, and modern React patterns</p>
                            </header>

                            <main>

                            </main>
                        </div>
                    </>
                )}
            </div>


        </>
    );

}

export default InterviewGrid