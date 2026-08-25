"use client";

import { useState, useMemo } from "react";
import DonutChartSkeleton from "./skeletonLoader/DonutChartSkeleton";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Label,
  Legend,
  Sector,
} from "recharts";

interface ActivityData {
  activity: string;
  count: number;
}

interface DonutChartProps {
  data?: ActivityData[];
  isLoading?: boolean;
}

// Upgraded to gradients for a premium feel
const GRADIENTS = [
  { id: "grad1", start: "#a78bfa", end: "#7c3aed" }, // Purple
  { id: "grad2", start: "#60a5fa", end: "#2563eb" }, // Blue
  { id: "grad3", start: "#2dd4bf", end: "#0d9488" }, // Teal
  { id: "grad4", start: "#fbbf24", end: "#d97706" }, // Amber
];

// Active shape that pops out when you hover over it
const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8} // Pops out by 8px
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        filter="url(#glow)"
        className="transition-all duration-300"
      />
    </g>
  );
};

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: any[];
}) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-white/20 bg-white/90 px-4 py-3 shadow-2xl backdrop-blur-lg dark:border-slate-700/50 dark:bg-slate-900/90">
      <p className="mb-1 text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
        {payload[0].name}
      </p>
      <div className="flex items-center gap-2">
        <div 
          className="h-2 w-2 rounded-full" 
          style={{ background: payload[0].payload.fill }} 
        />
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Count:{" "}
          <span className="font-bold text-slate-900 dark:text-white">
            {payload[0].value}
          </span>
        </p>
      </div>
    </div>
  );
};

const DonutChartUi = ({ data = [], isLoading = false }: DonutChartProps) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  const total = useMemo(() => {
    return data.reduce((acc, curr) => acc + curr.count, 0);
  }, [data]);

  if (isLoading) return <DonutChartSkeleton />;

  if (!data.length) {
    return (
      <div className="flex h-96 w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-950/20">
        <div className="h-12 w-12 rounded-full border-4 border-slate-200 border-t-slate-400 dark:border-slate-800 dark:border-t-slate-600" />
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          No data yet, bro.
        </p>
      </div>
    );
  }

  return (
    <div className="group h-96 w-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md dark:bg-slate-950 dark:ring-white/10">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <defs>
            {GRADIENTS.map((grad, index) => (
              <linearGradient key={grad.id} id={grad.id} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={grad.start} stopOpacity={1} />
                <stop offset="100%" stopColor={grad.end} stopOpacity={1} />
              </linearGradient>
            ))}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.3" floodColor="#000" />
            </filter>
          </defs>

          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ fill: "transparent" }}
          />
          
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            formatter={(value) => (
              <span className="font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                {value}
              </span>
            )}
          />

          <Pie
            data={data}
            dataKey="count"
            nameKey="activity"
            cx="50%"
            cy="50%"
            innerRadius={85}
            outerRadius={120}
            paddingAngle={6}
            cornerRadius={8}
            stroke="none"
            animationDuration={1000}
            animationBegin={0}       
            activeShape={renderActiveShape}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(undefined)}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#${GRADIENTS[index % GRADIENTS.length].id})`}
                className="transition-all duration-300 hover:opacity-90"
              />
            ))}
            <Label
              content={({ viewBox }) => {
                const { cx, cy } = (viewBox ?? {}) as { cx?: number; cy?: number };
                if (cx === undefined || cy === undefined) return null;

                return (
                  <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={cx} y={cy - 8} className="fill-slate-900 text-4xl font-extrabold tracking-tight dark:fill-white">
                      {total}
                    </tspan>
                    <tspan x={cx} y={cy + 24} className="fill-slate-500 text-sm font-medium uppercase tracking-widest dark:fill-slate-400">
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