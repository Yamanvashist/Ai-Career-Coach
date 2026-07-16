"use client";

import Navbar from "@/components/analysis/Navbar";
import OverallScore from "@/components/analysis/OverallScore";
import Details from "@/components/analysis/Details";
import CodeEditor from "@/components/analysis/CodeEditor";
import AnalysisResults from "@/components/analysis/AnalysisResults";

const Analysis = () => {
  return (
    <div className="min-h-screen p-4 bg-slate-50 flex flex-col font-sans text-slate-900 lg:overflow-hidden">
      <Navbar />

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          <OverallScore />
          <Details />
        </div>

        <div className="flex flex-col gap-6">
          <CodeEditor />
          <AnalysisResults />
        </div>
      </main>
    </div>
  );
};

export default Analysis;
