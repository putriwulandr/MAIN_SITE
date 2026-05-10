const experiences = [
  {
    year: "2022 — now",
    title: "Frontend Developer",
    company: "Ocean by BCA",
    desc: "High-traffic digital banking platform. Focus on performance optimization, scalable micro-frontend architecture, and delivering consistent user experiences at scale.",
  },
  {
    year: "2020 — 2022",
    title: "Frontend Developer",
    company: "Previous Company",
    desc: "Built and maintained enterprise web applications. Collaborated across teams to deliver high-quality, maintainable frontend solutions.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "3.5rem 0", borderTop: "0.5px solid #e5e5e5" }}
    >
      <p
        style={{
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "#bbb",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}
      >
        experience
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {experiences.map((e) => (
          <div
            key={e.company}
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: "1.5rem",
            }}
          >
            <span
              style={{ fontSize: "12px", color: "#bbb", paddingTop: "2px" }}
            >
              {e.year}
            </span>
            <div>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#111",
                  marginBottom: "2px",
                }}
              >
                {e.title}
              </p>
              <p
                style={{ fontSize: "12px", color: "#888", marginBottom: "6px" }}
              >
                {e.company}
              </p>
              <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.7 }}>
                {e.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
