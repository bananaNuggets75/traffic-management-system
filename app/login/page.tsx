import React from 'react'
import styles from '../page.module.css';

export default function LoginPage() {
  return (
  <div className={styles.page}>
    <h1>Login</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  )
}
