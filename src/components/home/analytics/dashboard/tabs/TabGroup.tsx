import React from "react";
import Tab from "./Tab";

interface TabGroupProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabGroup: React.FC<TabGroupProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <Tab
          key={tab}
          active={activeTab === tab.toLowerCase()}
          onClick={() => onTabChange(tab.toLowerCase())}
        >
          {tab}
        </Tab>
      ))}
    </div>
  );
};

export default TabGroup;
