import { Bot } from "lucide-react";

const AuthLoadingScreen = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-50 transition-colors duration-300 dark:bg-zinc-950">
      
      <div className="relative flex items-center justify-center">
        {/* Layer 1: The Outer Tracking Ring */}
        <div className="absolute h-32 w-32 animate-[spin_3s_linear_infinite] rounded-full border-2 border-zinc-200 border-t-zinc-900 dark:border-zinc-800 dark:border-t-zinc-100" />
        
        {/* Layer 2: The Inner Radar Pulse */}
        <div className="absolute h-24 w-24 animate-ping rounded-full bg-zinc-900/5 dark:bg-zinc-100/10" />
        
        {/* Layer 3: The Bot Core */}
        <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <Bot className="h-10 w-10 animate-pulse text-zinc-900 dark:text-zinc-100" />
        </div>
      </div>

      {/* Text & Dots */}
      <div className="mt-10 flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold tracking-widest text-zinc-800 uppercase dark:text-zinc-200">
          Initializing AI
        </h3>
        
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-900 [animation-delay:-0.3s] dark:bg-zinc-100" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-900 [animation-delay:-0.15s] dark:bg-zinc-100" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-900 dark:bg-zinc-100" />
        </div>
      </div>
      
    </div>
  );
};

export default AuthLoadingScreen;