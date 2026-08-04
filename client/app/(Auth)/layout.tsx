import Link from "next/link";
import { Send } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Send size={28} className="text-indigo-600 dark:text-indigo-400" />

            <span className="text-xl font-bold text-slate-900 dark:text-white">
              CareerPilot
            </span>
          </Link>

          <Link
            href="/"
            className="text-sm flex items-center gap-2 font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {children}
    </main>
  );
}
