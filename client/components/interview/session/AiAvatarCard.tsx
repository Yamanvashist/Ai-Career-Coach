import Image from "next/image";
import { Brain } from "lucide-react";

interface AiAvatarCardProps {
  inputMode: string;
}

const AiAvatarCard = ({ inputMode }: AiAvatarCardProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm group">
      <div className="relative h-48 sm:h-56 w-full bg-slate-100">
        <Image
          src="/images/model.png"
          alt="AI Examiner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200/80 px-3 py-1 rounded-full text-xs font-semibold text-emerald-700 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          AI Examiner
        </div>
      </div>

      <div className="p-3 border-t border-slate-100 bg-white flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1.5 text-slate-700 font-medium">
          <Brain className="w-3.5 h-3.5 text-emerald-600" />
          Real-time Evaluation
        </span>
        <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">
          {inputMode}
        </span>
      </div>
    </div>
  );
};

export default AiAvatarCard;