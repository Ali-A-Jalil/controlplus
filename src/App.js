import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import ReservationDashboard from "./pages/Reservation/ReservationDashboard";
import CustomerDashboard from "./pages/Customer/CustomerDashboard";
import ReportsDashboard from "./pages/Reports/ReportsDashboard";
import AnalyticsDashboard from "./pages/Analytics/AnalyticsDashboard";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings/SettingsDashboard";
import Profile from "./pages/Profile";
import HR from "./pages/HR/HR";
import AccountingDashboard from "./pages/Accounting/AccountingDashboard";
import MarketingDashboard from "./pages/Marketing/MarketingDashboard";

import LeadsDashboard from "./pages/Leads/LeadsDashboard"; // إضافة مكون LeadsDashboard

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [leads, setLeads] = useState([]); // قائمة الليدز
  const [customers, setCustomers] = useState([]); // قائمة العملاء

  // Load session on app start
  useEffect(() => {
    const sessionUser = sessionStorage.getItem("user");
    if (sessionUser) {
      setUser(JSON.parse(sessionUser));
    }

    // تحميل بيانات الليدز والعملاء عند تشغيل التطبيق
    fetch("/api/leads")
      .then((response) => response.json())
      .then((data) => setLeads(data));

    fetch("/api/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  // Handle session expiration
  useEffect(() => {
    if (user) {
      const timeout = setTimeout(() => {
        handleLogout();
        alert("Session expired! Please login again.");
      }, 3600000); // 1 hour
      return () => clearTimeout(timeout);
    }
  }, [user]);

  const handleLogin = (userData) => {
    setUser(userData);
    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  // دالة لإضافة Lead جديد إلى القائمة
  const handleNewLead = (newLead) => {
    setLeads((prevLeads) => [...prevLeads, newLead]);
  };

  // دالة لتحويل Lead إلى Customer عند الدفع
  const convertLeadToCustomer = (leadId) => {
    fetch(`/api/leads/convert/${leadId}`, { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // تحديث القوائم بعد التحويل
          setLeads((prevLeads) => prevLeads.filter((lead) => lead.id !== leadId));
          setCustomers((prevCustomers) => [...prevCustomers, data.newCustomer]);
        }
      });
  };

  const LayoutWrapper = ({ children }) => (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="flex-grow flex flex-col">
        <Header user={user} onLogout={handleLogout} />
        <main
          className="flex-grow bg-gray-100 p-6 transition-all duration-300"
          style={{
            marginLeft: isSidebarOpen ? "16rem" : "4rem",
            marginTop: "4rem", // Adjust for the fixed header height
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        {/* Protected Routes */}
        {user ? (
          <>
            <Route path="/dashboard" element={<LayoutWrapper><Dashboard /></LayoutWrapper>} />
            <Route path="/overview" element={<LayoutWrapper><Overview /></LayoutWrapper>} />
            <Route path="/reservations-management" element={<LayoutWrapper><ReservationDashboard /></LayoutWrapper>} />
            <Route path="/customer-management" element={<LayoutWrapper>
              <CustomerDashboard customers={customers} />
            </LayoutWrapper>} />
            <Route path="/leads-management" element={<LayoutWrapper>
              <LeadsDashboard leads={leads} onConvertLead={convertLeadToCustomer} />
            </LayoutWrapper>} />
            <Route path="/reports-management" element={<LayoutWrapper><ReportsDashboard /></LayoutWrapper>} />
            <Route path="/analytics-management" element={<LayoutWrapper><AnalyticsDashboard /></LayoutWrapper>} />
            <Route path="/notifications" element={<LayoutWrapper><Notifications /></LayoutWrapper>} />
            <Route path="/settings-management" element={<LayoutWrapper><Settings /></LayoutWrapper>} />
            <Route path="/profile" element={<LayoutWrapper><Profile user={user} onUpdateUser={setUser} /></LayoutWrapper>} />
            <Route path="/hr" element={<LayoutWrapper><HR /></LayoutWrapper>} />
            <Route path="/accounting" element={<LayoutWrapper><AccountingDashboard /></LayoutWrapper>} />
            <Route path="/marketing" element={<LayoutWrapper><MarketingDashboard /></LayoutWrapper>}/>
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
