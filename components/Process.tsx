"use client";

import FadeIn from "./FadeIn";
import { info } from "../lib/data";

export default function ProcessSection() {
  // Phase 3: trust-building process section for transparency and quality signals.
  return (
    <section
      id="process"
      className="section-pad section-pad-top"
      style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}
    >
      <FadeIn>
        <div className="section-label" style={{ marginBottom: 16 }}>Process</div>
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
          A clear working model from idea to product launch
        </h2>
      </FadeIn>

      <div
        className="process-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 18,
        }}
      >
        {info.process.map((step, index) => (
          <FadeIn key={step.number} delay={index * 0.08}>
            <div className="card process-card" style={{ padding: "22px 20px" }}>
              <div
                className="font-display"
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  letterSpacing: "0.12em",
                  marginBottom: 12,
                }}
              >
                {step.number}
              </div>
              <div
                className="font-display"
                style={{
                  fontSize: "1.28rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  marginBottom: 10,
                }}
              >
                {step.title}
              </div>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.92rem" }}>
                {step.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
