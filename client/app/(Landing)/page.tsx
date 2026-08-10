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
    <main className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Hero />

      {/* Highlights Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm dark:shadow-[0_25px_60px_-40px_rgba(15,23,42,0.75)] transition-all hover:-translate-y-1"
              >
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CareerPilot Section */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-950/70 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
                Why CareerPilot Works
              </span>
              <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
                From AI insights to real career progress.
              </h2>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Build a stronger resume, uncover missing skills, and get
                interview-ready with tools that keep every step aligned to your
                goals.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore Features
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-6 py-3 text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  See the workflow
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {resourceCards.map((resource) => (
                <div
                  key={resource.title}
                  className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-8 transition-colors"
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

      {/* Pricing Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-purple-100 dark:bg-purple-950/70 px-4 py-2 text-sm font-semibold text-purple-700 dark:text-purple-200">
                Pricing made simple
              </span>
              <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
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
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-white font-semibold hover:bg-purple-700 transition-colors"
              >
                View Pricing
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-6 py-3 text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Start Free
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {featuredPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-8 shadow-sm dark:shadow-[0_25px_60px_-40px_rgba(15,23,42,0.75)] transition-all ${
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
                <p className="mt-8 text-5xl font-extrabold text-slate-900 dark:text-white">
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

      {/* Bundles & FAQ Section */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-8 shadow-sm dark:shadow-[0_25px_60px_-40px_rgba(15,23,42,0.75)] transition-colors">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                One-time credit bundles
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                Add credits instantly without a monthly commitment. Ideal for a
                focused job search or a quick resume refresh.
              </p>
              <div className="mt-8 space-y-4">
                {bundles.map((bundle) => (
                  <div
                    key={bundle.title}
                    className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                          {bundle.title}
                        </h3>
                        <p className="mt-2 text-slate-500 dark:text-slate-400">
                          {bundle.detail}
                        </p>
                      </div>
                      <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                        {bundle.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-8 shadow-sm dark:shadow-[0_25px_60px_-40px_rgba(15,23,42,0.75)] transition-colors">
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
          </div>
        </div>
      </section>
    </main>
  );
}
