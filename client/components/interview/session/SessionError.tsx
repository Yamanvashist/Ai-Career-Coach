const SessionError = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-700 font-sans">
      <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-center max-w-sm">
        <p className="text-rose-600 font-semibold text-sm">Failed to load interview session.</p>
        <p className="text-xs text-rose-500/80 mt-1">Please refresh or check your connection.</p>
      </div>
    </div>
  );
};

export default SessionError;