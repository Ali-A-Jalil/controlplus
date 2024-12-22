import React from "react";

const CustomerProfiles = ({ customers }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Customer Profiles</h2>
      <table className="table-auto w-full bg-gray-100 rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="text-center">
              <td className="px-4 py-2">{customer.name}</td>
              <td className="px-4 py-2">{customer.email}</td>
              <td className="px-4 py-2">{customer.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerProfiles;
