import { Mail } from "lucide-react";

const ResetPassword = ({
  setIsResetting,
}: {
  setIsResetting: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="space-y-4 mt-6">
      <div>
        <label className="block text-xs font-semibold text-gray-600 dark:text-slate-300 uppercase tracking-wider mb-1.5">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500" />
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 text-gray-900 dark:text-slate-100 placeholder:text-gray-400 dark:placeholder:text-slate-500 text-sm rounded-xl focus:outline-none focus:border-gray-900 dark:focus:border-indigo-400 transition-colors"
          />
        </div>
      </div>

      <button
        type="button"
        className="w-full mt-2 py-3 bg-gray-950 hover:bg-gray-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-medium text-sm rounded-xl transition-colors duration-200 shadow-sm cursor-pointer"
      >
        Send Reset Link
      </button>

      <p className="text-center text-sm text-gray-500 dark:text-slate-400 mt-6">
        Remembered it?{" "}
        <button
          type="button"
          onClick={() => setIsResetting(false)}
          className="text-gray-950 dark:text-white font-semibold hover:underline cursor-pointer"
        >
          Back to sign in
        </button>
      </p>
    </div>
  );
};

export default ResetPassword;
