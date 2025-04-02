"use client";
import { useRef, useState, useEffect, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Download, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";

const LazyVideo = dynamic(() => import("@/components/general/LazyVideo"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <div className="inline-block w-12 h-12 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin mb-3"></div>
        <p className="text-gray-400 text-sm">Loading video...</p>
      </div>
    </div>
  ),
});

// animated background
const AnimatedBackground = memo(() => (
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
));
AnimatedBackground.displayName = "AnimatedBackground";

// particles component
const Particles = memo(() => {
  type Particle = {
    id: number;
    left: string;
    top: string;
    duration: number;
    delay: number;
    distance: number;
  };

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 5,
        delay: Math.random() * 5,
        distance: Math.random() * -100,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, particle.distance],
            opacity: [0.2, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
});
Particles.displayName = "Particles";

// Feature card component
const FeatureCard = memo(
  ({
    position,
    icon,
    title,
    description,
    delay,
  }: {
    position: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
  }) => (
    <motion.div
      className={`hidden md:block absolute ${position} p-2 bg-gray-900/70 backdrop-blur-sm rounded-lg shadow-lg border border-gray-800 z-20`}
      initial={{ opacity: 0, x: position.includes("right") ? 20 : -20 }}
      animate={{ opacity: 0.6, x: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h4 className="text-xs font-semibold text-white">{title}</h4>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  )
);
FeatureCard.displayName = "FeatureCard";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Use transform with memoized values
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
                {/* Placeholder gradient shown when video isn't loaded */}
                {(!isVideoLoaded || !isMounted) && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block w-12 h-12 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin mb-3"></div>
                      <p className="text-gray-400 text-sm">Loading video...</p>
                    </div>
                  </div>
                )}

                {isMounted && (
                  <LazyVideo
                    src="/videos/about.mp4"
                    onLoaded={() => setIsVideoLoaded(true)}
                  />
                )}
              </div>

              {/* Feature Cards*/}
              {isMounted && (
                <>
                  <FeatureCard
                    position="bottom-10 left-10"
                    icon={
                      <span className="text-xs font-bold bg-blue-500 w-full h-full flex items-center justify-center rounded-full">
                        AI
                      </span>
                    }
                    title="Smart Analysis"
                    description="Real-time predictions"
                    delay={1}
                  />
                  <FeatureCard
                    position="top-10 right-10"
                    icon={
                      <span className="text-xs font-bold bg-purple-500 w-full h-full flex items-center justify-center rounded-full">
                        99%
                      </span>
                    }
                    title="Accuracy Rate"
                    description="Verified results"
                    delay={1.2}
                  />
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* background components */}
      <AnimatedBackground />
      <Particles />
    </section>
  );
};

export default Hero;
