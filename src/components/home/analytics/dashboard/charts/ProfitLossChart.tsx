"use client";
import { ChartItemArray } from "@/types/home";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface ProfitLossChartProps {
  data: Array<{ name: string; value: number }>;
  title: string;
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  label?: string;
  payload?: ChartItemArray;
}) => {
  console.log(active, label, payload);
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const isPositive = value >= 0;

    return (
      <div className="bg-gray-800 p-3 rounded-md border border-gray-600 shadow-lg">
        <p className="text-gray-200 font-medium mb-1">{label}</p>
        <p
          className={`text-lg font-bold ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          {isPositive ? "+" : ""}
          {value.toLocaleString()}
        </p>
      </div>
    );
  }

  return null;
};

const ProfitLossChart: React.FC<ProfitLossChartProps> = ({ data, title }) => (
  <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
    <h3 className="text-white font-semibold mb-4">{title}</h3>
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="name"
            stroke="#9CA3AF"
            tick={{ fill: "#D1D5DB" }}
            axisLine={{ stroke: "#4B5563" }}
          />
          <YAxis
            stroke="#9CA3AF"
            tick={{ fill: "#D1D5DB" }}
            axisLine={{ stroke: "#4B5563" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.value >= 0 ? "#4ade80" : "#ef4444"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default ProfitLossChart;
