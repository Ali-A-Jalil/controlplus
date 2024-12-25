import React, { useState } from "react";

const ThemeSettings = () => {
  const [theme, setTheme] = useState("light");
  const [accentColor, setAccentColor] = useState("#4caf50");

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Theme Settings</h2>
      <div className="mb-4">
        <label className="block mb-2">Theme:</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System Default</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Accent Color:</label>
        <input
          type="color"
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
          className="w-12 h-8"
        />
      </div>
    </div>
  );
};

export default ThemeSettings;
