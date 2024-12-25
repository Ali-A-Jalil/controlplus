import React, { useState, useEffect } from "react";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMockData = async () => {
      try {
        // بيانات وهمية
        const mockData = {
          months: ["January", "February", "March", "April", "May"],
          revenue: [12000, 19000, 30000, 50000, 20000],
          newClients: [20, 35, 50, 65, 80],
          customerSatisfaction: [85, 90, 75, 80, 95],
          marketingConversions: [15, 25, 40, 30, 50],
          futurePredictions: [10000, 20000, 15000, 30000, 25000],
          totalReservations: 120,
          totalClients: 450,
          monthlyRevenue: 35000,
          pendingNotifications: 8,
        };
        setDashboardData(mockData);
      } catch (err) {
        setError("Failed to load mock data");
      } finally {
        setLoading(false);
      }
    };
    fetchMockData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const generateChartData = (label, data, backgroundColor, borderColor) => ({
    labels: dashboardData.months,
    datasets: [
      {
        label,
        data,
        backgroundColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="p-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* إحصائيات عامة */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-6 shadow rounded text-center">
          <h3 className="text-lg font-semibold">Total Reservations</h3>
          <p className="text-blue-500 text-2xl font-bold">
            {dashboardData.totalReservations}
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded text-center">
          <h3 className="text-lg font-semibold">Total Clients</h3>
          <p className="text-blue-500 text-2xl font-bold">
            {dashboardData.totalClients}
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded text-center">
          <h3 className="text-lg font-semibold">Monthly Revenue</h3>
          <p className="text-blue-500 text-2xl font-bold">
            ${dashboardData.monthlyRevenue}
          </p>
        </div>
        <div className="bg-white p-6 shadow rounded text-center">
          <h3 className="text-lg font-semibold">Pending Notifications</h3>
          <p className="text-blue-500 text-2xl font-bold">
            {dashboardData.pendingNotifications}
          </p>
        </div>
      </div>

      {/* رسومات بيانية لكل إدارة */}
      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-lg font-semibold mb-4">Revenue Analysis</h3>
          <Chart
            type="bar"
            data={generateChartData(
              "Revenue",
              dashboardData.revenue,
              "rgba(75, 192, 192, 0.6)",
              "rgba(75, 192, 192, 1)"
            )}
            options={options}
          />
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-lg font-semibold mb-4">New Clients</h3>
          <Chart
            type="line"
            data={generateChartData(
              "New Clients",
              dashboardData.newClients,
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 99, 132, 1)"
            )}
            options={options}
          />
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-lg font-semibold mb-4">Customer Satisfaction</h3>
          <Chart
            type="radar"
            data={generateChartData(
              "Satisfaction",
              dashboardData.customerSatisfaction,
              "rgba(153, 102, 255, 0.6)",
              "rgba(153, 102, 255, 1)"
            )}
            options={options}
          />
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-lg font-semibold mb-4">Marketing Conversions</h3>
          <Chart
            type="pie"
            data={{
              labels: dashboardData.months,
              datasets: [
                {
                  data: dashboardData.marketingConversions,
                  backgroundColor: [
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                  ],
                },
              ],
            }}
            options={options}
          />
        </div>
      </div>

      <div className="mt-8 bg-white p-6 shadow rounded">
        <h3 className="text-lg font-semibold mb-4">Future Predictions</h3>
        <Chart
          type="bar"
          data={generateChartData(
            "Future Predictions",
            dashboardData.futurePredictions,
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 159, 64, 1)"
          )}
          options={options}
        />
      </div>
    </div>
  );
};

export default Dashboard;
