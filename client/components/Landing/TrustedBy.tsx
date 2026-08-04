import React from 'react';

const TrustedBy = () => {
  return (
    <div className="border-y border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950 py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Trusted By Learners & Professionals
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-12">
          <span className="text-xl font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
            Google
          </span>

          <span className="text-xl font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
            Amazon
          </span>

          <span className="text-xl font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
            Microsoft
          </span>

          <span className="text-xl font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
            Spotify
          </span>

          <span className="text-xl font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
            Adobe
          </span>

          <span className="text-xl font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
            Uber
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;