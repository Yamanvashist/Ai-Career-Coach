"use client";

import Navbar from "@/components/codeAnalysis/Navbar";
import OverallScore from "@/components/codeAnalysis/OverallScore";
import Details from "@/components/codeAnalysis/Details";
import CodeEditor from "@/components/codeAnalysis/CodeEditor";
import AnalysisResults from "@/components/codeAnalysis/AnalysisResults";
import { toast } from "sonner";

import { useAnalyzeCode } from "@/hooks/codeAnalysis/useAnalyzeCode";
import { useState } from "react";

import { CodeAnalysis } from "@/components/codeAnalysis/codeAnalysisInterface";
import axios from "axios";

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
    } catch (error) {
      if (axios.isAxiosError(error)){
        toast.error(error.response?.data?.message ?? "Failed to analyze the code")
      } else {
        toast.error("Server error please try again later")
      }
    }
  };

  return (
    <div className="min-h-screen p-4 bg-slate-50 dark:bg-slate-950 flex flex-col font-sans text-slate-900 dark:text-slate-100 lg:overflow-hidden transition-colors duration-200">
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
            setAnalysis={setAnalysis as React.Dispatch<React.SetStateAction<any>>}
          />
          <AnalysisResults analysis={analysis} analysisDuration={analysisDuration} />
        </div>
      </main>
    </div>
  );
};

export default Analysis;