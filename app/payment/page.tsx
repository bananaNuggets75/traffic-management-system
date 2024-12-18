'use client';

import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import dynamic from 'next/dynamic';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Mocked Data
const mockViolations = [
  { id: 1, type: 'Speeding', location: 'Diversion Road, Iloilo City', date: '2024-03-15', severity: 'High', plateNumber: 'ABC-123' },
  { id: 2, type: 'Illegal Parking', location: 'Jaro Plaza, Iloilo City', date: '2024-03-14', severity: 'Low', plateNumber: 'XYZ-456' },
  { id: 3, type: 'Reckless Driving', location: 'Mandurriao, Iloilo City', date: '2024-03-14', severity: 'High', plateNumber: 'FAA-324' },
  { id: 4, type: 'Speeding', location: 'SM City Intersection, Iloilo City', date: '2024-03-13', severity: 'High', plateNumber: 'GTR-789' },
  { id: 5, type: 'Speeding', location: 'Smallville Complex, Iloilo City', date: '2024-03-12', severity: 'High', plateNumber: 'SUV-321' },
  { id: 6, type: 'Reckless Driving', location: 'Molo Church, Iloilo City', date: '2024-03-11', severity: 'High', plateNumber: 'CAR-654' },
  { id: 7, type: 'Reckless Driving', location: 'General Luna Street, Iloilo City', date: '2024-03-10', severity: 'High', plateNumber: 'SED-987' },
  { id: 8, type: 'Illegal Parking', location: 'Lapaz Market, Iloilo City', date: '2024-03-09', severity: 'Low', plateNumber: 'KLM-123' },
  { id: 9, type: 'Illegal Parking', location: 'Esplanade, Iloilo City', date: '2024-03-08', severity: 'Low', plateNumber: 'JKL-456' },
  { id: 10, type: 'Speeding', location: 'Port San Pedro, Iloilo City', date: '2024-03-07', severity: 'High', plateNumber: 'YTR-789' },
  { id: 11, type: 'Driving under the Influence', location: 'Bonifacio Drive, Iloilo City', date: '2024-03-06', severity: 'High', plateNumber: 'CTR-564' },
  { id: 12, type: 'Driving under the Influence', location: 'Iloilo Business Park, Iloilo City', date: '2024-03-05', severity: 'High', plateNumber: 'UNR-784' },
  { id: 13, type: 'Driving under the Influence', location: 'Villa Arevalo District, Iloilo City', date: '2024-03-04', severity: 'High', plateNumber: 'NOL-997' },
  { id: 14, type: 'No Seatblet', location: 'Tabuc Suba, Jaro, Iloilo City', date: '2024-03-03', severity: 'Medium', plateNumber: 'MOD-123' },
  { id: 15, type: 'Driving under the Influence', location: 'Fort San Pedro, Iloilo City', date: '2024-03-02', severity: 'High', plateNumber: 'OVR-678' },
  { id: 16, type: 'Reckless Driving', location: 'Iznart Street, Iloilo City', date: '2024-03-01', severity: 'High', plateNumber: 'LIT-321' },
];

// Prepare Violation Types Data
const violationTypes = mockViolations.reduce((acc, violation) => {
  acc[violation.type] = (acc[violation.type] || 0) + 1;
  return acc;
}, {});

// Yearly Violations Data
const yearlyViolationsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Monthly Violations',
      data: [15, 20, mockViolations.length, 25, 35, 40, 45, 50, 60, 55, 70, 80],
      backgroundColor: 'rgba(25, 47, 122, 0.7)',
      borderColor: 'rgba(25, 47, 122, 1)',
      borderWidth: 1,
    },
  ],
};

// Violation Summary
const violationSummary = {
  totalViolations: mockViolations.length,
  totalFines: mockViolations.length * 3000, // IF 3K PER VIOLATION
  severitySummary: mockViolations.reduce((acc, violation) => {
    acc[violation.severity] = (acc[violation.severity] || 0) + 1;
    return acc;
  }, {}),
};

