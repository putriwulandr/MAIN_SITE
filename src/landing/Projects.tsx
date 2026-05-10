const projects = [
  {
    tag: "React · Next.js · TypeScript",
    title: "Ocean by BCA",
    desc: "High-traffic digital banking platform with micro-frontend architecture. Focus on performance and scalability.",
  },
  {
    tag: "Next.js · Tailwind CSS",
    title: "Personal Site",
    desc: "Minimalist portfolio and profile site built with Next.js, featuring clean typography and smooth interactions.",
  },
  {
    tag: "Angular · TypeScript",
    title: "Enterprise Dashboard",
    desc: "Internal enterprise dashboard with complex data visualization and real-time updates for large-scale operations.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
        projects
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "12px",
        }}
      >
        {projects.map((p) => (
          <div
            key={p.title}
            style={{
              padding: "1.25rem",
              border: "0.5px solid #e5e5e5",
              borderRadius: "12px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "#bbb",
                marginBottom: "8px",
              }}
            >
              {p.tag}
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "#111",
                marginBottom: "6px",
              }}
            >
              {p.title}
            </p>
            <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.7 }}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
