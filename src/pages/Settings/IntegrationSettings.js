import React, { useState } from "react";

const IntegrationSettings = () => {
  const [integrations, setIntegrations] = useState({
    googleAnalytics: false,
    slack: false,
    zapier: true,
  });

  const handleToggle = (service) => {
    setIntegrations({ ...integrations, [service]: !integrations[service] });
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Integration Settings</h2>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={integrations.googleAnalytics}
            onChange={() => handleToggle("googleAnalytics")}
            className="mr-2"
          />
          Google Analytics
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={integrations.slack}
            onChange={() => handleToggle("slack")}
            className="mr-2"
          />
          Slack
        </label>
      </div>
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={integrations.zapier}
            onChange={() => handleToggle("zapier")}
            className="mr-2"
          />
          Zapier
        </label>
      </div>
    </div>
  );
};

export default IntegrationSettings;
