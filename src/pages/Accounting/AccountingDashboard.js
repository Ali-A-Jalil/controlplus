import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Bar } from "react-chartjs-2";
import RevenueExpenses from "./RevenueExpenses";
import BudgetManagement from "./BudgetManagement";
import InvoicesPayments from "./InvoicesPayments";
import DebtsAccounts from "./DebtsAccounts";
import FinancialReports from "./FinancialReports";

const AccountingDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("RevenueExpenses");

  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 7000, 8000, 6500, 7200],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Expenses",
        data: [3000, 4000, 5000, 4500, 4800],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "RevenueExpenses":
        return <RevenueExpenses />;
      case "BudgetManagement":
        return <BudgetManagement />;
      case "InvoicesPayments":
        return <InvoicesPayments />;
      case "DebtsAccounts":
        return <DebtsAccounts />;
      case "FinancialReports":
        return <FinancialReports />;
      case "Analytics":
        return (
          <div>
            <h2 className="text-lg font-bold mb-4">Analytics</h2>
            <div className="w-3/4 mx-auto">
              <Bar data={chartData} />
            </div>
          </div>
        );
      default:
        return <RevenueExpenses />;
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Accounting Management</h1>

      {/* Tabs for Navigation */}
      <div className="flex border-b mb-6">
        {[
          { label: "Revenue & Expenses", value: "RevenueExpenses" },
          { label: "Budget Management", value: "BudgetManagement" },
          { label: "Invoices & Payments", value: "InvoicesPayments" },
          { label: "Debts & Accounts", value: "DebtsAccounts" },
          { label: "Financial Reports", value: "FinancialReports" },
          { label: "Analytics", value: "Analytics" },
        ].map((tab) => (
          <button
            key={tab.value}
            className={`px-4 py-2 font-medium ${
              activeComponent === tab.value
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveComponent(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Component */}
      <div className="relative">
        <CSSTransition
          in={!!activeComponent}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="bg-white p-6 rounded shadow">
            {renderActiveComponent()}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default AccountingDashboard;
