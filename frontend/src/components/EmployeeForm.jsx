import React, { useState } from 'react';

const EmployeeForm = ({ onEmployeeAdded }) => {
  // state to store form inputs
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    salary: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    try {
      // Requirement: Submit button triggers API call to POST /api/employees
      const response = await fetch('http://localhost:8080/api/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
      });

      const data = await response.json();

      if (response.ok) {
        // Requirement: Display success message and clear form
        setMessage({ type: 'success', text: 'Employee added successfully!' });
        setEmployee({ firstName: '', lastName: '', email: '', department: '', salary: '' });
        if (onEmployeeAdded) onEmployeeAdded(); 
      } else {
        // Requirement: Display validation errors if API returns 400
        setMessage({ type: 'error', text: data.details || 'Validation failed' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Server error. Please try again.' });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Employee</h2>
      
      {message.text && (
        <div className={`mb-4 p-3 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Requirement: Input fields for firstName, lastName, email, department, salary */}
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="firstName" placeholder="First Name" value={employee.firstName} onChange={handleChange} className="p-2 border rounded w-full" required />
          <input type="text" name="lastName" placeholder="Last Name" value={employee.lastName} onChange={handleChange} className="p-2 border rounded w-full" required />
        </div>
        <input type="email" name="email" placeholder="Email Address" value={employee.email} onChange={handleChange} className="p-2 border rounded w-full" required />
        <input type="text" name="department" placeholder="Department" value={employee.department} onChange={handleChange} className="p-2 border rounded w-full" required />
        <input type="number" name="salary" placeholder="Salary" value={employee.salary} onChange={handleChange} className="p-2 border rounded w-full" required />
        
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;