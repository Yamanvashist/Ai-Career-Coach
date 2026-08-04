"use client";

import Navbar from "@/components/interview/Navbar";
import Title from "@/components/interview/Title";
import InterviewGrid from "@/components/interview/InterviewGrid";

const Interview = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-4 transition-colors duration-200">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 md:py-10">
        <Title />
        <InterviewGrid />
      </main>
    </div>
  );
};

export default Interview;
