import Link from "next/link";
import { notFound } from "next/navigation";
import { info } from "../../../lib/data";

export function generateStaticParams() {
  return info.featuredProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = info.featuredProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 24px 120px" }}>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
        <Link href="/work" style={{ color: "var(--text-muted)", textDecoration: "none", display: "inline-flex", gap: 8 }}>
          ← Back to work
        </Link>
        <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none", display: "inline-flex", gap: 8 }}>
          Home
        </Link>
      </div>

      <article className="card" style={{ overflow: "hidden" }}>
        <div style={{ background: project.gradient, padding: "42px 28px 30px" }}>
          <div className="section-label" style={{ color: "var(--text)", opacity: 0.8, marginBottom: 12 }}>
            {project.category}
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              letterSpacing: "-0.06em",
              lineHeight: 1,
              marginBottom: 18,
            }}
          >
            {project.title}
          </h1>
          <p style={{ maxWidth: 760, color: "var(--text-muted)", fontSize: "1.04rem", lineHeight: 1.8 }}>
            {project.summary}
          </p>
        </div>

        <div style={{ padding: "28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18, marginBottom: 32 }}>
            <div className="card" style={{ padding: "22px 20px" }}>
              <div style={{ color: "var(--accent)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                Outcome
              </div>
              <div className="font-display" style={{ fontSize: "2rem", letterSpacing: "-0.05em" }}>
                {project.outcome}
              </div>
            </div>
            <div className="card" style={{ padding: "22px 20px" }}>
              <div style={{ color: "var(--accent)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                Stack
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {project.stack.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="case-study-columns" style={{ gap: 18 }}>
            <div className="card" style={{ padding: "24px 22px" }}>
              <div style={{ color: "var(--accent)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                Challenge
              </div>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>{project.challenge}</p>
            </div>
            <div className="card" style={{ padding: "24px 22px" }}>
              <div style={{ color: "var(--accent)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                Solution
              </div>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>{project.solution}</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
