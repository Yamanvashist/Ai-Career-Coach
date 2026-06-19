import React from 'react'

const TrustedBy = () => {
  return (
       <div className="border-y border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
            Trusted By Learners & Professionals
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-12">
            <span className="text-xl font-semibold text-gray-500">Google</span>

            <span className="text-xl font-semibold text-gray-500">Amazon</span>

            <span className="text-xl font-semibold text-gray-500">
              Microsoft
            </span>

            <span className="text-xl font-semibold text-gray-500">Spotify</span>

            <span className="text-xl font-semibold text-gray-500">Adobe</span>

            <span className="text-xl font-semibold text-gray-500">Uber</span>
          </div>
        </div>
      </div>
  )
}

export default TrustedBy