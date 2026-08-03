import React, { useState } from 'react';

const DepartmentForm = ({ onDepartmentAdded }) => {
  const [department, setDepartment] = useState({ name: '', description: '' });
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:8080/api/departments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(department),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Department added successfully!' });
        setDepartment({ name: '', description: '' });
        if (onDepartmentAdded) onDepartmentAdded();
      } else {
        const data = await response.json();
        setMessage({ type: 'error', text: data.details || 'Unable to add department' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Server error. Is the backend running?' });
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold mb-4">Add Department</h2>
      {message.text && (
        <div className={`mb-4 p-3 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Department Name" value={department.name} onChange={handleChange} className="p-2 border rounded w-full" required />
        <textarea name="description" placeholder="Department Description" value={department.description} onChange={handleChange} className="p-2 border rounded w-full" rows="3" />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">Save Department</button>
      </form>
    </div>
  );
};

export default DepartmentForm;
