"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, MessageSquare, Share2, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const communities = [
    {
      title: "Discord Community",
      description:
        "Join our active Discord community to discuss strategies, share insights, and connect with fellow bettors.",
      icon: <MessageSquare size={24} className="text-indigo-400" />,
      memberCount: "5.2K+ members",
      link: "#",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
    },
    {
      title: "Telegram Group",
      description:
        "Get real-time updates, tips, and exclusive content through our dedicated Telegram channel.",
      icon: <Share2 size={24} className="text-blue-400" />,
      memberCount: "8.7K+ subscribers",
      link: "#",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      title: "Zort-App Forum",
      description:
        "Dive deep into detailed discussions, strategy analysis, and community-driven feature requests.",
      icon: <Globe size={24} className="text-cyan-400" />,
      memberCount: "12K+ active users",
      link: "#",
      color: "from-cyan-500 to-teal-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section
      ref={ref}
      id="community"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Users size={24} className="text-blue-400 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Our Community
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-300 max-w-3xl mx-auto">
            Connect with thousands of bettors, share strategies, and get the
            most out of your Zort-App experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {communities.map((community, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${community.bgColor} backdrop-blur-sm rounded-2xl ${community.borderColor} border overflow-hidden hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${community.color} flex items-center justify-center mr-4`}
                  >
                    {community.icon}
                  </div>
                  <h3 className="text-xl font-bold">{community.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{community.description}</p>
                <div className="flex items-center text-sm text-gray-400 mb-6">
                  <Users size={14} className="mr-1" />
                  <span>{community.memberCount}</span>
                </div>
                <Link
                  href={community.link}
                  className="inline-flex items-center text-white bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300"
                >
                  <span>Join Community</span>
                  <ArrowRight
                    size={14}
                    className="ml-1.5 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Community Guidelines</h3>
              <p className="text-gray-300">
                We pride ourselves on maintaining a respectful, helpful, and
                inclusive community. Check out our community guidelines to
                ensure everyone has a positive experience.
              </p>
            </div>
            <Link
              href="/community-guidelines"
              className="flex-shrink-0 inline-flex items-center bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              <span>View Guidelines</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <motion.div
        className="absolute -top-48 -right-48 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
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

export default Community;
