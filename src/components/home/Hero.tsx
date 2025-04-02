"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  ChevronRight,
  Trophy as TrophyIcon,
  BarChart2,
  Smartphone,
} from "lucide-react";
import Statistics from "../../../public/images/assets/statistics.png";
import BetTracker from "../../../public/images/assets/bet-tracker.png";
import Balance from "../../../public/images/assets/balance.png";
import Trophy from "../../../public/images/assets/trophy.png";

const Hero = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const particlesRef = useRef(null);

  const screens = [
    {
      image: BetTracker,
      title: "Track Your Bets",
      description: "Keep all your wagers in one place",
    },
    {
      image: Statistics,
      title: "Advanced Analytics",
      description: "Get detailed insights on your performance",
    },
    {
      image: Balance,
      title: "Manage Balance",
      description: "Track your finances across platforms",
    },
  ];

  useEffect(() => {
    setIsMounted(true);

    // Auto-rotate screens every 5 seconds
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Generate deterministic particle positions instead of random
  const getParticlePosition = (index: number) => {
    const positions = [
      { top: "24%", left: "30%" },
      { top: "43%", left: "30%" },
      { top: "38%", left: "75%" },
      { top: "57%", left: "83%" },
    ];
    return positions[index % positions.length];
  };

  if (!isMounted) {
    return <div className="min-h-screen"></div>;
  }

  return (
    <section className="relative min-h-screen flex items-center py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left z-10"
          >
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-white">Transform Your</span> <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Betting Strategy
              </span>
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              AI-powered bet tracking, real-time analytics, and intelligent
              insights to elevate your betting game
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Link href="/download" className="block">
                <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <Download size={16} />
                  <span>Get App</span>
                </div>
              </Link>

              <Link href="/features" className="block">
                <div className="flex items-center justify-center space-x-1 text-white font-medium py-2 md:py-3 px-4 md:px-6 rounded-full border border-gray-700 hover:border-blue-400 transition-all duration-300 cursor-pointer">
                  <span>Learn More</span>
                  <ChevronRight size={14} />
                </div>
              </Link>
            </motion.div>

            {/* Feature indicators */}
            <motion.div
              className="mt-8 md:mt-12 grid grid-cols-3 gap-2 md:gap-4 max-w-md mx-auto lg:mx-0 max-lg:mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: <Smartphone size={18} />, text: "Easy Tracking" },
                { icon: <BarChart2 size={18} />, text: "Live Stats" },
                { icon: <TrophyIcon size={18} />, text: "Win More" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-1 md:mb-2">
                    {item.icon}
                  </div>
                  <p className="text-xs md:text-sm text-gray-400">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 flex justify-center lg:justify-end"
          >
            {/* Phone Mockup */}
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-full">
              {/* Floating animation for phone */}
              <motion.div
                className="relative"
                initial={{ y: 0 }}
                animate={{
                  y: [-10, 10, -10],
                  rotateZ: [-1, 1, -1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Phone Notch */}
                <div
                  className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-black z-30 rounded-b-xl"
                  style={{ boxShadow: "0 0 0 2px rgba(40,40,40,1)" }}
                ></div>

                {/* Phone Device Frame */}
                <div
                  className="relative w-full aspect-[9/19] rounded-[2.5rem] overflow-hidden bg-black shadow-2xl"
                  style={{ boxShadow: "0 0 40px rgba(101,101,255,0.3)" }}
                >
                  {/* Screen Content with Animation */}
                  <div className="absolute inset-0 overflow-hidden rounded-[2.3rem]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentScreen}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          duration: 0.5,
                        }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={screens[currentScreen].image}
                          alt={`App Screen ${currentScreen + 1}`}
                          fill
                          className="object-cover"
                          priority={currentScreen === 0}
                        />

                        {/* Screen info overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4 pt-8 md:pt-12">
                          <h3 className="text-white font-bold text-base md:text-lg">
                            {screens[currentScreen].title}
                          </h3>
                          <p className="text-gray-300 text-xs md:text-sm">
                            {screens[currentScreen].description}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Phone Frame Overlay */}
                  <div
                    className="absolute inset-0 rounded-[2.5rem] border border-gray-800 pointer-events-none"
                    style={{
                      boxShadow:
                        "inset 0 0 10px rgba(0,0,0,0.7), inset 0 0 3px rgba(255,255,255,0.1)",
                    }}
                  ></div>

                  {/* Screen Reflections */}
                  <div className="absolute inset-0 opacity-20 overflow-hidden rounded-[2.3rem] pointer-events-none">
                    <div className="absolute -left-10 top-0 w-40 h-40 bg-blue-400 rotate-45 blur-xl opacity-20"></div>
                    <div className="absolute right-0 bottom-20 w-32 h-32 bg-purple-500 rotate-12 blur-xl opacity-30"></div>
                  </div>

                  {/* Side Buttons */}
                  <div className="absolute -right-1 top-28 w-1 h-10 md:h-12 bg-gray-800 rounded-l-md"></div>
                  <div className="absolute -left-1 top-24 w-1 h-6 md:h-8 bg-gray-800 rounded-r-md"></div>
                  <div className="absolute -left-1 top-36 w-1 h-10 md:h-12 bg-gray-800 rounded-r-md"></div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute -bottom-16 sm:-bottom-12 left-0 right-0 flex flex-col">
                  <div className="flex flex-row items-center mx-auto gap-2 md:gap-4">
                    {/* Alternative Stats Element for Small Screens Only */}
                    <motion.div
                      className="sm:hidden
                           bg-gray-900/90 backdrop-blur-sm p-1.5 rounded-lg border border-gray-800
                           w-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.2 }}
                      style={{
                        boxShadow:
                          "0 10px 25px -5px rgba(0,0,0,0.3), 0 0 15px -5px rgba(59,130,246,0.5)",
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <BarChart2 size={14} className="text-blue-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Win Rate</p>
                          <motion.p
                            className="text-xs font-bold text-white"
                            animate={{
                              color: ["#ffffff", "#3b82f6", "#ffffff"],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            +27.5%
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                    {/* Alternative Notification for Small Screens Only */}
                    <motion.div
                      className="sm:hidden
                           bg-gray-900/90 backdrop-blur-sm p-1.5 rounded-lg border border-gray-800
                           flex items-center space-x-1"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                      style={{
                        boxShadow:
                          "0 10px 25px -5px rgba(0,0,0,0.3), 0 0 15px -5px rgba(124,58,237,0.5)",
                      }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-green-500"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      ></motion.div>
                      <p className="text-xs text-gray-300 whitespace-nowrap">
                        New bet won!
                      </p>
                    </motion.div>
                  </div>

                  <div className="flex justify-between items-center px-4 mt-2">
                    <div className="flex space-x-1 md:space-x-2 mx-auto">
                      {screens.map((_, index) => (
                        <motion.div
                          key={index}
                          className="h-1.5 rounded-full bg-gray-600 cursor-pointer"
                          onClick={() => setCurrentScreen(index)}
                          animate={{
                            backgroundColor:
                              currentScreen === index ? "#3b82f6" : "#4b5563",
                            scale: currentScreen === index ? 1.2 : 1,
                            width: currentScreen === index ? "16px" : "6px",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Trophy */}
              <motion.div
                className="absolute -right-4 sm:-right-6 lg:-right-10 -top-6 sm:-top-8 lg:-top-14 w-24 sm:w-28 lg:w-36 h-24 sm:h-28 lg:h-36"
                initial={{ opacity: 0, x: 20, y: 20, rotate: -15 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                <div className="relative">
                  {/* trophy image */}
                  <motion.div
                    animate={{ rotate: [0, 3, 0, -2, 0], y: [0, -3, 0] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    <Image
                      src={Trophy}
                      alt="Trophy"
                      width={120}
                      height={120}
                      className="object-contain drop-shadow-xl w-full h-auto"
                      priority
                    />
                  </motion.div>

                  {/* blue glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full z-0 blur-md"
                    animate={{
                      boxShadow: [
                        "0 0 20px 6px rgba(59,130,246,0.3)",
                        "0 0 40px 12px rgba(59,130,246,0.5)",
                        "0 0 20px 6px rgba(59,130,246,0.3)",
                      ],
                      scale: [0.9, 1.1, 0.9],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Trophy metallic shine effect */}
                  <motion.div
                    className="absolute top-1/3 left-0 w-2/3 h-1/5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 blur-sm z-30 transform -rotate-30"
                    animate={{
                      opacity: [0, 0.7, 0],
                      left: ["-50%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 3,
                    }}
                  />
                </div>

                {/* Animated particles around trophy */}
                <div
                  className="absolute inset-0 overflow-visible"
                  ref={particlesRef}
                >
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full"
                      style={getParticlePosition(i)}
                      animate={{
                        x: [0, i % 2 === 0 ? 10 : -10, 0],
                        y: [0, i % 3 === 0 ? -10 : 10, 0],
                        opacity: [0, 0.9, 0],
                        scale: [0.2, 1, 0.2],
                      }}
                      transition={{
                        duration: 2 + (i % 2),
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                {/* Achievement badge */}
                <motion.div
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 px-2 py-0.5 md:px-3 md:py-1 rounded-md shadow-lg z-40"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
                >
                  <motion.p
                    className="text-xs font-bold text-white tracking-wide whitespace-nowrap"
                    animate={{
                      textShadow: [
                        "0 0 0px white",
                        "0 0 3px white",
                        "0 0 0px white",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Win More
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                className="absolute hidden sm:block lg:block 
                           sm:-left-6 md:-left-8 lg:-left-16 
                           sm:top-24 md:top-28 lg:top-32 
                           bg-gray-900/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-gray-800
                           w-auto"
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                style={{
                  boxShadow:
                    "0 10px 25px -5px rgba(0,0,0,0.3), 0 0 15px -5px rgba(59,130,246,0.5)",
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <BarChart2 size={14} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Win Rate</p>
                    <motion.p
                      className="text-xs md:text-sm font-bold text-white"
                      animate={{ color: ["#ffffff", "#3b82f6", "#ffffff"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      +27.5%
                    </motion.p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Notification Element */}
              <motion.div
                className="absolute hidden sm:block
                           sm:-right-2 md:-right-4 lg:-right-10
                           sm:bottom-24 md:bottom-28 lg:bottom-32
                           bg-gray-900/90 backdrop-blur-sm p-2 rounded-lg border border-gray-800
                           max-w-[110px]"
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                style={{
                  boxShadow:
                    "0 10px 25px -5px rgba(0,0,0,0.3), 0 0 15px -5px rgba(124,58,237,0.5)",
                }}
              >
                <motion.div
                  className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                ></motion.div>
                <p className="text-xs text-gray-300 whitespace-nowrap">
                  New bet won!
                </p>
              </motion.div>

              {/* Glowing Effect Behind Phone */}
              <motion.div
                className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 opacity-30 blur-3xl rounded-full"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(124,58,237,0.2) 70%)",
                    "radial-gradient(circle, rgba(124,58,237,0.4) 0%, rgba(59,130,246,0.2) 70%)",
                    "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(124,58,237,0.2) 70%)",
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>

        <motion.div
          className="absolute top-1/4 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-500 rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
