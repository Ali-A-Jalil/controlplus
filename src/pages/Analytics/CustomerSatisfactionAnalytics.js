import React from "react";
import { Pie } from "react-chartjs-2";

const CustomerSatisfactionAnalytics = ({ customerData }) => {
  const satisfactionLevels = customerData.reduce(
    (acc, feedback) => {
      if (feedback.rating >= 4) acc.satisfied += 1;
      else if (feedback.rating === 3) acc.neutral += 1;
      else acc.dissatisfied += 1;
      return acc;
    },
    { satisfied: 0, neutral: 0, dissatisfied: 0 }
  );

  const chartData = {
    labels: ["Satisfied", "Neutral", "Dissatisfied"],
    datasets: [
      {
        data: [
          satisfactionLevels.satisfied,
          satisfactionLevels.neutral,
          satisfactionLevels.dissatisfied,
        ],
        backgroundColor: ["#4caf50", "#ffeb3b", "#f44336"],
        hoverBackgroundColor: ["#45a049", "#fdd835", "#e53935"],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Customer Satisfaction Analytics</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default CustomerSatisfactionAnalytics;
