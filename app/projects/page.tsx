import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Projects | RPV Construction Peterborough",
  description: "View completed projects by RPV Construction — extensions, new builds, roofing and garage conversions across Peterborough, Stamford and Bourne.",
};

const placeholders = [
  { title: "Single-Storey Rear Extension", location: "Peterborough", type: "Extension" },
  { title: "Full Roof Replacement", location: "Stamford", type: "Roofing" },
  { title: "Garage Conversion to Living Room", location: "Peterborough", type: "Garage Conversion" },
  { title: "Double-Storey Side Extension", location: "Bourne", type: "Extension" },
  { title: "New Build Residential Home", location: "Peterborough", type: "New Build" },
  { title: "Loft Conversion & Dormer", location: "Peterborough", type: "Extension" },
];

export default function Projects() {
  return (
    <>
      <div style={{ padding: "120px 24px 60px", background: "#1a3350", textAlign: "center" }}>
        <span style={{ color: "#74be43", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Our Work</span>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", marginTop: 12 }}>Completed Projects</h1>
        <p style={{ color: "#94a3b8", maxWidth: 540, margin: "16px auto 0", lineHeight: 1.7 }}>A selection of projects completed across Peterborough, Stamford, Bourne and surrounding areas.</p>
      </div>

      <section style={{ padding: "80px 24px", background: "#152a42" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {placeholders.map((p, i) => (
              <div key={i} style={{ background: "rgba(34,66,103,0.4)", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(116,190,67,0.15)" }}>
                <div style={{ height: 220, background: "linear-gradient(135deg, #1a3350, #224267)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "3rem", marginBottom: 8 }}>📷</div>
                    <p style={{ color: "#64748b", fontSize: "0.85rem" }}>Photo coming soon</p>
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <span style={{ background: "rgba(116,190,67,0.15)", color: "#74be43", padding: "4px 10px", borderRadius: 20, fontSize: "0.75rem", fontWeight: 600 }}>{p.type}</span>
                  <h3 style={{ color: "#fff", fontWeight: 700, marginTop: 12, marginBottom: 6 }}>{p.title}</h3>
                  <p style={{ color: "#94a3b8", fontSize: "0.88rem" }}>📍 {p.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <p style={{ color: "#94a3b8", marginBottom: 24 }}>Want to see your project here? Get in touch today.</p>
            <Link href="/contact" style={{ background: "#74be43", color: "#152a42", padding: "16px 36px", borderRadius: 8, fontWeight: 800, textDecoration: "none" }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
