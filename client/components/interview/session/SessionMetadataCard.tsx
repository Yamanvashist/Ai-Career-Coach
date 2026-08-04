interface SessionMetadataCardProps {
  category: string;
  difficulty: string;
  experience: string;
}

const SessionMetadataCard = ({
  category,
  difficulty,
  experience,
}: SessionMetadataCardProps) => {
  return (
    <div className="space-y-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-4 text-xs shadow-xs transition-colors">
      <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800">
        <span className="text-slate-500 dark:text-slate-400">Category</span>
        <span className="font-semibold text-slate-800 dark:text-slate-100">
          {category}
        </span>
      </div>
      <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800">
        <span className="text-slate-500 dark:text-slate-400">Difficulty</span>
        <span className="font-semibold capitalize text-slate-800 dark:text-slate-100">
          {difficulty}
        </span>
      </div>
      <div className="flex justify-between items-center py-1">
        <span className="text-slate-500 dark:text-slate-400">Experience</span>
        <span className="font-semibold text-slate-800 dark:text-slate-100">
          {experience}
        </span>
      </div>
    </div>
  );
};

export default SessionMetadataCard;