"use client"; // This makes the file a client component

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // For client-side routing
import styles from '../page.module.css';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authToken");

    if (!isAuthenticated) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear token
    router.push("/login"); // Redirect to logzain
  };

  return (
    <div className={styles.page}>
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
