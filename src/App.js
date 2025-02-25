import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// Lazy Load Components
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Overview = lazy(() => import("./pages/Overview"));
const ReservationDashboard = lazy(() => import("./pages/Reservation/ReservationDashboard"));
const CustomerDashboard = lazy(() => import("./pages/Customer/CustomerDashboard"));
const ReportsDashboard = lazy(() => import("./pages/Reports/ReportsDashboard"));
const AnalyticsDashboard = lazy(() => import("./pages/Analytics/AnalyticsDashboard"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Settings = lazy(() => import("./pages/Settings/SettingsDashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const HR = lazy(() => import("./pages/HR/HR"));
const AccountingDashboard = lazy(() => import("./pages/Accounting/AccountingDashboard"));
const MarketingDashboard = lazy(() => import("./pages/Marketing/MarketingDashboard"));
const LeadsDashboard = lazy(() => import("./pages/Leads/LeadsDashboard"));

// Loading Spinner Component
const LoadingSpinner = () => <div className="text-center mt-10 text-lg">Loading...</div>;

const App = () => {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [leads, setLeads] = useState([]);
  const [customers, setCustomers] = useState([]);

  // Load session on app start
  useEffect(() => {
    const sessionUser = sessionStorage.getItem("user");
    if (sessionUser) {
      setUser(JSON.parse(sessionUser));
    }

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

  const handleNewLead = (newLead) => {
    setLeads((prevLeads) => [...prevLeads, newLead]);
  };

  const convertLeadToCustomer = (leadId) => {
    fetch(`/api/leads/convert/${leadId}`, { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
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
            marginTop: "4rem",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          {user ? (
            <>
              <Route path="/dashboard" element={<LayoutWrapper><Dashboard /></LayoutWrapper>} />
              <Route path="/overview" element={<LayoutWrapper><Overview /></LayoutWrapper>} />
              <Route path="/reservations-management" element={<LayoutWrapper><ReservationDashboard /></LayoutWrapper>} />
              <Route path="/customer-management" element={<LayoutWrapper><CustomerDashboard customers={customers} /></LayoutWrapper>} />
              <Route path="/leads-management" element={<LayoutWrapper><LeadsDashboard leads={leads} onConvertLead={convertLeadToCustomer} /></LayoutWrapper>} />
              <Route path="/reports-management" element={<LayoutWrapper><ReportsDashboard /></LayoutWrapper>} />
              <Route path="/analytics-management" element={<LayoutWrapper><AnalyticsDashboard /></LayoutWrapper>} />
              <Route path="/notifications" element={<LayoutWrapper><Notifications /></LayoutWrapper>} />
              <Route path="/settings-management" element={<LayoutWrapper><Settings /></LayoutWrapper>} />
              <Route path="/profile" element={<LayoutWrapper><Profile user={user} onUpdateUser={setUser} /></LayoutWrapper>} />
              <Route path="/hr" element={<LayoutWrapper><HR /></LayoutWrapper>} />
              <Route path="/accounting" element={<LayoutWrapper><AccountingDashboard /></LayoutWrapper>} />
              <Route path="/marketing" element={<LayoutWrapper><MarketingDashboard /></LayoutWrapper>} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
