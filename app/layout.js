import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-poppins' });

export const metadata = {
  title: 'Martomonail',
  description: 'Premium nail services with a touch of elegance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} bg-pink-50 text-gray-900`}>
        <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}