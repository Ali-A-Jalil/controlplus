import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import CampaignManagement from "./CampaignManagement";
import SocialMediaManagement from "./SocialMediaManagement";
import AdsManagement from "./AdsManagement";
import MarketingAnalytics from "./MarketingAnalytics";
import EmailMarketingIntegration from "./EmailMarketingIntegration";

const MarketingDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("CampaignManagement");

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "CampaignManagement":
        return <CampaignManagement />;
      case "SocialMediaManagement":
        return <SocialMediaManagement />;
      case "AdsManagement":
        return <AdsManagement />;
      case "MarketingAnalytics":
        return <MarketingAnalytics />;
      case "EmailMarketingIntegration":
        return <EmailMarketingIntegration />;
      default:
        return <CampaignManagement />;
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Marketing Management</h1>

      {/* Tabs for Navigation */}
      <div className="flex border-b mb-6">
        {[
          { label: "Campaigns", value: "CampaignManagement" },
          { label: "Social Media", value: "SocialMediaManagement" },
          { label: "Ads Management", value: "AdsManagement" },
          { label: "Analytics", value: "MarketingAnalytics" },
          { label: "Email Marketing", value: "EmailMarketingIntegration" },
        ].map((tab) => (
          <button
            key={tab.value}
            className={`px-4 py-2 font-medium ${
              activeComponent === tab.value
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveComponent(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Component */}
      <div className="relative">
        <CSSTransition
          in={!!activeComponent}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="bg-white p-6 rounded shadow">
            {renderActiveComponent()}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default MarketingDashboard;
