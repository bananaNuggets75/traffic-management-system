'use client';
import React, { createContext, useContext, useState } from 'react';

const ViolationsContext = createContext();

export const ViolationsProvider = ({ children }) => {
  const [violations, setViolations] = useState([
    { id: 12345, type: 'Speeding', date: '2024-12-10', amount: '1500.00', status: 'Pending' },
    { id: 67890, type: 'Illegal Parking', date: '2024-12-12', amount: '500.00', status: 'Paid' },
  ]);

  const addViolation = (newViolation) => {
    setViolations((prevViolations) => [
      ...prevViolations,
      { id: Date.now(), ...newViolation, status: 'Pending' },
    ]);
  };

  return (
    <ViolationsContext.Provider value={{ violations, addViolation }}>
      {children}
    </ViolationsContext.Provider>
  );
};

export const useViolations = () => useContext(ViolationsContext);
