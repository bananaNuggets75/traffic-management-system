import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="flex lg:flex-1">
          <Link href="/" className="text-lg font-bold text-gray-800">
            Next.js Authentication
          </Link>
        </div>
        <ul>
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
        <div className="right-nav">
          <button className="login-button">
            <Link href="/login">Log In</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
