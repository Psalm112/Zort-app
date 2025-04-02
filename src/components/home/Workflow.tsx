"use client";
import { motion } from "framer-motion";
import { Scan, TrendingUp, Smartphone, Compass } from "lucide-react";
import Image from "next/image";
import ZortWorkflow from "../../../public/images/assets/zort-workflow-svg.svg";

const workflowSteps = [
  {
    icon: Scan,
    title: "Scan Your Bet Slip",
    description:
      "Simply snap a photo of your bet slip and our AI will instantly capture all the details.",
    color: "from-blue-500 to-blue-400",
  },
  {
    icon: Smartphone,
    title: "Track Your Bets",
    description:
      "Your bets are automatically tracked in real-time with live updates and results.",
    color: "from-purple-500 to-purple-400",
  },
  {
    icon: TrendingUp,
    title: "Analyze Performance",
    description:
      "Get detailed insights about your betting patterns, wins, losses, and ROI.",
    color: "from-green-500 to-green-400",
  },
  {
    icon: Compass,
    title: "Optimize Strategy",
    description:
      "Use AI-powered recommendations to improve your betting decisions.",
    color: "from-amber-500 to-amber-400",
  },
];

const Workflow = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            How Zort Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our simple four-step process makes bet tracking effortless and
            insightful
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 h-full group hover:border-blue-500 transition-all duration-300">
                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>

                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                    <div className="w-8 h-0.5 bg-blue-500"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div
          className="mt-20 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
          data-aos="zoom-in"
        >
          <Image
            src={ZortWorkflow}
            alt="Zort App Workflow"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Workflow;
