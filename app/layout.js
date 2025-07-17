import { AuthProvider } from '@/context/AuthProvider';
import './globals.css';

export const metadata = {
  title: 'CodeGen AI',
  description: 'AI-powered code generator',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark-theme">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}