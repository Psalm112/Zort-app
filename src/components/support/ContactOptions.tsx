import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, Clock } from "lucide-react";

const ContactCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  delay: number;
}> = ({ icon, title, description, buttonText, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 flex flex-col"
    >
      <div className="rounded-full bg-purple-900/30 w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 w-full">
        {buttonText}
      </button>
    </motion.div>
  );
};

const ContactOptions: React.FC = () => {
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
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the communication channel that works best for you. Our
            support team is ready to assist.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactCard
            icon={<MessageCircle className="h-6 w-6 text-purple-400" />}
            title="Live Chat"
            description="Get instant answers from our support team during business hours."
            buttonText="Start Chat"
            delay={0.1}
          />
          <ContactCard
            icon={<Mail className="h-6 w-6 text-purple-400" />}
            title="Email Support"
            description="Send us a detailed message and we'll respond within 24 hours."
            buttonText="Send Email"
            delay={0.2}
          />
          <ContactCard
            icon={<Phone className="h-6 w-6 text-purple-400" />}
            title="Phone Support"
            description="Premium users can contact our dedicated phone support line."
            buttonText="Call Us"
            delay={0.3}
          />
          <ContactCard
            icon={<Clock className="h-6 w-6 text-purple-400" />}
            title="Schedule Call"
            description="Book a time slot for a callback from our support team."
            buttonText="Schedule"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;
