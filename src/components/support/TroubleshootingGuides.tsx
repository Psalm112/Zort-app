import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import ScanBetSlip from "../../../public/images/guides/scan-bet-slip-svg.svg";
import AnalyticsDashboard from "../../../public/images/guides/analytics-dashboard-svg.svg";
import Notifications from "../../../public/images/guides/notifications-svg.svg";
import AiBettingInsights from "../../../public/images/guides/ai-betting-insights-svg.svg";
import SyncingSportsbook from "../../../public/images/guides/syncing-sportsbooks-svg.svg";
import Troubleshoot from "../../../public/images/guides/troubleshooting-svg.svg";

interface GuideCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isVideo?: boolean;
  delay: number;
}

const GuideCard: React.FC<GuideCardProps> = ({
  title,
  description,
  imageUrl,
  isVideo = false,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-gray-800/40 border border-gray-700 rounded-xl overflow-hidden flex flex-col"
    >
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>
          </div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
        <button className="flex items-center text-blue-400 hover:text-blue-300 transition duration-200 font-medium">
          Read Guide <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </motion.div>
  );
};

const TroubleshootingGuides: React.FC = () => {
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
          <h2 className="text-3xl font-bold mb-4">Troubleshooting Guides</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Step-by-step guides and video tutorials to help you get the most out
            of ZORT.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GuideCard
            title="How to Scan Your First Bet Slip"
            description="Learn how to use the AI scanner to automatically import and track your bets."
            imageUrl={ScanBetSlip}
            isVideo={true}
            delay={0.1}
          />
          <GuideCard
            title="Understanding Your Analytics Dashboard"
            description="A complete breakdown of all the metrics and visualizations in your analytics dashboard."
            imageUrl={AnalyticsDashboard}
            delay={0.2}
          />
          <GuideCard
            title="Setting Up Notifications"
            description="Configure real-time notifications to never miss important betting opportunities."
            imageUrl={Notifications}
            delay={0.3}
          />
          <GuideCard
            title="Using AI Betting Insights"
            description="Learn how to interpret and apply AI-generated betting insights to improve your strategy."
            imageUrl={AiBettingInsights}
            delay={0.4}
          />
          <GuideCard
            title="Syncing Multiple Sportsbooks"
            description="Connect all your sportsbook accounts for comprehensive tracking and analysis."
            imageUrl={SyncingSportsbook}
            isVideo={true}
            delay={0.5}
          />
          <GuideCard
            title="Troubleshooting Account Issues"
            description="Solutions for common account problems and how to resolve them quickly."
            imageUrl={Troubleshoot}
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default TroubleshootingGuides;
