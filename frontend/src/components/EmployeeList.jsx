import React, { useEffect, useState } from 'react';

const EmployeeList = ({ refreshKey, onEdit }) => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/employees');
      const data = await res.json();
      setEmployees(data);
    } catch (err) {
      console.error("Failed to fetch:", err);
    }
  };

  useEffect(() => { fetchEmployees(); }, [refreshKey]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      await fetch(`http://localhost:8080/api/employees/${id}`, { method: 'DELETE' });
      fetchEmployees();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
      <h2 className="text-xl font-bold mb-4">Employee List</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b bg-gray-50 text-gray-600">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Dept</th>
            <th className="p-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id} className="border-b hover:bg-gray-50 transition">
              <td className="p-2">{emp.firstName} {emp.lastName}</td>
              <td className="p-2">{emp.email}</td>
              <td className="p-2">{emp.department}</td>
              <td className="p-2 text-right space-x-3">
                <button 
                  onClick={() => onEdit(emp)} 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(emp.id)} 
                  className="text-red-500 hover:text-red-700"
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