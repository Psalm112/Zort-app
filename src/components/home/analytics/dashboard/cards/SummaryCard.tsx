import React from "react";
import { motion } from "framer-motion";

interface SummaryCardProps {
  title: string;
  items: Array<{ label: string; value: string | number; isPositive?: boolean }>;
}
const SummaryCard: React.FC<SummaryCardProps> = ({ title, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-900 rounded-xl p-4 border border-gray-700 mb-6"
  >
    <h3 className="text-white font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-gray-800 p-3 rounded-lg">
          <p className="text-gray-400 text-sm mb-1">{item.label}</p>
          <p
            className={`${
              item.isPositive
                ? "text-green-500"
                : item.isPositive === false
                ? "text-red-500"
                : "text-white"
            } text-xl font-bold`}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default SummaryCard;
