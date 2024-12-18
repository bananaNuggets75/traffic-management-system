'use client';

import React from 'react';
import { useViolations } from '../../context/ViolationContext';

const DriversProfilePage = () => {
  const { violations } = useViolations();

  return (
    <div
      style={{
        padding: '24px',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#2C2F38',
        color: '#fff',
        borderRadius: '8px',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>
        Drivers Profile and Violation History
      </h1>

      <div>
        {violations.length > 0 ? (
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: '#1E2126',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <thead>
              <tr>
                <th style={headerStyle}>Violation ID</th>
                <th style={headerStyle}>Type</th>
                <th style={headerStyle}>Date</th>
                <th style={headerStyle}>Amount</th>
                <th style={headerStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {violations.map((violation) => (
                <tr key={violation.id || Math.random()} style={rowStyle}>
                  <td style={cellStyle}>{violation.id}</td>
                  <td style={cellStyle}>{violation.type}</td>
                  <td style={cellStyle}>{violation.date}</td>
                  <td style={cellStyle}>₱{violation.amount}</td>
                  <td
                    style={{
                      ...cellStyle,
                      color:
                        violation.status === 'Paid'
                          ? '#4CAF50'
                          : violation.status === 'Pending'
                          ? '#FF6B6B'
                          : '#FCA311',
                    }}
                  >
                    {violation.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: 'center', color: '#aaa' }}>
            No violations recorded.
          </p>
        )}
      </div>
    </div>
  );
};

// Styles
const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '12px',
  textAlign: 'left' as const,
};

const rowStyle = {
  borderBottom: '1px solid #444',
};

const cellStyle = {
  padding: '12px',
  textAlign: 'left' as const,
  color: '#ddd',
};

export default DriversProfilePage;
