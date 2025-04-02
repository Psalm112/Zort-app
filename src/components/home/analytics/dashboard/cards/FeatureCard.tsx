import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start space-x-4"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center">
      {icon}
    </div>

    <div>
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);

export default FeatureCard;
