import React, { useState } from "react";

const CustomerSupport = () => {
  const [queries, setQueries] = useState([
    { id: 1, customer: "John Doe", query: "Need help with login issues", status: "Pending" },
    { id: 2, customer: "Jane Smith", query: "Issue with payment", status: "Resolved" },
  ]);
  const [newQuery, setNewQuery] = useState("");

  const handleAddQuery = () => {
    if (newQuery.trim()) {
      setQueries([
        ...queries,
        {
          id: queries.length + 1,
          customer: "Anonymous",
          query: newQuery,
          status: "Pending",
        },
      ]);
      setNewQuery("");
    }
  };

  const handleResolveQuery = (id) => {
    setQueries(
      queries.map((query) =>
        query.id === id ? { ...query, status: "Resolved" } : query
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Customer Support</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a new customer query"
          value={newQuery}
          onChange={(e) => setNewQuery(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button
          onClick={handleAddQuery}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600"
        >
          Add Query
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Customer</th>
            <th className="border p-2">Query</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {queries.map((query) => (
            <tr key={query.id} className="text-center">
              <td className="border p-2">{query.customer}</td>
              <td className="border p-2">{query.query}</td>
              <td className={`border p-2 ${query.status === "Resolved" ? "text-green-500" : "text-red-500"}`}>
                {query.status}
              </td>
              <td className="border p-2">
                {query.status === "Pending" && (
                  <button
                    onClick={() => handleResolveQuery(query.id)}
                    className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                  >
                    Resolve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerSupport;
