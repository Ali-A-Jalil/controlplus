import React from "react";

// Import Employee Management Components
import EmployeeManagement from "./HR/EmployeeManagement/EmployeeManagement";

// Import Attendance Tracking Components
import AttendanceTable from "./HR/AttendanceTracking/AttendanceTable";
import UploadAttendance from "./HR/AttendanceTracking/UploadAttendance";

// Import Payroll Management Components
import PayrollList from "./HR/PayrollManagement/PayrollList";
import PayrollCalculator from "./HR/PayrollManagement/PayrollCalculator";

// Import Leave Management Components
import LeaveList from "./HR/LeaveManagement/LeaveList";
import LeaveRequestForm from "./HR/LeaveManagement/LeaveRequestForm";

// Import Contracts Management Components
import ContractsList from "./HR/ContractsManagement/ContractsList";
import ContractUploadForm from "./HR/ContractsManagement/ContractUploadForm";

// Import Reports Components
import PerformanceReport from "./HR/Reports/PerformanceReport";
import PayrollReport from "./HR/Reports/PayrollReport";

const HR = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Human Resources Dashboard</h1>

      {/* Employee Management Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Employee Management</h2>
        <EmployeeManagement />
      </section>

      {/* Attendance Tracking Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Attendance Tracking</h2>
        <AttendanceTable
          records={[
            { name: "John Doe", date: "2024-12-20", status: "Present" },
            { name: "Jane Smith", date: "2024-12-20", status: "Absent" },
          ]}
        />
        <UploadAttendance
          onUpload={(file) => console.log("Attendance File Uploaded:", file)}
        />
      </section>

      {/* Payroll Management Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Payroll Management</h2>
        <PayrollList
          payrolls={[
            { name: "John Doe", salary: 5000, payDate: "2024-12-15" },
            { name: "Jane Smith", salary: 6000, payDate: "2024-12-15" },
          ]}
        />
        <PayrollCalculator
          onCalculate={(data) => console.log("Calculated Payroll:", data)}
        />
      </section>

      {/* Leave Management Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Leave Management</h2>
        <LeaveList
          leaves={[
            { name: "John Doe", leaveType: "Sick Leave", duration: "3 days" },
            { name: "Jane Smith", leaveType: "Annual Leave", duration: "5 days" },
          ]}
        />
        <LeaveRequestForm
          onSubmit={(data) => console.log("Leave Request Submitted:", data)}
        />
      </section>

      {/* Contracts Management Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Contracts Management</h2>
        <ContractsList
          contracts={[
            { name: "John Doe", contractType: "Full-Time", startDate: "2022-01-15" },
            { name: "Jane Smith", contractType: "Part-Time", startDate: "2021-10-20" },
          ]}
        />
        <ContractUploadForm
          onUpload={(file) => console.log("Contract File Uploaded:", file)}
        />
      </section>

      {/* Reports Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Reports</h2>
        <PerformanceReport />
        <PayrollReport />
      </section>
    </div>
  );
};

export default HR;
