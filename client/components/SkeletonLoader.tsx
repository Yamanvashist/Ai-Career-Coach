import React from 'react';

export default function SkeletonLoader() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md animate-pulse rounded-2xl bg-white p-6 shadow-md border border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 w-3/4 rounded bg-gray-200"></div>
            <div className="h-3 w-1/2 rounded bg-gray-200"></div>
          </div>
        </div>
        
        {/* Content Lines */}
        <div className="mt-6 space-y-3">
          <div className="h-3 w-full rounded bg-gray-200"></div>
          <div className="h-3 w-full rounded bg-gray-200"></div>
          <div className="h-3 w-2/3 rounded bg-gray-200"></div>
        </div>

        {/* Action Button */}
        <div className="mt-6 h-10 w-full rounded-xl bg-gray-200"></div>
      </div>
    </div>
  );
}