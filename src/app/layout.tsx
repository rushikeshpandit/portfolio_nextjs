import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import './globals.css';
import Navigation from './components/navigation';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200','300', '400', '500', '600','700','800','900'],
});

export const metadata: Metadata = {
  title: 'Rushikesh Pandit - Portfolio',
  description: 'Software Developer',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
