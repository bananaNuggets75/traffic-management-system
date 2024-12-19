'use client';

import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { useViolations } from '../context/ViolationContext';
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

const Dashboard = () => {
  const { violations } = useViolations();
  const [currentDate, setCurrentDate] = useState({ date: '', time: '' });

  // Calculate Analytics
  const totalViolations = violations.length;
  const totalFines = violations.reduce((acc, violation) => acc + parseFloat(violation.amount), 0);
  const statusCounts = violations.reduce(
    (acc, violation) => {
      acc[violation.status] = (acc[violation.status] || 0) + 1;
      return acc;
    },
    { Paid: 0, Pending: 0 }
  );

  const violationTypes = violations.reduce((acc, violation) => {
    acc[violation.type] = (acc[violation.type] || 0) + 1;
    return acc;
  }, {});

  // Mocked Monthly Violations Data
  const monthlyViolations = Array(12).fill(0);
  violations.forEach((violation) => {
    const month = new Date(violation.date).getMonth();
    monthlyViolations[month] += 1;
  });

  // Update Current Date and Time
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

  const tableHeaderStyle: React.CSSProperties = {
    textAlign: 'left',
    padding: '8px',
    borderBottom: '2px solid #444',
    fontWeight: 'bold',
  };

  const tableCellStyle: React.CSSProperties = {
    padding: '8px',
    textAlign: 'left',
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
            backgroundColor: '#222',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
            height: '450px',
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Yearly Violations</h2>
          <div style={{ height: '100%' }}>
            <Bar
              data={{
                labels: [
                  'January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December',
                ],
                datasets: [
                  {
                    label: 'Monthly Violations',
                    data: monthlyViolations,
                    backgroundColor: 'rgba(25, 47, 122, 0.7)',
                    borderColor: 'rgba(25, 47, 122, 1)',
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>

        {/* Violation Summary */}
        <div
          style={{
            backgroundColor: '#222',
            padding: '24px',
            borderRadius: '8px',
          }}
        >
          <h2>Violation Summary</h2>
          <ul>
            <li>Total Violations: {totalViolations}</li>
            <li>Total Fines Collected: ₱{totalFines.toLocaleString()}</li>
            <li>
              Paid Violations: {statusCounts.Paid} | Pending Violations: {statusCounts.Pending}
            </li>
          </ul>
        </div>

        {/* Recent Violations Table */}
        <div
          style={{
            backgroundColor: '#222',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
          }}
        >
          <h2 style={{ marginBottom: '16px' }}>Recent Violations</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff' }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Date</th>
                <th style={tableHeaderStyle}>Type</th>
                <th style={tableHeaderStyle}>Location</th>
                <th style={tableHeaderStyle}>Severity</th>
              </tr>
            </thead>
            <tbody>
              {violations.slice(0, 7).map((violation) => (
                <tr key={violation.id} style={{ borderTop: '1px solid #444' }}>
                  <td style={tableCellStyle}>{violation.date}</td>
                  <td style={tableCellStyle}>{violation.type}</td>
                  <td style={tableCellStyle}>{violation.location || 'Lapaz'}</td>
                  <td style={tableCellStyle}>
                    <span
                      style={{
                        color: violation.type === 'Illegal Parking' ? '#00cfcf' : '#FF6B6B',
                      }}
                    >
                      {violation.type === 'Illegal Parking' ? 'Low' : 'High'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Pie Chart */}
        <div
          style={{
            backgroundColor: '#222',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
            height: '605px',
          }}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Violation Types</h2>
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
        </div>

        {/* Current Date and Time */}
        <div
          style={{
            backgroundColor: '#222',
            padding: '24px',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          <h3>{currentDate.date}</h3>
          <p>{currentDate.time}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;