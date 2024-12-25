import React, { useState } from "react";
import Tab from "../../components/Tab";
import UserManagement from "./UserManagement";
import EmailSettings from "./EmailSettings";
import NotificationSettings from "./NotificationSettings";
import IntegrationSettings from "./IntegrationSettings";
import LocalizationSettings from "./LocalizationSettings";
import ThemeSettings from "./ThemeSettings";

const tabs = [
  { label: "User Management", component: UserManagement },
  { label: "Email Settings", component: EmailSettings },
  { label: "Notification Settings", component: NotificationSettings },
  { label: "Integration Settings", component: IntegrationSettings },
  { label: "Localization Settings", component: LocalizationSettings },
  { label: "Theme Settings", component: ThemeSettings },
];

const SettingsDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const ActiveComponent = tabs[activeTab]?.component || UserManagement;

  return (
    <div className="bg-gray-100 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Settings Dashboard</h1>
      <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-6 bg-white p-6 rounded shadow">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default SettingsDashboard;
