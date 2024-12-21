import React, { useState } from "react";

const PayrollCalculator = ({ onCalculate }) => {
  const [employeeName, setEmployeeName] = useState("");
  const [hoursWorked, setHoursWorked] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const salary = hoursWorked * hourlyRate;
    onCalculate({ employeeName, salary });
  };

  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-xl font-bold mb-4">Payroll Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          className="block w-full mb-4 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Hours Worked"
          value={hoursWorked}
          onChange={(e) => setHoursWorked(Number(e.target.value))}
          className="block w-full mb-4 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Hourly Rate"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(Number(e.target.value))}
          className="block w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Calculate
        </button>
      </form>
    </div>
  );
};

export default PayrollCalculator;
