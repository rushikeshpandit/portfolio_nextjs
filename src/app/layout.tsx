import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import './globals.css';
import Navigation from './components/navigation';
import {Analytics} from '@vercel/analytics/react';
import Home from './home/page';
import About from './about/page';
import TechStack from './techstack/page';
import Professional from './professional/page';
import Contact from './contact/page';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Rushikesh Pandit - Portfolio',
  description: 'Software Developer',
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        <Home />
        <About />
        <TechStack />
        <Professional />
        <Contact />
        <Analytics />
      </body>
    </html>
  );
}
