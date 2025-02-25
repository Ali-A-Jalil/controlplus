import React, { useState, useEffect, lazy, Suspense } from "react";
import Tab from "../../components/Tab";

// Lazy load analytics components
const SalesAnalytics = lazy(() => import("./SalesAnalytics"));
const MarketingAnalytics = lazy(() => import("./MarketingAnalytics"));
const CustomerSatisfactionAnalytics = lazy(() => import("./CustomerSatisfactionAnalytics"));
const FuturePredictions = lazy(() => import("./FuturePredictions"));

// Tabs Configuration
const tabs = [
  { label: "Sales Analytics", component: SalesAnalytics },
  { label: "Marketing Analytics", component: MarketingAnalytics },
  { label: "Customer Satisfaction", component: CustomerSatisfactionAnalytics },
  { label: "Future Predictions", component: FuturePredictions },
];

// Fallback Component for Lazy Loading
const LoadingSpinner = () => <p className="text-center text-blue-500">Loading...</p>;

const AnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [salesData, setSalesData] = useState([]);
  const [marketingData, setMarketingData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [predictionData, setPredictionData] = useState([]);

  // Fetching mock data (Replace with real API later)
  useEffect(() => {
    const fetchMockData = async () => {
      setSalesData({
        labels: ["January", "February", "March"],
        datasets: [
          { label: "Revenue", data: [5000, 7000, 8000], backgroundColor: "rgba(75, 192, 192, 0.6)" },
          { label: "Expenses", data: [3000, 4000, 5000], backgroundColor: "rgba(255, 99, 132, 0.6)" },
        ],
      });

      setMarketingData([
        { campaign: "Campaign A", clicks: 300, conversions: 50 },
        { campaign: "Campaign B", clicks: 500, conversions: 80 },
        { campaign: "Campaign D", clicks: 700, conversions: 30 },
      ]);

      setCustomerData([
        { feedback: "Great service!", rating: 5 },
        { feedback: "Good, but needs improvement.", rating: 4 },
        { feedback: "Neutral experience.", rating: 3 },
        { feedback: "Not satisfied.", rating: 2 },
      ]);

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

      {/* Tabs Navigation */}
      <Tab tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Active Component with Lazy Loading */}
      <Suspense fallback={<LoadingSpinner />}>
        <div className="mt-6 bg-white p-6 rounded shadow">
          <ActiveComponent
            salesData={salesData}
            marketingData={marketingData}
            customerData={customerData}
            predictionData={predictionData}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default AnalyticsDashboard;
