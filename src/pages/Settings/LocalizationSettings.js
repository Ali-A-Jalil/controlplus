import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LocalizationSettings = () => {
  const { i18n } = useTranslation(); // استخدام i18next لتغيير اللغة
  const [language, setLanguage] = useState("en");
  const [timezone, setTimezone] = useState("UTC");

  // تغيير اللغة
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang); // تغيير اللغة باستخدام i18next
    localStorage.setItem("language", lang); // حفظ اللغة في التخزين المحلي
  };

  // استرجاع اللغة من التخزين المحلي
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Localization Settings</h2>
      <div className="mb-4">
        <label className="block mb-2">Language:</label>
        <select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="fr">Français</option>
          <option value="tr">Türkçe</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Timezone:</label>
        <select
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="UTC">UTC</option>
          <option value="GMT+1">GMT+1</option>
          <option value="GMT+2">GMT+2</option>
        </select>
      </div>
    </div>
  );
};

export default LocalizationSettings;
