'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ref, onValue, push, update } from 'firebase/database';
import { database } from '../lib/firebase'; 

const ViolationsContext = createContext(undefined);

export const ViolationsProvider = ({ children }) => {
  const [violations, setViolations] = useState([]);

  useEffect(() => {
    const violationsRef = ref(database, 'violations');

    const unsubscribe = onValue(violationsRef, (snapshot) => {
      const data = snapshot.val();

      const violationsArray = [];
      const orphanedStatusUpdates = {};

      if (data) {
        // Process each entry in the database
        Object.entries(data).forEach(([key, value]) => {
          if (key.startsWith('-')) {
            // Structured violation with a Firebase-generated key
            violationsArray.push({ id: key, ...value });
          } else if (typeof value === 'object' && value.status) {
            // Orphaned status update (e.g., { 1734541282958: { status: 'Paid' } })
            orphanedStatusUpdates[key] = value.status;
          }
        });

        // Merge orphaned statuses into structured violations
        violationsArray.forEach((violation) => {
          if (orphanedStatusUpdates[violation.id]) {
            violation.status = orphanedStatusUpdates[violation.id];
            delete orphanedStatusUpdates[violation.id];
          }
        });
      }

      setViolations(violationsArray);
    });

    return () => unsubscribe();
  }, []);

  // Add a new violation
  const addViolation = async (newViolation) => {
    const violationsRef = ref(database, 'violations');
    const newViolationRef = push(violationsRef);
    await update(newViolationRef, { ...newViolation, status: 'Pending' });
  };

  // Update an existing violation's status
  const updateViolationStatus = async (id, status) => {
    const statusRef = ref(database, `violations/${id}`);
    await update(statusRef, { status });
  };

  return (
    <ViolationsContext.Provider value={{ violations, addViolation, updateViolationStatus }}>
      {children}
    </ViolationsContext.Provider>
  );
};

// Hook to use the ViolationsContext
export const useViolations = () => {
  const context = useContext(ViolationsContext);
  if (!context) {
    throw new Error('useViolations must be used within a ViolationsProvider');
  }
  return context;
};

export const useViolationContext = () => useContext(ViolationContext);
