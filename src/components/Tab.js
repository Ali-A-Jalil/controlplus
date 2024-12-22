import React from "react";

const Tab = ({ tabs, activeTab, setActiveTab }) => (
  <div className="flex border-b mb-6">
    {tabs.map((tab, index) => (
      <button
        key={tab.label}
        className={`px-4 py-2 font-medium ${
          activeTab === index
            ? "text-blue-500 border-b-2 border-blue-500"
            : "text-gray-600 hover:text-blue-500"
        }`}
        onClick={() => setActiveTab(index)}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default Tab;
