import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import Experience from "../components/Experience";
import Apps from "../components/Apps";
import SelectedWork from "../components/SelectedWork";
import Testimonials from "../components/Testimonials";
import OpenSource from "../components/OpenSource";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Stack from "../components/Stack";

export default function Home() {
  return (
    <>
      {/* Phase 1: brand positioning + premium hero narrative */}
      <Navbar />
      <main>
        {/* Phase 2: conversion-focused sections and product story */}
        <Hero />
        <div className="divider" style={{ maxWidth: 1000, margin: "0 auto" }} />
        <About />
        <div className="divider" style={{ maxWidth: 1000, margin: "0 auto" }} />
        <Services />
        <div className="divider" style={{ maxWidth: 1000, margin: "0 auto" }} />
        <Stack />
        <div className="divider" style={{ maxWidth: 1000, margin: "0 auto" }} />
        <Process />
        <div className="divider" style={{ maxWidth: 1000, margin: "0 auto" }} />
        <Experience />
        <div className="divider" style={{ maxWidth: 1000, margin: "0 auto" }} />
        <SelectedWork />
        <div className="divider" style={{ maxWidth: 1000, margin: "0 auto" }} />
        <Apps />
        <div className="divider" style={{ maxWidth: 1000, margin: "0 auto" }} />
        <Testimonials />
        <div className="divider" style={{ maxWidth: 1000, margin: "0 auto" }} />
        <OpenSource />
        <div className="divider" style={{ maxWidth: 1000, margin: "0 auto" }} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
