"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FaqItemProps } from "@/types/features";

const FAQ = ({
  faqItems,
  headerText = "Frequently Asked Questions",
  headerDesc,
}: {
  faqItems: FaqItemProps[];
  headerText?: string;
  headerDesc?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-1200 to-gray-900 "></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTEwaDJ2MTBoLTJ6bS02IDZ2LTEwaDJ2MTBoLTJ6TTMwIDE4djRoLTJ2LTRoMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <HelpCircle className="text-blue-400 w-12 h-12" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {headerText}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {headerDesc}
            <a
              href="mailto:help@zort.com"
              className="text-blue-400 hover:underline transition-all"
            >
              help@zort.com
            </a>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-700 rounded-lg overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-5 bg-gray-800/70 hover:bg-gray-750/90 transition-colors duration-300 focus:outline-none group"
              >
                <span className="font-medium text-white text-lg group-hover:text-blue-400 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-gray-400 group-hover:text-blue-400 w-5 h-5 transform transition-all duration-300 ${
                    activeIndex === index ? "rotate-180 text-blue-400" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-gray-800/30"
                  >
                    <div className="p-5 text-gray-300 border-t border-gray-700/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
