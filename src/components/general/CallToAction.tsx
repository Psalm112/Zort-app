"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ImAndroid, ImAppleinc } from "react-icons/im";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const phoneScale = useTransform(scrollYProgress, [0.3, 0.8], [0.8, 1]);
  const phoneOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  // Sample data for the chart
  const data = [
    { name: "Mon", profit: 5.2 },
    { name: "Tue", profit: 8.1 },
    { name: "Wed", profit: 7.3 },
    { name: "Thu", profit: 9.8 },
    { name: "Fri", profit: 12.5 },
    { name: "Sat", profit: 14.2 },
    { name: "Sun", profit: 15.8 },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-blue-400 rounded-full opacity-5 blur-3xl animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to take your sports betting to the next level?
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              Join thousands of bettors who have transformed their betting
              strategy with ZORT. Download the app today and start making
              smarter bets.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ImAppleinc size={18} />
                <span>App Store</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
              >
                <ImAndroid size={18} />
                <span>Google Play</span>
              </motion.button>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-300">Free to download</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-300">No credit card required</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-gray-300">Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <motion.div
            style={{
              scale: phoneScale,
              opacity: phoneOpacity,
            }}
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>

              <div className="relative z-10 bg-gray-800 rounded-3xl border border-gray-700 overflow-hidden shadow-2xl p-4">
                <div className="rounded-2xl overflow-hidden bg-gray-900">
                  <div className="h-8 bg-gray-800 flex items-center justify-between px-4 border-b border-gray-700">
                    <div className="text-xs text-gray-400">ZORT Dashboard</div>
                    <div className="text-xs text-gray-400">12:30</div>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-lg font-semibold text-white">
                        Jan 16 - Jan 22
                      </div>
                      <div className="text-xs text-gray-400">Weekly</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-800 rounded-lg p-3">
                        <div className="text-xs text-gray-400">Profit</div>
                        <div className="text-green-500 font-semibold">
                          +&pound;30.21
                        </div>
                      </div>

                      <div className="bg-gray-800 rounded-lg p-3">
                        <div className="text-xs text-gray-400">ROI</div>
                        <div className="text-green-500 font-semibold">
                          +40.52%
                        </div>
                      </div>
                    </div>

                    <div className="h-32 bg-gray-800 rounded-lg p-2">
                      {/* Recharts Line Chart */}
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                          <XAxis
                            dataKey="name"
                            tick={{ fill: "#9CA3AF", fontSize: 8 }}
                            axisLine={{ stroke: "#374151" }}
                            tickLine={{ stroke: "#374151" }}
                          />
                          <YAxis
                            tick={{ fill: "#9CA3AF", fontSize: 8 }}
                            axisLine={{ stroke: "#374151" }}
                            tickLine={{ stroke: "#374151" }}
                            width={20}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#1F2937",
                              borderColor: "#374151",
                              color: "white",
                              fontSize: "10px",
                              borderRadius: "4px",
                            }}
                            labelStyle={{ color: "#9CA3AF" }}
                          />
                          <Line
                            type="monotone"
                            dataKey="profit"
                            stroke="#4F46E5"
                            strokeWidth={2}
                            dot={{ fill: "#4F46E5", r: 3 }}
                            activeDot={{ fill: "#818CF8", r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
