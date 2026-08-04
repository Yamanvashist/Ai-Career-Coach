import Image from "next/image";
import { Brain } from "lucide-react";

interface AiAvatarCardProps {
  inputMode: string;
}

const AiAvatarCard = ({ inputMode }: AiAvatarCardProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm group transition-colors">
      <div className="relative h-48 sm:h-56 w-full bg-slate-100 dark:bg-slate-800">
        <Image
          src="/images/model.png"
          alt="AI Examiner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 dark:text-emerald-400 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          AI Examiner
        </div>
      </div>

      <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 transition-colors">
        <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
          <Brain className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          Real-time Evaluation
        </span>
        <span className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300 font-medium">
          {inputMode}
        </span>
      </div>
    </div>
  );
};

export default AiAvatarCard;
