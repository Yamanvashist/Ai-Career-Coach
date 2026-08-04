const SessionLoading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-sans transition-colors">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-600 dark:border-emerald-500 border-t-transparent" />
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Loading interview session...
        </p>
      </div>
    </div>
  );
};

export default SessionLoading;