"use client";
import { Award, Download } from "lucide-react";

interface HeaderProps {
  category?: string;
}

export default function Header({ category }: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-900">
            Interview Results
          </h1>
          <span className="p-1 bg-green-100 text-green-700 rounded-md">
            <Award className="w-4 h-4" />
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1 capitalize">
          {category || "Technical"} Interview
        </p>
      </div>
      <button className="inline-flex items-center gap-2 px-4 py-2 border border-green-600 text-green-700 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors bg-white shadow-sm">
        <Download className="w-4 h-4" />
        Download Report
      </button>
    </div>
  );
}