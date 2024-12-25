import React, { useState, useEffect } from "react";

const FuturePredictions = () => {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const response = await fetch("/api/future-predictions");
        if (!response.ok) throw new Error("Failed to fetch predictions");
        const result = await response.json();
        setPredictions(result);
      } catch (err) {
        console.error(err.message);

        // استخدام بيانات افتراضية عند فشل API
        setPredictions([
          { title: "Sales Growth", details: "Expected to grow by 15% next quarter." },
          { title: "Customer Satisfaction", details: "Predicted to reach 85% satisfaction rate." },
          { title: "New Market Entry", details: "Expanding to two new regions by mid-year." },
        ]);
        setError("Using mock data due to fetch error.");
      } finally {
        setLoading(false);
      }
    };

    fetchPredictions();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Future Predictions</h2>
      <ul className="list-disc pl-6">
        {predictions.map((prediction, index) => (
          <li key={index}>
            <strong>{prediction.title}:</strong> {prediction.details}
          </li>
        ))}
      </ul>
      {error && <p className="text-yellow-500 mt-4">{error}</p>}
    </div>
  );
};

export default FuturePredictions;
