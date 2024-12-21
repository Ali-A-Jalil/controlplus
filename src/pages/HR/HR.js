import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

// Import Employee Management Components
import EmployeeManagement from "../HR/EmployeeManagement/EmployeeManagement";

// Import Attendance Tracking Components
import AttendanceTable from "../HR/AttendanceTracking/AttendanceTable";
import UploadAttendance from "../HR/AttendanceTracking/UploadAttendance";

// Import Payroll Management Components
import PayrollList from "../HR/PayrollManagement/PayrollList";
import PayrollCalculator from "../HR/PayrollManagement/PayrollCalculator";

// Import Leave Management Components
import LeaveList from "../HR/LeaveManagement/LeaveList";
import LeaveRequestForm from "../HR/LeaveManagement/LeaveRequestForm";

// Import Contracts Management Components
import ContractsList from "../HR/ContractsManagement/ContractsList";
import ContractUploadForm from "../HR/ContractsManagement/ContractUploadForm";

// Import Reports Components
import PerformanceReport from "../HR/Reports/PerformanceReport";
import PayrollReport from "../HR/Reports/PayrollReport";


const HR = () => {
  const [activeTab, setActiveTab] = useState("EmployeeManagement");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "EmployeeManagement":
        return <EmployeeManagement />;
      case "AttendanceTracking":
        return (
          <>
            <AttendanceTable
              records={[
                { name: "John Doe", date: "2024-12-20", status: "Present" },
                { name: "Jane Smith", date: "2024-12-20", status: "Absent" },
              ]}
            />
            <UploadAttendance
              onUpload={(file) => console.log("Attendance File Uploaded:", file)}
            />
          </>
        );
      case "PayrollManagement":
        return (
          <>
            <PayrollList
              payrolls={[
                { name: "John Doe", salary: 5000, payDate: "2024-12-15" },
                { name: "Jane Smith", salary: 6000, payDate: "2024-12-15" },
              ]}
            />
            <PayrollCalculator
              onCalculate={(data) => console.log("Calculated Payroll:", data)}
            />
          </>
        );
      case "LeaveManagement":
        return (
          <>
            <LeaveList
              leaves={[
                { name: "John Doe", leaveType: "Sick Leave", duration: "3 days" },
                { name: "Jane Smith", leaveType: "Annual Leave", duration: "5 days" },
              ]}
            />
            <LeaveRequestForm
              onSubmit={(data) => console.log("Leave Request Submitted:", data)}
            />
          </>
        );
      case "ContractsManagement":
        return (
          <>
            <ContractsList
              contracts={[
                { name: "John Doe", contractType: "Full-Time", startDate: "2022-01-15" },
                { name: "Jane Smith", contractType: "Part-Time", startDate: "2021-10-20" },
              ]}
            />
            <ContractUploadForm
              onUpload={(file) => console.log("Contract File Uploaded:", file)}
            />
          </>
        );
      case "Reports":
        return (
          <>
            <PerformanceReport />
            <PayrollReport />
          </>
        );
      default:
        return <EmployeeManagement />;
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Human Resources Dashboard</h1>

      {/* Tabs for Navigation */}
      <div className="flex border-b mb-6">
        {[
          { label: "Employee Management", value: "EmployeeManagement" },
          { label: "Attendance Tracking", value: "AttendanceTracking" },
          { label: "Payroll Management", value: "PayrollManagement" },
          { label: "Leave Management", value: "LeaveManagement" },
          { label: "Contracts Management", value: "ContractsManagement" },
          { label: "Reports", value: "Reports" },
        ].map((tab) => (
          <button
            key={tab.value}
            className={`px-4 py-2 font-medium ${
              activeTab === tab.value
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Component */}
      <div className="relative">
        <CSSTransition
          in={!!activeTab}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="bg-white p-6 rounded shadow">{renderActiveTab()}</div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default HR;
