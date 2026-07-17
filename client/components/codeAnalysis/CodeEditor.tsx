import { CodeAnalysis } from "./codeAnalysisInterface";
import { Clipboard } from "lucide-react";
import { toast } from "sonner";
import Editor from "@monaco-editor/react";

type CodeEditorProps = {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  analyzeCode: () => void;
  isLoading: boolean;
  analysis: CodeAnalysis | null;
};

const CodeEditor = ({
  code,
  setCode,
  language,
  setLanguage,
  analyzeCode,
  isLoading,
  analysis,
}: CodeEditorProps) => {
  return (
    <section className="border border-gray-200 bg-white rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col min-h-150 lg:h-175">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-5">
        <div>
          <h1 className="font-semibold text-lg text-slate-800">Your Code</h1>

          <p className="text-sm text-slate-500 mt-1">
            Paste your source code for AI analysis.
          </p>
        </div>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full md:w-auto border border-gray-300 bg-white rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
        >
          <option value="Javascript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
          <option value="C">C</option>
          <option value="C#">C#</option>
          <option value="Go">Go</option>
          <option value="Rust">Rust</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
        <div className="flex flex-col rounded-xl border border-slate-200 overflow-hidden bg-slate-950 min-h-0">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />

              <span className="ml-3 text-xs text-slate-400">Original Code</span>
            </div>

            <span className="text-xs text-slate-500">{language}</span>
          </div>

          <Editor
            height="100%"
            language={language.toLowerCase()}
            value={code}
            onChange={(value) => setCode(value ?? "")}
            className="flex-1 resize-none bg-slate-950 text-slate-100 p-5 font-mono text-sm outline-none placeholder:text-slate-600"
          />
        </div>

        <div className="flex flex-col rounded-xl border border-slate-200 overflow-hidden bg-slate-950 min-h-0">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />

              <span className="ml-3 text-xs text-slate-400">
                Optimized Code
              </span>
            </div>

            <span className="text-xs text-emerald-400">AI Generated</span>
          </div>

          <div className="relative h-full">
            <textarea
              spellCheck={false}
              readOnly
              value={analysis?.optimizedCode ?? ""}
              placeholder="Optimized code will appear here..."
              className="flex-1 w-full h-full resize-none bg-slate-950 text-green-400 p-5 font-mono text-sm outline-none placeholder:text-slate-600"
            />
            <Clipboard
              onClick={() => {
                if (analysis?.optimizedCode) {
                  navigator.clipboard.writeText(analysis.optimizedCode);
                  toast.success("Code Copied  ");
                }
              }}
              className="absolute right-4 bottom-4 text-slate-500 cursor-pointer hover:text-indigo-600 transition"
            />{" "}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
          <span>Lines: {code.split("\n").length}</span>
          <span>Characters: {code.length}</span>
          <span>Language: {language}</span>
        </div>

        <button
          disabled={isLoading}
          onClick={analyzeCode}
          className={`w-full md:w-auto flex items-center justify-center gap-2 ${isLoading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"} cursor-pointer text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm hover:shadow-md`}
        >
          {isLoading ? "Analyzing Code.." : "Analyze Code →"}
        </button>
      </div>
    </section>
  );
};

export default CodeEditor;
