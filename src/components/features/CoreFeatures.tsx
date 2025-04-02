import React from "react";
import FeatureCard from "./FeatureCard";
import { FeatureCardProps } from "@/types/features";
import { BarChart2, Brain, Scan, Shield } from "lucide-react";

const CoreFeatures: React.FC = () => {
  // Core features data
  const coreFeatures: FeatureCardProps[] = [
    {
      id: "ai-bet-slip-scanner",
      title: "AI Bet Slip Scanner",
      description:
        "Instantly digitize physical bet slips with our advanced OCR technology. Never manually enter bets again.",
      icon: Scan,
      color: "bg-blue-500/20",
    },
    {
      id: "intelligent-analytics",
      title: "Intelligent Analytics",
      description:
        "AI-powered insights that analyze your betting patterns and provide actionable recommendations.",
      icon: Brain,
      color: "bg-purple-500/20",
    },
    {
      id: "smart-dashboard",
      title: "Smart Dashboard",
      description:
        "Customizable interface that provides a comprehensive overview of your betting portfolio at a glance.",
      icon: BarChart2,
      color: "bg-green-500/20",
    },
    {
      id: "secure-and-private",
      title: "Secure & Private",
      description:
        "Bank-level encryption ensures your betting data remains private and protected at all times.",
      icon: Shield,
      color: "bg-amber-500/20",
    },
  ];

  return (
    <section className="py-16 container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">Core Features</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Our platform combines cutting-edge technology with user-friendly
          design to revolutionize your betting experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreFeatures.map((feature, index) => (
          <div key={feature.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreFeatures;
