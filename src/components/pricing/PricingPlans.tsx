import React, { useEffect, useState } from "react";
import PricingToggle from "./PricingToggle";
import { CheckIcon, X } from "lucide-react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

interface Feature {
  name: string;
  basic: boolean;
  pro: boolean;
  premium: boolean;
}

const features: Feature[] = [
  { name: "AI Bet Slip Scanner", basic: true, pro: true, premium: true },
  { name: "Smart Dashboard", basic: true, pro: true, premium: true },
  { name: "Intelligent Analytics", basic: false, pro: true, premium: true },
  { name: "Real-Time Notifications", basic: false, pro: true, premium: true },
  {
    name: "Historical Performance Trends",
    basic: false,
    pro: true,
    premium: true,
  },
  { name: "Responsible Gambling Tools", basic: true, pro: true, premium: true },
  { name: "Personalized Insights", basic: false, pro: true, premium: true },
  { name: "Priority Support", basic: false, pro: false, premium: true },
];

const PricingPlans: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  // Calculate price with yearly discount
  const getPrice = (monthlyPrice: number) => {
    return isYearly ? (monthlyPrice * 0.8).toFixed(2) : monthlyPrice.toFixed(2);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const planVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="pricing-plans" className="py-16 relative">
      <div className="absolute -z-10 w-full h-full">
        <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-blue-600/20 rounded-full filter blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6"
          data-aos="fade-up"
        >
          Choose Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Plan
          </span>
        </h2>
        <p
          className="text-center text-gray-300 mb-10 max-w-2xl mx-auto text-lg"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          All plans include core features to help you track your bets. Upgrade
          for advanced analytics and AI-powered insights.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Basic Plan */}
        <motion.div
          className="bg-gray-800/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group"
          data-aos="fade-up"
          data-aos-delay="100"
          variants={planVariants}
        >
          <div className="p-8 border-b border-gray-700">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <div className="flex items-end mb-4">
              <motion.span
                className="text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                £0
              </motion.span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
            <p className="text-gray-400 text-sm">Perfect for casual bettors</p>
          </div>
          <div className="p-8">
            <motion.ul
              className="space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={featureVariants}
                >
                  {feature.basic ? (
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  )}
                  <span
                    className={
                      feature.basic ? "text-gray-200" : "text-gray-500"
                    }
                  >
                    {feature.name}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="p-8 pt-0">
            <motion.button
              className="w-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full text-white font-medium py-3 px-4 hover:border-purple-500 transition-all duration-300 transform group-hover:scale-105"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* Pro Plan */}
        <motion.div
          className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-600/50 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 relative group"
          data-aos="fade-up"
          data-aos-delay="200"
          variants={planVariants}
        >
          {/* Popular Badge */}
          <motion.div
            className="absolute top-0 right-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-xs font-bold px-5 py-1.5 rounded-bl-lg">
              POPULAR
            </div>
          </motion.div>

          <div className="p-8 border-b border-gray-700">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <div className="flex items-end mb-4">
              <motion.span
                className="text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                £{getPrice(9.99)}
              </motion.span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
            <p className="text-gray-400 text-sm">Optimal for regular bettors</p>
          </div>
          <div className="p-8">
            <motion.ul
              className="space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={featureVariants}
                >
                  {feature.pro ? (
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  )}
                  <span
                    className={feature.pro ? "text-gray-200" : "text-gray-500"}
                  >
                    {feature.name}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="p-8 pt-0">
            <motion.button
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium py-3 px-4 transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Go Pro
            </motion.button>
          </div>
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          className="bg-gradient-to-br from-gray-800/40 to-purple-900/20 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 group"
          data-aos="fade-up"
          data-aos-delay="300"
          variants={planVariants}
        >
          <div className="p-8 border-b border-gray-700">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <div className="flex items-end mb-4">
              <motion.span
                className="text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                £{getPrice(19.99)}
              </motion.span>
              <span className="text-gray-400 ml-1">/month</span>
            </div>
            <p className="text-gray-400 text-sm">For professional bettors</p>
          </div>
          <div className="p-8">
            <motion.ul
              className="space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.7 }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  variants={featureVariants}
                >
                  {feature.premium ? (
                    <CheckIcon className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                  )}
                  <span className="text-gray-200">{feature.name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="p-8 pt-0">
            <motion.button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium py-3 px-4 transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Go Premium
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingPlans;
