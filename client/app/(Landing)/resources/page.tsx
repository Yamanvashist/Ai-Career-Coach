import Link from "next/link";

const resources = [
  {
    title: "Resume Templates",
    description: "Build crisp, ATS-friendly resumes that spotlight your strongest achievements.",
    label: "Free",
  },
  {
    title: "Interview Question Packs",
    description: "Practice role-specific interview questions that match the hiring market.",
    label: "Popular",
  },
  {
    title: "Career Growth Guides",
    description: "Follow clear steps to close skill gaps and get on a faster career track.",
    label: "Recommended",
  },
];

const articles = [
  {
    title: "5 Resume Mistakes That Cost Interviews",
    summary: "Learn the quick fixes recruiters expect and how to improve every application.",
  },
  {
    title: "How to Answer Behavioral Questions",
    summary: "Structure your stories with the right mix of context, action, and outcome.",
  },
  {
    title: "Roadmap to Senior Roles",
    summary: "See the skills, milestones, and preparation needed to move up faster.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-950/70 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-200">
            Resources
          </span>
          <h1 className="mt-6 text-5xl font-bold text-slate-900 dark:text-white">
            Learn the exact actions that accelerate your career.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Explore guides, templates, and interview resources built for job seekers who want a simple path to better outcomes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Access resources
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-8 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              Upgrade for more
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {resources.map((resource) => (
              <div key={resource.title} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm dark:shadow-[0_25px_60px_-40px_rgba(15,23,42,0.75)] transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{resource.title}</h2>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    {resource.label}
                  </span>
                </div>
                <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-8 shadow-sm dark:shadow-[0_25px_60px_-40px_rgba(15,23,42,0.75)] transition-all hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{article.title}</h3>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{article.summary}</p>
                <div className="mt-6">
                  <Link href="/resources" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Ready to learn smarter, not harder?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Our resource library is built to help you improve resumes, prepare for interviews, and reach the next level of your career.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Start learning
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-8 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              Upgrade for premium
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}