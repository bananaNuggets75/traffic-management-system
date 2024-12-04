import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-l-0 border-r-0 border-b-gray-600">
        <div className="flex lg:flex-1">
          <Link href="/" className="m-1.5 p-1.5 text-lg font-bold text-gray-800">
            Next.js Authentication
          </Link>
        </div>

        <ul className="flex items-center space-x-6 text-sm font-medium text-gray-600">
          <li>
            <Link href="/dashboard" className="m-1.5 p-1.5 hover:text-black">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/payment" className="m-1.5 p-1.5 hover:text-black">
              Fine Management and Payment
            </Link>
          </li>
          <li>
            <Link href="/driversProfile" className="m-1.5 p-1.5 hover:text-black">
              Drivers Profile and Violation History
            </Link>
          </li>
          <li>
            <Link href="/violationReporting" className="m-1.5 p-1.5 hover:text-black">
              Violation and Reporting
            </Link>
          </li>
        </ul>

        <div className="flex items-center">
          <Link
            href="/login"
            className="m-1.5 p-2 text-sm font-semibold text-white bg-green-500 rounded hover:bg-green-600"
          >
            Log In
          </Link>
        </div>
      </nav>
    </header>
  );
}