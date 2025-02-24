import React, { useState, useEffect, useCallback } from "react";

const LeadProfiles = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sample dummy data (used if API fails)
  const dummyLeads = [
    { id: 1, name: "Ahmed Ali", phone: "01012345678", service: "Visa Consultation" },
    { id: 2, name: "Sara Mohamed", phone: "01234567890", service: "Translation Service" },
    { id: 3, name: "Omar Hassan", phone: "01156789012", service: "Business Setup" },
  ];

  // Function to fetch leads from API
  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError(null);
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await fetch("/api/leads", { signal });

      // Ensure the response is valid JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format: Expected JSON");
      }

      if (!response.ok) throw new Error(`Failed to fetch leads: ${response.status}`);

      const data = await response.json();
      setLeads(data.length > 0 ? data : dummyLeads);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
        setLeads(dummyLeads);
      }
    } finally {
      setLoading(false);
    }

    return () => controller.abort(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Lead Profiles</h2>

      {loading ? (
        <p className="text-gray-500">Loading leads...</p>
      ) : error ? (
        <div className="text-red-500">
          <p>{error}</p>
          <button
            onClick={fetchLeads}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      ) : leads.length === 0 ? (
        <p className="text-gray-500">No leads found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {leads.map((lead) => (
            <div key={lead.id} className="p-4 border rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800">{lead.name}</h3>
              <p className="text-gray-600"><strong>Phone:</strong> {lead.phone}</p>
              <p className="text-gray-600"><strong>Service Interested In:</strong> {lead.service}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeadProfiles;
