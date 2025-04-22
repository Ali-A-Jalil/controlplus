import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LeadFeedback = () => {
  const [feedback, setFeedback] = useState([
    { id: 1, name: "Ahmed", score: 9, comment: "Great service!" },
    { id: 2, name: "Sara", score: 6, comment: "It was okay." },
    { id: 3, name: "Omar", score: 10, comment: "Amazing experience!" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newFeedback, setNewFeedback] = useState({ name: "", score: "", comment: "" });

  const handleChange = (e) => {
    setNewFeedback({ ...newFeedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!newFeedback.name || !newFeedback.score) return;

    const newEntry = {
      ...newFeedback,
      id: Date.now(),
      score: parseInt(newFeedback.score),
    };

    setFeedback([...feedback, newEntry]);
    setNewFeedback({ name: "", score: "", comment: "" });
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Lead Feedback</h2>

      <button
        onClick={() => setShowForm(true)}
        className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Feedback
      </button>

      <ul className="space-y-2 mb-6">
        {feedback.map((entry) => (
          <li key={entry.id}>
            <strong>{entry.name}:</strong> {entry.comment} — <em>Score: {entry.score}</em>
          </li>
        ))}
      </ul>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={feedback}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Bar dataKey="score" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">NPS Feedback</h3>

            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={newFeedback.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />

              <input
                type="number"
                name="score"
                placeholder="Score (0–10)"
                min="0"
                max="10"
                value={newFeedback.score}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />

              <textarea
                name="comment"
                placeholder="Comment"
                value={newFeedback.comment}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadFeedback;
