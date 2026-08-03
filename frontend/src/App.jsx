import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import DepartmentForm from './components/DepartmentForm';
import ReportingPanel from './components/ReportingPanel';

const App = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [departmentRefreshKey, setDepartmentRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
    setEditingEmployee(null);
  };

  const handleDepartmentRefresh = () => {
    setDepartmentRefreshKey(prev => prev + 1);
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl font-extrabold mb-10 text-slate-900">
          Employee Management System
        </h1>

        <div className="grid gap-8">
          <section>
            <EmployeeForm
              onEmployeeAdded={handleRefresh}
              editingEmployee={editingEmployee}
            />
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <DepartmentForm onDepartmentAdded={handleDepartmentRefresh} />
            <ReportingPanel key={departmentRefreshKey} />
          </section>

          <section>
            <EmployeeList
              refreshKey={refreshKey}
              onEdit={handleEdit}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;