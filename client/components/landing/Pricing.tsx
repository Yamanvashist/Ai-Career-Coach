import Link from "next/link";

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

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-28 py-24  transition-colors duration-200">
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
  );
}