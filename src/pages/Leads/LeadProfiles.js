// LeadProfiles.js
import React, { useState, useEffect, useCallback } from "react";

const LeadProfiles = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dummyLeads = [
    {
      id: 1,
      name: "Ahmed Ali",
      phone: "01012345678",
      passportNumber: "A123456",
      email: "ahmed@example.com",
      residencyType: "Student Residency",
      residencyFrom: "2024-01-01",
      residencyTo: "2024-12-31",
      service: "Visa Consultation",
      country: "Egypt",
    },
  ];



// const fetchLeads = useCallback(async () => {
//   setLoading(true);
//   setError(null);

//   try {
//     // simulate API delay
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     // Use dummy data directly
//     setLeads(dummyLeads);
//   } catch (err) {
//     setError("Something went wrong");
//     setLeads(dummyLeads);
//   } finally {
//     setLoading(false);
//   }
// }, []);
const fetchLeads = useCallback(async () => {
  setLoading(true);
  setError(null);

  try {
    // simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Use dummy data directly
    setLeads(dummyLeads);
  } catch (err) {
    setError("Something went wrong");
    setLeads(dummyLeads);
  } finally {
    setLoading(false);
  }
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
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="sticky top-0 bg-gray-100 z-10">
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left">Name</th>
                <th className="border px-4 py-2 text-left">Phone</th>
                <th className="border px-4 py-2 text-left">Passport</th>
                <th className="border px-4 py-2 text-left">Email</th>
                <th className="border px-4 py-2 text-left">Residency Type</th>
                <th className="border px-4 py-2 text-left">From</th>
                <th className="border px-4 py-2 text-left">To</th>
                <th className="border px-4 py-2 text-left">Service</th>
                <th className="border px-4 py-2 text-left">Country</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center text-gray-500 py-4">
                    No leads found.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="border-b">
                    <td className="border px-4 py-2">{lead.name}</td>
                    <td className="border px-4 py-2">{lead.phone}</td>
                    <td className="border px-4 py-2">{lead.passportNumber}</td>
                    <td className="border px-4 py-2">{lead.email}</td>
                    <td className="border px-4 py-2">{lead.residencyType}</td>
                    <td className="border px-4 py-2">{lead.residencyFrom}</td>
                    <td className="border px-4 py-2">{lead.residencyTo}</td>
                    <td className="border px-4 py-2">{lead.service}</td>
                    <td className="border px-4 py-2">{lead.country}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LeadProfiles;
