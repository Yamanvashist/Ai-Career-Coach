"use client";

interface Payment {
  type: string;
  createdAt: Date;
  amount: number;
  status: "PENDING" | "SUCCESS";
}

interface PaymentHistoryProps {
  history: Payment[];
}

export function PaymentHistory({ history }: PaymentHistoryProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
      <h3 className="text-lg font-bold mb-4">Payment History (Last 5 payments)</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-400 uppercase">
              {["Date", "Description", "Amount"].map((item, idx) => (
                <th key={idx} className="py-3 pr-4">
                  {item}
                </th>
              ))}
              <th className="py-3 pl-4 text-right">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm font-medium">
            {history.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-8 text-center text-slate-400">
                  No payments yet
                </td>
              </tr>
            ) : (
              history.map((item, idx) => (
                <tr key={idx}>
                  <td className="py-4 pr-4 text-slate-500 dark:text-slate-400">
                    {new Date(item.createdAt).toLocaleDateString("en-IN",{
                      month : "short",
                      day : "numeric"
                    })}
                  </td>

                  <td className="py-4 px-4">{item.type}</td>

                  <td className="py-4 px-4">₹{item.amount}</td>

                  <td className="py-4 pl-4 text-right">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold
                      ${
                         item.status === "SUCCESS"
                            ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300"
                            : item.status === "PENDING"
                            ? "bg-yellow-100 dark:bg-yellow-700 text-yellow-700 dark:text-white"
                            : "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300"
                       }
                          `}
                    >
                      {item.status === "SUCCESS"
                        ? "Paid"
                        : item.status === "PENDING"
                          ? "Pending"
                          : "Failed"}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
