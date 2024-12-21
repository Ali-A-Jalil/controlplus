import React from "react";

const LeaveList = ({ leaves }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="text-lg font-semibold mb-4">Leave List</h3>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Leave Type</th>
            <th className="px-4 py-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{leave.name}</td>
              <td className="px-4 py-2">{leave.leaveType}</td>
              <td className="px-4 py-2">{leave.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveList;
