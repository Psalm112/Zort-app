"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { ChevronRight } from "lucide-react";

import CEO from "../../../public/images/team/ceo.jpg";
import CTO from "../../../public/images/team/cto.jpg";
import HeadofProduct from "../../../public/images/team/headofproduct.jpg";
import LeadDataScientist from "../../../public/images/team/datascientist.jpg";

const TheTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "Former sports analyst with a passion for data science and betting optimization.",
      imagePath: CEO,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "AI expert with a background in developing machine learning solutions for financial analytics.",
      imagePath: CTO,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "James Wilson",
      role: "Head of Product",
      bio: "UX specialist focused on creating intuitive interfaces for complex data visualization.",
      imagePath: HeadofProduct,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Maya Patel",
      role: "Lead Data Scientist",
      bio: "Statistics PhD with expertise in predictive modeling and betting trend analysis.",
      imagePath: LeadDataScientist,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
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
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-300 max-w-3xl mx-auto">
            The passionate people behind Zort-App who are dedicated to
            transforming your betting experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/40 h-full backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="h-48 max-md:h-82 relative overflow-hidden">
                <Image
                  src={member.imagePath}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <BsLinkedin size={18} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <BsTwitterX size={18} />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <BsGithub size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Join our growing team of passionate individuals who are
            revolutionizing bet tracking.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>View Open Positions</span>
            <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Background elements */}
      <motion.div
        className="absolute -top-48 -left-48 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"
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

export default TheTeam;
