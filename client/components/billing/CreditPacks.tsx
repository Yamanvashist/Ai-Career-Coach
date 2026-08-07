interface CreditPacksProps {
  onBuy: (amount: number, subscription: string) => void;
  isLoading: boolean;
}

const CREDIT_PACKS = [
  { credits: "100 Credits", amount: 99 },
  { credits: "250 Credits", amount: 199 },
  { credits: "500 Credits", amount: 349 },
];

export function CreditPacks({ onBuy, isLoading }: CreditPacksProps) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Buy Credits (One-Time)</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CREDIT_PACKS.map((pack) => (
          <div
            key={pack.credits}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex items-center justify-between hover:border-purple-500/50 transition-colors"
          >
            <div>
              <p className="text-lg font-bold">{pack.credits}</p>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
                ₹{pack.amount}
              </p>
            </div>
            <button
              disabled={isLoading}
              onClick={() => onBuy(pack.amount, pack.credits)}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-purple-600 hover:text-white font-medium rounded-lg transition-colors cursor-pointer"
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
