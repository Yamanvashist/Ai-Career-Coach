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

export default function Resources() {
  return (
    <section id="resources" className="scroll-mt-28 py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-950/70 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
            Resources
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Learn the exact actions that accelerate your career.
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Explore guides, templates, and interview tools built for job seekers who want a simple path to better outcomes.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {resourceCards.map((resource) => (
            <div
              key={resource.title}
              className="rounded-[28px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_25px_70px_-45px_rgba(59,130,246,0.45)] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-35px_rgba(37,99,235,0.45)] dark:border-slate-800 dark:bg-slate-900/80 dark:ring-slate-800"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-sm font-bold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300">
                •
              </div>
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
    </section>
  );
}