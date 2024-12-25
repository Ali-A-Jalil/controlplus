import React, { useState } from "react";
import Tab from "../../components/Tab";
import FinanceReports from "./FinanceReports";
import MarketingReports from "./MarketingReports";
import CustomerReports from "./CustomerReports";
import ReservationReports from "./ReservationReports";


const tabs = [
  { label: "Finance Reports", component: FinanceReports },
  { label: "Marketing Reports", component: MarketingReports },
  { label: "Customer Reports", component: CustomerReports },
  { label: "Reservation Reports", component: ReservationReports },

];

const ReportsDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const ActiveComponent = tabs[activeTab]?.component || FinanceReports;

  return (
    <div className="bg-gray-100 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Reports Management</h1>
      <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-6 bg-white p-6 rounded shadow">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default ReportsDashboard;
