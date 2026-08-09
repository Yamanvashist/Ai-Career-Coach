import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">
          404 Not Found
        </p>

        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
          Oops! Page Not Found
        </h1>

        <p className="text-indigo-200 font-light leading-relaxed">
          The page you are looking for does not exist. Click the button below
          to head back safely.
        </p>

        <Link
          href="/"
          className="inline-block bg-white hover:bg-indigo-100 text-indigo-950 font-medium px-6 py-3 rounded-xl transition-colors duration-200"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;