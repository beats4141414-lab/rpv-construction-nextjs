import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Extensions Peterborough | RPV Construction",
  description: "RPV Construction specialist in home extensions and renovations across Peterborough. Rear extensions, loft conversions, full refurbishments and structural works — fully managed.",
};
export default function ServicePage() {
  const items = "Our extension services include:,Rear extensions (single and double storey),Side extensions,Wrap-around extensions,Loft conversions and dormers,Structural wall removals and RSJ installations,Full internal refurbishments,Bathroom and kitchen fitting,Plastering and internal reconfigurations".split(",");
  const heading = items[0];
  const list = items.slice(1);
  return (
    <>
      <div style={{ padding: "120px 24px 60px", background: "#1a3350", textAlign: "center" }}>
        <span style={{ color: "#74be43", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Our Services</span>
        <div style={{ fontSize: "3rem", margin: "16px 0" }}>🔨</div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff" }}>Extensions & Renovations</h1>
        <p style={{ color: "#94a3b8", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.7 }}>RPV Construction specialist in home extensions and renovations across Peterborough. Rear extensions, loft conversions, full refurbishments and structural works — fully managed.</p>
      </div>
      <section style={{ padding: "80px 24px", background: "#152a42" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: "#cbd5e1", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: 48 }}>This is one of our main areas of expertise. We cover rear extensions, side extensions, double-storey extensions, loft conversions, garage conversions, structural wall removals, RSJ installations, full refurbishments, plastering, bathrooms, kitchens, and internal reconfigurations. Every project is managed from start to finish, with full Building Control sign-off.</p>
          <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.5rem", marginBottom: 24 }}>{heading}</h2>
          <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
            {list.map((item: string, i: number) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "14px 18px", background: "rgba(34,66,103,0.4)", borderRadius: 8, border: "1px solid rgba(116,190,67,0.1)" }}>
                <span style={{ color: "#74be43", marginTop: 2 }}>✓</span>
                <span style={{ color: "#cbd5e1", fontSize: "0.92rem" }}>{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 60, textAlign: "center", padding: "40px", background: "rgba(12,106,56,0.15)", borderRadius: 12, border: "1px solid rgba(116,190,67,0.2)" }}>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.3rem", marginBottom: 12 }}>Get a free quote for Extensions & Renovations</h3>
            <p style={{ color: "#94a3b8", marginBottom: 24 }}>We cover Peterborough, Stamford, Bourne and all surrounding areas. No obligation.</p>
            <Link href="/contact" style={{ background: "#74be43", color: "#152a42", padding: "14px 32px", borderRadius: 8, fontWeight: 800, textDecoration: "none" }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
