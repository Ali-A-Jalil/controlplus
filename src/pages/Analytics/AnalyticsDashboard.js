import React, { useState, useEffect } from "react";
import Tab from "../../components/Tab";
import SalesAnalytics from "./SalesAnalytics";
import MarketingAnalytics from "./MarketingAnalytics";
import CustomerSatisfactionAnalytics from "./CustomerSatisfactionAnalytics";
import FuturePredictions from "./FuturePredictions";

const tabs = [
  { label: "Sales Analytics", component: SalesAnalytics },
  { label: "Marketing Analytics", component: MarketingAnalytics },
  { label: "Customer Satisfaction", component: CustomerSatisfactionAnalytics },
  { label: "Future Predictions", component: FuturePredictions },
];

const AnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [salesData, setSalesData] = useState([]);
  const [marketingData, setMarketingData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [predictionData, setPredictionData] = useState([]);

  // Fetching mock data (Replace with real API later)
  useEffect(() => {
    const fetchMockData = async () => {
      // Mock data for Sales Analytics
      setSalesData({
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "Revenue",
            data: [5000, 7000, 8000],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
          {
            label: "Expenses",
            data: [3000, 4000, 5000],
            backgroundColor: "rgba(255, 99, 132, 0.6)",
          },
        ],
      });

      // Mock data for Marketing Analytics
      setMarketingData([
        { campaign: "Campaign A", clicks: 300, conversions: 50 },
        { campaign: "Campaign B", clicks: 500, conversions: 80 },
        { campaign: "Campaign D", clicks: 700, conversions: 30 },
      ]);

      // Mock data for Customer Satisfaction
      setCustomerData([
        { feedback: "Great service!", rating: 5 },
        { feedback: "Good, but needs improvement.", rating: 4 },
        { feedback: "Neutral experience.", rating: 3 },
        { feedback: "Not satisfied.", rating: 2 },
      ]);

      // Mock data for Future Predictions
      setPredictionData([
        { month: "April", predictedSales: 9000 },
        { month: "May", predictedSales: 10000 },
      ]);
    };

    fetchMockData();
  }, []);

  const ActiveComponent = tabs[activeTab]?.component || SalesAnalytics;

  return (
    <div className="bg-gray-100 p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
      <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-6 bg-white p-6 rounded shadow">
        <ActiveComponent
          salesData={salesData}
          marketingData={marketingData}
          customerData={customerData}
          predictionData={predictionData}
        />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
