import React, { useState } from "react";

const RevenueExpenses = () => {
  const [entries, setEntries] = useState([
    { id: 1, type: "Revenue", description: "Client Payment", amount: 5000 },
    { id: 2, type: "Expense", description: "Office Rent", amount: 1500 },
  ]);

  const addEntry = (type) => {
    const description = prompt(`Enter ${type} description:`);
    const amount = parseFloat(prompt(`Enter ${type} amount:`));
    if (description && amount) {
      setEntries([...entries, { id: Date.now(), type, description, amount }]);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Revenue and Expenses</h2>
      <div className="mb-4">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded mr-2"
          onClick={() => addEntry("Revenue")}
        >
          Add Revenue
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={() => addEntry("Expense")}
        >
          Add Expense
        </button>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td className="border px-4 py-2">{entry.type}</td>
              <td className="border px-4 py-2">{entry.description}</td>
              <td className="border px-4 py-2">${entry.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RevenueExpenses;
