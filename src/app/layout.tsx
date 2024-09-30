import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import './globals.css';
import Navigation from './components/navigation';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import styles from './styles.module.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Home = dynamic(() => import('./home/page'));
const About = dynamic(() => import('./about/page'));
const TechStack = dynamic(() => import('./techstack/page'));
const Professional = dynamic(() => import('./professional/page'));
const SideProjects = dynamic(() => import('./sideProjects/page'));
const Contact = dynamic(() => import('./contact/page'));

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
        <Home />
        <About />
        <TechStack />
        <Professional />
        <SideProjects />
        <Contact />
        <div className={styles.floatingbuttondiv}>
          <a className={styles.fb} href="/Rushikesh_resume.pdf" target="_blank" rel="noopener noreferrer" download={true}>
            <Image src={'/downloadpdf.svg'} alt={"downloadpdf"} width={50} height={50} className="h-14 w-14" />
          </a>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
