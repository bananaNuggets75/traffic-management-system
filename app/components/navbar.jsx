import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>Dashboard ❯</li>
        <li>Report Violation</li>
        <li>Fines and Payment</li>
        <li>Drivers History</li>
        <li>Analytics</li>
      </ul>
      <Link href="/login">
        <button className="login-button">Login</button>
      </Link>
    </nav>
  );
}
