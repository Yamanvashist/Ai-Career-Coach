"use client";
import { toast } from "sonner";
import { useState, useMemo } from "react";
import { Resume } from "@/components/resume/interfaces/resume";

import useResume from "@/hooks/resume/useResume";

import Navbar from "@/components/resume/Navbar";
import UploadFile from "@/components/resume/UploadFile";
import HowItWorks from "@/components/resume/HowItWorks";
import PDFPreview from "@/components/resume/PDFPreview";
import ResumeAnalysis from "@/components/resume/ResumeAnalysis";
import ResumeImprovements from "@/components/resume/ResumeImprovements";

const ResumeReview = () => {
  const [file, setFile] = useState<File | null>(null);
  const [targetRole, setTargetRole] = useState<string>("");
  const [analysis, setAnalysis] = useState<Resume | null>(null);


  const pdfUrl = useMemo(() => {
    return file ? URL.createObjectURL(file) : null;
  }, [file]);

  
  const mutationAnalyze = useResume();

  const analyzeResume = async () => {
    if (!file || !targetRole.trim()) return;
    if (file.size >= 5242880) return toast.error("File is too Large");
    const formData = new FormData();
    formData.append("resume", file);
    formData.append("targetRole", targetRole);

    try {
      const result = await mutationAnalyze.mutateAsync(formData);
      setAnalysis(result);
    } catch (err) {
      console.log(err);
      toast.error("Server error , Please try again later");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 lg:overflow-hidden">
      <Navbar />
      <main className="flex-1 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 h-full lg:h-[calc(100vh-5rem)]">
        <div className="lg:col-span-3 flex flex-col gap-6 lg:overflow-y-auto hide-scrollbar">
          <UploadFile
            file={file}
            setFile={setFile}
            targetRole={targetRole}
            setTargetRole={setTargetRole}
            analyzeResume={analyzeResume}
            isLoading={mutationAnalyze.isPending}
          />

          <HowItWorks />
        </div>

        <PDFPreview file={file} pdfUrl={pdfUrl} />

        <div className="lg:col-span-3 flex flex-col gap-6 lg:overflow-y-auto hide-scrollbar">
          <ResumeAnalysis analysis={analysis} />
          <ResumeImprovements
            analysis={analysis}
            isLoading={mutationAnalyze.isPending}
          />
        </div>
      </main>
    </div>
  );
};

export default ResumeReview;
