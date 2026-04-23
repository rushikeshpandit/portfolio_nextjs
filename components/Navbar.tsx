"use client";

import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about",      label: "About" },
  { href: "#stack",      label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#apps",       label: "Apps" },
  { href: "#opensource", label: "Open Source" },
  { href: "#contact",    label: "Contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  // close drawer when route hash changes (link clicked)
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  // prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleMobileLink = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={scrolled ? "navbar navbar--scrolled" : "navbar"}
      >
        <nav className="navbar__inner">
          {/* Logo */}
          <a href="#" className="navbar__logo font-display">
            RP<span className="navbar__logo-dot">.</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop right actions */}
          <div className="navbar__actions">
            <ThemeToggle />
            <a
              href="mailto:rushikesh.d.pandit@gmail.com"
              className="btn-primary"
              style={{ padding: "7px 16px", fontSize: "0.8125rem" }}
            >
              Hire Me
            </a>
            {/* Hamburger — visible only on mobile via CSS */}
            <button
              className={menuOpen ? "hamburger hamburger--open" : "hamburger"}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="hamburger__bar" />
              <span className="hamburger__bar" />
              <span className="hamburger__bar" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <div className={menuOpen ? "mobile-menu mobile-menu--open" : "mobile-menu"} aria-hidden={!menuOpen}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-menu__link"
            onClick={handleMobileLink}
          >
            {link.label}
          </a>
        ))}
        <div className="mobile-menu__cta">
          <a
            href="mailto:rushikesh.d.pandit@gmail.com"
            className="btn-primary"
            onClick={handleMobileLink}
            style={{ flex: 1, justifyContent: "center" }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}
