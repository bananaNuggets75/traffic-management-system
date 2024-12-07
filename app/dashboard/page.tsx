'use client';

import React from 'react';

const mockViolations = [
  { id: 1, type: 'Speeding', location: 'Pavia, IloIlo', date: '2024-03-15', severity: 'High', plateNumber: 'ABC-123' },
  { id: 2, type: 'Illegal Parking', location: 'CPU PARKING', date: '2024-03-14', severity: 'Medium', plateNumber: 'XYZ-456' },
  { id: 3, type: 'Reckless Driving', location: 'Sta-Barbara, IloIlo', date: '2024-03-14', severity: 'High', plateNumber: 'FAA-324' },
  { id: 4, type: 'Overspeeding', location: 'New Lucena, IloIlo', date: '2024-03-14', severity: 'Medium', plateNumber: 'FAA2-323' },
  { id: 5, type: 'Illegal Parking', location: 'Mission Road, IloIlo', date: '2024-03-14', severity: 'Medium', plateNumber: 'FAZ-3242' },
];

const finesCollected = 45000;

const Dashboard = () => {
  const backgroundImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Iloilo_Diversion_Road_southbound_traffic_%28Iloilo_City%3B_01-21-2023%29.jpg/1200px-Iloilo_Diversion_Road_southbound_traffic_%28Iloilo_City%3B_01-21-2023%29.jpg'; // Replace this link with your online image

  return (
    <div
      style={{
        backgroundColor: '#F5F5F5',
        color: '#333',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
      }}
    >
      {/* Header Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto 20px',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'white',
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.8)',
          }}
        >
          SafeDrive
        </h1>
      </div>

      {/* Statistics Boxes */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto 30px',
        }}
      >
        {/* Recent Violations */}
        <div
          style={{
            backgroundColor: 'rgba(108, 99, 255, 0.8)', // Semi-transparent purple
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Recent Violations</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{mockViolations.length}</p>
          <p>Number of Violations Logged</p>
        </div>

        {/* Fines Collected */}
        <div
          style={{
            backgroundColor: 'rgba(67, 160, 71, 0.8)', // Semi-transparent green
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Fines Collected</h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>₱{finesCollected.toLocaleString()}</p>
          <p>Total Fines This Month</p>
        </div>
      </div>

      {/* Recent Violations Table */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // Semi-transparent white
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '20px',
          margin: '0 auto 30px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
            alignItems: 'center',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', color: '#4A4A4A' }}>Recent Violations</h2>
          <button
            style={{
              backgroundColor: '#6C63FF',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            View All
          </button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '2px solid #CCC', padding: '10px' }}>Type</th>
              <th style={{ borderBottom: '2px solid #CCC', padding: '10px' }}>Location</th>
              <th style={{ borderBottom: '2px solid #CCC', padding: '10px' }}>Date</th>
              <th style={{ borderBottom: '2px solid #CCC', padding: '10px' }}>Severity</th>
            </tr>
          </thead>
          <tbody>
            {mockViolations.map((violation) => (
              <tr key={violation.id}>
                <td style={{ borderBottom: '1px solid #EEE', padding: '10px' }}>{violation.type}</td>
                <td style={{ borderBottom: '1px solid #EEE', padding: '10px' }}>{violation.location}</td>
                <td style={{ borderBottom: '1px solid #EEE', padding: '10px' }}>{violation.date}</td>
                <td
                  style={{
                    borderBottom: '1px solid #EEE',
                    padding: '10px',
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
