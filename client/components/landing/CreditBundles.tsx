import Link from "next/link";

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

export default function CreditBundles() {
  return (
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
  );
}