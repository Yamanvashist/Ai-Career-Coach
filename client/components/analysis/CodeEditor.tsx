import React from "react";

const CodeEditor = () => {
  return (
    <section className="border border-gray-200 bg-white rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col min-h-150 lg:h-175">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-5">
        <div>
          <h1 className="font-semibold text-lg text-slate-800">Your Code</h1>

          <p className="text-sm text-slate-500 mt-1">
            Paste your source code for AI analysis.
          </p>
        </div>

        <select className="w-full md:w-auto border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500">
          <option>JavaScript</option>
          <option>TypeScript</option>
          <option>Python</option>
          <option>Java</option>
          <option>C++</option>
          <option>C</option>
          <option>C#</option>
          <option>Go</option>
          <option>Rust</option>
        </select>
      </div>

      <div className="flex-1 min-h-87.5 rounded-xl border border-slate-200 overflow-hidden bg-slate-950">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />

            <span className="ml-3 text-xs text-slate-400 truncate">
              solution.js
            </span>
          </div>

          <span className="hidden sm:block text-xs text-slate-500">
            Ready to analyze
          </span>
        </div>

        <textarea
          spellCheck={false}
          placeholder={`console.log("Hello Javascript")`}
          className="w-full h-full resize-none bg-slate-950 text-slate-100 p-5 font-mono text-sm outline-none placeholder:text-slate-600"
        />
      </div>

      <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
          <span>Lines: 0</span>
          <span>Characters: 0</span>
          <span>Language: JavaScript</span>
        </div>

        <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm hover:shadow-md">
          Analyze Code →
        </button>
      </div>
    </section>
  );
};

export default CodeEditor;
