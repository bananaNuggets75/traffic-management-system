"use client";

import React, { useState } from 'react';
import { Home, Map, PenTool, CreditCard } from 'lucide-react';

const SafeDriveApp = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const Navigation = () => (
    <div className="fixed left-0 top-0 h-full w-20 bg-orange-500 text-white flex flex-col items-center py-4">
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => setCurrentPage('dashboard')}
          className={`p-3 hover:bg-orange-600 rounded ${
            currentPage === 'dashboard' ? 'bg-orange-600' : ''
          }`}
        >
          <Home />
        </button>
        <button
          onClick={() => setCurrentPage('report')}
          className={`p-3 hover:bg-orange-600 rounded ${
            currentPage === 'report' ? 'bg-orange-600' : ''
          }`}
        >
          <PenTool />
        </button>
        <button
          onClick={() => setCurrentPage('fines')}
          className={`p-3 hover:bg-orange-600 rounded ${
            currentPage === 'fines' ? 'bg-orange-600' : ''
          }`}
        >
          <CreditCard />
        </button>
        <button
          onClick={() => setCurrentPage('analytics')}
          className={`p-3 hover:bg-orange-600 rounded ${
            currentPage === 'analytics' ? 'bg-orange-600' : ''
          }`}
        >
          <Map />
        </button>
      </div>
    </div>
  );

  const EmptyDashboard = () => (
    <div className="p-6 bg-gray-100 min-h-screen ml-20">
      <h1 className="text-3xl font-bold text-gray-300 text-center mt-20">
        Dashboard is Empty
      </h1>
    </div>
  );

  return (
    <div className="flex">
      <Navigation />
      <EmptyDashboard />
    </div>
  );
};

export default SafeDriveApp;
