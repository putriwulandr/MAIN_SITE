import { SpeedInsights } from "@vercel/speed-insights/next";

export default function MaintenancePage() {
  return (
    <>
      <SpeedInsights />

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Mono', monospace",
          padding: "3rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <span
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#888",
            border: "0.5px solid #ddd",
            padding: "6px 14px",
            borderRadius: "100px",
            marginBottom: "2rem",
            position: "relative",
          }}
        >
          — under maintenance —
        </span>

        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            textAlign: "center",
            lineHeight: 1.15,
            margin: "0 0 0.5rem",
            position: "relative",
          }}
        >
          Something <em style={{ color: "#888" }}>beautiful</em>
          <br />
          is on its way.
        </h1>

        <p
          style={{
            fontSize: "13px",
            color: "#888",
            textAlign: "center",
            margin: "1.5rem 0 2.5rem",
            lineHeight: 1.7,
            maxWidth: "380px",
            position: "relative",
          }}
        >
          We&apos;re doing some work behind the scenes.
          <br />
          Check back soon — it&apos;ll be worth the wait.
        </p>

        <div
          style={{
            width: "40px",
            height: "0.5px",
            background: "#ddd",
            margin: "0 auto 1rem",
            position: "relative",
          }}
        />

        <p style={{ fontSize: "12px", color: "#aaa", position: "relative" }}>
          by Putri Wulandari
        </p>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400&display=swap');
      `}</style>
    </>
  );
}
