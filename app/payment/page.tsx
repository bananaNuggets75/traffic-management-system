'use client';
import React, { useState } from 'react';
import styles from '../page.module.css';

const ViolationTable = ({ violations, onPayFine }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Violation ID</th>
            <th>Violation Type</th>
            <th>Date</th>
            <th>Fine Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {violations.map((violation) => (
            <tr key={violation.id}>
              <td>{violation.id}</td>
              <td>{violation.type}</td>
              <td>{violation.date}</td>
              <td>{violation.amount}</td>
              <td>
                <span className={violation.status === 'Paid' ? styles.paid : styles.pending}>
                  {violation.status}
                </span>
              </td>
              <td>
                {violation.status === 'Pending' ? (
                  <button onClick={() => onPayFine(violation.id)}>
                    Pay Now
                  </button>
                ) : (
                  <span>Paid</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 8px;
          text-align: left;
          border: 1px solid #ddd;
        }
        th {
          background-color: rgb(0, 0, 0);
          color: white;
        }
        button {
          background-color: rgb(14, 114, 138);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
        }
        button:hover {
          background-color: rgb(97, 167, 220);
        }
        .${styles.pending} {
          color: red;
        }
        .${styles.paid} {
          color: green;
        }
      `}</style>
    </div>
  );
};

export default function PaymentPage() {
  const [violations, setViolations] = useState([
    { id: 12345, type: 'Speeding', date: '2024-12-10', amount: '₱1500.00', status: 'Pending' },
    { id: 67890, type: 'Parking', date: '2024-12-12', amount: '₱500.00', status: 'Paid' },
  ]);

  const handlePayFine = (id) => {
    setViolations(violations.map(violation => 
      violation.id === id ? { ...violation, status: 'Paid' } : violation
    ));
  };

  return (
    <div className={styles.page}>
      <h1>Traffic Violations</h1>
      <ViolationTable violations={violations} onPayFine={handlePayFine} />
    </div>
  );
}
