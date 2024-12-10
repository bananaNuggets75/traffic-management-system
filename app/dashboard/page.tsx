'use client';

import React from 'react';

const mockViolations = [
  { id: 1, type: 'Speeding', location: 'Pavia, IloIlo', date: '2024-03-15', severity: 'High', plateNumber: 'ABC-123' },
  { id: 2, type: 'Illegal Parking', location: 'CPU PARKING', date: '2024-03-14', severity: 'Medium', plateNumber: 'XYZ-456' },
  { id: 3, type: 'Reckless Driving', location: 'Sta-Barbara, IloIlo', date: '2024-03-14', severity: 'High', plateNumber: 'FAA-324' },
  { id: 4, type: 'Overspeeding', location: 'New Lucena, IloIlo', date: '2024-03-14', severity: 'Medium', plateNumber: 'FAA2-323' },
  { id: 5, type: 'Illegal Parking', location: 'Mission Road, IloIlo', date: '2024-03-14', severity: 'Medium', plateNumber: 'FAZ-3242' },
  { id: 6, type: 'Overspeeding', location: 'Molo, IloIlo', date: '2024-03-14', severity: 'Medium', plateNumber: 'FAK-3246' },
  { id: 7, type: 'Illegal Parking', location: 'San Miguel, IloIlo', date: '2024-03-14', severity: 'Medium', plateNumber: 'FBZ-3942' },
];

const finesCollected = 45000;

const Dashboard = () => {
  const backgroundImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Iloilo_Diversion_Road_southbound_traffic_%28Iloilo_City%3B_01-21-2023%29.jpg/1200px-Iloilo_Diversion_Road_southbound_traffic_%28Iloilo_City%3B_01-21-2023%29.jpg'; // Replace this link with your online image

  return (
    <div
      className="dashboard-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Header Section */}
      <div className="header">
        <h1>SafeDrive</h1>
      </div>

      {/* Statistics Boxes */}
      <div className="stats-container">
        {/* Recent Violations */}
        <div className="stat-box" style={{ backgroundColor: 'rgba(108, 99, 255, 0.8)' }}>
          <h2>Recent Violations</h2>
          <p>{mockViolations.length}</p>
          <p>Number of Violations Logged</p>
        </div>

        {/* Fines Collected */}
        <div className="stat-box" style={{ backgroundColor: 'rgba(67, 160, 71, 0.8)' }}>
          <h2>Fines Collected</h2>
          <p>₱{finesCollected.toLocaleString()}</p>
          <p>Total Fines This Month</p>
        </div>
      </div>

      {/* Recent Violations Table */}
      <div className="recent-violations-table">
        <div className="recent-violations-table-header">
          <h2>Recent Violations</h2>
          <button>View All</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Location</th>
              <th>Date</th>
              <th>Severity</th>
            </tr>
          </thead>
          <tbody>
            {mockViolations.map((violation) => (
              <tr key={violation.id}>
                <td>{violation.type}</td>
                <td>{violation.location}</td>
                <td>{violation.date}</td>
                <td className={violation.severity === 'High' ? 'severity-high' : 'severity-medium'}>
                  {violation.severity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mockup Heatmap */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: '300px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '1.5rem',
          textAlign: 'center',
        }}
      >
        <p>Heatmap Placeholder (Replace with a functional heatmap or an image)</p>
      </div>
    </div>
  );
};


export default Dashboard;
