import { motion } from "framer-motion";
import { Scan, BarChart2, Brain, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const features = [
  {
    title: "AI Bet Slip Scanner",
    description: "Instantly analyze bet slips with cutting-edge AI technology",
    icon: Scan,
    id: "aibetslipscanner",
  },
  {
    title: "Smart Dashboard",
    description: "Comprehensive insights and real-time performance tracking",
    icon: BarChart2,
    id: "smartdashboard",
  },
  {
    title: "Intelligent Analytics",
    description: "Advanced algorithms to optimize your betting strategy",
    icon: Brain,
    id: "intelligentanalytics",
  },
  {
    title: "Secure & Private",
    description: "Military-grade encryption to protect your data",
    icon: Shield,
    id: "secureandprivate",
  },
];

const Features = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Powerful Features for Smart Betting
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        {isClient ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <Link href={`/features/#${feature.id}`} className="block">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={28} className="text-white" />
                      </div>

                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {feature.title}
                      </h3>

                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                >
                  <Link href={`/features/#${feature.id}`} className="block">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={28} className="text-white" />
                      </div>

                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                        {feature.title}
                      </h3>

                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {isClient ? (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/features" className="block">
              <div className="flex items-center justify-center space-x-1 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-full border border-gray-700 hover:border-blue-400 transition-all duration-300 cursor-pointer">
                <span>View All Features</span>
                <ChevronRight size={14} />
              </div>
            </Link>
          </motion.div>
        ) : (
          <div className="flex justify-center">
            <Link href="/features" className="block">
              <div className="flex items-center justify-center space-x-1 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-full border border-gray-700 hover:border-blue-400 transition-all duration-300 cursor-pointer">
                <span>View All Features</span>
                <ChevronRight size={14} />
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* Background Elements */}
      <div className="absolute w-full h-full top-0 left-0 z-0 overflow-hidden">
        <div className="absolute -right-40 top-40 w-80 h-80 rounded-full bg-blue-500 blur-3xl opacity-10"></div>
        <div className="absolute -left-40 bottom-20 w-80 h-80 rounded-full bg-purple-500 blur-3xl opacity-10"></div>
      </div>
    </section>
  );
};

export default Features;
