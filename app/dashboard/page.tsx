"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/login"); // Redirect if not logged in
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      <p>Access your data and manage your account here.</p>
    </div>
  );
}
