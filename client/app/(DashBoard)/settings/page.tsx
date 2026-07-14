"use client";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useUpdatePassword } from "@/hooks/auth/useUpdatePassword";
import { Coins, Eye, Plus, Sparkles, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useProfile, useGetProfile } from "@/hooks/profile/useProfile";
import { useLogout } from "@/hooks/auth/useLogOut";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import SkeletonLoader from "@/components/SkeletonLoader";

export default function SettingsPage() {
  const [skill, setSkill] = useState("");
  const [showSkillInput, setShowSkillInput] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const router = useRouter();

  const { data: user } = useCurrentUser();
  const { data: profile, isLoading } = useGetProfile();
  const mutateUpdatePassword = useUpdatePassword();

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
  }, [profile]);

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
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const mutationProfile = useProfile();

  const handleClick = () => {
    try {
      mutationProfile.mutate(formData);
      toast.success("Applied changes");
    } catch {
      toast.error("failed to apply changes");
    }
  };

  const logoutMutation = useLogout();

  const queryClient = useQueryClient();

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        queryClient.clear();
        router.push("/sign-in");
        toast.success("user Logged out");
      },
      onError: () => {
        toast.error("Failed to logout");
      },
    });
  };

  const updatePassword = async () => {
    if (!password.trim() || !newPassword.trim()) {
      return toast.error("Please fill in both fields.");
    }

    if (password === newPassword) {
      return toast.error("New password can't be the same as the old password.");
    }

    if (newPassword.length < 8) {
      return toast.error("Password must be at least 8 characters.");
    }

    try {
      await mutateUpdatePassword.mutateAsync({ password, newPassword });

      toast.success("Password updated successfully!");

      setPassword("");
      setNewPassword("");
    } catch {
      toast.error("Error updating password");
    }
  };

  if (isLoading) return <SkeletonLoader />;

  return (
    <div className="min-h-screen bg-slate-50/50  font-sans antialiased text-slate-800">
      <header className="flex min-h-20 items-center bg-white justify-between border-b border-slate-200  pl-6 mb-4 ">
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 bg-amber-50 text-amber-600 px-3 py-1.5 rounded-full text-xs font-semibold border border-amber-200">
            <span className="h-2 w-2 rounded-full bg-amber-500"></span>
            12 Credits Left
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-5 items-start">
        <section className="lg:col-span-1 bg-white border border-slate-200/80 rounded-2xl p-6 text-center shadow-sm">
          <div className="relative w-28 h-28 mx-auto ">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-indigo-600 text-white shadow-xl ring-4 ring-violet-100">
                <User className="h-10 w-10" />
              </div>
            </div>
            <button className="absolute bottom-0 right-0 p-1.5 bg-white border border-slate-200 rounded-full shadow-md text-slate-500 hover:text-slate-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </button>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-0.5">
            {user?.name ?? "Guest"}
          </h2>
          <p className="text-sm text-slate-500 mb-3">
            {" "}
            {user?.email ?? "guest@mail.com"}
          </p>
          <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-4 py-1.5 rounded-md mb-6">
            {profile.targetRole ?? "Target role not seleted"}
          </span>

          <div className="relative overflow-hidden rounded-2xl border border-blue-200/60 bg-linear-to-br from-blue-50 via-white to-indigo-50 p-6 shadow-sm mb-4">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-amber-200/20 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Credit Wallet
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    {user?.credits ?? 0}
                    <span className="ml-2 text-sm font-medium text-slate-500">
                      Credits
                    </span>
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-amber-500/30">
                  <Coins className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex justify-between text-xs text-slate-500">
                  <span>Usage</span>
                  <span>{user?.credits ?? 0} Remaining</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-amber-100">
                  <div
                    className="h-full rounded-full bg-indigo-500 transition-all"
                    style={{
                      width: `${Math.min(((user?.credits ?? 0) / 50) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-xl bg-white/80 p-3">
                <Sparkles className="mt-0.5 h-4 w-4 text-amber-500" />
                <p className="text-xs leading-relaxed text-slate-600">
                  Credits refresh every month. Spend them to generate resumes,
                  analyze ATS scores, and unlock AI career insights.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 border border-slate-200 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Logout
            </button>
            <div className="border border-rose-100 rounded-xl p-4 bg-rose-50/20 text-center">
              <button className="w-full border border-rose-200 text-rose-600 py-2.5 rounded-lg text-sm font-semibold hover:bg-rose-50 transition">
                Delete Account
              </button>
              <p className="text-xs text-slate-400 mt-3 leading-normal">
                Deleting your account is permanent and cannot be undone.
              </p>
            </div>
          </div>
        </section>

        <main className="lg:col-span-2 space-y-6">
          <nav className="flex gap-8 border-b border-slate-200/80 mb-6">
            <button className="text-indigo-600 font-semibold text-sm pb-3 border-b-2 border-indigo-600 transition">
              Profile
            </button>
          </nav>

          <section className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-0.5">
              Professional Information
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Update your role, experience and skills.
            </p>

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Job Role
                  </label>
                  <input
                    value={formData.targetRole}
                    name="targetRole"
                    onChange={(e) =>
                      setFormData({ ...formData, targetRole: e.target.value })
                    }
                    type="text"
                    placeholder="Enter Your Role"
                    className="border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                    name="experience"
                    className="border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 bg-white"
                  >
                    <option value="No experience">No experience</option>
                    <option value="1 Year">1 Year</option>
                    <option value="2 Years">2 Years</option>
                    <option value="3+ Years">3+ Years</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-600">
                  Skills
                </label>

                <div className="rounded-xl border border-slate-200 bg-slate-50/30 p-3">
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="flex items-center gap-2 rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-600"
                      >
                        {skill}

                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="text-indigo-400 hover:text-red-500 transition"
                        >
                          &times;
                        </button>
                      </span>
                    ))}

                    {!showSkillInput && (
                      <button
                        type="button"
                        onClick={() => setShowSkillInput(true)}
                        className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 transition hover:border-indigo-300 hover:bg-indigo-100"
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
                        className="rounded-xl border border-slate-300 px-4 py-2 text-sm outline-none focus:border-indigo-500"
                      />

                      <button
                        type="button"
                        onClick={addSkill}
                        className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                      >
                        Add
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setShowSkillInput(false);
                          setSkill("");
                        }}
                        className="rounded-xl border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <h3 className="text-base font-bold text-slate-900 mt-6">
              About You
            </h3>
            <p className="text-xs text-slate-400 mb-5">
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
                  className="border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 resize-none w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleClick}
                  disabled={mutationProfile.isPending}
                  type="button"
                  className={`bg-indigo-600 text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 shadow-sm shadow-indigo-100   transition`}
                >
                  {mutationProfile.isPending
                    ? "Saving changes"
                    : "Save changes"}
                </button>
              </div>
            </div>
          </section>

          <section className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-0.5">
              Update Password
            </h3>
            <p className="text-xs text-slate-400 mb-5">
              Make sure to use a strong password.
            </p>

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Current Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter current password"
                    className="border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    New Password
                  </label>
                  <input
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"
                    placeholder="Enter new password"
                    className="border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-600">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 w-full pr-8"
                    />
                    <span className="absolute right-2.5 top-2.5 text-slate-400 cursor-pointer hover:text-slate-600">
                      <Eye />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  disabled={mutateUpdatePassword.isPending}
                  onClick={updatePassword}
                  className={`${mutateUpdatePassword.isPending ? "bg-indigo-500" : "bg-indigo-600"} text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-sm shadow-indigo-100 transition`}
                >
                  {mutateUpdatePassword.isPending
                    ? "Saving changes"
                    : "Save Changes"}
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
