import React from "react";

const PayrollList = ({ payrolls }) => {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-xl font-bold mb-4">Payroll List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Salary</th>
            <th className="px-4 py-2">Pay Date</th>
          </tr>
        </thead>
        <tbody>
          {payrolls.map((payroll, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{payroll.name}</td>
              <td className="border px-4 py-2">{payroll.salary}</td>
              <td className="border px-4 py-2">{payroll.payDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayrollList;
