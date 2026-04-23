import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Apps from '../components/Apps';
import OpenSource from '../components/OpenSource';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Stack from '../components/Stack';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider" style={{maxWidth: 1000, margin: '0 auto'}} />
        <About />
        <div className="divider" style={{maxWidth: 1000, margin: '0 auto'}} />
        <Stack />
        <div className="divider" style={{maxWidth: 1000, margin: '0 auto'}} />
        <Experience />
        <div className="divider" style={{maxWidth: 1000, margin: '0 auto'}} />
        <Apps />
        <div className="divider" style={{maxWidth: 1000, margin: '0 auto'}} />
        <OpenSource />
        <div className="divider" style={{maxWidth: 1000, margin: '0 auto'}} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
