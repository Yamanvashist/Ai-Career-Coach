const features = [
  {
    title: "Resume Analysis",
    description:
      "Get detailed feedback on your resume and discover improvements recruiters look for.",
  },
  {
    title: "Skill Gap Detection",
    description:
      "Identify missing skills for your target role and understand what to learn next.",
  },
  {
    title: "Career Roadmaps",
    description:
      "Receive a personalized learning roadmap tailored to your career goals.",
  },
  {
    title: "Interview Preparation",
    description:
      "Practice common interview questions and improve your confidence.",
  },
  {
    title: "Progress Tracking",
    description:
      "Track your learning journey with measurable milestones and goals.",
  },
  {
    title: "AI Career Insights",
    description:
      "Get actionable recommendations based on market trends and your profile.",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-28 py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-950/70 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
            Features
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Everything you need to advance your career.
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            CareerPilot helps you understand where you are, where you want to go, and how to get there with AI-powered guidance.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[28px] border border-slate-200/80 bg-white/90 p-8 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.5)] ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-35px_rgba(59,130,246,0.45)] dark:border-slate-800 dark:bg-slate-900/80 dark:ring-slate-800"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-sm font-bold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300">
                ✓
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}