"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Download, ChevronRight } from "lucide-react";

const Hero = () => {
  //   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[95vh] flex items-center py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-center lg:text-left z-10"
            style={{ opacity, y }}
          >
            {/* <motion.div
              className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                AI-Powered Bet Analysis
              </span>
            </motion.div> */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-white">Smart Betting</span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Powered by AI
              </span>
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Track, analyze, and optimize your bets with data-driven insights
              and AI recommendations. Join thousands of bettors making smarter
              decisions with Zort-App.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Link href="/download" className="block">
                <motion.div
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={16} />
                  <span>Download Now</span>
                </motion.div>
              </Link>
              <Link href="/features" className="block">
                <motion.div
                  className="flex items-center justify-center space-x-1 text-white font-medium py-3 px-6 rounded-full border border-gray-700 hover:border-blue-400 transition-all duration-300 cursor-pointer"
                  whileHover={{ borderColor: "#60a5fa", scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>See Features</span>
                  <ChevronRight size={14} />
                </motion.div>
              </Link>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start mt-8 text-sm text-gray-400"
            >
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-gray-900 bg-gradient-to-br from-blue-${
                      i * 100
                    } to-purple-${i * 100}`}
                  ></div>
                ))}
              </div>
              <span>Trusted by 10,000+ bettors worldwide</span>
            </motion.div> */}
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 relative flex justify-center"
            style={{ opacity }}
          >
            <div className="relative w-full max-w-2xl pt-8 pb-8 px-6 md:px-12">
              <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                {/* HTML5 Video Element with Autoplay, Loop, Muted, and Poster */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover absolute inset-0"
                  poster="https://via.placeholder.com/800x450.png?text=Video+Thumbnail"
                  autoPlay
                  loop
                  muted
                  playsInline
                  //   onLoadedData={() => setIsVideoLoaded(true)}
                >
                  <source src="/videos/about.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Floating Feature Cards (Adjusted for unobtrusiveness) */}
              <motion.div
                className="hidden md:block absolute bottom-10 left-10 p-2 bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-lg border border-gray-800 z-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-xs font-bold">AI</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Smart Analysis
                    </h4>
                    <p className="text-xs text-gray-400">
                      Real-time predictions
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="hidden md:block absolute top-10 right-10 p-2 bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-lg border border-gray-800 z-20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.6, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                    <span className="text-xs font-bold">99%</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      Accuracy Rate
                    </h4>
                    <p className="text-xs text-gray-400">Verified results</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"
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
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"
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
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full opacity-5 blur-3xl"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      {/* Decorative particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100],
              opacity: [0.2, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
