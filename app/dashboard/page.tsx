import React from "react";
import styles from "./dashboard.module.css"; 

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>Traffic Management Dashboard</h1>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/reports">Reports</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.card}>
          <h2>Live Traffic Overview</h2>
          <p>Track and monitor real-time traffic data.</p>
        </section>
        <section className={styles.card}>
          <h2>Analytics</h2>
          <p>View insights and trends for better traffic management.</p>
        </section>
        <section className={styles.card}>
          <h2>System Alerts</h2>
          <p>Stay updated with the latest system notifications.</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Traffic Management System</p>
      </footer>
    </div>
  );
}
