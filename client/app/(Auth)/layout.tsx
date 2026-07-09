import Link from "next/link";
import { Send } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Send size={28} className="text-blue-600" />

            <span className="text-xl font-bold text-gray-900">
              CareerPilot
            </span>
          </Link>

          <Link
            href="/"
            className="text-sm flex items-center gap-2 font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft />
            Back to Home
          </Link>
        </div>
      </header>

      {children}
    </main>
  );
}
