const howItWorksSteps = [
  {
    number: "01",
    title: "Upload Your Resume",
    description:
      "Upload your existing resume and tell CareerPilot about your target role.",
  },
  {
    number: "02",
    title: "Receive AI Analysis",
    description:
      "Get detailed insights on resume quality, strengths, weaknesses, and skill gaps.",
  },
  {
    number: "03",
    title: "Follow Your Roadmap",
    description:
      "Receive a personalized learning roadmap designed around your career goals.",
  },
  {
    number: "04",
    title: "Track Progress",
    description:
      "Monitor your improvement, complete milestones, and prepare confidently for interviews.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-28 py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-950/70 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
            How It Works
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            A simple path to career growth.
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            CareerPilot guides you from resume analysis to interview readiness with a personalized AI-powered journey.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {howItWorksSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-[28px] border border-slate-200/80 bg-linear-to-b from-slate-50 to-white p-8 shadow-[0_25px_70px_-50px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(59,130,246,0.4)] dark:border-slate-800 dark:from-slate-950 dark:to-slate-900"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl font-bold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300">
                {step.number}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}