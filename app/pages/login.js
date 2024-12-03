export default function LoginPage() {
    return (
      <div className="login-page">
        <form className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    );
  }
  