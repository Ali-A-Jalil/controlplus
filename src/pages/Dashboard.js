import React from "react";
import { Chart } from "react-chartjs-2";

const Dashboard = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 19000, 30000, 50000, 20000],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
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
    },
  };

  return (
    <div className="p-8 mt-16">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold">Total Reservations</h3>
          <p className="text-blue-500 text-xl font-bold">120</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold">Total Clients</h3>
          <p className="text-blue-500 text-xl font-bold">450</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold">Monthly Revenue</h3>
          <p className="text-blue-500 text-xl font-bold">$35,000</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold">Pending Notifications</h3>
          <p className="text-blue-500 text-xl font-bold">8</p>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 shadow rounded">
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
