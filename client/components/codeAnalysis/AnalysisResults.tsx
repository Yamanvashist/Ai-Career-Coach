import { BrainCircuit } from "lucide-react";
import { useState } from "react";
import { CodeAnalysis } from "./codeAnalysisInterface";

type AnalysisResultsProps = {
  analysis: CodeAnalysis | null;
  analysisDuration: number | null;
};

type Tab = "results" | "issues" | "improvements";

const AnalysisResults = ({
  analysis,
  analysisDuration,
}: AnalysisResultsProps) => {
  const [activeTab, setActiveTab] = useState<Tab>("results");

  const tabs = [
    { id: "results", label: "Results" },
    { id: "issues", label: "Issues" },
    { id: "improvements", label: "Improvements" },
  ] as const;

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col min-h-112.5 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
        <div>
          <h2 className="font-semibold text-slate-800">AI Analysis</h2>

          <p className="text-sm text-slate-500 mt-1">
            {analysis
              ? "Analysis completed successfully."
              : "Your analysis will appear here after reviewing your code."}
          </p>
        </div>

        <div
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            analysis
              ? "bg-green-100 text-green-700"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {analysis ? analysisDuration + "s" : "Waiting..."}
        </div>
      </div>

      <div className="flex overflow-x-auto border-b border-slate-200 bg-white">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 text-sm whitespace-nowrap transition duration-500 cursor-pointer ${
              activeTab === tab.id
                ? "border-b-2 border-indigo-600 text-indigo-600 font-medium"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-hidden flex flex-col bg-slate-50/50">
        {!analysis ? (
          <div className="flex h-full items-center justify-center p-8">
            <div className="text-center max-w-md p-8 rounded-3xl border border-dashed border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-indigo-50 to-indigo-100/50 mx-auto flex items-center justify-center mb-6 shadow-inner">
                <BrainCircuit className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                Ready for Analysis
              </h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                Paste your code on the left and click{" "}
                <span className="font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">
                  Analyze Code
                </span>{" "}
                to receive AI-powered feedback.
              </p>
            </div>
          </div>
        ) : activeTab === "results" ? (
          <div className="p-8 space-y-6 overflow-y-auto h-full">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Title
              </h3>
              <p className="text-lg font-medium text-slate-800">
                {analysis.title}
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Summary
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {analysis.summary}
              </p>
            </div>
          </div>
        ) : activeTab === "issues" ? (
          <div className="p-8 space-y-4 overflow-y-auto h-full">
            {analysis.issues.map((issue, index) => (
              <div
                key={index}
                className="flex gap-4 items-start rounded-2xl border border-red-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed pt-1">
                  {issue}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 space-y-4 overflow-y-auto h-full">
            {analysis.improvements.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed pt-1">
                  {item}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AnalysisResults;
