"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { TbChartBarOff } from "react-icons/tb";

interface SkillPerformance {
  skill: string;
  score: number;
}

interface ChartProps {
  data?: SkillPerformance[];
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: any[];
  label?: string;
}) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/80">
      <p className="mb-1 text-sm font-bold text-slate-900 dark:text-slate-100">
        {label}
      </p>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        Score:{" "}
        <span className="font-bold text-indigo-600 dark:text-indigo-400">
          {payload[0].value}
        </span>
        <span className="text-xs text-slate-400 dark:text-slate-500">/100</span>
      </p>
    </div>
  );
};

import BarChartSkeleton from "./skeletonLoader/BarChartSkeleton";

const BarChartUi = ({ data = [], isLoading = false }: ChartProps & { isLoading?: boolean }) => {
  if (isLoading) return <BarChartSkeleton />;

  if (!data.length) {
  return (
    <div className="flex h-96 w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-200/80 bg-gradient-to-b from-slate-50/50 to-slate-100/50 p-6 text-center dark:border-slate-800 dark:from-slate-950/40 dark:to-slate-900/40">
      <div className="mb-3.5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50/80 text-indigo-500 shadow-sm ring-1 ring-indigo-500/15 backdrop-blur-sm dark:bg-indigo-950/40 dark:text-indigo-400 dark:ring-indigo-400/20">
        <TbChartBarOff className="h-7 w-7" />
      </div>
      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
        No Data availaible 
      </h3>
      <p className="mt-1 max-w-60 text-xs text-slate-500 dark:text-slate-400">
        upload your resume,code or give a mock interview to finally see your graph pop up here.
      </p>
    </div>
  );
}

  return (
    <div className="h-96 w-full rounded-xl bg-white p-4 shadow-sm dark:bg-slate-950">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={data} 
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.6} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="skill" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
            dy={10}
          />
          <YAxis 
            domain={[0, 100]} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#64748b', fontSize: 12 }}
          />
          <CartesianGrid 
            strokeDasharray="4 4" 
            vertical={false} 
            stroke="#cbd5e1" 
            strokeOpacity={0.4} 
          />
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ fill: '#f1f5f9', opacity: 0.1 }} 
          />
          <Bar 
            barSize={100}
            dataKey="score" 
            fill="url(#colorScore)" 
            radius={[6, 6, 0, 0]} 
            maxBarSize={48}
            animationDuration={1500}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartUi;