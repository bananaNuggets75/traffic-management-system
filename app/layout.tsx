import './globals.css';
import Navbar from '../components/navbar';
import { ViolationsProvider } from '../context/ViolationContext.js';

export default function RootLayout({ 
  children,
 }: { 
  children: React.ReactNode;
 }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <ViolationsProvider>
        <Navbar />
        <div className="flex justify-center items-center p-24">{children}</div>
        </ViolationsProvider>
      </body>
    </html>
  );
}