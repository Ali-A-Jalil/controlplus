import React from "react";

const ReservationReports = () => {
  const mockData = [
    { id: 1, title: "Reservation 1", status: "Confirmed" },
    { id: 2, title: "Reservation 2", status: "Canceled" },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Reservation Reports</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Reservation</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((reservation) => (
            <tr key={reservation.id}>
              <td className="border p-2">{reservation.title}</td>
              <td className="border p-2">{reservation.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationReports;
