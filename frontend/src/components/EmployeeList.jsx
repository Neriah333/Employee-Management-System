import React, { useEffect, useState } from 'react';

const EmployeeList = ({ refreshKey }) => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await fetch('http://localhost:8080/api/employees');
    const data = await res.json();
    setEmployees(data);
  };

  useEffect(() => { fetchEmployees(); }, [refreshKey]);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this employee?')) {
      await fetch(`http://localhost:8080/api/employees/${id}`, { method: 'DELETE' });
      fetchEmployees();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
      <h2 className="text-xl font-bold mb-4">Employee List</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Dept</th>
            <th className="p-2 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{emp.firstName} {emp.lastName}</td>
              <td className="p-2">{emp.email}</td>
              <td className="p-2">{emp.department}</td>
              <td className="p-2 text-right">
                <button onClick={() => handleDelete(emp.id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;