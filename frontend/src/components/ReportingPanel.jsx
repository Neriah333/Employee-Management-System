import React, { useEffect, useState } from 'react';

const ReportingPanel = () => {
  const [summary, setSummary] = useState({ totalEmployees: 0, totalDepartments: 0, totalPayroll: 0 });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/reports/summary');
        const data = await res.json();
        setSummary(data);
      } catch (err) {
        console.error('Failed to fetch report summary:', err);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold mb-4">Reporting Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">Total Employees</p>
          <p className="text-2xl font-bold text-blue-900">{summary.totalEmployees}</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-700">Total Departments</p>
          <p className="text-2xl font-bold text-green-900">{summary.totalDepartments}</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <p className="text-sm text-purple-700">Total Payroll</p>
          <p className="text-2xl font-bold text-purple-900">{summary.totalPayroll}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportingPanel;
