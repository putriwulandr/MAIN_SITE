const skills = [
  { label: "React", featured: true },
  { label: "Next.js", featured: true },
  { label: "TypeScript", featured: true },
  { label: "Angular", featured: true },
  { label: "Tailwind CSS", featured: true },
  { label: "Micro-Frontend", featured: true },
  { label: "Module Federation", featured: false },
  { label: "Performance Optimization", featured: false },
  { label: "Scalable Architecture", featured: false },
  { label: "Git", featured: false },
  { label: "pnpm", featured: false },
  { label: "CI/CD", featured: false },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
        skills
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "8px",
        }}
      >
        {skills.map((s) => (
          <div
            key={s.label}
            style={{
              padding: "8px 14px",
              border: `0.5px solid ${s.featured ? "#ccc" : "#e5e5e5"}`,
              borderRadius: "8px",
              fontSize: "12px",
              color: s.featured ? "#111" : "#888",
              fontWeight: s.featured ? 500 : 400,
            }}
          >
            {s.label}
          </div>
        ))}
      </div>
    </section>
  );
}
