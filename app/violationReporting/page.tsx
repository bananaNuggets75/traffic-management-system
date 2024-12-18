'use client';

import React, { useState } from 'react';
import { useViolations } from '../../context/ViolationContext';

const ViolationReportingPage = () => {
  const { addViolation } = useViolations();
  const [formData, setFormData] = useState({
    type: '',
    date: '',
    amount: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.type || !formData.date || !formData.amount) {
      alert('Please fill out all fields.');
      return;
    }

    // Add new violation
    addViolation({
      type: formData.type,
      date: formData.date,
      amount: parseFloat(formData.amount).toFixed(2), // Ensure amount is a valid decimal string
    });

    // Reset form and show success message
    setFormData({ type: '', date: '', amount: '' });
    setSuccessMessage('Violation successfully reported!');
    setTimeout(() => setSuccessMessage(''), 3000); // Clear success message after 3 seconds
  };

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#2C2F38', color: '#fff', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Report a Violation</h1>
      
      {successMessage && (
        <div style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px', borderRadius: '5px', marginBottom: '16px', textAlign: 'center' }}>
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Violation Type */}
        <div>
          <label htmlFor="type" style={{ display: 'block', marginBottom: '8px' }}>Violation Type:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #555' }}
          >
            <option value="">Select Type</option>
            <option value="Speeding">Speeding</option>
            <option value="Illegal Parking">Illegal Parking</option>
            <option value="Running a Red Light">Running a Red Light</option>
            <option value="Reckless Driving">Reckless Driving</option>
          </select>
        </div>

        {/* Date of Violation */}
        <div>
          <label htmlFor="date" style={{ display: 'block', marginBottom: '8px' }}>Date of Violation:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #555' }}
          />
        </div>

        {/* Amount */}
        <div>
          <label htmlFor="amount" style={{ display: 'block', marginBottom: '8px' }}>Fine Amount (₱):</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #555' }}
            placeholder="e.g., 1500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundColor: '#FF6B6B',
            color: '#fff',
            padding: '12px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Submit Violation
        </button>
      </form>
    </div>
  );
};

export default ViolationReportingPage;
