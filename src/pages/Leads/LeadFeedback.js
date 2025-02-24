import React, { useState, useEffect } from "react";

const LeadFeedback = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch("/api/leads/feedback")
      .then((response) => response.json())
      .then((data) => setFeedback(data));
  }, []);

  return (
    <div>
      <h2>Lead Feedback</h2>
      <ul>
        {feedback.map((entry) => (
          <li key={entry.id}>
            <strong>{entry.name}:</strong> {entry.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadFeedback;
