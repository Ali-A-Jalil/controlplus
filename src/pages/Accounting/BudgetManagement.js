import React, { useState } from "react";

const BudgetManagement = () => {
  const [budgets, setBudgets] = useState([
    { id: 1, type: "Monthly", amount: 5000, actual: 4500 },
    { id: 2, type: "Yearly", amount: 60000, actual: 55000 },
  ]);

  const addBudget = () => {
    const type = prompt("Enter Budget Type (Monthly/Yearly):");
    const amount = parseFloat(prompt("Enter Planned Budget Amount:"));
    if (type && amount) {
      setBudgets([...budgets, { id: Date.now(), type, amount, actual: 0 }]);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Budget Management</h2>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        onClick={addBudget}
      >
        Add Budget
      </button>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Planned</th>
            <th className="px-4 py-2">Actual</th>
            <th className="px-4 py-2">Difference</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget) => (
            <tr key={budget.id}>
              <td className="border px-4 py-2">{budget.type}</td>
              <td className="border px-4 py-2">${budget.amount}</td>
              <td className="border px-4 py-2">${budget.actual}</td>
              <td className="border px-4 py-2">
                ${budget.amount - budget.actual}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetManagement;
