import { CodeAnalysis } from "./codeAnalysisInterface";
import { Clipboard, Eraser } from "lucide-react";
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

const editorOptions = {
  minimap: { enabled: false },
  automaticLayout: true,
  scrollBeyondLastLine: false,
  wordWrap: "on" as const,
  smoothScrolling: true,
  roundedSelection: true,
  fontSize: 14,
  tabSize: 2,
  glyphMargin: false,
  folding: false,
  lineNumbersMinChars: 3,
  scrollbar: {
    verticalScrollbarSize: 8,
    horizontalScrollbarSize: 8,
  },
  padding: {
    top: 16,
    bottom: 16,
  },
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
    <section className="border border-gray-200  bg-white/20 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col lg:h-175">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
        <div>
          <h1 className="text-lg font-semibold text-slate-800">Your Code</h1>

          <p className="mt-1 text-sm text-slate-500">
            Paste your source code for AI analysis.
          </p>
        </div>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full sm:w-56 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="c">C</option>
          <option value="csharp">C#</option>
          <option value="go">Go</option>
          <option value="rust">Rust</option>
        </select>
      </div>

      {/* Editors */}
      <div className="grid flex-1 grid-cols-1 gap-4 xl:grid-cols-2 min-h-0">
        {/* Original Code */}
        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200">
          <div className="flex items-center justify-between border-b border-slate-700 bg-slate-900 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-3 text-xs text-slate-400">Original Code</span>
            </div>

            <span className="text-xs uppercase text-slate-500">{language}</span>
          </div>

          <div className="h-87.5 xl:h-auto flex-1">
            <Editor
              theme="vs-dark"
              language={language}
              value={code}
              onChange={(value) => setCode(value ?? "")}
              options={editorOptions}
            />
          </div>
        </div>

        {/* Optimized Code */}
        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200">
          <div className="flex items-center justify-between border-b border-slate-700 bg-slate-900 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <span className="ml-3 text-xs text-slate-400">
                Optimized Code
              </span>
            </div>

            <span className="text-xs text-emerald-400">AI Generated</span>
          </div>

          <div className="relative h-87.5 xl:h-auto flex-1">
            <Editor
              theme="vs-dark"
              language={language}
              value={analysis?.optimizedCode ?? ""}
              options={{
                ...editorOptions,
                readOnly: true,
              }}
            />

            {analysis?.optimizedCode && (
              <div className="">
                <button
                  onClick={() => {
                  }}
                  className="absolute bottom-4 right-16 z-10 rounded-lg bg-white/10 p-2 text-slate-400 backdrop-blur transition hover:bg-red-700 hover:text-white cursor-pointer"
                >
                  <Eraser size={18} />
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(analysis.optimizedCode);
                    toast.success("Code copied!");
                  }}
                  className="absolute bottom-4 right-4 z-10 rounded-lg bg-slate-800/80 p-2 text-slate-400 backdrop-blur transition hover:bg-slate-700 hover:text-white cursor-pointer"
                >
                  <Clipboard size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
          <span>Lines: {code ? code.split("\n").length : 0}</span>
          <span>Characters: {code.length}</span>
          <span>Language: {language}</span>
        </div>

        <button
          disabled={isLoading}
          onClick={analyzeCode}
          className={`w-full lg:w-auto rounded-xl px-5 py-2.5 font-medium text-white transition ${
            isLoading
              ? "cursor-not-allowed bg-indigo-400"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {isLoading ? "Analyzing Code..." : "Analyze Code →"}
        </button>
      </div>
    </section>
  );
};

export default CodeEditor;
