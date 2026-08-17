import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#f8fafc_100%)] px-6 py-16 dark:border-slate-800 dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_28%),linear-gradient(180deg,#020817_0%,#0f172a_100%)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-size-[38px_38px] opacity-30" />

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="pt-8">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm dark:border-blue-900/60 dark:bg-slate-900/70 dark:text-blue-300">
              AI-Powered Career Coach
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-[1.05] tracking-[-0.06em] text-slate-900 dark:text-white lg:text-7xl">
              Navigate Your Career
              <br />
              With Confidence
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Analyze resumes, identify skill gaps, generate personalized
              learning roadmaps, and prepare for interviews with AI-powered
              guidance.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_35px_-15px_rgba(37,99,235,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Get Started
              </Link>


              <Link href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-6 py-3.5 text-base font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800">
                View Pricing
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
              <p className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">✓</span>{" "}
                Resume Analysis
              </p>
              <p className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">✓</span>{" "}
                Skill Gap Detection
              </p>
              <p className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">✓</span>{" "}
                Interview Prep
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/20" />
            <div className="absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/20" />

            <div className="relative rounded-[30px] border border-slate-200/80 bg-white/80 p-6 shadow-[0_35px_80px_-40px_rgba(15,23,42,0.6)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Career Dashboard
                </h3>

                <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/70 dark:text-blue-300">
                  Updated Today
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-slate-900 dark:text-slate-100">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Resume Score
                  </p>
                  <h2 className="mt-2 text-3xl font-bold">87%</h2>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Interview Readiness
                  </p>
                  <h2 className="mt-2 text-3xl font-bold">81%</h2>
                </div>

                <div className="col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Skill Gap Analysis
                  </p>

                  <div className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between">
                      <span>TypeScript</span>
                      <span className="font-semibold">90%</span>
                    </div>

                    <div className="flex justify-between">
                      <span>System Design</span>
                      <span className="font-semibold">45%</span>
                    </div>
  
                    <div className="flex justify-between">
                      <span>Node.js</span>
                      <span className="font-semibold">72%</span>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Learning Roadmap
                  </p>

                  <div className="mt-3 space-y-3">
                    <div
                      className="h-2.5 rounded-full bg-linear-to-r from-blue-500 to-blue-600"
                      style={{ width: "100%" }}
                    />
                    <div
                      className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-800"
                      style={{ width: "82%" }}
                    />
                    <div
                      className="h-2.5 rounded-full bg-slate-200 dark:bg-slate-800"
                      style={{ width: "63%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
