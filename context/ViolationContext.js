'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebaseConfig';

const ViolationsContext = createContext();

export const ViolationsProvider = ({ children }) => {
  const [violations, setViolations] = useState([]);

  useEffect(() => {
    const fetchViolations = async () => {
      const violationsRef = collection(db, 'violations');
      const snapshot = await getDocs(violationsRef);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setViolations(data);
    };

    fetchViolations();
  }, []);

  const addViolation = async (newViolation) => {
    const violationsRef = collection(db, 'violations');
    const docRef = await addDoc(violationsRef, newViolation);
    setViolations((prev) => [...prev, { id: docRef.id, ...newViolation }]);
  };

  const updateViolation = async (id, updates) => {
    const violationDoc = doc(db, 'violations', id);
    await updateDoc(violationDoc, updates);
    setViolations((prev) =>
      prev.map((violation) =>
        violation.id === id ? { ...violation, ...updates } : violation
      )
    );
  };

  return (
    <ViolationsContext.Provider value={{ violations, addViolation, updateViolation }}>
      {children}
    </ViolationsContext.Provider>
  );
};

export const useViolations = () => useContext(ViolationsContext);
