"use client";
import React, { useState } from 'react';

// Define the type for styles to help TypeScript understand the correct properties
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center', // Valid CSS value
    fontWeight: 'bold',
  },
  profile: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontWeight: 'bold',
    backgroundColor: 'blue',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  totalFines: {
    fontWeight: 'bold',
  },
  backButton: {
    marginBottom: '20px',
    padding: '10px 15px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
  },
};

const DriverProfile = () => {
  const [drivers] = useState([
    {
      id: 1,
      name: 'Jed Jabadan',
      licenseNumber: 'ABC123456',
      address: 'Jaro, Iloilo City',
      violations: [
        { id: 1, date: '2024-12-01', description: 'Speeding', fine: 10000 },
        { id: 2, date: '2024-12-02', description: 'Running a red light', fine: 7500 },
        { id: 3, date: '2024-12-03', description: 'Illegal parking', fine: 5500 },
      ],
    },
    {
      id: 2,
      name: 'Maria Labo',
      licenseNumber: 'XYZ987654',
      address: 'Molo, Iloilo City',
      violations: [
        { id: 1, date: '2024-12-10', description: 'Seatbelt violation', fine: 10550 },
        { id: 2, date: '2024-12-15', description: 'Speeding', fine: 5500},
      ],
    },
    {
      id: 3,
      name: 'Mr Long Bomb',
      licenseNumber: 'LMN456789',
      address: 'Pavia, Iloilo',
      violations: [
        { id: 1, date: '2024-5-13', description: 'Illegal parking', fine: 11500 },
      ],
    },
  ]);

  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleDriverClick = (driver) => {
    setSelectedDriver(driver);
  };

  const handleBackClick = () => {
    setSelectedDriver(null);
  };

  return (
    <div style={styles.container}>
      <h1>DRIVER PROFILE</h1>

      {!selectedDriver ? (
        <div>
          {drivers.map(driver => (
            <div key={driver.id} style={styles.profile} onClick={() => handleDriverClick(driver)}>
              <h2>{driver.name}</h2>
              <p><strong>License Number:</strong> {driver.licenseNumber}</p>
              <p><strong>Address:</strong> {driver.address}</p> 
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={handleBackClick} style={styles.backButton}>Back to Profiles</button>
          <h2>{selectedDriver.name}</h2>
          <p><strong>License Number:</strong> {selectedDriver.licenseNumber}</p>
          <p><strong>Address:</strong> {selectedDriver.address}</p> 
          <h2>Violation History</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Fine (₱)</th>
              </tr>
            </thead>
            <tbody>
              {selectedDriver.violations.map(violation => (
                <tr key={violation.id}>
                  <td>{violation.date}</td>
                  <td>{violation.description}</td>
                  <td>{violation.fine}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={styles.totalFines}>
            <h3>Total Fines: ₱{selectedDriver.violations.reduce((total, violation) => total + violation.fine, 0)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverProfile;
