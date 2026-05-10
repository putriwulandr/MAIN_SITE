const contacts = [
  {
    icon: "✉",
    label: "hello@putriwulandari.com",
    href: "mailto:hello@putriwulandari.com",
  },
  {
    icon: "in",
    label: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_USERNAME",
  },
  { icon: "gh", label: "GitHub", href: "https://github.com/YOUR_USERNAME" },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
        contact
      </p>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            style={{
              fontSize: "13px",
              color: "#888",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "0.5px solid #e5e5e5",
              padding: "8px 16px",
              borderRadius: "100px",
            }}
          >
            <span style={{ fontSize: "11px" }}>{c.icon}</span>
            {c.label}
          </a>
        ))}
      </div>
    </section>
  );
}
