"use client"; // Marks this file as a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // For navigation
import styles from '../page.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock authentication logic
    if (email === "admin@example.com" && password === "password") {
      localStorage.setItem("authToken", "adminAuthToken"); // Save auth token in localStorage
      router.push("/dashboard"); // Redirect to the dashboard
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className={styles.page}>
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
}
