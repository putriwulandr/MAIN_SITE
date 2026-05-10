export default function About() {
  return (
    <section
      id="about"
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
        about
      </p>
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.3rem",
          fontWeight: 300,
          lineHeight: 1.8,
          color: "#111",
        }}
      >
        I&apos;m a frontend developer with a passion for{" "}
        <em style={{ color: "#888" }}>performance</em> and{" "}
        <em style={{ color: "#888" }}>scalable architecture</em>. Most recently
        part of the team behind Ocean by BCA — a high-traffic digital banking
        platform. I value clean, maintainable code and meaningful collaboration
        across teams.
      </p>
    </section>
  );
}
