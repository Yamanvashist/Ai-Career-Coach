import { AlertCircle } from 'lucide-react'
import React from 'react'

const HowItWorks = () => {
  return (
    <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 rounded-xl p-4 flex gap-3 items-start transition-colors">
      <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
      <div>
        <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-200">
          How it works
        </h4>
        <p className="text-xs text-blue-700 dark:text-blue-300/80 mt-1 leading-relaxed">
          Upload your resume, and our AI will instantly parse it, grade it
          against industry standards, and offer actionable improvements.
        </p>
      </div>
    </div>
  )
}

export default HowItWorks