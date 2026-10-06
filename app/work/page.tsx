import Link from "next/link";
import { info } from "../../lib/data";

export default function WorkPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 24px 120px" }}>
      <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none", display: "inline-flex", gap: 8, marginBottom: 20 }}>
        ← Back to home
      </Link>
      <div className="section-label" style={{ marginBottom: 18 }}>Work</div>
      <h1
        className="font-display"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 5rem)",
          letterSpacing: "-0.06em",
          lineHeight: 1,
          marginBottom: 22,
        }}
      >
        Selected work.
      </h1>
      <p style={{ maxWidth: 700, color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 52 }}>
        A curated snapshot of interface design, product execution, and engineering systems across finance, commerce, and operations.
      </p>

      <div style={{ display: "grid", gap: 18 }}>
        {info.featuredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            style={{ textDecoration: "none" }}
          >
            <article className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div
                className="work-card__layout"
                style={{
                  minHeight: 220,
                }}
              >
                <div
                  style={{
                    background: project.gradient,
                    padding: "28px 26px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div className="section-label" style={{ marginBottom: 10, color: "var(--text)", opacity: 0.8 }}>
                      {project.category}
                    </div>
                    <h2
                      className="font-display"
                      style={{
                        fontSize: "clamp(1.7rem, 3vw, 2.6rem)",
                        letterSpacing: "-0.04em",
                        color: "var(--text)",
                        marginBottom: 10,
                      }}
                    >
                      {project.title}
                    </h2>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>{project.summary}</p>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 18 }}>
                    {project.stack.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    padding: "26px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderLeft: "1px solid var(--border)",
                    background: "rgba(8, 13, 20, 0.42)",
                  }}
                >
                  <div style={{ color: "var(--accent)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14 }}>
                    Outcome
                  </div>
                  <div className="font-display" style={{ fontSize: "2.1rem", letterSpacing: "-0.05em", marginBottom: 10 }}>
                    {project.outcome}
                  </div>
                  <div style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>{project.challenge}</div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
