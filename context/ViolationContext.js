'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { ref, onValue, push, update } from 'firebase/database';

const ViolationsContext = createContext();

export const ViolationsProvider = ({ children }) => {
  const [violations, setViolations] = useState([]);

  useEffect(() => {
    const violationsRef = ref(db, 'violations');
    const unsubscribe = onValue(violationsRef, (snapshot) => {
      const data = snapshot.val();
      const violationsArray = data
        ? Object.entries(data).map(([id, violation]) => ({ id, ...violation }))
        : [];
      setViolations(violationsArray);
    });

    return () => unsubscribe();
  }, []);

  // Add a new violation
  const addViolation = async (newViolation) => {
    const violationsRef = ref(db, 'violations');
    await push(violationsRef, { ...newViolation, status: 'Pending' });
  };

  // Update an existing violation
  const updateViolation = async (id, updates) => {
    const violationRef = ref(db, `violations/${id}`);
    await update(violationRef, updates);
  };

  return (
    <ViolationsContext.Provider value={{ violations, addViolation, updateViolation }}>
      {children}
    </ViolationsContext.Provider>
  );
};

export const useViolations = () => useContext(ViolationsContext);
