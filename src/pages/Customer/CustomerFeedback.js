import React, { useState } from "react";

const CustomerFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState(1);
  const feedbackLink = "http://your-website.com/feedback"; // Replace with your real link

  const handleAddFeedback = () => {
    if (customerName.trim() && comments.trim()) {
      const newFeedback = {
        customerName,
        comments,
        rating,
      };
      setFeedbackList([...feedbackList, newFeedback]);
      setCustomerName("");
      setComments("");
      setRating(1);
    } else {
      alert("Please fill in all fields before submitting feedback.");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Customer Feedback</h2>
      <p className="mb-4">
        Share this link with customers to collect feedback:
        <br />
        <span
          className="text-blue-500 underline cursor-pointer"
          onClick={() => navigator.clipboard.writeText(feedbackLink)}
        >
          {feedbackLink}
        </span>
      </p>

      {/* Add Feedback Form */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Add Feedback</h3>
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border p-2 w-full rounded mb-2"
        />
        <textarea
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="border p-2 w-full rounded mb-2"
        ></textarea>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="border p-2 w-full rounded mb-2"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} Star{num > 1 ? "s" : ""}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddFeedback}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </div>

      {/* Feedback List */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Customer</th>
            <th className="border p-2">Comments</th>
            <th className="border p-2">Rating</th>
          </tr>
        </thead>
        <tbody>
          {feedbackList.map((feedback, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{feedback.customerName}</td>
              <td className="border p-2">{feedback.comments}</td>
              <td className="border p-2">{feedback.rating} / 5</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerFeedback;
