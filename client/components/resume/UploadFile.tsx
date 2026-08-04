import { Dispatch, SetStateAction } from "react";
import { UploadCloud, Zap } from "lucide-react";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

interface UploadFileProps {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;

  targetRole: string;
  setTargetRole: Dispatch<SetStateAction<string>>;

  analyzeResume: () => void;
  isLoading: boolean;
}

const UploadFile = ({
  file,
  setFile,
  targetRole,
  setTargetRole,
  analyzeResume,
  isLoading,
}: UploadFileProps) => {
  const { data: user } = useCurrentUser();

  const isDisabled = isLoading || !file || !targetRole.trim();

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm transition-colors">
      <h2 className="mb-4 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
        Upload File
      </h2>

      <label
        htmlFor="resume-upload"
        className="group relative flex min-h-50 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/30 p-6 text-center transition-all duration-200 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/10"
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm transition-transform group-hover:scale-105">
          <UploadCloud className="h-6 w-6" />
        </div>

        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          {file?.name ?? "Drag & drop your CV"}
        </h3>

        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {file
            ? `${(file.size / 1024).toFixed(2)} KB`
            : "PDF format, up to 5MB"}
        </p>

        <input
          id="resume-upload"
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={({ target }) => {
            const selectedFile = target.files?.[0];

            if (!selectedFile) return;

            setFile(selectedFile);
          }}
        />
      </label>

      <div className="mt-5 flex flex-col gap-1.5">
        <label
          htmlFor="target-role"
          className="ml-1 text-sm font-semibold text-slate-700 dark:text-slate-300"
        >
          Target Role
        </label>

        <input
          id="target-role"
          type="text"
          value={targetRole}
          onChange={({ target }) => setTargetRole(target.value)}
          placeholder="e.g. Full Stack Web Developer"
          className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-2.5 text-sm text-slate-800 dark:text-slate-100 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10"
        />

        <button
          type="button"
          onClick={analyzeResume}
          disabled={isDisabled || user.credits <= 0}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 dark:bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700 dark:hover:bg-indigo-400 disabled:cursor-not-allowed disabled:bg-slate-300 dark:disabled:bg-slate-800 disabled:text-slate-500 dark:disabled:text-slate-600"
        >
          {isLoading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Analyzing...
            </>
          ) : (
            <>
              <Zap className="h-4 w-4" />
              {(user?.credits ?? 0) <= 0
                ? "Insufficient Credits"
                : "Analyze Resume"}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default UploadFile;