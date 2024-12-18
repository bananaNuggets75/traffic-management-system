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
                <option value="illegalParking">Illegal Parking</option>
                <option value="recklessDriving">Reckless Driving</option>
                <option value="overspeeding">Overspeeding</option>
                <option value="drivingUnderInfluence">Driving Under the Influence</option>
                <option value="runningRedLight">Running a Red Light</option>
                <option value="distractedDriving">Distracted Driving</option>
                <option value="drivingWithoutInsurance">Driving Without Insurance</option>
                <option value="noSeatbelt">No Seatbelt</option>
                <option value="disregardingTrafficSigns">Disregarding Traffic Signs</option>
                <option value="unauthorizedUTurn">Unauthorized U-Turn</option>
                <option value="blockingPedestrianLane">Blocking Pedestrian Lane</option>
                <option value="overloading">Overloading</option>
                <option value="obstructionOfTraffic">Obstruction of Traffic</option>
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

      <style jsx>{`
        .container {
          max-width: 1500px;
          margin: 0 auto;
          padding: 75px;
          font-family: Arial, sans-serif;
          background-image: url("https://media.gettyimages.com/id/186735363/photo/police-officer.jpg?s=2048x2048&w=gi&k=20&c=9jtzIaWvrqOU98CVqkVE8M3oNRscBAEYe5J7ZKt_tDE=");
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          color: #fff; 
        }

        .header {
          text-align: center;
          margin-bottom: 20px;
        }

        .header h1 {
          font-size: 5rem;
        }

        .header .subtitle {
          font-size: 1rem;
        }

        .main {
          background: rgba(255, 255, 255, 0.4);
          padding: 20px;
          border-radius: 8px;
        }

        .reportForm h2 {
          font-size: 3grem;
          margin-bottom: 10px;
        }

        .formGroup {
          margin-bottom: 15px;
        }

        .formGroup label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .formGroup input,
        .formGroup select,
        .formGroup textarea {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .formGroup textarea {
          resize: vertical;
        }

        .submitButton {
          background-color: #0070f3;
          color: #fff;
          padding: 10px 15px;
          font-size: 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submitButton:hover {
          background-color: #005bb5;
        }

        .footer {
          margin-top: 20px;
          text-align: center;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}
