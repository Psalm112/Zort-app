import React from "react";

interface TabProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      active
        ? "bg-blue-600 text-white"
        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
    }`}
  >
    {children}
  </button>
);

export default Tab;
