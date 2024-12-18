import React, { createContext, useContext, useState, ReactNode } from "react";

type Violation = {
  date: string;
  description: string;
  location: string;
  fine?: number;
};

type Driver = {
  id: number;
  name: string;
  licenseNumber: string;
  address: string;
  violations: Violation[];
};

type AppState = {
  drivers: Driver[];
  addViolation: (driverId: number, violation: Violation) => void;
};

// Create Context
const AppContext = createContext<AppState | undefined>(undefined);

// Provider Component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [drivers, setDrivers] = useState<Driver[]>([
    {
      id: 1,
      name: "Alex Carter",
      licenseNumber: "ABC123456",
      address: "Jaro, Iloilo City",
      violations: [],
    },
    {
      id: 2,
      name: "Kobe ng Pinas",
      licenseNumber: "XYZ987654",
      address: "Molo, Iloilo City",
      violations: [],
    },
    {
      id: 3,
      name: "Mr Long Bomb",
      licenseNumber: "LMN456789",
      address: "Pavia, Iloilo",
      violations: [],
    },
  ]);

  const addViolation = (driverId: number, violation: Violation) => {
    setDrivers((prevDrivers) =>
      prevDrivers.map((driver) =>
        driver.id === driverId
          ? { ...driver, violations: [...driver.violations, violation] }
          : driver
      )
    );
  };

  return (
    <AppContext.Provider value={{ drivers, addViolation }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within an AppProvider");
  return context;
};
