"use client";

import React, { useEffect } from "react";
import CoreFeatures from "@/components/features/CoreFeatures";
import DetailedFeatures from "@/components/features/DetailedFeatures";
import FAQ from "@/components/general/FAQ";
import Hero from "@/components/features/Hero";
import CallToAction from "@/components/general/CallToAction";
import { FaqItemProps } from "@/types/features";

const faqs: FaqItemProps[] = [
  {
    question: "How accurate is the AI Bet Slip Scanner?",
    answer:
      "Our scanner achieves over 98% accuracy across major sportsbooks and bet types. The AI continuously improves through machine learning to recognize more formats and adapt to new betting slip designs.",
  },
  {
    question: "What is ZORT?",
    answer:
      "ZORT is an AI-powered sports betting tracking app that helps you analyze your bets, track performance, and make data-driven decisions to improve your betting strategy.",
  },
  {
    question: "Can I import my historical betting data?",
    answer:
      "Yes, Zort allows you to import your betting history from major sportsbooks or through CSV upload, giving you a complete picture of your betting performance from day one.",
  },
  {
    question: "Is my betting data secure?",
    answer:
      "Absolutely. We employ bank-level encryption, secure data storage, and strict privacy policies. Your data is never shared with third parties without your explicit consent.",
  },
  {
    question: "Which sportsbooks does Zort integrate with?",
    answer:
      "Zort integrates with over 50 major sportsbooks globally, including DraftKings, FanDuel, BetMGM, Caesars, and many international platforms. We're constantly adding new integrations.",
  },
  {
    question: "Do I need to pay for premium features?",
    answer:
      "Zort offers a free tier with essential tracking features. Premium plans unlock advanced analytics, unlimited bet tracking, and enhanced AI insights at competitive monthly rates.",
  },
  {
    question: "Can I use ZORT for all types of sports bets?",
    answer:
      "Yes! ZORT supports all major sports and bet types, including moneyline, spread, over/under, parlays, and more.",
  },
];

export default function FeaturesPage() {
  // const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // setIsClient(true);

    // AOS setup
    (async () => {
      const AOS = (await import("aos")).default;
      await import("aos/dist/aos.css");

      AOS.init({
        duration: 800,
        once: false,
        easing: "ease-out-cubic",
        offset: 100,
        disable: window.innerWidth < 768,
      });

      const handleResize = () => {
        AOS.refresh();
      };

      window.addEventListener("resize", handleResize);

      // Smooth scroll implementation
      const anchors = document.querySelectorAll('a[href^="#"]');
      const anchorClickHandlers = new Map();

      anchors.forEach((anchor) => {
        const handler = function (e: Event) {
          e.preventDefault();
          const href = anchor.getAttribute("href");
          if (!href) return;

          const target = document.querySelector(href);
          if (!target) return;

          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80,
            behavior: "smooth",
          });
        };

        anchorClickHandlers.set(anchor, handler);
        anchor.addEventListener("click", handler);
      });

      // Return combined cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        anchors.forEach((anchor) => {
          const handler = anchorClickHandlers.get(anchor);
          if (handler) {
            anchor.removeEventListener("click", handler);
          }
        });
      };
    })();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/4 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Hero />
        <CoreFeatures />
        <DetailedFeatures />
        <FAQ
          faqItems={faqs}
          headerDesc="Get answers to common questions about Zort's features and
            capabilities. Still have questions? Contact us at "
        />
        <CallToAction />
      </div>
    </div>
  );
}
