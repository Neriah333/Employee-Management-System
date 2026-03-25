import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onEmployeeAdded, editingEmployee }) => {
  const [employee, setEmployee] = useState({
    firstName: '', lastName: '', email: '', department: '', salary: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });

  
  useEffect(() => {
    if (editingEmployee) {
      setEmployee(editingEmployee);
      setMessage({ type: '', text: '' }); 
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    
    const isEditing = !!editingEmployee;
    const url = isEditing 
      ? `http://localhost:8080/api/employees/${editingEmployee.id}` 
      : 'http://localhost:8080/api/employees';
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: isEditing ? 'Employee updated successfully!' : 'Employee added successfully!' 
        });
        
        
        setEmployee({ firstName: '', lastName: '', email: '', department: '', salary: '' });
        
        
        if (onEmployeeAdded) onEmployeeAdded(); 
      } else {
        setMessage({ type: 'error', text: data.details || 'Validation failed' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Server error. Is the backend running?' });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {editingEmployee ? 'Update Employee' : 'Add New Employee'}
      </h2>
      
      {message.text && (
        <div className={`mb-4 p-3 rounded ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="firstName" placeholder="First Name" value={employee.firstName} onChange={handleChange} className="p-2 border rounded w-full outline-blue-500" required />
          <input type="text" name="lastName" placeholder="Last Name" value={employee.lastName} onChange={handleChange} className="p-2 border rounded w-full outline-blue-500" required />
        </div>
        <input type="email" name="email" placeholder="Email Address" value={employee.email} onChange={handleChange} className="p-2 border rounded w-full outline-blue-500" required />
        <input type="text" name="department" placeholder="Department" value={employee.department} onChange={handleChange} className="p-2 border rounded w-full outline-blue-500" required />
        <input type="number" name="salary" placeholder="Salary" value={employee.salary} onChange={handleChange} className="p-2 border rounded w-full outline-blue-500" required />
        
        <button type="submit" className={`w-full text-white py-2 rounded-lg transition duration-200 ${editingEmployee ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
          {editingEmployee ? 'Update Details' : 'Add Employee'}
        </button>
        
        {editingEmployee && (
          <button 
            type="button" 
            onClick={() => onEmployeeAdded()} 
            className="w-full text-gray-500 text-sm hover:underline mt-2"
          >
            Cancel Edit
          </button>
        )}
      </form>
    </div>
  );
};

export default EmployeeForm;