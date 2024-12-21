import React, { useState } from "react";

const DebtsAccounts = () => {
  const [debts, setDebts] = useState([
    { id: 1, client: "Client C", amount: 1500, dueDate: "2024-01-15" },
  ]);

  const addDebt = () => {
    const client = prompt("Enter Client Name:");
    const amount = parseFloat(prompt("Enter Debt Amount:"));
    const dueDate = prompt("Enter Due Date (YYYY-MM-DD):");
    if (client && amount && dueDate) {
      setDebts([...debts, { id: Date.now(), client, amount, dueDate }]);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Debts and Accounts</h2>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded mb-4"
        onClick={addDebt}
      >
        Add Debt
      </button>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Client</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {debts.map((debt) => (
            <tr key={debt.id}>
              <td className="border px-4 py-2">{debt.client}</td>
              <td className="border px-4 py-2">${debt.amount}</td>
              <td className="border px-4 py-2">{debt.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DebtsAccounts;
