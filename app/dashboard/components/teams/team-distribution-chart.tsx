"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Alpha (Α, α)",
    value: 55,
    color: "#84cc16",
  },
  {
    name: "Beta (Β, β)",
    value: 34,
    color: "#3b82f6",
  },
  {
    name: "Gamma (Γ, γ)",
    value: 11,
    color: "#f97316",
  },
];

export default function TeamDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Tooltip
          wrapperClassName="dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black !text-sm dark:!bg-black rounded-md dark:!border-border"
          labelClassName="font-bold"
        />
        <Pie data={data} dataKey="value" nameKey="name">
          {data.map((dataItem, index) => {
            return <Cell key={index} fill={dataItem?.color} />;
          })}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
