"use client";

import React, { useEffect } from "react";
import {
  motion,
  Variants,
  Transition,
  TargetAndTransition,
} from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const LoaderScreen: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });

    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, []);

  // Animation variants for container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
        duration: 0.6,
      },
    },
  };

  // Animation variants for logo
  const logoVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  // Create properly typed variants for bars
  const barVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  // Function to generate custom transitions for each bar
  const getBarTransition = (index: number): Transition => {
    return {
      delay: index * 0.1,
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    };
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/4 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div variants={logoVariants} data-aos="zoom-in" className="mb-8">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            ZORT
          </motion.h1>
        </motion.div>

        {/* Animated loading bars */}
        <div className="flex flex-col gap-2 w-48">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              variants={barVariants}
              initial="hidden"
              animate="visible"
              transition={getBarTransition(i)}
            />
          ))}
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-gray-300 font-medium"
        >
          Loading your smart betting analytics...
        </motion.p>

        {/* Pulsing circle */}
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-purple-500/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default LoaderScreen;
