export default function Login() {
    return (
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <h1 style={styles.title}>Admin Login</h1>
          <form>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.label}>Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>Login</button>
          </form>
        </div>
      </div>
    );
  }
  
  // Inline styles for simplicity
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f4f9',
      padding: '1rem',
    },
    formContainer: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '0.5rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
      marginBottom: '1.5rem',
      fontSize: '1.5rem',
      color: '#333',
      textAlign: 'center',
    },
    inputGroup: {
      marginBottom: '1rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontSize: '0.9rem',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '0.8rem',
      border: '1px solid #ccc',
      borderRadius: '0.25rem',
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '0.8rem',
      backgroundColor: '#1c1227',
      color: '#fff',
      border: 'none',
      borderRadius: '0.25rem',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };
  