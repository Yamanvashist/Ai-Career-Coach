"use client";
import { Target, AlertCircle } from "lucide-react";

interface ImprovementsCardProps {
  improvements?: string[];
}

export default function ImprovementsCard({
  improvements = [],
}: ImprovementsCardProps) {
  return (
    <div className="bg-amber-50/40 rounded-2xl border border-amber-100/80 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Target className="w-5 h-5 text-amber-600" />
        <h3 className="font-bold text-gray-900">Areas for Improvement</h3>
      </div>
      <div className="space-y-4">
        {improvements.length > 0 ? (
          improvements.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 fill-amber-100" />
              <p className="text-xs text-gray-700 font-medium leading-relaxed">
                {item}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">
            No specific improvements listed.
          </p>
        )}
      </div>
    </div>
  );
}