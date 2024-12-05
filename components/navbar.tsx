"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check login status on component load
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // Update login state
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove auth token
    setIsLoggedIn(false); // Update state
    router.push("/login"); // Redirect to login
  };

  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-gray-200">
        <div className="flex lg:flex-1">
          <Link href="/" className="text-lg font-bold text-gray-800">
            Next.js Authentication
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/payment">Fine Management and Payment</Link>
          </li>
          <li>
            <Link href="/driversProfile">Drivers Profile and Violation History</Link>
          </li>
          <li>
            <Link href="/violationReporting">Violation and Reporting</Link>
          </li>
        </ul>
        <div className="right-nav flex items-center">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <button className="login-button bg-blue-500 text-white px-4 py-2 rounded">
              <Link href="/login">Log In</Link>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
