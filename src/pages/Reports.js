import React from "react";
import { Bar } from "react-chartjs-2";

const Reports = () => {
  const salesData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales ($)",
        data: [12000, 19000, 15000, 21000, 17000, 25000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Report",
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Reports</h1>
        <Bar data={salesData} options={options} />
      </div>
    </div>
  );
};

export default Reports;
