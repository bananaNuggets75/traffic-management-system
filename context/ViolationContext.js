'use client';

import React, { createContext, useContext, useState } from 'react';

// Create the context
const ViolationContext = createContext(undefined);

// Context provider component
export const ViolationProvider = ({ children }) => {
  const [violations, setViolations] = useState([]);

  const addViolation = (violation) => {
    setViolations((prev) => [...prev, violation]);
  };

  const updateViolationStatus = (id, status) => {
    setViolations((prev) =>
      prev.map((violation) =>
        violation.id === id ? { ...violation, status } : violation
      )
    );
  };

  return (
    <ViolationContext.Provider value={{ violations, addViolation, updateViolationStatus }}>
      {children}
    </ViolationContext.Provider>
  );
};

// Hook to use the context
export const useViolations = () => {
  const context = useContext(ViolationContext);
  if (!context) {
    throw new Error('useViolations must be used within a ViolationProvider');
  }
  return context;
};
