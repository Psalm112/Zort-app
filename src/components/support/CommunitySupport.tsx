import React from "react";
import { motion } from "framer-motion";
import { Users, MessageSquare, HelpCircle } from "lucide-react";

interface CommunitySectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  delay: number;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({
  icon,
  title,
  description,
  buttonText,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-gray-800/40 border border-gray-700 rounded-xl p-6"
    >
      <div className="rounded-full bg-purple-900/30 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
        {buttonText}
      </button>
    </motion.div>
  );
};

const CommunitySupport: React.FC = () => {
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
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Connect with other ZORT users to share insights, tips, and get
            community-driven support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CommunitySection
            icon={<Users className="h-6 w-6 text-purple-400" />}
            title="Discord Community"
            description="Join our vibrant Discord community to chat with other bettors, share strategies, and get real-time help."
            buttonText="Join Discord"
            delay={0.1}
          />
          <CommunitySection
            icon={<MessageSquare className="h-6 w-6 text-purple-400" />}
            title="Telegram Group"
            description="Connect with fellow users in our Telegram group for daily insights, updates, and community discussions."
            buttonText="Join Group"
            delay={0.2}
          />
          <CommunitySection
            icon={<HelpCircle className="h-6 w-6 text-purple-400" />}
            title="Help Forum"
            description="Browse our help forum to find solutions from other users or post your own questions to get community assistance."
            buttonText="Visit Forum"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySupport;
