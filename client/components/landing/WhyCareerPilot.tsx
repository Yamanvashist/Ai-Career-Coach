import Link from "next/link";

const resourceCards = [
  {
    title: "Resume Templates",
    description:
      "Modern formats built for ATS, optimized for clarity and impact.",
  },
  {
    title: "Interview Guides",
    description:
      "Role-specific prep that helps you answer with structure and confidence.",
  },
  {
    title: "Career Toolkit",
    description:
      "Skill gap reports, roadmaps, and learning plans for fast improvement.",
  },
];

export default function WhyCareerPilot() {
  return (
    <section className="py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-16 rounded-4xl border border-slate-200/80 bg-white/80 p-8 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.55)] ring-1 ring-slate-100 md:p-12 dark:border-slate-800 dark:bg-slate-900/80 dark:ring-slate-800 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-950/70 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
              Why CareerPilot Works
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              From AI insights to real career progress.
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Build a stronger resume, uncover missing skills, and get
              interview-ready with tools that keep every step aligned to your
              goals.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#features"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-[0_18px_30px_-16px_rgba(37,99,235,0.7)] transition-all hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Explore Features
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                See the workflow
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {resourceCards.map((resource) => (
              <div
                key={resource.title}
                className="rounded-3xl border border-slate-200/80 bg-linear-to-br from-slate-50 to-white p-7 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.7)] transition-all hover:-translate-y-1 dark:border-slate-700 dark:from-slate-950 dark:to-slate-900"
              >
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {resource.title}
                </h3>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}