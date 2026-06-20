import React from "react";
import Link from "next/link";
import { Send } from "lucide-react";

interface NavPage {
  id: number;
  name: string;
  href: string;
}

const pages: NavPage[] = [
  { id: 1, name: "Features", href: "/features" },
  { id: 2, name: "How It Works", href: "/how-it-works" },
  { id: 3, name: "Pricing", href: "/pricing" },
  { id: 4, name: "Resources", href: "/resources" },
];

const Navbar = () => {
  return (
    <nav className="h-18 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto  h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <Send color="#2080fe" size={30} />
          <Link href="/" className="text-2xl font-poppins font-bold text-gray-900">CareerPilot</Link>
        </div>

        <ul className="hidden md:flex items-center gap-10">
          {pages.map((page) => (
            <li key={page.id}>
              <Link
                href={page.href}
                className="text-sm font-semibold text-gray-800 hover:text-gray-900 cursor-pointer transition-colors"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <Link href="/sign-in"  className="text-sm font-medium text-gray-700 hover:text-black cursor-pointer transition-colors">
            Sign In
          </Link>

          <Link href="sign-up" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg cursor-pointer transition-all">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
