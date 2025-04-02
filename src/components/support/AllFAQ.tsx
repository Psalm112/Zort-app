"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategoryProps {
  title: string;
  questions: FAQItem[];
  delay: number;
}

const FAQCategory: React.FC<FAQCategoryProps> = ({
  title,
  questions,
  delay,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="w-full"
    >
      <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        {title}
      </h3>
      <div className="space-y-4">
        {questions.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center p-4 text-left bg-gray-800/50 hover:bg-gray-800/80 transition duration-200"
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-800/30 text-gray-300">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const generalQuestions = [
    {
      question: "What is ZORT, and how does it work?",
      answer:
        "ZORT is an AI-powered sports betting analytics platform that helps you track, analyze, and improve your betting performance. It scans your bet slips, tracks your bets, and provides detailed analytics to help you make more informed betting decisions.",
    },
    {
      question: "Is ZORT free to use?",
      answer:
        "ZORT offers a free basic plan with limited features. For access to advanced analytics, historical performance trends, and other premium features, you can upgrade to our Pro or Premium plans.",
    },
    {
      question: "Which sportsbooks are compatible with ZORT?",
      answer:
        "ZORT is compatible with major sportsbooks including DraftKings, FanDuel, BetMGM, Caesars, and many others. We're constantly adding support for more platforms.",
    },
  ];

  const accountQuestions = [
    {
      question: "How do I create an account?",
      answer:
        "Download the ZORT app from the App Store or Google Play, or visit our website. Click on 'Sign Up', enter your email address, create a password, and follow the verification steps to complete registration.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription at any time by going to Account Settings > Subscription > Cancel Subscription. Your premium features will remain active until the end of your billing cycle.",
    },
    {
      question: "Can I switch between plans?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle. Any proration or adjustments will be shown before you confirm.",
    },
  ];

  const featureQuestions = [
    {
      question: "How does the AI Bet Slip Scanner work?",
      answer:
        "Our AI Bet Slip Scanner uses machine learning to recognize and process data from your bet slips. Simply take a photo of your bet slip within the app, and our AI will extract all relevant information including stakes, odds, and selections.",
    },
    {
      question: "Can I track bets from multiple sportsbooks?",
      answer:
        "Yes! ZORT allows you to track bets from multiple sportsbooks in one place, giving you a comprehensive overview of your entire betting portfolio.",
    },
    {
      question: "How accurate are the betting insights?",
      answer:
        "Our AI-powered betting insights are based on your historical data, statistical analysis, and betting patterns. While we aim for high accuracy, all insights should be used as one of many factors in your decision-making process.",
    },
  ];

  const securityQuestions = [
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-standard encryption and security measures to protect your data. We never share your personal information with third parties without your explicit consent.",
    },
    {
      question: "How does ZORT handle privacy?",
      answer:
        "We take privacy seriously. ZORT only collects data necessary for the app's functionality. You can review our complete Privacy Policy to learn more about how we handle your data.",
    },
    {
      question: "Can I delete my account and data?",
      answer:
        "Yes, you can request account deletion through Settings > Privacy > Delete Account. This will permanently remove all your account information and betting data from our servers.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to the most common questions about ZORT and its
            features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <FAQCategory
            title="General Questions"
            questions={generalQuestions}
            delay={0.1}
          />
          <FAQCategory
            title="Account & Subscription"
            questions={accountQuestions}
            delay={0.2}
          />
          <FAQCategory
            title="Features & Usage"
            questions={featureQuestions}
            delay={0.3}
          />
          <FAQCategory
            title="Security & Privacy"
            questions={securityQuestions}
            delay={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-4">
            Didnt&apos; find what you&apos;re looking for?
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-full transition duration-200">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
