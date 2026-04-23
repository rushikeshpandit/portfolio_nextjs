"use client";

import FadeIn from "./FadeIn";
import { info } from "../lib/data";

type App = {
  name: string;
  tech: string;
  description: string;
  appStore?: string;
  playStore?: string;
  website?: string;
};

const techColor: Record<string, string> = {
  Flutter:        "#54C5F8",
  "React Native": "#61DAFB",
  "Objective-C":  "#999",
  SwiftUI:        "#FF6B6B",
  Swift:          "#FF7043",
};

function StoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontSize: "0.75rem",
        color: "var(--text-muted)",
        textDecoration: "none",
        padding: "4px 10px",
        borderRadius: 6,
        border: "1px solid var(--border-bright)",
        transition: "color 150ms ease, border-color 150ms ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.color = "var(--text)";
        el.style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.color = "var(--text-muted)";
        el.style.borderColor = "var(--border-bright)";
      }}
    >
      {children}
    </a>
  );
}

function AppCard({ app, index }: { app: App; index: number }) {
  const color = techColor[app.tech] ?? "var(--accent)";
  return (
    <FadeIn delay={index * 0.04}>
      <div className="card" style={{ padding: "22px 24px", display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color, padding: "2px 8px", borderRadius: 4, background: `${color}18`, border: `1px solid ${color}30` }}>
            {app.tech}
          </span>
        </div>
        <div className="font-display" style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em", marginBottom: 6 }}>
          {app.name}
        </div>
        <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: 1.6, flex: 1, marginBottom: 16 }}>
          {app.description}
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {app.appStore  && <StoreLink href={app.appStore}>⬡ App Store</StoreLink>}
          {app.playStore && <StoreLink href={app.playStore}>⬡ Play Store</StoreLink>}
          {app.website   && <StoreLink href={app.website}>↗ Website</StoreLink>}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Apps() {
  return (
    <section
      id="apps"
      className="section-pad section-pad-top"
      style={{ padding: "100px 24px", maxWidth: 1000, margin: "0 auto" }}
    >
      <FadeIn>
        <div className="section-label" style={{ marginBottom: 16 }}>Portfolio</div>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15, color: "var(--text)", marginBottom: 12 }}
        >
          Apps I&apos;ve shipped
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", marginBottom: 48, maxWidth: 500 }}>
          16+ applications across banking, social, e-commerce, IoT, and messaging.
        </p>
      </FadeIn>

      <div
        className="apps-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}
      >
        {info.apps.map((app, i) => (
          <AppCard key={app.name} app={app} index={i} />
        ))}
      </div>
    </section>
  );
}
