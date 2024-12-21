import React from "react";
import { Bar } from "react-chartjs-2";

const MarketingAnalytics = () => {
  const chartData = {
    labels: ["Campaign A", "Campaign B", "Campaign C"],
    datasets: [
      {
        label: "Engagement Rate",
        data: [85, 72, 90],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Marketing Analytics</h2>
      <div className="w-1/2 mx-auto">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default MarketingAnalytics;
