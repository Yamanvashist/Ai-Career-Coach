interface SubscriptionPlansProps {
  onSubscribe: (amount: number, subscriptionName: string) => void;
  isLoading: boolean;
}

export function SubscriptionPlans({
  onSubscribe,
  isLoading,
}: SubscriptionPlansProps) {
  return (
    <div id="subscriptions">
      <h3 className="text-xl font-bold mb-4">Subscription Plans</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Starter Plan */}
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

        {/* Pro Plan */}
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
          <button
            disabled={isLoading}
            onClick={() => onSubscribe(299, "Pro Monthly Subscription")}
            className="w-full mt-8 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl cursor-pointer transition-colors"
          >
            Upgrade to Pro
          </button>
        </div>

        {/* Ultimate Plan */}
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
                <span className="text-green-500 font-bold">✓</span> Full Mock
                Interview suite
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 font-bold">✓</span> Unlimited
                resume analyses
              </li>
            </ul>
          </div>
          <button
            disabled={isLoading}
            onClick={() => onSubscribe(699, "Ultimate Monthly Subscription")}
            className="w-full mt-8 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 cursor-pointer text-white font-semibold rounded-xl transition-colors"
          >
            Upgrade to Ultimate
          </button>
        </div>
      </div>
    </div>
  );
}
