"use client";
import { ChartDataArray } from "@/types/home";
import React, { useState, useEffect } from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface SportDistributionChartProps {
  data: Array<{ name: string; value: number }>;
  title?: string;
}

const COLORS = ["#4ade80", "#3b82f6", "#f43f5e", "#f59e0b"];

// Custom tooltip component for better legibility
const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: ChartDataArray;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-3 rounded-md shadow-lg border border-gray-700">
        <p className="text-gray-100 font-medium text-sm mb-1">
          {payload[0].name}
        </p>
        <p className="text-gray-200 font-bold">
          {`${payload[0].value} (${(
            (payload[0].value / payload[0].payload.total) *
            100
          ).toFixed(1)}%)`}
        </p>
      </div>
    );
  }
  return null;
};

const SportDistributionChart: React.FC<SportDistributionChartProps> = ({
  data,
  title = "Sport Distribution",
}) => {
  // Prevent hydration errors by rendering only after mounting
  const [mounted, setMounted] = useState(false);
  // Move this state declaration before any conditional returns
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Calculate total for percentage calculation
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  const dataWithTotal = data.map((item) => ({
    ...item,
    total: totalValue,
  }));

  return (
    <div className="bg-gray-900 rounded-xl p-4 border border-gray-700 h-full">
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <div className="h-48 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={dataWithTotal}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={false}
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={(_, index) =>
                setActiveIndex((prev) => (prev === index ? null : index))
              }
            >
              {dataWithTotal.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              content={<CustomTooltip />}
              active={activeIndex !== null}
              payload={
                activeIndex !== null ? [dataWithTotal[activeIndex]] : undefined
              }
            />
            <Legend
              verticalAlign="bottom"
              align="center"
              layout="horizontal"
              wrapperStyle={{ paddingTop: "2px" }}
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SportDistributionChart;
