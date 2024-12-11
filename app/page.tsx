'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const mockViolations = [
  { id: 1, type: 'Speeding', location: 'Pavia, IloIlo', date: '2024-03-15', severity: 'High', plateNumber: 'ABC-123' },
  { id: 2, type: 'Illegal Parking', location: 'CPU PARKING', date: '2024-03-14', severity: 'Medium', plateNumber: 'XYZ-456' },
  { id: 3, type: 'Reckless Driving', location: 'Sta-Barbara, IloIlo', date: '2024-03-14', severity: 'High', plateNumber: 'FAA-324' },
  { id: 4, type: 'Overspeeding', location: 'New Lucena, IloIlo', date: '2024-03-14', severity: 'Medium', plateNumber: 'FAA2-323' },
  { id: 5, type: 'Illegal Parking', location: 'Mission Road, IloIlo', date: '2024-03-14', severity: 'Medium', plateNumber: 'FAZ-3242' },
];

const yearlyViolationsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Violations (Whole Year)',
      data: [15, 20, 30, 25, 35, 40, 45, 50, 60, 55, 70, 80],
      backgroundColor: 'rgba(25, 47, 122, 0.7)', // Dark blue
      borderColor: 'rgba(25, 47, 122, 1)', // Dark blue
      borderWidth: 1,
    },
  ],
};

const violationSummary = {
  totalViolations: mockViolations.length,
  totalFines: 45000,
  violationTypes: {
    Speeding: 5,
    IllegalParking: 2,
    RecklessDriving: 1,
    Overspeeding: 3,
  },
};

const violationTypes = mockViolations.reduce((acc, violation) => {
  if (acc[violation.type]) {
    acc[violation.type] += 1;
  } else {
    acc[violation.type] = 1;
  }
  return acc;
}, {});

const violationData = Object.entries(violationTypes).map(([name, value]) => ({
  name,
  value,
}));

const Dashboard = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        gridGap: '24px',
        padding: '24px',
        backgroundColor: '#2C2F38',
        color: '#fff',
        height: '100vh',
      }}
    >
      {/* Left Section: Bar chart for violations and Violation Summary */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* Bar Chart: Violations for the Whole Year */}
        <div
          style={{
            backgroundColor: '#1c1c1c',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
            Violations for the Whole Year
          </h2>
          <Bar data={yearlyViolationsData} height={300} />
        </div>

        {/* Violation Summary */}
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
            color: '#FFF',
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Violation Summary</h2>
          <p>Total Violations: {violationSummary.totalViolations}</p>
          <p>Total Fines Collected: ₱{violationSummary.totalFines.toLocaleString()}</p>
          <h3 style={{ marginTop: '16px' }}>Violation Types:</h3>
          <ul>
            {Object.entries(violationSummary.violationTypes).map(([type, count]) => (
              <li key={type}>
                {type}: {count}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section: Monthly Violations (Pie Chart and Recent Violations) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* Monthly Violations and Pie Chart */}
        <div style={{ display: 'flex', gap: '24px' }}>
          {/* Recent Violations */}
          <div
            style={{
              backgroundColor: '#333',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
              flex: 1,
            }}
          >
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Recent Violations</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #555' }}>No.</th>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #555' }}>Date</th>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #555' }}>Type</th>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #555' }}>Location</th>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #555' }}>Plate Number</th>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #555' }}>Severity</th>
                </tr>
              </thead>
              <tbody>
                {mockViolations.map((violation, index) => (
                  <tr key={violation.id}>
                    <td style={{ padding: '8px', borderBottom: '1px solid #555' }}>{index + 1}</td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #555' }}>{violation.date}</td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #555' }}>{violation.type}</td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #555' }}>{violation.location}</td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #555' }}>{violation.plateNumber}</td>
                    <td
                      style={{
                        padding: '8px',
                        borderBottom: '1px solid #555',
                        color: violation.severity === 'High' ? '#E53935' : '#FB8C00',
                      }}
                    >
                      {violation.severity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Monthly Violations Pie Chart */}
          <div
            style={{
              backgroundColor: '#333',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
              flex: 0.4,
            }}
          >
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
              Monthly Violations Breakdown
            </h2>
            <Pie
              data={{
                labels: Object.keys(violationTypes),
                datasets: [
                  {
                    data: Object.values(violationTypes),
                    backgroundColor: ['#FF9800', '#FF5722', '#9C27B0', '#4CAF50'],
                  },
                ],
              }}
              height={300}
            />
          </div>
        </div>

        {/* Heatmap */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
            height: '400px',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://www.dpwh.gov.ph/dpwh/2023_DPWH_ATLAS/Road%20Data%202016/Iloilo%20City.jpg"
            alt="Heatmap"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
