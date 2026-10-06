import FadeIn from "./FadeIn";
import { info } from "../lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad section-pad-top"
      style={{ padding: "100px 24px 120px", maxWidth: 1100, margin: "0 auto" }}
    >
      <FadeIn>
        <div
          className="card"
          style={{
            padding: 0,
            overflow: "hidden",
            background: "linear-gradient(135deg, rgba(10,14,24,0.96), rgba(17,24,38,0.8))",
            border: "1px solid rgba(148,163,184,0.16)",
          }}
        >
          <div
            className="contact-layout"
            style={{
              gap: 0,
            }}
          >
            <div style={{ padding: "32px 28px 30px" }}>
              <div className="section-label" style={{ marginBottom: 16, display: "inline-block" }}>
                Let&apos;s build what&apos;s next
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2.1rem, 4vw, 3.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                  color: "var(--text)",
                  marginBottom: 18,
                }}
              >
                Start your next product story.
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.02rem", lineHeight: 1.8, marginBottom: 26, maxWidth: 580 }}>
                Whether you need a premium product launch, a mobile app, or a web experience that converts, I can help shape the product and build it through to launch.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 26 }}>
                <a href={`mailto:${info.email}`} className="btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  {info.email}
                </a>
                <a href="tel:+917588945789" className="btn-outline">
                  +91 75889 45789
                </a>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {info.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ padding: "8px 16px" }}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div
              style={{
                borderLeft: "1px solid rgba(148,163,184,0.16)",
                background: "rgba(11,17,27,0.7)",
                padding: "30px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 18,
              }}
            >
              <div>
                <div style={{ color: "var(--accent)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                  Typical scope
                </div>
                <div style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>
                  UX & prototyping
                </div>
                <div style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                  Product design, web strategy, feature planning, and MVP execution.
                </div>
              </div>

              <div>
                <div style={{ color: "var(--accent)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                  Engagement model
                </div>
                <div style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>
                  Freelance / consulting
                </div>
                <div style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                  Fixed scope, product sprint, or long-term hands-on product engineering partnerships.
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 12,
                  marginTop: 8,
                }}
              >
                <div className="card" style={{ padding: "16px 14px", minHeight: 78 }}>
                  <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text)" }}>11+</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>years</div>
                </div>
                <div className="card" style={{ padding: "16px 14px", minHeight: 78 }}>
                  <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text)" }}>16+</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>apps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
