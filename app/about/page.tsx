import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | RPV Construction Peterborough",
  description: "RPV Construction is a father-and-son building company founded by Ronaldo and Pashk Vila in Peterborough. Over 20 years of combined experience in residential construction.",
};

export default function About() {
  return (
    <>
      <div style={{ paddingTop: 100, paddingBottom: 60, background: "#1a3350", textAlign: "center", padding: "120px 24px 60px" }}>
        <span style={{ color: "#74be43", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Our Story</span>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", marginTop: 12 }}>About RPV Construction</h1>
        <p style={{ color: "#94a3b8", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.7 }}>A family business built on honesty, craftsmanship, accountability and pride.</p>
      </div>

      <section style={{ padding: "80px 24px", background: "#152a42" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, marginBottom: 64 }}>
            <div>
              <h2 style={{ color: "#74be43", fontWeight: 800, fontSize: "1.5rem", marginBottom: 16 }}>The RPV Story</h2>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: 16 }}>RPV Construction is a father-and-son business founded by Ronaldo and Pashk Vila. The name RPV comes from our family surname, Vila, and represents the values we stand for — honesty, craftsmanship, accountability, and pride in our work.</p>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: 16 }}>Founded in 2023, we bring together decades of combined construction experience. Our directors have backgrounds spanning residential construction, commercial works, engineering, and major infrastructure projects.</p>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8 }}>The company was built around one simple principle: treating every project as if it were our own home.</p>
            </div>
            <div>
              <h2 style={{ color: "#81c2e2", fontWeight: 800, fontSize: "1.5rem", marginBottom: 16 }}>Our Team</h2>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: 16 }}>We operate with a dedicated management team and a trusted network of skilled tradespeople, allowing us to successfully deliver everything from home renovations and extensions to larger bespoke construction projects.</p>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: 24 }}>We are fully insured and work closely with Building Control, structural engineers, architects, and approved inspectors to ensure all works are completed to the required standards and regulations.</p>
              <div style={{ padding: "20px", background: "rgba(116,190,67,0.08)", borderRadius: 10, borderLeft: "4px solid #74be43" }}>
                <p style={{ color: "#74be43", fontWeight: 700, fontSize: "1rem" }}>Fully Insured</p>
                <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginTop: 4 }}>All works carried out to Building Control standards with structural engineers and approved inspectors.</p>
              </div>
            </div>
          </div>

          <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "1.8rem", marginBottom: 32, textAlign: "center" }}>What Makes RPV Different</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { icon: "📍", title: "We Stay On Site", desc: "Once we start your project, our focus remains on your project until completion. Many builders spread themselves across multiple projects at once. Our approach is different." },
              { icon: "🗂️", title: "Total Project Management", desc: "We coordinate the entire process on your behalf — from architects and structural engineers to Building Control inspections and specialist trades." },
              { icon: "😌", title: "We Remove The Stress", desc: "Construction projects can feel overwhelming. We handle Building Control, inspections, scheduling, and day-to-day site management so you don't have to." },
              { icon: "💬", title: "Clear Communication", desc: "We keep clients informed throughout every stage of the project, ensuring there are no surprises and that expectations are always clear." },
            ].map(item => (
              <div key={item.title} style={{ background: "rgba(34,66,103,0.4)", border: "1px solid rgba(129,194,226,0.15)", borderRadius: 10, padding: "28px 24px" }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: "#94a3b8", fontSize: "0.88rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 60 }}>
            <p style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: 8 }}>Built Properly. Managed Consciously.</p>
            <p style={{ color: "#94a3b8", marginBottom: 32 }}>Every project is completed with care, attention to detail, and a commitment to quality workmanship that we are proud to put our name behind.</p>
            <Link href="/contact" style={{ background: "#74be43", color: "#152a42", padding: "16px 36px", borderRadius: 8, fontWeight: 800, textDecoration: "none" }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
