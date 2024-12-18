"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ref, onValue, update } from "firebase/database";
import { db } from "../lib/firebase";

const ViolationsContext = createContext();

export const ViolationsProvider = ({ children }) => {
  const [violations, setViolations] = useState([]);

  // Fetch violations from Firebase Realtime Database
  useEffect(() => {
    const violationsRef = ref(db, "violations");
    const unsubscribe = onValue(violationsRef, (snapshot) => {
      const data = snapshot.val() || {};
      const violationsArray = Object.values(data);
      setViolations(violationsArray);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  // Update a violation's status
  const updateViolationStatus = async (id, newStatus) => {
    const violationRef = ref(db, `violations/${id}`);
    await update(violationRef, { status: newStatus });

    // Optimistic UI update
    setViolations((prevViolations) =>
      prevViolations.map((violation) =>
        violation.id === id ? { ...violation, status: newStatus } : violation
      )
    );
  };

  return (
    <ViolationsContext.Provider value={{ violations, updateViolationStatus }}>
      {children}
    </ViolationsContext.Provider>
  );
};

export const useViolations = () => useContext(ViolationsContext);
