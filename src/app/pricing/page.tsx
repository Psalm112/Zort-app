"use client";

import { useEffect } from "react";
import Hero from "@/components/pricing/Hero";
import PricingPlans from "@/components/pricing/PricingPlans";
import ValueProposition from "@/components/pricing/ValueProposition";
import CallToAction from "@/components/general/CallToAction";
import FAQ from "@/components/general/FAQ";
import { FaqItemProps } from "@/types/features";

const faqs: FaqItemProps[] = [
  {
    question: "What happens after my free trial?",
    answer:
      "After your free trial ends, your account will automatically switch to the Basic plan. You'll need to select a paid plan to continue enjoying premium features. Don't worry, we'll send you a reminder before your trial expires.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time without any cancellation fees. Your premium features will remain active until the end of your current billing period.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 14-day money-back guarantee if you're not satisfied with our premium features. Contact our support team, and we'll process your refund without questions.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, including Visa, Mastercard, and American Express. We also support payments via PayPal, Apple Pay, and Google Pay for your convenience.",
  },
  {
    question: "Can I switch between plans?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new price will take effect at the next billing cycle.",
  },
  {
    question: "How does the AI betting analysis work?",
    answer:
      "Our AI analyzes historical data, betting patterns, and market trends to provide personalized insights and recommendations. It helps identify profitable opportunities and manages risk by learning from your betting history.",
  },
];

export default function PricingPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/4 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <Hero />
        <PricingPlans />
        <ValueProposition />
        <FAQ faqItems={faqs} />
        <CallToAction />
      </div>
    </div>
  );
}
