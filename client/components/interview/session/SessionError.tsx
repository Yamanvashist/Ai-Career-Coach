const SessionError = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans transition-colors">
      <div className="rounded-2xl border border-rose-200 dark:border-rose-900/50 bg-rose-50 dark:bg-rose-950/20 p-6 text-center max-w-sm">
        <p className="text-rose-600 dark:text-rose-400 font-semibold text-sm">
          Failed to load interview session.
        </p>
        <p className="text-xs text-rose-500/80 dark:text-rose-400/80 mt-1">
          Please refresh or check your connection.
        </p>
      </div>
    </div>
  );
};

export default SessionError;