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
    <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs space-y-2.5 text-xs">
      <div className="flex justify-between items-center py-1 border-b border-slate-100">
        <span className="text-slate-500">Category</span>
        <span className="font-semibold text-slate-800">{category}</span>
      </div>
      <div className="flex justify-between items-center py-1 border-b border-slate-100">
        <span className="text-slate-500">Difficulty</span>
        <span className="font-semibold text-slate-800 capitalize">{difficulty}</span>
      </div>
      <div className="flex justify-between items-center py-1">
        <span className="text-slate-500">Experience</span>
        <span className="font-semibold text-slate-800">{experience}</span>
      </div>
    </div>
  );
};

export default SessionMetadataCard;