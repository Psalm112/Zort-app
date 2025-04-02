import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: number;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-2">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center">
        {icon}
      </div>
      {trend !== undefined && (
        <div
          className={`flex items-center text-sm ${
            trend >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend >= 0 ? (
            <ArrowUpRight className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDownRight className="w-4 h-4 mr-1" />
          )}
          {Math.abs(trend)}%
        </div>
      )}
    </div>
    <div className="text-lg font-bold text-white mb-1">{value}</div>
    <div className="text-xs text-gray-400 uppercase">{title}</div>
  </motion.div>
);
export default StatCard;
