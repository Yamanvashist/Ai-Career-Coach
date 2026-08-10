import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "₹0",
    cadence: "/ month",
    features: ["30 credits per month", "Essential resume review", "Basic career insight"],
    badge: "Best for testing",
  },
  {
    name: "Pro",
    price: "₹299",
    cadence: "/ month",
    features: ["300 credits per month", "Priority AI review", "Interview prep suite"],
    badge: "Most popular",
  },
  {
    name: "Ultimate",
    price: "₹699",
    cadence: "/ month",
    features: ["1000 credits per month", "Unlimited resume checks", "Full mock interview access"],
    badge: "Best for power users",
  },
];

const bundles = [
  { title: "100 Credits", amount: "₹99", detail: "Perfect for a single job launch" },
  { title: "250 Credits", amount: "₹199", detail: "Great for multiple applications" },
  { title: "500 Credits", amount: "₹349", detail: "Best value for ongoing growth" },
];

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer: "Yes. You can upgrade or change your plan whenever you need more credits or faster review support.",
  },
  {
    question: "What are credits used for?",
    answer: "Credits power resume reviews, skill gap reports, interview question generation and custom coaching tasks.",
  },
  {
    question: "Do I need a subscription to use resources?",
    answer: "No. Free resources are available to all users, while higher subscriptions unlock more premium guidance and faster turnaround.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex rounded-full bg-purple-100 dark:bg-purple-950/70 px-4 py-2 text-sm font-semibold text-purple-700 dark:text-purple-200">
            Pricing
          </span>
          <h1 className="mt-6 text-5xl font-bold text-slate-900 dark:text-white">
            Pick the plan that powers your next career move.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Choose a subscription or one-time credit bundle from the same proven structure used by our billing dashboard.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-white font-semibold hover:bg-purple-700 transition-colors"
            >
              Start free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-8 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              Contact support
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 xl:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-8 shadow-sm dark:shadow-[0_25px_60px_-40px_rgba(15,23,42,0.75)] transition-all ${
                  plan.name === "Pro"
                    ? "border-purple-600 dark:border-purple-500 bg-purple-50/50 dark:bg-slate-900"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{plan.name}</h2>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{plan.badge}</p>
                  </div>
                </div>
                <p className="mt-8 text-5xl font-extrabold text-slate-900 dark:text-white">
                  {plan.price}
                  <span className="text-lg font-medium text-slate-500 dark:text-slate-400">{plan.cadence}</span>
                </p>
                <ul className="mt-10 space-y-4 text-slate-700 dark:text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 font-bold text-purple-600 dark:text-purple-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <button className="w-full rounded-2xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-700 cursor-pointer">
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-8 shadow-sm dark:shadow-[0_25px_60px_-40px_rgba(15,23,42,0.75)] transition-colors">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">One-time credit bundles</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                Add credits instantly without a monthly commitment. Ideal for a focused job search or a quick resume refresh.
              </p>
              <div className="mt-8 space-y-4">
                {bundles.map((bundle) => (
                  <div key={bundle.title} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-colors">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{bundle.title}</h3>
                        <p className="mt-2 text-slate-500 dark:text-slate-400">{bundle.detail}</p>
                      </div>
                      <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{bundle.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-8 shadow-sm dark:shadow-[0_25px_60px_-40px_rgba(15,23,42,0.75)] transition-colors">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Need help selecting a plan?</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                Our plans are designed to fit every stage—from first-time resume upgrades to ongoing interview coaching and unlimited reviews.
              </p>
              <div className="mt-8 space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                    <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
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