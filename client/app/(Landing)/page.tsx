import Link from "next/link";
import Hero from "@/components/Landing/Hero";

const highlights = [
  {
    title: "Smart Resume Intelligence",
    description:
      "Use AI to identify the exact resume changes recruiters want, and get a polished version ready to submit.",
  },
  {
    title: "Career-Guided Roadmaps",
    description:
      "Turn your experience into fast-moving milestones with personalized skill and interview preparation plans.",
  },
  {
    title: "Live Interview Readiness",
    description:
      "Practice the right questions, refine your answers, and build confidence for your next interview.",
  },
];

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

const featuredPlans = [
  {
    name: "Starter",
    price: "₹0/month",
    details: [
      "30 credits per month",
      "Essential resume suggestions",
      "Career progress summary",
    ],
  },
  {
    name: "Pro",
    price: "₹299/month",
    details: [
      "300 credits per month",
      "Priority AI review",
      "Interview prep boost",
    ],
    highlight: true,
  },
  {
    name: "Ultimate",
    price: "₹699/month",
    details: [
      "1000 credits per month",
      "Unlimited resume checks",
      "Full mock interview suite",
    ],
  },
];

const bundles = [
  {
    title: "100 Credits",
    amount: "₹99",
    detail: "Perfect for a single job launch",
  },
  {
    title: "250 Credits",
    amount: "₹199",
    detail: "Great for multiple applications",
  },
  {
    title: "500 Credits",
    amount: "₹349",
    detail: "Best value for ongoing growth",
  },
];

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer:
      "Yes. You can upgrade or change your plan whenever you need more credits or faster review support.",
  },
  {
    question: "What are credits used for?",
    answer:
      "Credits power resume reviews, skill gap reports, interview question generation and custom coaching tasks.",
  },
  {
    question: "Do I need a subscription to use resources?",
    answer:
      "No. Free resources are available to all users, while higher subscriptions unlock more premium guidance and faster turnaround.",
  },
];

export default function Home() {
  return (
    <main className="bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_25%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.10),transparent_35%),linear-gradient(180deg,#f8fbff_0%,#f8fafc_32%,#f8fafc_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_25%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_35%),linear-gradient(180deg,#020817_0%,#0f172a_100%)] dark:text-slate-100 transition-colors duration-200">
      <Hero />

     

      {/* Why CareerPilot Section */}
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

      {/* Pricing Section */}
      <section id="pricing" className="scroll-mt-28 py-24 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-purple-100 dark:bg-purple-950/70 px-4 py-2 text-sm font-semibold text-purple-700 dark:text-purple-200">
                Pricing made simple
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Plans for every stage of your career.
              </h2>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Choose the right level of support for your next job
                search—whether you are starting with a basic review or aiming
                for an interview-ready transformation.
              </p>
            </div>
            <div className="flex flex-wrap justify-start gap-4">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-white font-semibold shadow-[0_18px_30px_-16px_rgba(147,51,234,0.65)] transition-all hover:-translate-y-0.5 hover:bg-purple-700"
              >
                View Pricing
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Start Free
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {featuredPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[30px] border p-8 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? "border-purple-600 dark:border-purple-500 bg-purple-50/50 dark:bg-slate-900"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                  {plan.highlight ? (
                    <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      Popular
                    </span>
                  ) : null}
                </div>
                <p className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {plan.price}
                </p>
                <ul className="mt-10 space-y-4 text-slate-700 dark:text-slate-300">
                  {plan.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="mt-1 font-bold text-purple-600 dark:text-purple-400">
                        ✓
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-10 w-full rounded-2xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700 cursor-pointer">
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-linear-to-b from-blue-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-950/70 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
                One-time credits
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Flexible bundles for focused job pushes.
              </h2>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Add credits instantly without a monthly commitment. Ideal for a focused job search or a quick resume refresh.
              </p>
            </div>
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-[0_18px_30px_-16px_rgba(37,99,235,0.7)] transition-all hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Buy Credits
            </Link>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {bundles.map((bundle) => (
              <div
                key={bundle.title}
                className="rounded-[28px] border border-blue-100 bg-white p-8 shadow-[0_25px_70px_-45px_rgba(59,130,246,0.45)] transition-all duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {bundle.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      {bundle.detail}
                    </p>
                  </div>
                  <span className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                    {bundle.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[30px] border border-slate-200/80 bg-slate-50 p-8 shadow-[0_25px_70px_-40px_rgba(37,99,235,0.25)] transition-colors dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                Need help selecting a plan?
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                Our plans are designed to fit every stage—from first-time resume
                upgrades to ongoing interview coaching and unlimited reviews.
              </p>
              <div className="mt-8 space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.45)] transition-colors dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                Why teams and job seekers choose CareerPilot
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                You get practical guidance, faster resume improvements, interview prep, and clear next steps backed by AI insights.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "AI-powered resume feedback with recruiter-focused suggestions",
                  "Clear skill roadmap for your target role and career stage",
                  "Interview readiness support that improves confidence over time",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
                    <span className="mt-1 text-blue-600 dark:text-blue-400">✓</span>
                    <span className="text-slate-700 dark:text-slate-200">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </main>
  );
}
