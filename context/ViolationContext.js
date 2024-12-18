'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ref, onValue, push, update } from 'firebase/database';
import { database } from '../lib/firebase'; // Ensure this import is correct

const ViolationsContext = createContext(undefined);

export const ViolationsProvider = ({ children }) => {
  const [violations, setViolations] = useState([]);

  useEffect(() => {
    // Verify the database object
    console.log('Database instance:', database);

    const violationsRef = ref(database, 'violations');

    const unsubscribe = onValue(violationsRef, (snapshot) => {
      const data = snapshot.val();
      const violationsArray = data
        ? Object.entries(data).map(([key, violation]) => ({ id: key, ...violation }))
        : [];
      setViolations(violationsArray);
    });

    return () => unsubscribe();
  }, []);

  const addViolation = async (newViolation) => {
    const violationsRef = ref(database, 'violations');
    const newViolationRef = push(violationsRef);
    await update(newViolationRef, { ...newViolation, status: 'Pending' });
  };

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

export const useViolations = () => {
  const context = useContext(ViolationsContext);
  if (!context) {
    throw new Error('useViolations must be used within a ViolationsProvider');
  }
  return context;
};
