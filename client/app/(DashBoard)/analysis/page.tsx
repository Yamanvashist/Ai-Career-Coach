"use client";

import Navbar from "@/components/codeAnalysis/Navbar";
import OverallScore from "@/components/codeAnalysis/OverallScore";
import Details from "@/components/codeAnalysis/Details";
import CodeEditor from "@/components/codeAnalysis/CodeEditor";
import AnalysisResults from "@/components/codeAnalysis/AnalysisResults";

import { useAnalyzeCode } from "@/hooks/codeAnalysis/useAnalyzeCode";
import { useState } from "react";

import { CodeAnalysis } from "@/components/codeAnalysis/codeAnalysisInterface";

const Analysis = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [analysis, setAnalysis] = useState<CodeAnalysis | null>(null);
  const [analysisDuration, setAnalysisDuration] = useState<number | null>(null);

  const { mutateAsync, isPending } = useAnalyzeCode();

  const analyzeCode = async () => {
    try {
      const { analysis, analysisDuration } = await mutateAsync({
        code,
        language,
      });
      setAnalysis(analysis);
      setAnalysisDuration(Number((analysisDuration / 1000).toFixed(1)));
      console.log(analysis);
      console.log(analysisDuration);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-slate-50 flex flex-col font-sans text-slate-900 lg:overflow-hidden">
      <Navbar />

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          <OverallScore analysis={analysis} />
          <Details analysis={analysis} />
        </div>

        <div className="flex flex-col gap-6">
          <CodeEditor
            code={code}
            setCode={setCode}
            language={language}
            setLanguage={setLanguage}
            analyzeCode={analyzeCode}
            isLoading={isPending}
            analysis={analysis}
          />
          <AnalysisResults analysis={analysis} analysisDuration={analysisDuration} />
        </div>
      </main>
    </div>
  );
};

export default Analysis;
