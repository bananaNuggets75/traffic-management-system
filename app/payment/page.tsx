'use client';

import React from 'react';
import { useViolations } from '../../context/ViolationContext';

const PaymentPage = () => {
  const { violations, updateViolationStatus } = useViolations();

  const handlePayment = async (id: string) => {
    // Update violation status to "Paid"
    try {
      await updateViolationStatus(id, 'Paid');
      console.log('Payment updated successfully.');
    } catch (error) {
      console.error('Error updating payment:', error);
    }
  };

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
      <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Fine Management and Payment</h1>

      {violations.filter((violation) => violation.status === 'Pending').length > 0 ? (
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
              <th style={headerStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {violations
              .filter((violation) => violation.status === 'Pending') // Filter only pending violations
              .map((violation) => (
                <tr key={violation.id} style={rowStyle}>
                  <td style={cellStyle}>{violation.id}</td>
                  <td style={cellStyle}>{violation.type}</td>
                  <td style={cellStyle}>{violation.date}</td>
                  <td style={cellStyle}>₱{violation.amount}</td>
                  <td style={{ ...cellStyle, color: '#FF6B6B' }}>{violation.status}</td>
                  <td style={cellStyle}>
                    <button
                      onClick={() => handlePayment(violation.id)}
                      style={{
                        padding: '8px 12px',
                        backgroundColor: '#4CAF50',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      Pay Now
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: 'center', color: '#aaa' }}>No pending fines to pay.</p>
      )}
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

export default PaymentPage;
