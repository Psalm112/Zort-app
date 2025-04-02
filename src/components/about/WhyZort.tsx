"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BrainCircuit, BarChart3, Shield, Smartphone } from "lucide-react";

const WhyZort = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const features = [
    {
      icon: <BrainCircuit size={26} className="text-blue-400" />,
      title: "AI-Powered Tracking",
      description:
        "Scan, track, and analyze bets automatically with our cutting-edge machine learning system.",
    },
    {
      icon: <BarChart3 size={26} className="text-purple-400" />,
      title: "Intelligent Insights",
      description:
        "Get real-time analytics tailored to your betting habits and patterns.",
    },
    {
      icon: <Shield size={26} className="text-green-400" />,
      title: "Privacy & Security",
      description:
        "Your data is protected with top-tier encryption and never shared with third parties.",
    },
    {
      icon: <Smartphone size={26} className="text-pink-400" />,
      title: "User-Centric Design",
      description:
        "Built for both casual and professional bettors with an intuitive interface.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Zort-App
            </span>
            ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-300 max-w-3xl mx-auto">
            What makes our platform stand out from traditional bet tracking
            tools.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-700/50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href="/features"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Explore All Features
          </a>
        </motion.div>
      </div>

      {/* Background elements */}
      <motion.div
        className="absolute -bottom-48 -left-48 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default WhyZort;
