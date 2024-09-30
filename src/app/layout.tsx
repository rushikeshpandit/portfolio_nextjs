import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import './globals.css';
import Navigation from './components/navigation';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import Home from './home/page';
import About from './about/page';
import TechStack from './techstack/page';
import Professional from './professional/page';
import SideProjects from './sideProjects/page';
import Contact from './contact/page';
import styles from './styles.module.css';
import Image from 'next/image';

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
