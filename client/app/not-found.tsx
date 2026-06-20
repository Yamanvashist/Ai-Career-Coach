import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F4] flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-md">
        <span className="text-sm font-light uppercase tracking-widest text-gray-500">
          404 Not Found
        </span>
        
        <h1 className="text-black text-4xl md:text-5xl font-bold tracking-tight">
          Oops! Page Not Found
        </h1>
        
        <p className="font-light text-gray-600 leading-relaxed">
          The page you are looking for does not exist. Click the button below to head back safely.
        </p>
        
        <Link 
          href="/" 
          className="inline-block bg-gray-950 hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-xl transition-colors duration-200"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;