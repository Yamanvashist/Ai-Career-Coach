import React from "react";
import { quickLinks } from "./historyData";

export const QuickAccess = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-sm font-semibold text-slate-900">
        Quick Access
      </h3>

      <div className="grid grid-cols-1 gap-3">
        {quickLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 rounded-xl px-3 py-4 text-sm font-medium transition ${link.styles}`}
            >
              <Icon size={16} />
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};