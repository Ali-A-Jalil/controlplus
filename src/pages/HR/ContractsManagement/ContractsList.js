import React from "react";

const ContractsList = ({ contracts }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="text-lg font-semibold mb-4">Contracts List</h3>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Contract Type</th>
            <th className="px-4 py-2">Start Date</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{contract.name}</td>
              <td className="px-4 py-2">{contract.contractType}</td>
              <td className="px-4 py-2">{contract.startDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractsList;