const Dashboard = () => {
  const [showAll, setShowAll] = useState(false); // SET TO TRUE TO DISPLAAAY ALL VIOLATIONS FALSE TO LIMITED
  const [currentDate, setCurrentDate] = useState({ date: '', time: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date();
      const formattedDate = current.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
      const formattedTime = current.toLocaleTimeString();
      setCurrentDate({ date: formattedDate, time: formattedTime });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleToggle = () => {
    setShowAll((prev) => !prev); // ??
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gridGap: '24px',
        padding: '24px',
        backgroundColor: '#2C2F38',
        color: '#fff',
        minHeight: '100vh',
      }}
    >
      {/* Left Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Bar Chart */}
        <div
          style={{
            backgroundColor: '#222', // Darker grey background
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
            height: '450px', // Increased height
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Yearly Violations</h2>
          <div style={{ height: '100%' }}>
            <Bar
              data={yearlyViolationsData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>

        {/* Recent Violations */}
        <div
          style={{
            backgroundColor: '#222', // Darker grey background
            padding: '24px',
            borderRadius: '8px',
          }}
        >
          <h2>Recent Violations</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #555', padding: '8px' }}>Date</th>
                <th style={{ border: '1px solid #555', padding: '8px' }}>Type</th>
                <th style={{ border: '1px solid #555', padding: '8px' }}>Location</th>
                <th style={{ border: '1px solid #555', padding: '8px' }}>Severity</th>
              </tr>
            </thead>
            <tbody>
              {mockViolations.slice(0, showAll ? mockViolations.length : 7).map((violation) => (
                <tr key={violation.id}>
                  <td style={{ border: '1px solid #555', padding: '8px' }}>{violation.date}</td>
                  <td style={{ border: '1px solid #555', padding: '8px' }}>{violation.type}</td>
                  <td style={{ border: '1px solid #555', padding: '8px' }}>{violation.location}</td>
                  <td
                    style={{
                      border: '1px solid #555',
                      padding: '8px',
                      color:
                        violation.severity === 'High'
                          ? '#FF6B6B'
                          : violation.severity === 'Medium'
                            ? '#FCA311'
                            : '#4ECDC4',
                    }}
                  >
                    {violation.severity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={handleToggle}
            style={{
              backgroundColor: '#FF6B6B',
              color: '#fff',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '16px',
            }}
          >
            {showAll ? 'Less' : 'More'}
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Two Containers */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* Container 1: Recent Violations Count */}
          <div
            style={{
              backgroundColor: '#222', // Darker grey background
              padding: '24px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            }}
          >
            <h3>Recent Violations: {mockViolations.length}</h3>
          </div>

          {/* Container 2: Current Date and Time */}
          <div
            style={{
              backgroundColor: '#222', // Darker grey background
              padding: '24px',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            }}
          >
            <h3>{currentDate.date}</h3> {/* The date in text format */}
            <p>{currentDate.time}</p>  {/* The time below the date */}
          </div>
        </div>

        {/* Pie Chart */}
        <div
          style={{
            backgroundColor: '#222', 
            padding: '24px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
            height: '450px', 
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Violation Types</h2>
          <div style={{ height: '100%' }}>
            <Pie
              data={{
                labels: Object.keys(violationTypes),
                datasets: [
                  {
                    data: Object.values(violationTypes),
                    backgroundColor: ['#FF6B6B', '#FCA311', '#4ECDC4', '#2E3A59'],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
          {/* Heatmap Placeholder */}
        <div
          style={{
            backgroundColor: '#333',
            padding: '24px',
            borderRadius: '10px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column', // Ensures the text appears above the image
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3 style={{ color: '#fff', marginBottom: '16px' }}>Heatmap</h3>  {/* Heatmap text */}
          <img
            src="https://www.dpwh.gov.ph/dpwh/2023_DPWH_ATLAS/Road%20Data%202016/Iloilo%20City.jpg"  
            alt="Heatmap"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default Dashboard;

