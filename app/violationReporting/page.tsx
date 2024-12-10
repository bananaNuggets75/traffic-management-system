'use client';

import React from "react";

export default function ViolationReporting() {
  return (
    <div className="container-violation">
      <header className="header">
        <h1>Violation Reporting</h1>
        <p className="subtitle">
          Report traffic violations easily and help us maintain safer roads.
        </p>
      </header>

      <main className="main">
        <section className="reportForm">
          <h2>Submit a Violation</h2>
          <form>
            <div className="formGroup">
              <label htmlFor="violationType">Violation Type:</label>
              <select id="violationType" name="violationType" required>
                <option value="">Select a type</option>
                <option value="speeding">Speeding</option>
                <option value="illegalParking">Illegal Parking</option>
                <option value="recklessDriving">Reckless Driving</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="formGroup">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Provide details about the violation"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter the location of the violation"
                required
              />
            </div>

            <div className="formGroup">
              <label htmlFor="date">Date and Time:</label>
              <input type="datetime-local" id="date" name="date" required />
            </div>

            <div className="formGroup">
              <label htmlFor="attachment">Attach Evidence (Optional):</label>
              <input type="file" id="attachment" name="attachment" />
            </div>

            <button type="submit" className="submitButton">
              Submit Report
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>
          Your reports are confidential and will be reviewed by our team to
          ensure appropriate action is taken.
        </p>
      </footer>
    </div>
  );
}
