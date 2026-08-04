"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { useProfile, useGetProfile } from "@/hooks/profile/useProfile";
import { toast } from "sonner";
import SettingsPageSkeleton from "./skeletonLoading/SettingsPageSkeleton";

interface ProfessionalInfoSectionProps {
  onRoleChange?: (role: string) => void;
}

export default function ProfessionalInfoSection({
  onRoleChange,
}: ProfessionalInfoSectionProps) {
  const { data: profile, isLoading } = useGetProfile();
  const mutationProfile = useProfile();

  const [skill, setSkill] = useState("");
  const [showSkillInput, setShowSkillInput] = useState(false);
  const [formData, setFormData] = useState({
    targetRole: "",
    experience: "",
    skills: [] as string[],
    about: "",
  });

  useEffect(() => {
    if (!profile) return;

    setFormData({
      targetRole: profile.targetRole ?? "",
      experience: profile.experience ?? "",
      about: profile.about ?? "",
      skills: profile.skills ?? [],
    });
    if (onRoleChange && profile.targetRole) {
      onRoleChange(profile.targetRole);
    }
  }, [profile, onRoleChange]);

  const addSkill = () => {
    const trimmedSkill = skill.trim();
    if (!trimmedSkill) return;

    const exists = formData.skills.some(
      (s) => s.toLowerCase() === trimmedSkill.toLowerCase(),
    );
    if (exists) return;

    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, trimmedSkill],
    }));

    setSkill("");
    setShowSkillInput(false);
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skillToRemove),
    }));
  };

  const handleSave = () => {
    const isAllEmpty =
      !formData.targetRole.trim() &&
      !formData.experience.trim() &&
      formData.skills.length === 0 &&
      !formData.about.trim();

    if (isAllEmpty) {
      toast.error("Please fill in at least one field before saving");
      return;
    }

    try {
      mutationProfile.mutate(formData);
      if (onRoleChange) onRoleChange(formData.targetRole);
      toast.success("Applied changes");
    } catch {
      toast.error("Failed to apply changes");
    }
  };

  if (isLoading) return <SettingsPageSkeleton />;

  return (
    <section className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm transition-colors">
      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">
        Professional Information
      </h3>
      <p className="text-xs text-slate-400 dark:text-slate-500 mb-5">
        Update your role, experience and skills.
      </p>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Job Role
            </label>
            <input
              value={formData.targetRole}
              maxLength={30}
              name="targetRole"
              onChange={(e) =>
                setFormData({ ...formData, targetRole: e.target.value })
              }
              type="text"
              placeholder="Enter Your Role"
              className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 rounded-xl px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Experience
            </label>
            <select
              value={formData.experience}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
              name="experience"
              className="border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 bg-white dark:bg-slate-800"
            >
              <option value="No experience">No experience</option>
              <option value="1 Year">1 Year</option>
              <option value="2 Years">2 Years</option>
              <option value="3+ Years">3+ Years</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
            Skills
          </label>

          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/30 p-3">
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-indigo-100 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => removeSkill(item)}
                    className="text-indigo-400 hover:text-red-500 transition cursor-pointer"
                  >
                    &times;
                  </button>
                </span>
              ))}

              {!showSkillInput && (
                <button
                  type="button"
                  onClick={() => setShowSkillInput(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 transition hover:border-indigo-300 dark:hover:bg-indigo-500/20 cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  Add Skill
                </button>
              )}
            </div>

            {showSkillInput && (
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <input
                  autoFocus
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSkill();
                    }
                  }}
                  placeholder="e.g. React"
                  className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm text-slate-800 dark:text-slate-100 outline-none focus:border-indigo-500 dark:focus:border-indigo-400"
                />

                <button
                  type="button"
                  onClick={addSkill}
                  className="rounded-xl bg-indigo-600 dark:bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 dark:hover:bg-indigo-400 cursor-pointer"
                >
                  Add
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowSkillInput(false);
                    setSkill("");
                  }}
                  className="rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <h3 className="text-base font-bold text-slate-900 dark:text-white mt-6">
        About You
      </h3>
      <p className="text-xs text-slate-400 dark:text-slate-500 mb-5">
        Tell us more about yourself.
      </p>

      <div className="space-y-5">
        <div className="flex flex-col gap-1.5">
          <textarea
            value={formData.about}
            onChange={(e) =>
              setFormData({ ...formData, about: e.target.value })
            }
            rows={6}
            maxLength={300}
            placeholder="Tell about yourself"
            className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 rounded-xl px-3 py-2 text-sm text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 resize-none w-full"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={mutationProfile.isPending}
            type="button"
            className="bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 dark:hover:bg-indigo-400 shadow-sm shadow-indigo-100 dark:shadow-none transition disabled:opacity-70 cursor-pointer"
          >
            {mutationProfile.isPending ? "Saving changes..." : "Save changes"}
          </button>
        </div>
      </div>
    </section>
  );
}