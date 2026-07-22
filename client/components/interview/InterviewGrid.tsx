import { ArrowRight, CircleCheck, Clock3, Layers } from "lucide-react";
import Interviews from "./InterviewData";
import { useState } from "react";

const InterviewGrid = () => {

    const [selectedInterview, setSelectedInterview] = useState<typeof Interviews[number] | null>(null)
    const [selectedDifficulty, setSelectedDifficulty] = useState("Medium")
    const [selectedTotalQuestions, setSelectedTotalQuestions] = useState("10Qs")


    return (
        <>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                {Interviews.map((item) => {
                    const Icon = item.icon


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
                        <div
                            onClick={() => setSelectedInterview(null)}
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                        />

                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl md:p-8">

                                {/* Header */}
                                <header className="space-y-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-center gap-4">


                                            <div>

                                                <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
                                                        <Layers className="h-6 w-6 text-indigo-600" />
                                                    </div>
                                                    <span>{selectedInterview.title ?? "Unknown Interview"}</span>
                                                </h1>

                                                <p className="mt-2 text-sm text-slate-500 md:text-base">
                                                    Comprehensive evaluation covering full-stack architecture,
                                                    API design, and modern React patterns.
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setSelectedInterview(null)}
                                            className="rounded-lg p-2 text-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </header>

                                {/* Body */}
                                <main className="mt-8">
                                    <div className="rounded-xl border border-slate-200 bg-indigo-50/60 p-5">
                                        <div className="mb-5">
                                            <h3 className="text-base font-semibold text-slate-900">
                                                Evaluation Topics
                                            </h3>

                                            <p className="mt-1 text-sm text-slate-500">
                                                These are the skills the AI will evaluate during your interview.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                            {selectedInterview.description.map((desc, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-slate-700 transition hover:text-indigo-600"
                                                >
                                                    <CircleCheck
                                                        size={18}
                                                        className="shrink-0 text-indigo-600"
                                                    />

                                                    <span>{desc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 mt-4 w-full gap-2">
                                        <div className="max-w-md rounded-xl border border-slate-200 bg-white/10 p-5">
                                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                                Difficulty
                                            </p>

                                            <div className="flex rounded-xl bg-slate-100 p-1">
                                                {["Easy", "Medium", "Hard"].map((difficulty, idx) => {

                                                    return (
                                                        <button onClick={() => setSelectedDifficulty(difficulty)} key={idx} className={`flex-1 rounded-lg 
                                                    ${selectedDifficulty == difficulty ? "bg-white shadow-sm text-indigo-600 font-semibold " : "bg-transparent text-gray-500 "}
                                                    py-2 text-sm  cursor-pointer transition-all duration-100 ease-in-out`}>
                                                            {difficulty}
                                                        </button>
                                                    )
                                                })}

                                            </div>

                                        </div>

                                        <div className="max-w-md rounded-xl border border-slate-200 bg-white/10 p-5">
                                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                                Questions
                                            </p>

                                            <div className="flex rounded-xl bg-slate-100 p-1">
                                                {["5Qs", "10Qs", "15Qs"].map((questions, idx) => {

                                                    return (
                                                        <button onClick={() => setSelectedTotalQuestions(questions)} key={idx} className={`flex-1 rounded-lg 
                                                    ${selectedTotalQuestions == questions ? "bg-white shadow-sm text-indigo-600 font-semibold " : "bg-transparent text-gray-500 "}
                                                    py-2 text-sm  cursor-pointer transition-all duration-100 ease-in-out`}>
                                                            {questions}
                                                        </button>
                                                    )
                                                })}

                                            </div>

                                        </div>


                                        <div>

                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </>
                )}
            </div>


        </>
    );

}

export default InterviewGrid