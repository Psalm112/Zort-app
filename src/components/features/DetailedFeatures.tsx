import React from "react";
import { DetailedFeatureProps } from "@/types/features";
import DetailedFeature from "./DetailedFeature";
import RealTimeUpdates from "../../../public/images/assets/real-time-updates.svg";
import HistoricalTrends from "./charts/HistoricalTends";
import SportsBooks from "../../../public/images/assets/sportsbook-integration.svg";
import CustomizableAlert from "../../../public/images/assets/customizable-alerts.svg";
import DataVisualization from "./charts/DataVisualization";
import CrossPlatformSync from "../../../public/images/assets/cross-platform-sync.svg";
import PersonalizedExperience from "../../../public/images/assets/personalized-experience.svg";
import GamblingSafety from "../../../public/images/assets/gambling-safety-svg.svg";

const DetailedFeatures: React.FC = () => {
  // Detailed features data
  const detailedFeatures: DetailedFeatureProps[] = [
    {
      id: "real-time-updates",
      title: "Real-Time Updates & Notifications",
      description:
        "Stay informed with instant alerts and live updates on your bets, ensuring you never miss crucial moments or opportunities.",
      benefits: [
        "Instant notifications for bet outcomes and status changes",
        "Live odds tracking with real-time market movements",
        "Customizable alerts for specific events or threshold changes",
        "Push notifications across all your devices",
      ],
      graphic: {
        image: {
          src: RealTimeUpdates,
          alt: "Real-time betting updates and notifications interface",
        },
      },
    },
    {
      id: "historical-trends",
      title: "Historical Trends & Performance Analysis",
      description:
        "Dive deep into your betting history with comprehensive analytics that reveal patterns and help optimize your strategy.",
      benefits: [
        "Detailed performance metrics across different sports and bet types",
        "Visual trend analysis showing your betting evolution over time",
        "Comparative analytics against market averages",
        "Identify your strengths and opportunities for improvement",
      ],
      graphic: {
        chart: <HistoricalTrends />,
      },
      reverse: true,
    },
    {
      id: "sports-books",
      title: "Integration with Sportsbooks",
      description:
        "Connect seamlessly with leading sportsbooks to automatically import your bets and maintain a unified record of all your activity.",
      benefits: [
        "One-click import from major betting platforms",
        "Automatic synchronization of odds and results",
        "Unified view across multiple sportsbooks",
        "No manual data entry required",
      ],
      graphic: {
        image: {
          src: SportsBooks,
          alt: "Sportsbook integration interface showing connected platforms",
        },
      },
    },
    {
      id: "customizable-alerts",
      title: "Customizable Alerts & Settings",
      description:
        "Tailor your notification preferences to focus only on what matters to you, with flexible settings for every aspect of your betting experience.",
      benefits: [
        "Personalized alert thresholds for odds movements",
        "Game start, half-time, and critical moment notifications",
        "Custom alerts for specific teams, leagues, or bet types",
        "Schedule when and how you receive notifications",
      ],
      graphic: {
        image: {
          src: CustomizableAlert,
          alt: "Customizable betting alerts settings screen",
        },
      },
      reverse: true,
    },
    {
      id: "data-visualization",
      title: "Advanced Data Visualization",
      description:
        "Transform complex betting data into clear, intuitive visuals that make it easy to spot trends and make informed decisions.",
      benefits: [
        "Interactive charts and graphs for performance tracking",
        "Heat maps showing your most successful bet types",
        "Profit/loss visualization across time periods",
        "Visual bankroll management tracking",
      ],
      graphic: {
        chart: <DataVisualization />,
      },
    },
    {
      id: "responsible-gambling",
      title: "Responsible Gambling Tools",
      description:
        "Stay in control of your betting habits with comprehensive tools designed to promote healthy, sustainable betting practices.",
      benefits: [
        "Set customizable deposit and loss limits",
        "Track time spent on betting activities",
        "Self-exclusion options for specific periods",
        "Spending analysis with budget recommendations",
      ],
      graphic: {
        image: {
          src: GamblingSafety,
          alt: "Responsible gambling tools and settings interface",
        },
      },
      reverse: true,
    },
    {
      id: "cross-platform-sync",
      title: "Cross-Platform Sync",
      description:
        "Access your betting portfolio seamlessly across all your devices with perfect synchronization and a consistent user experience.",
      benefits: [
        "Real-time sync between mobile, tablet, and desktop",
        "Consistent interface across all platforms",
        "Place bets on one device, track on another",
        "Offline mode with automatic syncing when reconnected",
      ],
      graphic: {
        image: {
          src: CrossPlatformSync,
          alt: "Cross-platform synchronization across devices",
        },
      },
    },
    {
      id: "personalized-experience",
      title: "Personalized User Experience",
      description:
        "Make Zort truly yours with extensive customization options that adapt to your unique betting style and preferences.",
      benefits: [
        "Drag-and-drop dashboard customization",
        "Favorite sports and leagues for quick access",
        "Personalized insights based on your betting history",
        "Custom themes and display options",
      ],
      graphic: {
        image: {
          src: PersonalizedExperience,
          alt: "Personalized user dashboard with customizable widgets",
        },
      },
      reverse: true,
    },
  ];

  return (
    <section className="py-8">
      {/* Divider */}
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      {detailedFeatures.map((feature) => (
        <DetailedFeature key={feature.id} {...feature} />
      ))}
    </section>
  );
};

export default DetailedFeatures;
