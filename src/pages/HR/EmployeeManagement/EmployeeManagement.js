import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
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
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Handle Add/Edit Employee
  const handleFormSubmit = (employeeData) => {
    if (editingEmployee) {
      // Update existing employee
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editingEmployee.id ? { ...emp, ...employeeData } : emp
        )
      );
    } else {
      // Add new employee
      setEmployees((prev) => [
        ...prev,
        { ...employeeData, id: prev.length + 1 },
      ]);
    }
    setIsEditing(false);
    setEditingEmployee(null);
  };

  // Handle Edit Button Click
  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setIsEditing(true);
  };

  // Handle Delete Employee
  const handleDeleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  // Handle Cancel Form
  const handleCancelForm = () => {
    setIsEditing(false);
    setEditingEmployee(null);
  };

  return (
    <div className="p-6">
      {!isEditing ? (
        <EmployeeList
          employees={employees}
          onEditEmployee={handleEditEmployee}
          onDeleteEmployee={handleDeleteEmployee}
        />
      ) : (
        <EmployeeForm
          onSubmit={handleFormSubmit}
          initialData={editingEmployee}
          onCancel={handleCancelForm}
        />
      )}
    </div>
  );
};

export default EmployeeManagement;
