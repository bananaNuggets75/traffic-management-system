'use client';
import React from 'react'
import styles from '../page.module.css';

const ViolationTable = ({ violations }) => {
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
              <td>{violation.status}</td>
              <td>
                
                  <button>
                    Pay Now
                  </button>
                
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
          background-color:rgb(0, 0, 0);
        }
        button {
          background-color:rgb(14, 114, 138);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
        }
        button:hover {
          background-color:rgb(97, 167, 220);
        }
      `}</style>
    </div>
  );
};

export default function PaymentPage() {
  const violations = [
    { id: 12345, type: 'Speeding', date: '2024-12-10', amount: '₱1500.00', status: 'Pending' },
    { id: 67890, type: 'Parking', date: '2024-12-12', amount: '₱500.00', status: 'Paid' },
  ];

  return <div className={styles.page}>

  <h1>Traffic Violations</h1>
  <ViolationTable violations={violations} />
      
      
      
    </div>
   
  
}
