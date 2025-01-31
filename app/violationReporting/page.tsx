'use client';

import React, { useState } from 'react';
import { useViolations } from '../../context/ViolationContext';

const ViolationReporting: React.FC = () => {
  const { addViolation } = useViolations();

  // Local state for form inputs
  const [formData, setFormData] = useState({
    date: '',
    type: '',
    amount: '',
    description: '',
    location: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.date || !formData.type || !formData.amount || !formData.location) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      // Add violation to Firebase
      await addViolation({
        date: formData.date,
        type: formData.type,
        amount: parseFloat(formData.amount),
        description: formData.description || '',
        location: formData.location,
      });

      // Clear form and show success message
      setFormData({ date: '', type: '', amount: '', description: '', location: '' });
      setSuccessMessage('Violation submitted successfully!');
    } catch (error) {
      console.error('Error submitting violation:', error);
      alert('An error occurred while submitting the violation. Please try again.');
    }
  };

  return (
    <div
      style={{
        padding: '24px',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#222',
        color: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>Report a Violation</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Date */}
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none' }}
            required
          />
        </div>

        {/* Violation Type */}
        <div>
          <label>Violation Type:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none' }}
            required
          >
            <option value="" disabled>
              -- Select Violation Type --
            </option>
            <option value="Running Red Light">Running Red Light</option>
            <option value="Illegal Parking">Illegal Parking</option>
            <option value="Overspeeding">Overspeeding</option>
            <option value="Signal Violation">Signal Violation</option>
            <option value="Reckless Driving">Reckless Driving</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter the location of the violation"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none' }}
            required
          />
        </div>

        {/* Fine Amount */}
        <div>
          <label>Fine Amount (₱):</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter fine amount"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: 'none' }}
            required
            step="1"
          />
        </div>

        {/* Description Box */}
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Add additional details about the violation..."
            rows={4}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: 'none',
              resize: 'none',
            }}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: '12px',
            backgroundColor: '#6917ce',
            color: '#ffffff',
            fontWeight: 'bold',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Submit Violation
        </button>
      </form>

      {/* Success Message */}
      {successMessage && (
        <p style={{ color: '#4CAF50', textAlign: 'center', marginTop: '16px' }}>
          {successMessage}
        </p>
      )}
    </div>
  );
};

export default ViolationReporting;
