import React, { useState } from "react";

const AddLead = ({ onLeadAdded }) => {
  const [lead, setLead] = useState({ name: "", phone: "", service: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      if (!response.ok) {
        throw new Error("Failed to add lead. Please try again.");
      }

      const newLead = await response.json();
      setLead({ name: "", phone: "", service: "" });
      setSuccess(true);

      // تحديث القائمة في LeadsDashboard.js
      if (onLeadAdded) {
        onLeadAdded(newLead);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Lead</h2>
      
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Lead added successfully!</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={lead.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={lead.phone}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="service"
          placeholder="Service Interested In"
          value={lead.service}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className={`w-full p-2 text-white rounded ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Lead"}
        </button>
      </form>
    </div>
  );
};

export default AddLead;
