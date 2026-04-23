import FadeIn from "./FadeIn";
import { info } from "../lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad section-pad-top"
      style={{ padding: "100px 24px 120px", maxWidth: 1000, margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
        <FadeIn>
          <div className="section-label" style={{ marginBottom: 16, display: "block" }}>
            Let&apos;s work together
          </div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--text)", marginBottom: 20 }}
          >
            Have a project in mind?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 36 }}>
            I&apos;m open to freelance, consulting, and full-time opportunities. Whether you need a
            React Native app, an iOS experience, or a backend in Elixir — let&apos;s talk.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href={`mailto:${info.email}`} className="btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {info.email}
            </a>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            {info.socials.map((social) => (
              <a key={social.label} href={social.link} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "7px 18px" }}>
                {social.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
