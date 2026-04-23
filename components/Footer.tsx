import { info } from "../lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="section-pad"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "28px 24px",
        maxWidth: 1000,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <div style={{ fontSize: "0.8125rem", color: "var(--text-dim)" }}>
        © {year} {info.name}.
      </div>
      <div style={{ fontSize: "0.8125rem", color: "var(--text-dim)" }}>
        {info.location}
      </div>
    </footer>
  );
}
