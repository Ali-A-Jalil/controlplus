import React, { useState } from "react";

// بيانات تجريبية للموظفين
const initialEmployees = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    salary: 5000,
    hireDate: "2022-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    salary: 6000,
    hireDate: "2021-10-20",
  },
];

const EmployeeList = ({ onEditEmployee, onDeleteEmployee }) => {
  const [employees, setEmployees] = useState(initialEmployees);

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
    onDeleteEmployee(id); // نقدر نضيفه للـ props لو هنحتاجه
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Employee Management</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Position</th>
            <th className="border border-gray-300 p-2">Salary</th>
            <th className="border border-gray-300 p-2">Hire Date</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border border-gray-300 p-2">{employee.name}</td>
              <td className="border border-gray-300 p-2">{employee.position}</td>
              <td className="border border-gray-300 p-2">${employee.salary}</td>
              <td className="border border-gray-300 p-2">{employee.hireDate}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => onEditEmployee(employee)}
                  className="text-blue-500 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(employee.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
