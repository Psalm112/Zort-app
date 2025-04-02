import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from "recharts";

interface PerformanceInfo {
  month: string;
  profit: number;
  wagers: number;
  winRate: number;
}

const HistoricalTrends = () => {
  const [activeTab, setActiveTab] = useState("performance");

  // Sample data for trends
  const performanceData: PerformanceInfo[] = [
    { month: "Jan", profit: 85, wagers: 50, winRate: 56 },
    { month: "Feb", profit: 120, wagers: 65, winRate: 62 },
    { month: "Mar", profit: 90, wagers: 55, winRate: 58 },
    { month: "Apr", profit: 150, wagers: 70, winRate: 65 },
    { month: "May", profit: 120, wagers: 60, winRate: 60 },
    { month: "Jun", profit: 180, wagers: 75, winRate: 68 },
    { month: "Jul", profit: 220, wagers: 85, winRate: 72 },
    { month: "Aug", profit: 200, wagers: 80, winRate: 70 },
    { month: "Sep", profit: 250, wagers: 90, winRate: 75 },
    { month: "Oct", profit: 240, wagers: 85, winRate: 74 },
    { month: "Nov", profit: 280, wagers: 95, winRate: 78 },
    { month: "Dec", profit: 310, wagers: 100, winRate: 82 },
  ];

  const sportsByROI = [
    { name: "Soccer", roi: 12.5 },
    { name: "Basketball", roi: 8.7 },
    { name: "Tennis", roi: 15.2 },
    { name: "Baseball", roi: 6.8 },
    { name: "Football", roi: 10.3 },
    { name: "Hockey", roi: 7.5 },
  ];

  const [animatedData, setAnimatedData] = useState<PerformanceInfo[]>([]);

  useEffect(() => {
    // Animate data loading
    const timer = setTimeout(() => {
      setAnimatedData(performanceData);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-900 rounded-xl p-6 w-full max-w-4xl mx-auto overflow-hidden shadow-lg border border-gray-800">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          Historical Performance Analytics
        </h3>
        <p className="text-gray-400 text-sm">
          Track your betting performance over time with detailed insights
        </p>
      </div>

      <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeTab === "performance"
              ? "bg-purple-600 text-white"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("performance")}
        >
          Profit Trend
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeTab === "sports"
              ? "bg-purple-600 text-white"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("sports")}
        >
          Sports ROI
        </button>
      </div>

      {activeTab === "performance" ? (
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={animatedData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorWinRate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
              <XAxis dataKey="month" stroke="#718096" />
              <YAxis stroke="#718096" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1a202c",
                  border: "1px solid #2d3748",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#e2e8f0" }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="#8b5cf6"
                fillOpacity={1}
                fill="url(#colorProfit)"
                name="Profit (£)"
                animationDuration={1500}
              />
              <Area
                type="monotone"
                dataKey="winRate"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorWinRate)"
                name="Win Rate (%)"
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sportsByROI}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
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
                labelStyle={{ color: "#e2e8f0" }}
              />
              <Legend />
              <Bar
                dataKey="roi"
                name="ROI (%)"
                fill="#8b5cf6"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 text-xs uppercase mb-1">Total Profit</h4>
          <p className="text-white text-xl font-bold">&pound;2,245</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 text-xs uppercase mb-1">Win Rate</h4>
          <p className="text-white text-xl font-bold">67.3%</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 text-xs uppercase mb-1">Best Sport</h4>
          <p className="text-white text-xl font-bold">Tennis</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <h4 className="text-gray-400 text-xs uppercase mb-1">Total Bets</h4>
          <p className="text-white text-xl font-bold">842</p>
        </div>
      </div>
    </div>
  );
};

export default HistoricalTrends;
