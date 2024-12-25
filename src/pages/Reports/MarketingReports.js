import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const MarketingReports = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMarketingData = async () => {
      try {
        const result = {
          campaigns: ["Campaign A", "Campaign B", "Campaign C"],
          clicks: [300, 500, 700],
          conversions: [30, 50, 70],
        };
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMarketingData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const chartData = {
    labels: data.campaigns,
    datasets: [
      {
        label: "Clicks",
        data: data.clicks,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Conversions",
        data: data.conversions,
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Marketing Reports</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default MarketingReports;
