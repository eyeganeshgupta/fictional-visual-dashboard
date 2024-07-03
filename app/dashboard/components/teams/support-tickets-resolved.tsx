"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    alpha: 24,
    beta: 40,
    gamma: 24,
  },
  {
    name: "Feb",
    alpha: 13,
    beta: 30,
    gamma: 22,
  },
  {
    name: "Mar",
    alpha: 58,
    beta: 20,
    gamma: 29,
  },
  {
    name: "Apr",
    alpha: 17,
    beta: 52,
    gamma: 27,
  },
  {
    name: "May",
    alpha: 45,
    beta: 36,
    gamma: 27,
  },
  {
    name: "Jun",
    alpha: 16,
    beta: 24,
    gamma: 24,
  },
  {
    name: "Jul",
    alpha: 23,
    beta: 40,
    gamma: 49,
  },
  {
    name: "Aug",
    alpha: 20,
    beta: 39,
    gamma: 25,
  },
  {
    name: "Sep",
    alpha: 33,
    beta: 9,
    gamma: 11,
  },
  {
    name: "Oct",
    alpha: 10,
    beta: 30,
    gamma: 11,
  },
  {
    name: "Nov",
    alpha: 40,
    beta: 39,
    gamma: 25,
  },
  {
    name: "Dec",
    alpha: 43,
    beta: 34,
    gamma: 11,
  },
];

export default function SupportTicketsResolved() {
  return (
    <ResponsiveContainer height={350} width="100%">
      <LineChart data={data}>
        <Tooltip
          wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
          labelClassName="font-bold"
        />
        <XAxis dataKey="name" fontSize={12} stroke="#888888" />
        <YAxis fontSize={12} stroke="#888888" />
        <CartesianGrid strokeDasharray="3 5" />
        <Line type="monotone" dataKey="alpha" stroke="#84cc16" />
        <Line type="monotone" dataKey="beta" stroke="#3b82f6" />
        <Line type="monotone" dataKey="gamma" stroke="#f97316" />
        <Legend
          formatter={(value) => {
            return <span className="capitalize">{value}</span>;
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
