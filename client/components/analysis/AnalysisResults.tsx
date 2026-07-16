import { BrainCircuit } from 'lucide-react'
import React from 'react'

const AnalysisResults = () => {
  return (
     <section className="bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col min-h-112.5 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div>
                <h2 className="font-semibold text-slate-800 flex items-center gap-2">
                  AI Analysis
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Your analysis will appear here after reviewing your code.
                </p>
              </div>

              <div className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-sm font-medium">
                Waiting...
              </div>
            </div>

            <div className="flex border-b border-slate-200 bg-white">
              <button className="px-5 py-3 text-sm font-medium border-b-2 border-indigo-600 text-indigo-600">
                Results
              </button>

              <button className="px-5 py-3 text-sm text-slate-500 hover:text-slate-700">
                Issues
              </button>

              <button className="px-5 py-3 text-sm text-slate-500 hover:text-slate-700">
                Improvements
              </button>

              <button className="px-5 py-3 text-sm text-slate-500 hover:text-slate-700">
                Optimized Code
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center p-10">
              <div className="text-center max-w-sm">
                <div className="w-18 h-18 rounded-2xl bg-indigo-100 mx-auto flex items-center justify-center mb-5">
                  <BrainCircuit className="w-9 h-9 text-indigo-600" />
                </div>

                <h3 className="text-lg font-semibold text-slate-800">
                  Ready for Analysis
                </h3>

                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Paste your code on the left and click
                  <span className="font-semibold text-indigo-600">
                    {" "}
                    Analyze Code
                  </span>{" "}
                  to receive AI-powered feedback, issue detection, optimization
                  tips, and an improved version of your code.
                </p>
              </div>
            </div>
          </section>
  )
}

export default AnalysisResults