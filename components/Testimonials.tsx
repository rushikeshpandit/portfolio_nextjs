"use client";

import FadeIn from "./FadeIn";
import { info } from "../lib/data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad section-pad-top"
      style={{ padding: "100px 24px 80px", maxWidth: 1100, margin: "0 auto" }}
    >
      <FadeIn>
        <div className="section-label" style={{ marginBottom: 16 }}>Testimonials</div>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.9rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            color: "var(--text)",
            marginBottom: 40,
            maxWidth: 700,
          }}
        >
          Product-minded engineering built for real-world outcomes
        </h2>
      </FadeIn>

      <div
        className="testimonials-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
        }}
      >
        {info.testimonials.map((item, index) => (
          <FadeIn key={item.name} delay={index * 0.08}>
            <div className="card quote-card" style={{ padding: "24px 22px" }}>
              <div aria-hidden="true" style={{ fontSize: "2.4rem", color: "var(--accent)", lineHeight: 1 }}>
                “
              </div>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.96rem",
                  lineHeight: 1.8,
                  marginBottom: 18,
                  flex: 1,
                }}
              >
                {item.quote}
              </p>
              <div
                className="font-display"
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  marginBottom: 4,
                }}
              >
                {item.name}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-dim)" }}>{item.role}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
