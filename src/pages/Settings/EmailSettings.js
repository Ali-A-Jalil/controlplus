import React, { useState } from "react";

const EmailSettings = () => {
  const [settings, setSettings] = useState({
    smtpServer: "smtp.example.com",
    port: 587,
    senderEmail: "noreply@example.com",
    testEmail: "",
  });

  const handleSaveSettings = () => {
    alert("Email settings saved!");
  };

  const handleTestEmail = () => {
    if (settings.testEmail) {
      alert(`Test email sent to ${settings.testEmail}`);
    } else {
      alert("Please enter a test email address.");
    }
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Email Settings</h2>
      <label className="block mb-2">SMTP Server:</label>
      <input
        type="text"
        value={settings.smtpServer}
        onChange={(e) =>
          setSettings({ ...settings, smtpServer: e.target.value })
        }
        className="border p-2 w-full mb-4 rounded"
      />
      <label className="block mb-2">Port:</label>
      <input
        type="number"
        value={settings.port}
        onChange={(e) => setSettings({ ...settings, port: e.target.value })}
        className="border p-2 w-full mb-4 rounded"
      />
      <label className="block mb-2">Sender Email:</label>
      <input
        type="email"
        value={settings.senderEmail}
        onChange={(e) =>
          setSettings({ ...settings, senderEmail: e.target.value })
        }
        className="border p-2 w-full mb-4 rounded"
      />
      <label className="block mb-2">Test Email Address:</label>
      <input
        type="email"
        value={settings.testEmail}
        onChange={(e) =>
          setSettings({ ...settings, testEmail: e.target.value })
        }
        className="border p-2 w-full mb-4 rounded"
      />
      <button
        onClick={handleSaveSettings}
        className="bg-blue-500 text-white py-2 px-4 rounded mr-4"
      >
        Save Settings
      </button>
      <button
        onClick={handleTestEmail}
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Send Test Email
      </button>
    </div>
  );
};

export default EmailSettings;
