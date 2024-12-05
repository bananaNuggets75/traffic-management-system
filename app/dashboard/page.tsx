'use client';

import React from 'react';

const mockViolations = [
  {
    id: 1,
    type: 'Speeding',
    location: 'Pavia, IloIlo',
    date: '2024-03-15',
    severity: 'High',
    plateNumber: 'ABC-123',
  },
  {
    id: 2,
    type: 'Illegal Parking',
    location: 'CPU PARKING',
    date: '2024-03-14',
    severity: 'Medium',
    plateNumber: 'XYZ-456',
  },
];

const Dashboard = () => {
  
  const backgroundImage = 'https://media0.giphy.com/media/WQlV6ucWJwRiC9cuoe/giphy.gif?cid=6c09b952mhvv3ke3wy33kn8tudqgj71vblqhz95xbfb2r6d4&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g';

  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',  
        minHeight: '100vh',
        padding: '40px',  
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* Dashboard Content */}
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',  
          minHeight: '80vh',
          width: '90%',  
          padding: '40px',  
          backgroundImage: `url(${backgroundImage})`,  
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',  
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)',  
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',  
            fontWeight: 'bold',
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {/* Recent Violations Card */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              borderColor: 'white',
              borderWidth: '2px',
              color: 'white',
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',  
            }}
          >
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 'semibold',
                marginBottom: '16px',
              }}
            >
              Recent Violations
            </h2>
            {mockViolations.map((violation) => (
              <div
                key={violation.id}
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: '1px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                }}
              >
                <p>{violation.type} - {violation.location}</p>
                <p style={{ fontSize: '0.875rem' }}>{violation.date}</p>
              </div>
            ))}
          </div>

          {/* Fine Collection Card */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',  
              borderColor: 'white',
              borderWidth: '2px',
              color: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',  
            }}
          >
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 'semibold',
                marginBottom: '16px',
              }}
            >
              Fine Collection
            </h2>
            <div className="text-center">
              <p style={{ color: 'green', fontSize: '2.5rem', fontWeight: 'bold' }}>
                ₱45,000
              </p>
              <p>Total Fines Collected This Month</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;

