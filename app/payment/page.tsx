'use client';
import React from 'react'
import styles from '../page.module.css';

/*const ViolationTable = ({ violations }) => {
  return (
    <div>
      <h2>Your Traffic Violations</h2>
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
                {violation.status === 'Pending' && (
                  <button onClick={() => alert(`Paying fine for ${violation.id}`)}>
                    Pay Now
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const violations = [
  { id: 12345, type: 'Speeding', date: '2024-12-10', amount: '$150.00', status: 'Pending' },
  { id: 67890, type: 'Parking', date: '2024-12-12', amount: '$50.00', status: 'Paid' },
];*/

export default function PaymentPage() {

  return <div className={styles.page}>
      <div>
      <h1>Traffic Violations</h1>
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
        
            <tr>
              <td>12345</td>
              <td>Speeding</td>
              <td>2024-12-10</td>
              <td>500</td>
              <td>Pending</td>
              <td>
                
                  <button>
                    Pay Now
                  </button>
                
              </td>
            </tr>
         
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
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
        }
        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
    </div>
  </div>
}
