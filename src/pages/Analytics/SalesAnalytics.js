import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const SalesAnalytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/sales-analytics");
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error(err.message);

        // استخدام بيانات افتراضية عند فشل API
        setData({
          labels: ["January", "February", "March"],
          revenue: [5000, 7000, 8000],
          expenses: [3000, 4000, 5000],
        });

        setError("Using mock data due to fetch error.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Revenue",
        data: data.revenue,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Expenses",
        data: data.expenses,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Sales Analytics</h2>
      <Bar data={chartData} />
      {error && <p className="text-yellow-500 mt-4">{error}</p>}
    </div>
  );
};

export default SalesAnalytics;
