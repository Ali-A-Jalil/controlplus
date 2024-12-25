import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

const FinanceReports = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFinanceData = async () => {
      try {
        // Mock data or API endpoint here
        const result = {
          labels: ["January", "February", "March"],
          revenue: [5000, 7000, 8000],
          expenses: [3000, 4000, 5000],
        };
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFinanceData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Revenue",
        data: data.revenue,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Expenses",
        data: data.expenses,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Finance Report", 10, 10);
    data.labels.forEach((label, index) => {
      doc.text(
        `${label}: Revenue = ${data.revenue[index]}, Expenses = ${data.expenses[index]}`,
        10,
        20 + index * 10
      );
    });
    doc.save("finance-report.pdf");
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet([
      ...data.labels.map((label, index) => ({
        Month: label,
        Revenue: data.revenue[index],
        Expenses: data.expenses[index],
      })),
    ]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Finance Report");
    XLSX.writeFile(workbook, "finance-report.xlsx");
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Finance Reports</h2>
      <div className="mb-4 flex gap-4">
        <button
          onClick={exportToPDF}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
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
      <Line data={chartData} />
    </div>
  );
};

export default FinanceReports;
