import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  // Function to trigger a re-fetch in the List component
  const handleRefresh = () => setRefreshKey(prev => prev + 1);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center text-4xl font-extrabold mb-10 text-slate-900">
          Employee Management System
        </h1>
        
        <div className="space-y-10">
          <EmployeeForm onEmployeeAdded={handleRefresh} />
          <EmployeeList refreshKey={refreshKey} />
        </div>
      </div>
    </div>
  );
}

export default App;