import Image from "next/image";
import FadeIn from "./FadeIn";
import { info } from "../lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="section-pad section-pad-top"
      style={{ padding: "100px 24px 80px", maxWidth: 1100, margin: "0 auto" }}
    >
      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <FadeIn>
          <div className="section-label" style={{ marginBottom: 16 }}>
            About
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "var(--text)",
              marginBottom: 24,
              maxWidth: 600,
            }}
          >
            Building mobile experiences that matter
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.85,
              fontSize: "0.9375rem",
              maxWidth: 680,
            }}
          >
            {info.bio}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <figure
            className="about-portrait"
            style={{ width: "min(100%, 380px)", justifySelf: "end" }}
          >
            <div className="about-portrait__glow" aria-hidden="true" />
            <Image
              className="about-portrait__image"
              src="/self.png"
              alt="Rushikesh Pandit, senior full-stack and mobile app engineer"
              width={420}
              height={420}
              sizes="(max-width: 768px) 80vw, 380px"
            />
            <figcaption className="about-portrait__caption">
              <strong>{info.name}</strong>
              <span>{info.location} · Available worldwide</span>
            </figcaption>
          </figure>
        </FadeIn>
      </div>
    </section>
  );
}
