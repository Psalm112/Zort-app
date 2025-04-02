import React from "react";
import { FeatureCardProps } from "@/types/features";

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  title,
  description,
  icon: Icon,
  color,
}) => {
  return (
    <div
      id={id}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 flex flex-col h-full border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
      data-aos="fade-up"
    >
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 ${color} group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm flex-grow">{description}</p>
    </div>
  );
};

export default FeatureCard;
