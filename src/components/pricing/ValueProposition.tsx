import { ChartBarIcon, ShieldCheckIcon, SparklesIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { HiBellAlert } from "react-icons/hi2";
import FjLabs from "../../../public/images/partners/fj.png";
import Bolt from "../../../public/images/partners/Bolt.png";
import CapitalVentures from "../../../public/images/partners/capital-ventures.png";
import FounderPartners from "../../../public/images/partners/founder-partners.png";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Aos from "aos";
import "aos/dist/aos.css";

const partners = [
  { name: "Capital Ventures", logo: CapitalVentures },
  { name: "BOLT", logo: Bolt },
  { name: "Founder Partners", logo: FounderPartners },
  { name: "", logo: FjLabs },
];

// Sample data for the charts
const analyticsData = [
  { name: "Jan", profit: 4000, bets: 24, winRate: 58 },
  { name: "Feb", profit: 3000, bets: 28, winRate: 52 },
  { name: "Mar", profit: 5000, bets: 26, winRate: 65 },
  { name: "Apr", profit: 8000, bets: 30, winRate: 70 },
  { name: "May", profit: 7500, bets: 22, winRate: 72 },
  { name: "Jun", profit: 9500, bets: 25, winRate: 68 },
  { name: "Jul", profit: 11000, bets: 32, winRate: 78 },
];

const ValueProposition: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Upgrade?
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Pro and Premium plans unlock powerful features designed to enhance
            your betting strategy and maximize your potential returns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-md"></div>
            <div className="relative bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-700 hover:border-purple-500/50 transition-all duration-500">
              <div className="grid gap-8">
                <motion.div
                  className="flex items-start transition-all duration-300 hover:translate-x-1"
                  variants={itemVariants}
                >
                  <div className="bg-gradient-to-br from-purple-600/30 to-blue-500/30 p-3 rounded-lg mr-4">
                    <SparklesIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      AI-Powered Insights
                    </h3>
                    <p className="text-gray-300">
                      Get personalized betting recommendations and pattern
                      analysis to make more informed decisions.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start transition-all duration-300 hover:translate-x-1"
                  variants={itemVariants}
                >
                  <div className="bg-gradient-to-br from-purple-600/30 to-blue-500/30 p-3 rounded-lg mr-4">
                    <ChartBarIcon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Advanced Analytics
                    </h3>
                    <p className="text-gray-300">
                      Visualize your betting trends with detailed performance
                      metrics and historical data analysis.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start transition-all duration-300 hover:translate-x-1"
                  variants={itemVariants}
                >
                  <div className="bg-gradient-to-br from-purple-600/30 to-blue-500/30 p-3 rounded-lg mr-4">
                    <HiBellAlert className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Real-Time Notifications
                    </h3>
                    <p className="text-gray-300">
                      Stay ahead with timely alerts about optimal betting
                      opportunities and market movements.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start transition-all duration-300 hover:translate-x-1"
                  variants={itemVariants}
                >
                  <div className="bg-gradient-to-br from-purple-600/30 to-blue-500/30 p-3 rounded-lg mr-4">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Priority Support
                    </h3>
                    <p className="text-gray-300">
                      Get faster responses and dedicated assistance when you
                      need help with your betting strategy.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div
            className="flex items-center justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <motion.div
              className="relative w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm p-2 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105">
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  <div className="h-8 bg-gray-800 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-gray-800 rounded-lg p-4">
                        <h4 className="text-sm font-medium text-gray-400 mb-2">
                          Analytics Overview
                        </h4>
                        <div className="h-32 bg-gray-700 rounded-lg flex items-center justify-center">
                          {isClient && (
                            <ResponsiveContainer width="100%" height="100%">
                              <AreaChart
                                data={analyticsData}
                                margin={{
                                  top: 10,
                                  right: 10,
                                  left: 0,
                                  bottom: 0,
                                }}
                              >
                                <defs>
                                  <linearGradient
                                    id="colorProfit"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                  >
                                    <stop
                                      offset="5%"
                                      stopColor="#8B5CF6"
                                      stopOpacity={0.8}
                                    />
                                    <stop
                                      offset="95%"
                                      stopColor="#3B82F6"
                                      stopOpacity={0.2}
                                    />
                                  </linearGradient>
                                </defs>
                                <CartesianGrid
                                  strokeDasharray="3 3"
                                  stroke="#444"
                                  opacity={0.2}
                                />
                                <XAxis
                                  dataKey="name"
                                  tick={{ fill: "#9CA3AF" }}
                                  axisLine={{ stroke: "#555" }}
                                />
                                <YAxis
                                  tick={{ fill: "#9CA3AF" }}
                                  axisLine={{ stroke: "#555" }}
                                />
                                <Tooltip
                                  contentStyle={{
                                    backgroundColor: "#1F2937",
                                    border: "1px solid #374151",
                                    borderRadius: "6px",
                                    color: "#E5E7EB",
                                  }}
                                />
                                <Area
                                  type="monotone"
                                  dataKey="profit"
                                  stroke="#8B5CF6"
                                  fillOpacity={1}
                                  fill="url(#colorProfit)"
                                  animationDuration={1500}
                                />
                              </AreaChart>
                            </ResponsiveContainer>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <motion.div
                          className="bg-gray-800 rounded-lg p-3"
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="text-xs font-medium text-gray-400 mb-1">
                            Win Rate
                          </h4>
                          <p className="text-2xl font-bold text-green-400">
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 1, delay: 0.8 }}
                            >
                              68%
                            </motion.span>
                          </p>
                        </motion.div>
                        <motion.div
                          className="bg-gray-800 rounded-lg p-3"
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="text-xs font-medium text-gray-400 mb-1">
                            ROI
                          </h4>
                          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 1, delay: 1 }}
                            >
                              12.4%
                            </motion.span>
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div
          className="text-center mt-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="inline-flex items-center space-x-6 py-3 px-6 bg-gray-800/30 backdrop-blur-sm rounded-full border border-gray-700">
            <span className="text-sm font-medium">Trusted by</span>
            <div className="h-6 w-px bg-gray-700"></div>
            <div className="flex items-center space-x-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="h-10 w-24 rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {partner.logo ? (
                    <div className="flex items-center justify-center h-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="object-contain h-8 w-auto"
                      />
                    </div>
                  ) : (
                    <div className="bg-gray-800 bg-opacity-50 rounded-lg py-4 px-6 text-center">
                      <span className="text-lg font-semibold text-gray-300">
                        {partner.name}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
