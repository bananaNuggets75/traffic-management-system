import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#1c1227', display: 'flex', alignItems: 'center' }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '2rem', 
        margin: 0, 
        padding: 0, 
        color: '#fff', 
        fontFamily: 'Arial, sans-serif', 
        fontSize: '1rem' 
      }}>
        <li style={{ cursor: 'pointer' }}>Dashboard ❯</li>
        <li style={{ cursor: 'pointer' }}>Report Violation</li>
        <li style={{ cursor: 'pointer' }}>Fines and Payment</li>
        <li style={{ cursor: 'pointer' }}>Drivers History</li>
        <li style={{ cursor: 'pointer' }}>Analytics</li>
      </ul>
      <Link href="/login" style={{ 
        marginLeft: 'auto', 
        padding: '0.5rem 1.5rem', 
        backgroundColor: '#fff', 
        color: '#1c1227', 
        border: 'none', 
        borderRadius: '0.25rem', 
        cursor: 'pointer', 
        fontWeight: 'bold', 
        textDecoration: 'none' 
      }}>
        Login
      </Link>
    </nav>
  );
}
