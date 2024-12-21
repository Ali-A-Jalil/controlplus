import React, { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Preferences</h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-700">Theme</p>
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded ${
              theme === "Light"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-100"
            }`}
          >
            {theme === "Light" ? "Switch to Dark" : "Switch to Light"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
