import React from "react";

const Overview = () => {
  const summary = [
    { label: "Reservations Today", value: 20 },
    { label: "Active Clients", value: 120 },
    { label: "Revenue Growth", value: "12%" },
    { label: "New Clients", value: 15 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summary.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold text-gray-700">{item.label}</h2>
            <p className="text-3xl font-bold text-blue-500">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
