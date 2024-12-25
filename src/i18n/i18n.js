import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      settings: "Settings",
      language: "Language",
      timezone: "Timezone",
      dashboard: "Dashboard",
      users: "Users",
      reports: "Reports",
      analytics: "Analytics",
      sales: "Sales",
      marketing: "Marketing",
      customerSatisfaction: "Customer Satisfaction",
      futurePredictions: "Future Predictions",
      exportPDF: "Export to PDF",
      exportExcel: "Export to Excel",
      save: "Save",
      cancel: "Cancel",
      notifications: "Notifications",
      help: "Help",
      logout: "Logout",
    },
  },
  ar: {
    translation: {
      settings: "الإعدادات",
      language: "اللغة",
      timezone: "المنطقة الزمنية",
      dashboard: "لوحة التحكم",
      users: "المستخدمون",
      reports: "التقارير",
      analytics: "التحليلات",
      sales: "المبيعات",
      marketing: "التسويق",
      customerSatisfaction: "رضا العملاء",
      futurePredictions: "التوقعات المستقبلية",
      exportPDF: "تصدير إلى PDF",
      exportExcel: "تصدير إلى Excel",
      save: "حفظ",
      cancel: "إلغاء",
      notifications: "الإشعارات",
      help: "المساعدة",
      logout: "تسجيل الخروج",
    },
  },
  fr: {
    translation: {
      settings: "Paramètres",
      language: "Langue",
      timezone: "Fuseau horaire",
      dashboard: "Tableau de bord",
      users: "Utilisateurs",
      reports: "Rapports",
      analytics: "Analyses",
      sales: "Ventes",
      marketing: "Marketing",
      customerSatisfaction: "Satisfaction des clients",
      futurePredictions: "Prédictions futures",
      exportPDF: "Exporter en PDF",
      exportExcel: "Exporter en Excel",
      save: "Enregistrer",
      cancel: "Annuler",
      notifications: "Notifications",
      help: "Aide",
      logout: "Déconnexion",
    },
  },
  tr: {
    translation: {
      settings: "Ayarlar",
      language: "Dil",
      timezone: "Zaman Dilimi",
      dashboard: "Gösterge Paneli",
      users: "Kullanıcılar",
      reports: "Raporlar",
      analytics: "Analitik",
      sales: "Satışlar",
      marketing: "Pazarlama",
      customerSatisfaction: "Müşteri Memnuniyeti",
      futurePredictions: "Gelecek Tahminleri",
      exportPDF: "PDF Olarak Dışa Aktar",
      exportExcel: "Excel Olarak Dışa Aktar",
      save: "Kaydet",
      cancel: "İptal",
      notifications: "Bildirimler",
      help: "Yardım",
      logout: "Çıkış Yap",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // No need to escape HTML in React
  },
});

export default i18n;
