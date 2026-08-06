"use client";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

export default function BillingPage() {
  const { data: user } = useCurrentUser();
  const { credits } = user;

  

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors">
      <div className="max-w-7xl mx-auto space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Billing & Credits
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage your subscription, credit balance, and payment history.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <span className="inline-block text-xs font-semibold px-2.5 py-1 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-full">
              Current Plan
            </span>
            <h2 className="text-2xl font-bold">Starter</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Subscription:{" "}
              <span className="font-medium text-slate-700 dark:text-slate-300">
                No Active Subscription
              </span>
            </p>
          </div>

          <div className="flex-1 max-w-sm">
            <div className="flex justify-between text-sm font-medium mb-1.5">
              <span>Credits Left</span>
              <span className="font-bold text-purple-600 dark:text-purple-400">
                {credits} / 30
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
              <div
                className={`bg-purple-600 h-full  rounded-full`}
                style={{ width: credits ?? 0 }}
              />
            </div>
          </div>

          <div>
            <a
              href="#subscriptions"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors shadow-sm"
            >
              Upgrade Plan →
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Buy Credits (One-Time)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex items-center justify-between hover:border-purple-500/50 transition-colors">
              <div>
                <p className="text-lg font-bold">100 Credits</p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
                  ₹99
                </p>
              </div>
              <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-purple-600 hover:text-white font-medium rounded-lg transition-colors">
                Buy
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex items-center justify-between hover:border-purple-500/50 transition-colors">
              <div>
                <p className="text-lg font-bold">250 Credits</p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
                  ₹199
                </p>
              </div>
              <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-purple-600 hover:text-white font-medium rounded-lg transition-colors">
                Buy
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex items-center justify-between hover:border-purple-500/50 transition-colors">
              <div>
                <p className="text-lg font-bold">500 Credits</p>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
                  ₹349
                </p>
              </div>
              <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-purple-600 hover:text-white font-medium rounded-lg transition-colors">
                Buy
              </button>
            </div>
          </div>
        </div>

        <div id="subscriptions">
          <h3 className="text-xl font-bold mb-4">Subscription Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold">Starter</h4>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-extrabold">₹0</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    {" "}
                    / month
                  </span>
                </div>
                <hr className="border-slate-100 dark:border-slate-800 mb-6" />
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> 30
                    Credits/month
                  </li>
                  <li className="flex items-center gap-2 text-slate-400">
                    <span>•</span> Standard AI critique tone
                  </li>
                </ul>
              </div>
              <button className="w-full mt-8 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium rounded-xl cursor-not-allowed">
                Current Plan
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 border-2 border-purple-600 rounded-2xl p-6 flex flex-col justify-between relative shadow-lg shadow-purple-500/10">
              <span className="absolute -top-3 right-6 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </span>
              <div>
                <h4 className="text-lg font-bold flex items-center gap-1.5">
                  Pro <span>⭐</span>
                </h4>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-extrabold">₹299</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    {" "}
                    / month
                  </span>
                </div>
                <hr className="border-slate-100 dark:border-slate-800 mb-6" />
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> 300
                    Credits/month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Ruthless
                    recruiter mode
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Priority
                    Gemini latency
                  </li>
                </ul>
              </div>
              <button className="w-full mt-8 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors">
                Upgrade to Pro
              </button>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-bold">Ultimate</h4>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-extrabold">₹699</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    {" "}
                    / month
                  </span>
                </div>
                <hr className="border-slate-100 dark:border-slate-800 mb-6" />
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> 1000
                    Credits/month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> Full
                    Mock Interview suite
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span>{" "}
                    Unlimited resume analyses
                  </li>
                </ul>
              </div>
              <button className="w-full mt-8 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 text-white font-semibold rounded-xl transition-colors">
                Upgrade to Ultimate
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-4">Payment History</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-400 uppercase">
                  {["Date", "Description", "Amount"].map((item) => (
                    <th className="py-3 pr-4">{item}</th>
                  ))}
                  <th className="py-3 pl-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm font-medium">
                <tr>
                  <td className="py-4 pr-4 text-slate-500 dark:text-slate-400">
                    Aug 6
                  </td>
                  <td className="py-4 px-4">Purchased 250 Credits</td>
                  <td className="py-4 px-4">₹199</td>
                  <td className="py-4 pl-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300">
                      Paid
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
