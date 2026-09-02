import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import dashboardDarkTheme from "@/public/readmeImages/dashboard.png";
import dashboardLightTheme from "@/public/readmeImages/dashboardLight.png";

const Hero = () => {
  return (
    <section className="min-h-[90vh] overflow-hidden border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#f8fafc_100%)] px-6 py-16 dark:border-slate-800 dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_28%),linear-gradient(180deg,#020817_0%,#0f172a_100%)]"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center md:mt-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.4fr] xl:gap-10">

          {/* LEFT SIDE */}
          <div className="flex flex-col pt-8">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm dark:border-blue-900/60 dark:bg-slate-900/70 dark:text-blue-300">
              AI-Powered Career Coach
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-[1.05] tracking-wide text-slate-900 dark:text-white lg:text-6xl xl:text-7xl">
              Navigate Your Career with
              <br />
              Confidence
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

              <Link
                href="https://github.com/Yamanvashist/Ai-Career-Coach"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-6 py-3.5 text-base font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <FaGithub className="text-2xl" />
                View Github
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">✓</span>
                Resume Analysis
              </p>

              <p className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">✓</span>
                Code Error Detection
              </p>

              <p className="flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">✓</span>
                Interview Prep
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden sm:block w-full justify-center lg:justify-end">
            <div className="w-full overflow-hidden rounded-4xl border border-slate-200/80 bg-white/70 p-4 shadow-[0_35px_80px_-40px_rgba(15,23,42,0.6)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70">

              {/* Light Theme */}
              <Image
                src={dashboardLightTheme}
                alt="AI Career Coach Dashboard"
                priority
                className="block h-auto w-full rounded-3xl dark:hidden"
              />

              {/* Dark Theme */}
              <Image
                src={dashboardDarkTheme}
                alt="AI Career Coach Dashboard"
                priority
                className="hidden h-auto w-full rounded-3xl dark:block"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
