"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  ChevronRight,
  Trophy as TrophyIcon,
  BarChart2,
  Smartphone,
} from "lucide-react";

const IMAGES = {
  Statistics: "/images/assets/statistics.png",
  BetTracker: "/images/assets/bet-tracker.png",
  Balance: "/images/assets/balance.png",
  Trophy: "/images/assets/trophy.png",
};

interface ScreenData {
  image: string;
  title: string;
  description: string;
}

const FeatureIndicator = memo(
  ({ icon, text }: { icon: React.ReactNode; text: string }) => (
    <motion.div className="flex flex-col items-center" whileHover={{ y: -5 }}>
      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-1 md:mb-2">
        {icon}
      </div>
      <p className="text-xs md:text-sm text-gray-400">{text}</p>
    </motion.div>
  )
);
FeatureIndicator.displayName = "FeatureIndicator";

const ScreenIndicator = memo(
  ({
    isActive,
    onClick,
  }: {
    index?: number;
    isActive: boolean;
    onClick: () => void;
  }) => (
    <motion.div
      className="h-1.5 rounded-full bg-gray-600 cursor-pointer"
      onClick={onClick}
      animate={{
        backgroundColor: isActive ? "#3b82f6" : "#4b5563",
        scale: isActive ? 1.2 : 1,
        width: isActive ? "16px" : "6px",
      }}
      transition={{ duration: 0.3 }}
    />
  )
);
ScreenIndicator.displayName = "ScreenIndicator";

const PARTICLE_POSITIONS = [
  { top: "24%", left: "30%" },
  { top: "43%", left: "30%" },
  { top: "38%", left: "75%" },
  { top: "57%", left: "83%" },
];

const Hero = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const screens: ScreenData[] = [
    {
      image: IMAGES.BetTracker,
      title: "Track Your Bets",
      description: "Keep all your wagers in one place",
    },
    {
      image: IMAGES.Statistics,
      title: "Advanced Analytics",
      description: "Get detailed insights on your performance",
    },
    {
      image: IMAGES.Balance,
      title: "Manage Balance",
      description: "Track your finances across platforms",
    },
  ];

  //screen rotation
  const rotateScreen = useCallback(() => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  }, [screens.length]);

  useEffect(() => {
    setIsMounted(true);

    // Auto-rotate screens every 5 seconds
    const interval = setInterval(rotateScreen, 5000);

    return () => clearInterval(interval);
  }, [rotateScreen]);

  // screen indicator click handler
  const handleScreenIndicatorClick = useCallback((index: number) => {
    setCurrentScreen(index);
  }, []);

  if (!isMounted) {
    return <div className="h-[100vh]"></div>;
  }

  return (
    <section className="relative py-20 sm:py-22 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl h-full max-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center py-6 sm:py-8 md:py-10 lg:py-12">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left z-10"
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6"
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
              className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0"
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
              className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-3 gap-2 md:gap-4 max-w-md mx-auto lg:mx-0 max-lg:mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: <Smartphone size={18} />, text: "Easy Tracking" },
                { icon: <BarChart2 size={18} />, text: "Live Stats" },
                { icon: <TrophyIcon size={18} />, text: "Win More" },
              ].map((item, i) => (
                <FeatureIndicator key={i} icon={item.icon} text={item.text} />
              ))}
            </motion.div>
          </motion.div>

          {/* Phone mockup section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 flex justify-center lg:justify-end"
          >
            {/* Phone Mockup */}
            <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-full">
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
                  className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-4 sm:h-5 md:h-6 bg-black z-30 rounded-b-xl"
                  style={{ boxShadow: "0 0 0 2px rgba(40,40,40,1)" }}
                ></div>

                {/* Phone Device Frame */}
                <div
                  className="relative w-full aspect-[9/19] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-black shadow-2xl"
                  style={{ boxShadow: "0 0 40px rgba(101,101,255,0.3)" }}
                >
                  {/* Screen Content */}
                  <div className="absolute inset-0 overflow-hidden rounded-[1.8rem] sm:rounded-[2.3rem]">
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
                          sizes="(max-width: 640px) 14rem, (max-width: 768px) 16rem, (max-width: 1024px) 20rem, 22rem"
                        />

                        {/* Screen info overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-3 md:p-4 pt-6 sm:pt-8 md:pt-12">
                          <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">
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
                    className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-800 pointer-events-none"
                    style={{
                      boxShadow:
                        "inset 0 0 10px rgba(0,0,0,0.7), inset 0 0 3px rgba(255,255,255,0.1)",
                    }}
                  ></div>

                  {/* Screen Reflections */}
                  <div className="absolute inset-0 opacity-20 overflow-hidden rounded-[1.8rem] sm:rounded-[2.3rem] pointer-events-none">
                    <div className="absolute -left-10 top-0 w-40 h-40 bg-blue-400 rotate-45 blur-xl opacity-20"></div>
                    <div className="absolute right-0 bottom-20 w-32 h-32 bg-purple-500 rotate-12 blur-xl opacity-30"></div>
                  </div>

                  {/* Side Buttons */}
                  <div className="absolute -right-1 top-28 w-1 h-8 sm:h-10 md:h-12 bg-gray-800 rounded-l-md"></div>
                  <div className="absolute -left-1 top-24 w-1 h-5 sm:h-6 md:h-8 bg-gray-800 rounded-r-md"></div>
                  <div className="absolute -left-1 top-36 w-1 h-8 sm:h-10 md:h-12 bg-gray-800 rounded-r-md"></div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute -bottom-12 sm:-bottom-10 left-0 right-0 flex flex-col">
                  <div className="flex flex-row items-center mx-auto gap-2 md:gap-4">
                    {/* Alternative Stats Element for Small Screens Only */}
                    <motion.div
                      className="sm:hidden bg-gray-900/90 backdrop-blur-sm p-1.5 rounded-lg border border-gray-800 w-auto"
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
                          <BarChart2 size={12} className="text-blue-400" />
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
                      className="sm:hidden bg-gray-900/90 backdrop-blur-sm p-1.5 rounded-lg border border-gray-800 flex items-center space-x-1"
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
                        <ScreenIndicator
                          key={index}
                          index={index}
                          isActive={currentScreen === index}
                          onClick={() => handleScreenIndicatorClick(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Trophy */}
              <motion.div
                className="absolute -right-2 sm:-right-4 lg:-right-8 xl:-right-10 
                          -top-4 sm:-top-6 md:-top-8 lg:-top-12 xl:-top-14 
                          w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 
                          h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36"
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
                      src={IMAGES.Trophy}
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

                {/* particles around trophy  */}
                <div className="absolute inset-0 overflow-visible">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full"
                      style={PARTICLE_POSITIONS[i]}
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
                  className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 px-2 py-0.5 md:px-3 md:py-1 rounded-md shadow-lg z-40"
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
                className="absolute hidden sm:block
                           sm:-left-4 md:-left-6 lg:-left-10 xl:-left-16 
                           sm:top-20 md:top-24 lg:top-28 xl:top-32 
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
                  <div className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
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
                           sm:-right-2 md:-right-4 lg:-right-6 xl:-right-10
                           sm:bottom-20 md:bottom-24 lg:bottom-28 xl:bottom-32
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

              {/* glowing effect behind phone*/}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 opacity-30 blur-3xl rounded-full bg-gradient-radial from-blue-400/40 to-purple-500/20"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements  */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-24 -left-24 w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>
        <div className="absolute top-1/4 left-1/3 w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 bg-indigo-500 rounded-full opacity-5 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
