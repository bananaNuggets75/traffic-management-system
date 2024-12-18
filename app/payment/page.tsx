'use client';
// what the hell, please push
import React from 'react';
import { useViolations } from '../../context/ViolationContext';

const PaymentPage = () => {
  const { violations, setViolations } = useViolations();

  const handlePayment = (id: number) => {
    setViolations((prevViolations) =>
      prevViolations.map((violation) =>
        violation.id === id ? { ...violation, status: 'Paid' } : violation
      )
    );
    alert('Payment successful! The violation status has been updated.');
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#2C2F38', color: '#fff', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Payment Page</h1>
      
      <div>
        {violations.length > 0 ? (
          violations.map((violation) => (
            <div
              key={violation.id}
              style={{
                backgroundColor: '#1E2126',
                padding: '16px',
                marginBottom: '16px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <p>
                  <strong>Violation Type:</strong> {violation.type}
                </p>
                <p>
                  <strong>Date:</strong> {violation.date}
                </p>
                <p>
                  <strong>Fine Amount:</strong> ₱{violation.amount}
                </p>
                <p>
                  <strong>Status:</strong>{' '}
                  <span
                    style={{
                      color: violation.status === 'Paid' ? '#4CAF50' : '#FF6B6B',
                    }}
                  >
                    {violation.status}
                  </span>
                </p>
              </div>
              {violation.status === 'Pending' && (
                <button
                  onClick={() => handlePayment(violation.id)}
                  style={{
                    backgroundColor: '#FF6B6B',
                    color: '#fff',
                    padding: '10px 16px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                >
                  Pay Now
                </button>
              )}
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#aaa' }}>
            No violations found. All dues are clear!
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;


