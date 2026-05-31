import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Building Services | RPV Construction Peterborough",
  description: "RPV Construction offer new builds, extensions, roofing and garage conversions across Peterborough, Stamford and Bourne. Fully managed, fully insured.",
};

const services = [
  { icon: "🏠", title: "New Builds", href: "/services/new-builds", desc: "Bespoke new homes built to the highest standard, from foundations to finishing touches. We manage the entire process." },
  { icon: "🔨", title: "Extensions & Renovations", href: "/services/extensions", desc: "Rear, side and double-storey extensions, loft conversions, full refurbishments, structural works and more." },
  { icon: "🏗️", title: "Roofing", href: "/services/roofing", desc: "Pitched roofs, flat roofs, GRP warm roofs, full replacements, repairs and all roofline works." },
  { icon: "🚗", title: "Garage Conversions", href: "/services/garage-conversions", desc: "Transform your garage into a bedroom, home office, gym or living room. Building Control managed throughout." },
];

export default function Services() {
  return (
    <>
      <div style={{ padding: "120px 24px 60px", background: "#1a3350", textAlign: "center" }}>
        <span style={{ color: "#74be43", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>What We Offer</span>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", marginTop: 12 }}>Our Services</h1>
        <p style={{ color: "#94a3b8", maxWidth: 540, margin: "16px auto 0", lineHeight: 1.7 }}>Quality construction for homeowners across Peterborough and surrounding areas. Fully managed from start to finish.</p>
      </div>
      <section style={{ padding: "80px 24px", background: "#152a42" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {services.map(s => (
            <Link key={s.title} href={s.href} style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(34,66,103,0.5)", border: "1px solid rgba(116,190,67,0.15)", borderRadius: 12, padding: "36px 28px", height: "100%" }}>
                <div style={{ fontSize: "2.8rem", marginBottom: 18 }}>{s.icon}</div>
                <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", marginBottom: 12 }}>{s.title}</h2>
                <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "0.92rem", marginBottom: 20 }}>{s.desc}</p>
                <span style={{ color: "#74be43", fontWeight: 600, fontSize: "0.88rem" }}>Find out more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
