import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface PerformanceChartProps {
  data: Array<{ name: string; profit: number }>;
  trend?: string;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({
  data,
  trend = "+23.5%",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="bg-gray-900 rounded-xl p-4 border border-gray-700 mb-6"
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-white font-semibold">Performance Trend</h3>
      <div className="text-green-500 text-sm flex items-center">
        <ArrowUpRight className="w-4 h-4 mr-1" />
        {trend}
      </div>
    </div>
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              borderColor: "#374151",
              color: "#F9FAFB",
            }}
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#4F46E5"
            strokeWidth={3}
            dot={{ r: 4, fill: "#4F46E5", strokeWidth: 2 }}
            activeDot={{ r: 6, fill: "#4F46E5", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
);

export default PerformanceChart;
