interface ProgressBarProps {
  value: number;
  color?: string;
}

const ProgressBar = ({ value, color = "bg-green-600" }: ProgressBarProps) => {
  return (
    <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-300 ${color}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default ProgressBar;
