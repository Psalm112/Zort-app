"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Workflow from "@/components/home/Workflow";
import Partners from "@/components/home/Partners";
import CallToAction from "@/components/general/CallToAction";
import FAQ from "@/components/general/FAQ";
import Pricing from "@/components/home/Pricing";
import { FaqItemProps } from "@/types/features";

// Dynamic imports with no-SSR option
const AnalyticsDashboard = dynamic(
  () => import("@/components/home/analytics/dashboard/AnalyticsDashboard"),
  { ssr: false }
);

const SocialBetting = dynamic(() => import("@/components/home/SocialBetting"), {
  ssr: false,
});

const Testimonials = dynamic(
  () => import("@/components/general/Testimonials"),
  { ssr: false }
);

const faqs: FaqItemProps[] = [
  {
    question: "What is ZORT?",
    answer:
      "ZORT is an AI-powered sports betting tracking app that helps you analyze your bets, track performance, and make data-driven decisions to improve your betting strategy.",
  },
  {
    question: "How does ZORT work?",
    answer:
      "ZORT allows you to capture bet slips using our AI scanner, automatically processes the details, and provides comprehensive analytics and insights on your betting performance.",
  },
  {
    question: "Can I use ZORT for all types of sports bets?",
    answer:
      "Yes! ZORT supports all major sports and bet types, including moneyline, spread, over/under, parlays, and more.",
  },
  {
    question: "Is ZORT free to use?",
    answer:
      "ZORT offers a free basic version with limited features. For full access to all premium features, analytics, and unlimited bet tracking, we offer affordable subscription plans.",
  },
  {
    question: "Is my data secure on ZORT?",
    answer:
      "Absolutely. We use military-grade encryption to protect your data. Your personal information and betting history are encrypted and stored securely.",
  },
  {
    question: "Do you support manual bets?",
    answer:
      "Yes, in addition to scanning bet slips, you can manually enter bets directly into the app for tracking and analysis.",
  },
  {
    question: "Can I hide my bets so other people can't see them?",
    answer:
      "Yes, ZORT provides privacy settings that allow you to control what information is visible to others. You can keep your bets completely private if you prefer.",
  },
];

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Import AOS only on client-side
    const initAOS = async () => {
      try {
        const AOSModule = await import("aos");
        const AOS = AOSModule.default;
        require("aos/dist/aos.css");

        AOS.init({
          duration: 800,
          once: false,
          easing: "ease-out-cubic",
          mirror: true,
          offset: 100,
          disable: window.innerWidth < 768,
        });

        return AOS;
      } catch (error) {
        console.error("Failed to initialize AOS:", error);
        return null;
      }
    };

    let aosInstance: typeof import("aos").default | null = null;

    initAOS().then((aos) => {
      if (!aos) return;

      aosInstance = aos;

      const handleResize = () => {
        aosInstance?.refresh();
      };

      window.addEventListener("resize", handleResize);

      // Return cleanup function
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });

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

    // Clean up all event listeners on unmount
    return () => {
      anchors.forEach((anchor) => {
        const handler = anchorClickHandlers.get(anchor);
        if (handler) {
          anchor.removeEventListener("click", handler);
        }
      });
    };
  }, []);

  // Default loading components
  const loadingDashboard = (
    <div className="h-96 flex items-center justify-center">
      Loading analytics dashboard...
    </div>
  );

  const loadingSection = (
    <div className="h-64 flex items-center justify-center">Loading...</div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/4 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Features />
        {isClient ? <AnalyticsDashboard /> : loadingDashboard}
        <Workflow />
        {isClient ? <SocialBetting /> : loadingSection}
        {isClient ? <Testimonials /> : loadingSection}
        <Partners />
        <Pricing />
        <FAQ
          faqItems={faqs}
          headerDesc="Any questions left? Contact us at "
          headerText="Have questions?"
        />
        <CallToAction />
      </div>
    </div>
  );
}
