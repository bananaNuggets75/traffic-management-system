export default function LoginPage() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8f8f8' }}>
        <form style={{ 
          backgroundColor: '#fff', 
          padding: '2rem', 
          borderRadius: '0.5rem', 
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
          width: '300px' 
        }}>
          <h2 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#333' }}>Login</h2>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem', color: '#555' }}>Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #ddd', 
                borderRadius: '0.25rem' 
              }} 
              required 
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', color: '#555' }}>Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                border: '1px solid #ddd', 
                borderRadius: '0.25rem' 
              }} 
              required 
            />
          </div>
          <button 
            type="submit" 
            style={{ 
              width: '100%', 
              padding: '0.5rem', 
              backgroundColor: '#1c1227', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '0.25rem', 
              cursor: 'pointer', 
              fontWeight: 'bold' 
            }}>
            Login
          </button>
        </form>
      </div>
    );
  }
  