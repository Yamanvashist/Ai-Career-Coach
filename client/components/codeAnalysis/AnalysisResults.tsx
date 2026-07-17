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

      <div className="flex-1">
        {!analysis ? (
          <div className="flex h-full items-center justify-center p-10">
            <div className="text-center max-w-sm">
              <div className="w-18 h-18 rounded-2xl bg-indigo-100 mx-auto flex items-center justify-center mb-5">
                <BrainCircuit className="w-9 h-9 text-indigo-600" />
              </div>

              <h3 className="text-lg font-semibold text-slate-800">
                Ready for Analysis
              </h3>

              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Paste your code on the left and click{" "}
                <span className="font-semibold text-indigo-600">
                  Analyze Code
                </span>{" "}
                to receive AI-powered feedback.
              </p>
            </div>
          </div>
        ) : activeTab === "results" ? (
          <div className="p-6 space-y-5 overflow-y-auto">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Title</h3>
              <p className="text-slate-700">{analysis.title}</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Summary</h3>
              <p className="text-slate-600 leading-7">{analysis.summary}</p>
            </div>
          </div>
        ) : activeTab === "issues" ? (
          <div className="p-6 space-y-3 overflow-y-auto">
            {analysis.issues.map((issue, index) => (
              <div
                key={index}
                className="rounded-xl border border-red-200 bg-red-50 p-4"
              >
                <p className="text-sm text-red-700">{issue}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 space-y-3 overflow-y-auto">
            {analysis.improvements.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-green-200 bg-green-50 p-4"
              >
                <p className="text-sm text-green-700">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AnalysisResults;
