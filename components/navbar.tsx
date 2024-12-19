import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="flex items-center justify-between p-4">
        {/* Left Section: Logo and Brand */}
        <div className="flex items-center lg:flex-1">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold text-gray-800">
          <Image
            src="/SafeDrive-logo.png" 
            alt="SafeDrive Logo"
            width={40}
            height={40}
            className="mr-2" 
          />
          </Link>
        </div>

        {/* Center Section: Navigation Links */}
        <ul className="flex space-x-6 text-gray-700">
          <li>
            <Link href="/payment" className="hover:text-blue-500">
              Fine Management and Payment
            </Link>
          </li>
          <li>
            <Link href="/driversProfile" className="hover:text-blue-500">
              Drivers Profile and Violation History
            </Link>
          </li>
          <li>
            <Link href="/violationReporting" className="hover:text-blue-500">
              Violation and Reporting
            </Link>
          </li>
        </ul>

        {/* Right Section: Log In Button */}
        <div className="right-nav">
          <button className="login-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-purple-600">
            <Link href="/login">Log In</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
