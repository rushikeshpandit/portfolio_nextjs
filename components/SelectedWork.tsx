"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { info } from "../lib/data";

export default function SelectedWork() {
  return (
    <section
      id="selected-work"
      className="section-pad section-pad-top"
      style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}
    >
      <FadeIn>
        <div className="section-label" style={{ marginBottom: 16 }}>Selected work</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: 18,
            flexWrap: "wrap",
            marginBottom: 38,
          }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 3vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "var(--text)",
              maxWidth: 680,
            }}
          >
            Product systems designed to move people and metrics.
          </h2>
          <Link href="/work" className="btn-outline">
            Browse all projects
          </Link>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gap: 18 }}>
        {info.featuredProjects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.08}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="card selected-work-card"
              style={{
                padding: 0,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                className="selected-work-card__layout"
                style={{
                  minHeight: 280,
                }}
              >
                <div
                  style={{
                    background: project.gradient,
                    padding: "28px 28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      className="section-label"
                      style={{
                        color: "var(--text)",
                        opacity: 0.8,
                        marginBottom: 12,
                      }}
                    >
                      {project.category}
                    </div>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                        color: "var(--text)",
                        marginBottom: 14,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p style={{ color: "var(--text-muted)", maxWidth: 540, lineHeight: 1.7 }}>
                      {project.summary}
                    </p>
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
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: "rgba(11, 17, 27, 0.48)",
                    borderLeft: "1px solid var(--border)",
                  }}
                >
                  <div style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 10 }}>
                    Outcome
                  </div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "2.2rem",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: "var(--text)",
                      marginBottom: 18,
                    }}
                  >
                    {project.outcome}
                  </div>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 18 }}>
                    {project.challenge}
                  </p>
                  <Link href={`/work/${project.slug}`} className="service-card__link">
                    View case study <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
