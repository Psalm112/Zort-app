import React from "react";
import { motion } from "framer-motion";

interface BettingHistoryItemProps {
  league: string;
  record: string;
  profit: string;
  color: string;
  delay: number;
}

const BettingHistoryItem: React.FC<BettingHistoryItemProps> = ({
  league,
  record,
  profit,
  color,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
    className="flex justify-between items-center mb-3"
  >
    <div className="flex items-center space-x-2">
      <div className={`w-2 h-2 rounded-full bg-${color}-500`}></div>
      <div className="text-sm">
        {league}
        <span className="text-gray-400 ml-1">{record}</span>
      </div>
    </div>
    <div className="text-green-500 text-sm">{profit}</div>
  </motion.div>
);

export default BettingHistoryItem;
