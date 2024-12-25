import React from "react";
import { Line } from "react-chartjs-2";

const MarketingAnalytics = ({ marketingData }) => {
  // Transform marketingData into chart data
  const chartData = {
    labels: marketingData.map((data) => data.campaign),
    datasets: [
      {
        label: "Clicks",
        data: marketingData.map((data) => data.clicks),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Conversions",
        data: marketingData.map((data) => data.conversions),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Marketing Analytics</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MarketingAnalytics;
