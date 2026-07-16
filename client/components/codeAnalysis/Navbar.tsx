import { HandCoins } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-20 bg-transparent  flex items-center justify-between px-6 md:px-8 shrink-0">
      <div>
        {" "}
        <h1 className="font-bold text-2xl text-slate-900 tracking-tight">
          Code Analysis
        </h1>
        <p className="text-gray-600">
          Get Ai feedback and improvement for your code.
        </p>
      </div>

      <div className="px-3 py-1.5 border border-orange-200 rounded-full text-sm font-semibold bg-orange-50 flex items-center gap-2 text-orange-700 shadow-sm">
        <HandCoins className="w-4 h-4 text-orange-500" />
        <span>0 Credits left</span>
      </div>
    </nav>
  );
};

export default Navbar;
