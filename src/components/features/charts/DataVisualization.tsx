import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
} from "recharts";

const DataVisualization = () => {
  const [activeChart, setActiveChart] = useState("performance");

  // Sample data for visualizations
  const performanceData = [
    { date: "Jan 1", profit: 150, bets: 15 },
    { date: "Jan 8", profit: 180, bets: 18 },
    { date: "Jan 15", profit: 120, bets: 20 },
    { date: "Jan 22", profit: 210, bets: 17 },
    { date: "Jan 29", profit: 250, bets: 22 },
    { date: "Feb 5", profit: 190, bets: 19 },
    { date: "Feb 12", profit: 280, bets: 25 },
  ];

  const betTypeData = [
    { name: "Singles", value: 45 },
    { name: "Parlays", value: 25 },
    { name: "Prop Bets", value: 20 },
    { name: "Futures", value: 10 },
  ];

  const radarData = [
    { subject: "Basketball", A: 85, fullMark: 100 },
    { subject: "Football", A: 65, fullMark: 100 },
    { subject: "Baseball", A: 78, fullMark: 100 },
    { subject: "Hockey", A: 42, fullMark: 100 },
    { subject: "Soccer", A: 92, fullMark: 100 },
    { subject: "Tennis", A: 63, fullMark: 100 },
  ];

  const dayTimeData = [
    { name: "Morning", bets: 35, winRate: 68 },
    { name: "Afternoon", bets: 48, winRate: 72 },
    { name: "Evening", bets: 75, winRate: 64 },
    { name: "Night", bets: 22, winRate: 58 },
  ];

  const COLORS = ["#8b5cf6", "#3b82f6", "#ec4899", "#10b981"];

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800 w-full max-w-4xl mx-auto">
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">
          Advanced Betting Analytics
        </h3>
        <p className="text-gray-400 text-sm mb-6">
          Interactive visualizations to transform your complex betting data
        </p>

        <div className="flex flex-wrap mb-6 gap-2">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeChart === "performance"
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveChart("performance")}
          >
            Profit Trend
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeChart === "bettypes"
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveChart("bettypes")}
          >
            Bet Types
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeChart === "sports"
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveChart("sports")}
          >
            Sports Performance
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeChart === "timing"
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveChart("timing")}
          >
            Betting Timing
          </button>
        </div>

        <div className="h-72 w-full">
          {activeChart === "performance" && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={performanceData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                <XAxis dataKey="date" stroke="#718096" />
                <YAxis stroke="#718096" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a202c",
                    border: "1px solid #2d3748",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="profit (£)"
                  stroke="#8b5cf6"
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                  animationDuration={1500}
                />
                <Line
                  type="monotone"
                  dataKey="bets (£)"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          )}

          {activeChart === "bettypes" && (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={betTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  animationDuration={1500}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {betTypeData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value} bets`, "Volume"]}
                  contentStyle={{
                    backgroundColor: "#1a202c",
                    border: "1px solid #2d3748",
                    borderRadius: "8px",
                    color: "#ffffff",
                  }}
                  labelStyle={{ color: "#ffffff" }}
                  itemStyle={{ color: "#ffffff" }}
                />
              </PieChart>
            </ResponsiveContainer>
          )}

          {activeChart === "sports" && (
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#2d3748" />
                <PolarAngleAxis dataKey="subject" stroke="#718096" />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  stroke="#718096"
                />
                <Radar
                  name="Success Rate"
                  dataKey="A"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.6}
                  animationDuration={1500}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a202c",
                    border: "1px solid #2d3748",
                    borderRadius: "8px",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          )}

          {activeChart === "timing" && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={dayTimeData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                <XAxis dataKey="name" stroke="#718096" />
                <YAxis stroke="#718096" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a202c",
                    border: "1px solid #2d3748",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="bets"
                  name="Total Bets"
                  fill="#8b5cf6"
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
                <Bar
                  dataKey="winRate"
                  name="Win Rate %"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <h4 className="text-gray-400 text-xs uppercase">Win Rate</h4>
              <div className="bg-purple-500 bg-opacity-20 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-purple-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p className="text-white text-xl font-bold mt-1">68.7%</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <h4 className="text-gray-400 text-xs uppercase">ROI</h4>
              <div className="bg-blue-500 bg-opacity-20 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
            </div>
            <p className="text-white text-xl font-bold mt-1">12.4%</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <h4 className="text-gray-400 text-xs uppercase">Best Sport</h4>
              <div className="bg-pink-500 bg-opacity-20 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p className="text-white text-xl font-bold mt-1">Soccer</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <h4 className="text-gray-400 text-xs uppercase">Best Time</h4>
              <div className="bg-green-500 bg-opacity-20 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p className="text-white text-xl font-bold mt-1">Afternoon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
