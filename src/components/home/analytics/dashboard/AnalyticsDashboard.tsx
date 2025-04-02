"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  TrendingUp,
  PieChart,
  BarChart4,
  Calendar,
  DollarSign,
  ChevronRight,
} from "lucide-react";

import StatCard from "./cards/StatCard";
import FeatureCard from "./cards/FeatureCard";
import BettingHistoryItem from "./BettingHistoryItem";
// const PerformanceChart = dynamic(() => import("./charts/PerformanceChart"), {
//   ssr: false,
// });
// const ProfitLossChart = dynamic(() => import("./charts/ProfitLossChart"), {
//   ssr: false,
// });
// const SportDistributionChart = dynamic(
//   () => import("./charts/SportDistributionChart"),
//   { ssr: false }
// );
import PerformanceChart from "./charts/PerformanceChart";
import ProfitLossChart from "./charts/ProfitLossChart";
import SportDistributionChart from "./charts/SportDistributionChart";
import SummaryCard from "./cards/SummaryCard";
import SportDistributionBar from "./charts/SportDistributionBar";
import TabGroup from "./tabs/TabGroup";

const monthlyData = [
  { name: "Jan", profit: 85 },
  { name: "Feb", profit: 65 },
  { name: "Mar", profit: 110 },
  { name: "Apr", profit: 90 },
  { name: "May", profit: 150 },
  { name: "Jun", profit: 180 },
  { name: "Jul", profit: 210 },
];

const weeklyData = [
  { name: "Mon", value: 45 },
  { name: "Tue", value: -20 },
  { name: "Wed", value: 65 },
  { name: "Thu", value: 30 },
  { name: "Fri", value: -15 },
];

const sportData = [
  { name: "Football", value: 45 },
  { name: "Basketball", value: 30 },
  { name: "F1", value: 25 },
];

const oddsDistributionData = [
  { name: "1.5-2.0", value: 35 },
  { name: "2.0-3.0", value: 45 },
  { name: "3.0-5.0", value: 15 },
  { name: "5.0+", value: 5 },
];

const januarySummaryItems = [
  { label: "Total Profit", value: "£309.15", isPositive: true },
  { label: "Win Rate", value: "32.0%" },
  { label: "Biggest Win", value: "£262.50", isPositive: true },
  { label: "Biggest Loss", value: "£49.60", isPositive: false },
  { label: "Average Stake", value: "£16.92" },
  { label: "Average Odds", value: "71.11" },
];

const AnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const dashboardScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const dashboardOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Analytics Dashboard
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Track your betting performance, identify trends, and make
            data-driven decisions to improve your strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Powerful Analytics
              </span>
              <br />
              <span className="text-white">Drive Better Results</span>
            </h3>

            <p className="text-lg text-gray-300 mb-8">
              Dive deep into your betting history and track your performance
              over time. Our powerful analytics provide valuable insights,
              allowing you to make data-driven decisions and optimize your
              strategies.
            </p>

            <div className="space-y-6">
              <FeatureCard
                icon={<BarChart4 className="w-6 h-6 text-blue-400" />}
                title="League-specific analytics"
                description="Track performance across different sports leagues"
                delay={0}
              />

              <FeatureCard
                icon={<TrendingUp className="w-6 h-6 text-purple-400" />}
                title="Visual performance graphs"
                description="See your wins and losses represented visually"
                delay={0.2}
              />

              <FeatureCard
                icon={<PieChart className="w-6 h-6 text-green-400" />}
                title="Profit percentage tracking"
                description="Monitor your ROI with easy-to-understand metrics"
                delay={0.4}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8"
            >
              <button
                suppressHydrationWarning
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-all duration-300"
              >
                View Detailed Analytics
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
          </div>

          {/* Dashboard Mockup */}
          <motion.div
            style={{
              scale: dashboardScale,
              opacity: dashboardOpacity,
            }}
            className="relative"
          >
            <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
              {/* Dashboard Header with Tabs */}
              <TabGroup
                tabs={["Overview", "Performance", "Sports"]}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />

              {/* Stats Overview Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <StatCard
                  title="Total Balance"
                  value="£420.96"
                  icon={<DollarSign className="w-5 h-5 text-blue-400" />}
                  trend={8.2}
                  delay={0.1}
                />
                <StatCard
                  title="Win Rate"
                  value="32.0%"
                  icon={<TrendingUp className="w-5 h-5 text-green-400" />}
                  trend={4.5}
                  delay={0.2}
                />
                <StatCard
                  title="Total Bets"
                  value="47"
                  icon={<Calendar className="w-5 h-5 text-purple-400" />}
                  delay={0.3}
                />
              </div>

              {/* Main Dashboard Content */}
              {activeTab === "overview" && (
                <>
                  {/* Main Chart */}
                  <PerformanceChart data={monthlyData} trend="+23.5%" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Weekly Performance */}
                    <ProfitLossChart
                      data={weeklyData}
                      title="Profit/Loss by Day"
                    />

                    {/* Sport Distribution */}
                    <SportDistributionChart data={sportData} />
                  </div>
                </>
              )}

              {activeTab === "performance" && (
                <>
                  {/* January 2025 Summary */}
                  <SummaryCard
                    title="Jan 2025 Summary"
                    items={januarySummaryItems}
                  />

                  {/* Odds Distribution */}
                  <ProfitLossChart
                    data={oddsDistributionData}
                    title="Odds Distribution"
                  />
                </>
              )}

              {activeTab === "sports" && (
                <>
                  {/* Betting Statistics */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                  >
                    <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                      <h3 className="text-white font-semibold mb-4">
                        Betting Statistics
                      </h3>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-gray-400 text-sm">Total Bets</p>
                          <p className="text-white text-2xl font-bold">47</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Win Rate</p>
                          <p className="text-white text-2xl font-bold">15.7%</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-400 text-sm">Biggest Win</p>
                          <p className="text-green-500 text-xl font-bold">
                            £145.50
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Biggest Loss</p>
                          <p className="text-red-500 text-xl font-bold">
                            -£50.00
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                      <h3 className="text-white font-semibold mb-4">
                        Sport Distribution
                      </h3>

                      <div className="space-y-3">
                        <SportDistributionBar
                          sport="Football"
                          percentage={45}
                        />
                        <SportDistributionBar
                          sport="Basketball"
                          percentage={30}
                        />
                        <SportDistributionBar sport="F1" percentage={25} />
                      </div>
                    </div>
                  </motion.div>

                  {/* League Performance */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-900 rounded-xl p-4 border border-gray-700"
                  >
                    <h3 className="text-white font-semibold mb-4">
                      League Performance
                    </h3>

                    <div className="space-y-1">
                      <BettingHistoryItem
                        league="Premier League"
                        record="8-3"
                        profit="+£32.50"
                        color="blue"
                        delay={0.1}
                      />
                      <BettingHistoryItem
                        league="La Liga"
                        record="5-2"
                        profit="+£14.60"
                        color="purple"
                        delay={0.2}
                      />
                      <BettingHistoryItem
                        league="NBA"
                        record="3-1"
                        profit="+£8.00"
                        color="red"
                        delay={0.3}
                      />
                      <BettingHistoryItem
                        league="Formula 1"
                        record="6-4"
                        profit="+£22.75"
                        color="green"
                        delay={0.4}
                      />
                      <BettingHistoryItem
                        league="Bundesliga"
                        record="2-3"
                        profit="-£7.25"
                        color="yellow"
                        delay={0.5}
                      />
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <button className="text-blue-400 text-sm hover:text-blue-300 transition-all duration-300 flex items-center">
                        View All Leagues
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
