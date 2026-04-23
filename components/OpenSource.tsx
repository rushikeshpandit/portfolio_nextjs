import FadeIn from "./FadeIn";
import { info } from "../lib/data";

const typeLabel: Record<string, string> = {
  npm:    "npm package",
  web:    "web tool",
  vscode: "VS Code ext.",
};
const typeColor: Record<string, string> = {
  npm:    "#CB0000",
  web:    "var(--accent)",
  vscode: "#007ACC",
};

export default function OpenSource() {
  return (
    <section
      id="opensource"
      className="section-pad section-pad-top"
      style={{ padding: "100px 24px", maxWidth: 1000, margin: "0 auto" }}
    >
      <FadeIn>
        <div className="section-label" style={{ marginBottom: 16 }}>Open Source</div>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15, color: "var(--text)", marginBottom: 12 }}
        >
          Building in public
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", marginBottom: 48, maxWidth: 520 }}>
          Libraries and tools I&apos;ve published — used by developers around the world.
        </p>
      </FadeIn>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {info.openSource.map((project, i) => {
          const color = typeColor[project.type] ?? "var(--accent)";
          const label = typeLabel[project.type] ?? project.type;
          return (
            <FadeIn key={project.name} delay={i * 0.06}>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div className="card" style={{ padding: "22px 24px", display: "flex", gap: 18, alignItems: "flex-start" }}>
                  {/* Icon */}
                  <div style={{ width: 38, height: 38, borderRadius: 8, background: `${color}12`, border: `1px solid ${color}25`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, flexWrap: "wrap" }}>
                      <span className="font-display" style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>
                        {project.name}
                      </span>
                      <span style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color, padding: "2px 7px", borderRadius: 4, background: `${color}12`, border: `1px solid ${color}25` }}>
                        {label}
                      </span>
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                      {project.description}
                    </p>
                  </div>
                  {/* Arrow */}
                  <div style={{ color: "var(--text-dim)", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </a>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
