import React, { useState } from "react";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

const CustomReports = () => {
  const [reportType, setReportType] = useState("sales");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [reportData, setReportData] = useState([]);

  // Mock Data for demonstration
  const mockData = {
    sales: [
      { id: 1, date: "2024-12-01", amount: 5000 },
      { id: 2, date: "2024-12-02", amount: 7000 },
    ],
    marketing: [
      { id: 1, campaign: "Winter Sale", clicks: 300, conversions: 50 },
      { id: 2, campaign: "New Year Offer", clicks: 500, conversions: 100 },
    ],
    customers: [
      { id: 1, name: "Ali", satisfaction: "Happy" },
      { id: 2, name: "Sara", satisfaction: "Neutral" },
    ],
  };

  const generateReport = () => {
    // Fetching the appropriate data based on user selection
    setReportData(mockData[reportType]);
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text(`${reportType.toUpperCase()} REPORT`, 10, 10);
    reportData.forEach((item, index) => {
      doc.text(JSON.stringify(item), 10, 20 + index * 10);
    });
    doc.save(`${reportType}-report.pdf`);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(reportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
    XLSX.writeFile(workbook, `${reportType}-report.xlsx`);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Custom Reports</h2>

      {/* Report Type Selection */}
      <div className="mb-4">
        <label className="block mb-2">Select Report Type:</label>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="sales">Sales</option>
          <option value="marketing">Marketing</option>
          <option value="customers">Customer Satisfaction</option>
        </select>
      </div>

      {/* Date Range Selection */}
      <div className="mb-4">
        <label className="block mb-2">Select Date Range:</label>
        <div className="flex gap-4">
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      {/* Generate Report Button */}
      <button
        onClick={generateReport}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
      >
        Generate Report
      </button>

      {/* Report Table */}
      {reportData.length > 0 && (
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Report Data:</h3>
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                {Object.keys(reportData[0]).map((key) => (
                  <th key={key} className="border p-2">
                    {key.toUpperCase()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reportData.map((item) => (
                <tr key={item.id} className="text-center">
                  {Object.values(item).map((value, idx) => (
                    <td key={idx} className="border p-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Export Buttons */}
      <div className="flex gap-4">
        <button
          onClick={exportToPDF}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Export to PDF
        </button>
        <button
          onClick={exportToExcel}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Export to Excel
        </button>
      </div>
    </div>
  );
};

export default CustomReports;
