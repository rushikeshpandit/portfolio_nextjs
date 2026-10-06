"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { info } from "../lib/data";
import CountUp from "./CountUp";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.18 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const },
  },
};

const disciplines = [
  "React Native",
  "iOS & SwiftUI",
  "Product engineering",
  "Web platforms",
  "Elixir & Phoenix",
];

export default function Hero() {
  const [countTrigger, setCountTrigger] = useState(false);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{ minHeight: "100vh", padding: "128px 24px 54px", position: "relative" }}
    >
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />

      <div className="hero-container" style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
        <div className="hero-name-stage">
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.08, ease: [0.19, 1, 0.22, 1] }}
            className="font-display hero-name shimmer-text"
          >
            {info.name}
          </motion.h1>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div className="hero-copy">
            <motion.div variants={item} style={{ marginBottom: 24 }}>
              <div className="available-badge" style={{ display: "inline-flex" }}>
                <div className="available-dot" />
                {info.availability}
              </div>
            </motion.div>

            <motion.p
              variants={item}
              style={{
                marginBottom: 14,
                fontSize: "0.76rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent-2)",
                fontWeight: 700,
              }}
            >
              React Native developer · iOS engineer · full-stack product builder
            </motion.p>

            <motion.h2
              variants={item}
              className="font-display"
              style={{
                fontSize: "clamp(1.35rem, 2.6vw, 2rem)",
                fontWeight: 600,
                color: "var(--text)",
                letterSpacing: "-0.035em",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              {info.title}
            </motion.h2>

            <motion.p
              variants={item}
              style={{
                fontSize: "1.02rem",
                color: "var(--text-muted)",
                maxWidth: 620,
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              {info.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="hero-ctas"
              style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 22 }}
            >
              <a href="#contact" className="btn-primary">
                Hire a senior product engineer
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#apps" className="btn-outline">
                Explore selected work
              </a>
            </motion.div>

            <motion.div
              variants={item}
              style={{ display: "flex", flexWrap: "wrap", gap: 8, maxWidth: 700 }}
            >
              {["React Native", "iOS", "SwiftUI", "Next.js", "TypeScript", "Elixir", "Phoenix", "UI/UX"].map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="hero-visual-scene"
            aria-hidden="true"
          />
        </motion.div>

        <div className="hero-marquee" aria-hidden="true">
          <div className="hero-marquee__track">
            {[0, 1].map((copy) => (
              <div className="hero-marquee__group" key={copy}>
                {disciplines.map((discipline) => (
                  <span key={`${copy}-${discipline}`}>{discipline} ✳</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.85, ease: [0.19, 1, 0.22, 1] }}
          onAnimationComplete={() => setCountTrigger(true)}
          className="hero-stats"
          style={{
            display: "flex",
            gap: 48,
            marginTop: 40,
            paddingTop: 32,
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap",
          }}
        >
          {info.quickStats.map((stat) => (
            <div key={stat.label}>
              <div
                className="font-display"
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {stat.value.includes("+") ? (
                  <CountUp target={Number.parseInt(stat.value.replaceAll(",", ""), 10)} suffix="+" duration={1800} trigger={countTrigger} />
                ) : (
                  stat.value
                )}
              </div>
              <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
