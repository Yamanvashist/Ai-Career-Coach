"use client";
import { FileText, Award } from "lucide-react";

interface SummaryCardProps {
  summary?: string;
}

export default function SummaryCard({ summary }: SummaryCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6 flex items-center justify-between gap-6">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 bg-green-50 text-green-600 rounded-lg">
            <FileText className="w-5 h-5" />
          </span>
          <h3 className="font-bold text-gray-900">Overall Summary</h3>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {summary || "No summary provided for this interview session."}
        </p>
      </div>
      <div className="hidden lg:flex items-center justify-center w-28 h-28 bg-green-50/60 rounded-2xl border border-green-100 text-green-600 shrink-0">
        <Award className="w-12 h-12" />
      </div>
    </div>
  );
}