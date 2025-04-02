"use client";
import React from "react";

interface SportDistributionBarProps {
  sport: string;
  percentage: number;
}

const SportDistributionBar: React.FC<SportDistributionBarProps> = ({
  sport,
  percentage,
}) => (
  <div className="space-y-3">
    <div className="flex justify-between items-center">
      <p className="text-gray-300">{sport}</p>
      <p className="text-gray-200 font-bold">{percentage}%</p>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default SportDistributionBar;
