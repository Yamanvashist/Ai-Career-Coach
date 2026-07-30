"use client";
import { RotateCcw, BookOpen, ArrowLeft } from "lucide-react";

export default function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-green-600 text-green-700 rounded-xl text-sm font-semibold hover:bg-green-50 transition-colors bg-white">
        <RotateCcw className="w-4 h-4" />
        Retake Interview
      </button>

      <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors">
        <BookOpen className="w-4 h-4" />
        Practice Weak Topics
      </button>

      <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-green-600 text-green-700 rounded-xl text-sm font-semibold hover:bg-green-50 transition-colors bg-white">
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </button>
    </div>
  );
}