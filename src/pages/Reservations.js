import React from "react";

const Reservations = () => {
  const reservations = [
    { id: 1, client: "Ali", date: "2024-12-25", status: "Confirmed" },
    { id: 2, client: "Sara", date: "2024-12-26", status: "Pending" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Reservations</h1>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-4">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Client</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr key={res.id} className="border-t">
                <td className="px-4 py-2">{res.id}</td>
                <td className="px-4 py-2">{res.client}</td>
                <td className="px-4 py-2">{res.date}</td>
                <td
                  className={`px-4 py-2 ${
                    res.status === "Confirmed"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {res.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservations;
