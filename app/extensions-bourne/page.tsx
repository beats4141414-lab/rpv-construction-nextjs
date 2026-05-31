import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "House Extensions in Bourne | RPV Construction",
  description: "RPV Construction offer home extension services in Bourne, Lincolnshire. Extensions, loft conversions and renovations. Free no-obligation quotes.",
};
export default function AreaPage() {
  return (
    <>
      <div style={{ padding: "120px 24px 60px", background: "#1a3350", textAlign: "center" }}>
        <span style={{ color: "#74be43", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Bourne</span>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", marginTop: 12 }}>Extensions Bourne</h1>
        <p style={{ color: "#94a3b8", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.7 }}>RPV Construction offer home extension services in Bourne, Lincolnshire. Extensions, loft conversions and renovations. Free no-obligation quotes.</p>
      </div>
      <section style={{ padding: "80px 24px", background: "#152a42" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ color: "#cbd5e1", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: 40 }}>
            RPV Construction are your local building specialists serving Bourne and the surrounding areas. As a father-and-son team with over 20 years of combined experience, we pride ourselves on quality workmanship, clear communication, and projects that are managed properly from start to finish.
          </p>
          <p style={{ color: "#cbd5e1", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: 40 }}>
            Unlike many builders who juggle multiple sites at once, we stay focused on your project until it is complete. We handle all Building Control applications, coordinate with structural engineers and architects, and keep you informed at every stage — so the only thing you need to do is look forward to the result.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 48 }}>
            {["Free No-Obligation Quote", "Fully Insured", "Building Control Managed", "Local to Bourne", "20+ Years Experience", "5★ Google Reviews"].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 18px", background: "rgba(34,66,103,0.4)", borderRadius: 8, border: "1px solid rgba(116,190,67,0.1)" }}>
                <span style={{ color: "#74be43" }}>✓</span>
                <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>{f}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", padding: "40px", background: "rgba(12,106,56,0.15)", borderRadius: 12, border: "1px solid rgba(116,190,67,0.2)" }}>
            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.4rem", marginBottom: 12 }}>Get a Free Quote in Bourne</h2>
            <p style={{ color: "#94a3b8", marginBottom: 28 }}>Contact us today for a free, no-obligation survey and quote. We typically respond within 24 hours.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" style={{ background: "#74be43", color: "#152a42", padding: "14px 32px", borderRadius: 8, fontWeight: 800, textDecoration: "none" }}>Get a Free Quote</Link>
              <a href="https://wa.me/447548627968" target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)", padding: "14px 32px", borderRadius: 8, fontWeight: 700, textDecoration: "none" }}>💬 WhatsApp</a>
            </div>
          </div>
          <div style={{ marginTop: 32 }}>
            <Link href="/services/extensions" style={{ color: "#74be43", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}>← View full service details</Link>
          </div>
        </div>
      </section>
    </>
  );
}
