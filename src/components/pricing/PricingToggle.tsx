import React from "react";
import { motion } from "framer-motion";

interface PricingToggleProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

const PricingToggle: React.FC<PricingToggleProps> = ({
  isYearly,
  setIsYearly,
}) => {
  return (
    <motion.div
      className="flex items-center justify-center mb-12"
      data-aos="fade-up"
      data-aos-delay="100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className={`mr-4 ${
          !isYearly ? "text-white font-medium" : "text-gray-400"
        }`}
        animate={{
          color: !isYearly ? "#ffffff" : "#9ca3af",
          fontWeight: !isYearly ? 500 : 400,
        }}
        transition={{ duration: 0.3 }}
      >
        Monthly
      </motion.span>
      <motion.div
        className="relative w-16 h-8 rounded-full bg-gray-800 cursor-pointer border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
        onClick={() => setIsYearly(!isYearly)}
        whileHover={{ borderColor: "rgba(168, 85, 247, 0.5)" }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute top-1 h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg"
          animate={{
            x: isYearly ? 36 : 4,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        ></motion.div>
      </motion.div>
      <motion.span
        className={`ml-4 ${
          isYearly ? "text-white font-medium" : "text-gray-400"
        }`}
        animate={{
          color: isYearly ? "#ffffff" : "#9ca3af",
          fontWeight: isYearly ? 500 : 400,
        }}
        transition={{ duration: 0.3 }}
      >
        Yearly
      </motion.span>
      <motion.span
        className="ml-3 bg-gradient-to-r from-purple-600 to-blue-500 text-xs font-bold px-3 py-1.5 rounded-full"
        data-aos="fade-left"
        data-aos-delay="200"
        initial={{ opacity: 0, x: -10 }}
        animate={{
          opacity: 1,
          x: 0,
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          scale: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        Save 20%
      </motion.span>
    </motion.div>
  );
};

export default PricingToggle;
