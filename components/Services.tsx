"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { info } from "../lib/data";

export default function Services() {
  // Phase 2: service cards focused on conversion and clarity.
  return (
    <section
      id="services"
      className="section-pad section-pad-top"
      style={{ padding: "100px 24px 80px", maxWidth: 1100, margin: "0 auto" }}
    >
      <FadeIn>
        <div className="section-label" style={{ marginBottom: 16 }}>Services</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: "20px",
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: 620 }}>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                color: "var(--text)",
                marginBottom: 12,
              }}
            >
              Product engineering services built for growth
            </h2>
          </div>
          <a href="#contact" className="btn-primary">
            Book a discovery call
          </a>
        </div>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 18,
        }}
      >
        {info.services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.08}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="card service-card"
              style={{
                padding: "26px 22px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="service-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>

              <div
                className="font-display"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  marginBottom: 10,
                }}
              >
                {service.title}
              </div>

              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.92rem",
                  lineHeight: 1.7,
                  marginBottom: 18,
                }}
              >
                {service.description}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginBottom: 18,
                  flex: 1,
                }}
              >
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                      color: "var(--text-muted)",
                      fontSize: "0.84rem",
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        marginTop: 8,
                        flexShrink: 0,
                      }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="service-card__link">
                {service.cta}
                <span aria-hidden="true">→</span>
              </a>
            </motion.article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
