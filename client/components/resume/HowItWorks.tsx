import { AlertCircle } from 'lucide-react'
import React from 'react'

const HowItWorks = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-blue-900">
                How it works
              </h4>
              <p className="text-xs text-blue-700 mt-1 leading-relaxed">
                Upload your resume, and our AI will instantly parse it, grade it
                against industry standards, and offer actionable improvements.
              </p>
            </div>
          </div>
  )
}

export default HowItWorks