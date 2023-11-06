import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import Navigation from './components/navigation';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Rushikesh Pandit - Portfolio',
  description: 'Software Developer',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
