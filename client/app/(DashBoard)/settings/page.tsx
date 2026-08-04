"use client";

import { useState } from "react";
import ProfileSidebar from "@/components/setting/ProfileSidebar";
import ProfessionalInfoSection from "@/components/setting/ProfessionalInfoSection";
import UpdatePasswordSection from "@/components/setting/UpdatePasswordSection";

export default function SettingsPage() {
  const [targetRole, setTargetRole] = useState("");

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 font-sans antialiased text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <header className="flex min-h-20 items-center bg-white dark:bg-slate-900 justify-between border-b border-slate-200 dark:border-slate-800 pl-6 mb-4 transition-colors">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Settings
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-5 items-start">
        <ProfileSidebar targetRole={targetRole} />

        <main className="lg:col-span-2 space-y-6">
          <nav className="flex gap-8 border-b border-slate-200/80 dark:border-slate-800 mb-6">
            <button className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm pb-3 border-b-2 border-indigo-600 dark:border-indigo-400 transition cursor-pointer">
              Profile
            </button>
          </nav>

          <ProfessionalInfoSection onRoleChange={setTargetRole} />
          <UpdatePasswordSection />
        </main>
      </div>
    </div>
  );
}