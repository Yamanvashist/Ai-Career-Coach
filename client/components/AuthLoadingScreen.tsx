export default function AuthLoadingScreen() {
  return (
  <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-50 transition-colors dark:bg-slate-950">
      
      {/* 1. Background Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-indigo-500/20 blur-[50px]" />

      {/* Loader Container */}
      <div className="relative flex items-center justify-center">
        
        {/* 2. Outer Dashed Ring (Slow Reverse Spin) */}
        <div className="absolute h-32 w-32 animate-[spin_3s_linear_infinite_reverse] rounded-full border-2 border-dashed border-indigo-500/40 dark:border-indigo-400/30" />

        {/* 3. Inner Solid Glow Ring (Fast Forward Spin) */}
        <div className="absolute h-24 w-24 animate-spin rounded-full border-4 border-transparent border-b-indigo-500 border-t-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

        {/* 4. Center Core (Glassmorphism + Pulse) */}
        <div className="relative z-10 flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-white/20 bg-white/50 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/80">
          <svg
            className="h-8 w-8 text-indigo-600 drop-shadow-[0_0_8px_rgba(79,70,229,0.8)] dark:text-indigo-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
      </div>

      {/* Text Section */}
      <div className="relative z-10 mt-12 flex flex-col items-center space-y-4">
        {/* 5. Gradient Tracking Text */}
        <h3 className="animate-pulse bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-xl font-bold tracking-[0.2em] text-transparent dark:from-indigo-400 dark:to-purple-400">
          AUTHENTICATING
        </h3>
        
        {/* 6. Staggered Bouncing Dots */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-500 [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-purple-500 [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-500" />
        </div>
      </div>
    </div>
  );
}