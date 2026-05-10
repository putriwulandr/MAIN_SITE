const links = ["about", "skills", "experience", "projects", "contact"];

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 0",
        borderBottom: "0.5px solid #e5e5e5",
      }}
    >
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "18px",
          fontWeight: 300,
        }}
      >
        Putri Wulandari
      </span>
      <div style={{ display: "flex", gap: "24px" }}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            style={{
              fontSize: "12px",
              letterSpacing: "0.08em",
              color: "#888",
              textDecoration: "none",
            }}
          >
            {l}
          </a>
        ))}
      </div>
    </nav>
  );
}
