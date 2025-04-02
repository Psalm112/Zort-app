"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const timelineEvents = [
    {
      year: "2022",
      title: "The Idea",
      description:
        "We saw the struggle bettors faced in manually tracking bets and analyzing trends.",
    },
    {
      year: "2023",
      title: "Launch",
      description:
        "We built and launched Zort-App to simplify bet tracking using AI and automation.",
    },
    {
      year: "2024",
      title: "Growth",
      description:
        "Expanded our user base and enhanced our platform with advanced analytics features.",
    },
    {
      year: "2025",
      title: "Future",
      description:
        "Working to become the industry standard for intelligent bet tracking and analysis.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900/30"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-300 max-w-3xl mx-auto">
            How Zort-App came to be and our journey to transform betting
            analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <div className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">How It Started</h3>
              <p className="text-gray-300 mb-6">
                Frustrated by the limitations of manual bet tracking and
                spreadsheets, our founders—avid sports bettors themselves—set
                out to create something better.
              </p>
              <p className="text-gray-300">
                We saw the struggle bettors faced in manually tracking bets and
                analyzing trends. So, we built Zort-App to simplify the process
                using AI and automation, turning complex data into actionable
                insights.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 relative"
          >
            <div className="relative h-full">
              {/* Timeline line */}
              <div className="absolute left-4 lg:left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 ml-2 lg:ml-0"></div>

              {/* Timeline events */}
              <div className="space-y-12 lg:space-y-16 py-4 ml-14 lg:ml-8">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-14 lg:-left-8 mt-1.5">
                      <motion.div
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center"
                        animate={
                          isInView
                            ? {
                                boxShadow: [
                                  "0 0 0 0 rgba(59,130,246,0.4)",
                                  "0 0 0 10px rgba(59,130,246,0)",
                                  "0 0 0 0 rgba(59,130,246,0)",
                                ],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          delay: 0.5 + index * 0.2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </motion.div>
                    </div>

                    {/* Event content */}
                    <div>
                      <div className="text-xl font-bold text-blue-400">
                        {event.year}
                      </div>
                      <h4 className="text-lg font-bold mt-1 mb-2">
                        {event.title}
                      </h4>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background element */}
      <motion.div
        className="absolute -top-48 -right-48 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default OurStory;
