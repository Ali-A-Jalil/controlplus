import React, { useState, lazy, Suspense } from "react";
import Tab from "../../components/Tab";

// Lazy load report components
const FinanceReports = lazy(() => import("./FinanceReports"));
const MarketingReports = lazy(() => import("./MarketingReports"));
const CustomerReports = lazy(() => import("./CustomerReports"));
const ReservationReports = lazy(() => import("./ReservationReports"));

// Tabs Configuration
const tabs = [
  { label: "Finance Reports", component: FinanceReports },
  { label: "Marketing Reports", component: MarketingReports },
  { label: "Customer Reports", component: CustomerReports },
  { label: "Reservation Reports", component: ReservationReports },
];

// Fallback Component for Lazy Loading
const LoadingSpinner = () => <p className="text-center text-blue-500">Loading...</p>;

const ReportsDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveComponent = tabs[activeTab]?.component || FinanceReports;

  return (
    <div className="bg-gray-100 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Reports Management</h1>

      {/* Tabs Navigation */}
      <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Active Component with Lazy Loading */}
      <Suspense fallback={<LoadingSpinner />}>
        <div className="mt-6 bg-white p-6 rounded shadow">
          <ActiveComponent />
        </div>
      </Suspense>
    </div>
  );
};

export default ReportsDashboard;
