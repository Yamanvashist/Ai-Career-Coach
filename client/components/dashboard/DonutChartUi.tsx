"use client";

import { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Label,
  Legend,
} from "recharts";

interface ActivityData {
  activity: string;
  count: number;
}

interface DonutChartProps {
  data?: ActivityData[];
}

const COLORS = ["#8b5cf6", "#3b82f6", "#14b8a6", "#f59e0b"];

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: any[];
}) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/80 ">
      <p className="mb-1 text-sm font-bold text-slate-900 dark:text-slate-100">
        {payload[0].name}
      </p>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        Count:{" "}
        <span className="font-bold text-indigo-600 dark:text-indigo-400">
          {payload[0].value}
        </span>
      </p>
    </div>
  );
};

const DonutChartUi = ({ data = [] }: DonutChartProps) => {
  // Calculate the total so the middle isn't empty
  const total = useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.count, 0);
  }, [data]);

  if (!data.length) {
    return (
      <div className="flex h-96 w-full items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/50">
        <p className="text-sm text-slate-500 dark:text-slate-400">No data yet, bro.</p>
      </div>
    );
  }

  return (
    <div className="h-96 w-full rounded-xl bg-white p-4 shadow-sm dark:bg-slate-950">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36} 
            iconType="circle" 
            formatter={(value) => <span className="text-slate-600 dark:text-slate-300">{value}</span>}
          />
          <Pie
            data={data}
            dataKey="count"
            nameKey="activity"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={110}
            paddingAngle={5}
            animationDuration={1500}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
              />
            ))}
            <Label
              content={({ viewBox }) => {
                const { cx, cy } = viewBox;
                return (
                  <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={cx} y={cy - 5} className="fill-slate-900 text-3xl font-bold dark:fill-white">
                      {total}
                    </tspan>
                    <tspan x={cx} y={cy + 20} className="fill-slate-500 text-sm dark:fill-slate-400">
                      Total
                    </tspan>
                  </text>
                );
              }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChartUi;