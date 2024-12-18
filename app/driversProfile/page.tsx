"use client";

import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

const DriverProfile = () => {
  const { drivers, addViolation } = useAppContext();
  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleDriverClick = (driver) => {
    setSelectedDriver(driver);
  };

  const handleBackClick = () => {
    setSelectedDriver(null);
  };

  return (
    <div className="container">
      <h1>Drivers Profile</h1>

      {!selectedDriver ? (
        <div>
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="profile"
              onClick={() => handleDriverClick(driver)}
            >
              <h1>{driver.name}</h1>
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
          <h1>Violation History</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Fine (₱)</th>
              </tr>
            </thead>
            <tbody>
              {selectedDriver.violations.map((violation) => (
                <tr key={violation.id}>
                  <td>{violation.date}</td>
                  <td>{violation.description}</td>
                  <td>{violation.fine.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="totalFines">
            <h3>Total Fines: ₱{selectedDriver.violations.reduce((total, violation) => total + violation.fine, 0).toLocaleString()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverProfile;
