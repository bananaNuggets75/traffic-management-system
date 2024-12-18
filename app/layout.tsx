import './globals.css';
import Navbar from '../components/navbar';
import { ViolationProvider } from '../context/ViolationContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <ViolationProvider>
          <Navbar />
          <div className="flex justify-center items-center p-24">{children}</div>
        </ViolationProvider>
      </body>
    </html>
  );
}
