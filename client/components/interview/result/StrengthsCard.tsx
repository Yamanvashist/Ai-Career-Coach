"use client";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

interface StrengthsCardProps {
  strengths?: string[];
}

export default function StrengthsCard({ strengths = [] }: StrengthsCardProps) {
  return (
    <div className="bg-green-50/40 rounded-2xl border border-green-100 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <ShieldCheck className="w-5 h-5 text-green-600" />
        <h3 className="font-bold text-gray-900">Strengths</h3>
      </div>
      <div className="space-y-4">
        {strengths.length > 0 ? (
          strengths.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5 fill-green-100" />
              <p className="text-xs text-gray-700 font-medium leading-relaxed">
                {item}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No specific strengths listed.</p>
        )}
      </div>
    </div>
  );
}