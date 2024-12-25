import React, { useState } from "react";

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const handleToggle = (type) => {
    setNotifications({ ...notifications, [type]: !notifications[type] });
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Notification Settings</h2>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={notifications.email}
            onChange={() => handleToggle("email")}
            className="mr-2"
          />
          Email Notifications
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={notifications.sms}
            onChange={() => handleToggle("sms")}
            className="mr-2"
          />
          SMS Notifications
        </label>
      </div>
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={notifications.push}
            onChange={() => handleToggle("push")}
            className="mr-2"
          />
          Push Notifications
        </label>
      </div>
    </div>
  );
};

export default NotificationSettings;
