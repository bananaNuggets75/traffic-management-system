"use client";
import { useState } from 'react';

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
    <div className="container">
      <h1>DRIVER PROFILE</h1>

      {!selectedDriver ? (
        <div>
          {drivers.map(driver => (
            <div key={driver.id} className="profile" onClick={() => handleDriverClick(driver)}>
              <h2>{driver.name}</h2>
              <p><strong>License Number:</strong> {driver.licenseNumber}</p>
              <p><strong>Address:</strong> {driver.address}</p> 
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={handleBackClick} className="backButton">Back to Profiles</button>
          <h2>{selectedDriver.name}</h2>
          <p><strong>License Number:</strong> {selectedDriver.licenseNumber}</p>
          <p><strong>Address:</strong> {selectedDriver.address}</p> 
          <h2>Violation History</h2>
          <table className="table">
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
          <div className="totalFines">
            <h3>Total Fines: ₱{selectedDriver.violations.reduce((total, violation) => total + violation.fine, 0)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverProfile;
