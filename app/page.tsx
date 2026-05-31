import HeroVideo from "./components/HeroVideo";
import Link from "next/link";

const services = [
  { icon: "🏠", title: "New Builds", desc: "Bespoke new homes built to the highest standard, from foundations to finishing touches.", href: "/services/new-builds" },
  { icon: "🔨", title: "Extensions & Renovations", desc: "Rear, side, double-storey extensions, loft conversions, full refurbishments and more.", href: "/services/extensions" },
  { icon: "🏗️", title: "Roofing", desc: "Pitched roofs, flat roofs, GRP warm roofs, replacements, repairs and roofline works.", href: "/services/roofing" },
  { icon: "🚗", title: "Garage Conversions", desc: "Transform your garage into a living space, home office or extra bedroom.", href: "/services/garage-conversions" },
];

const whyUs = [
  { icon: "📍", title: "We Stay On Site", desc: "Once we start your project, our focus remains on your project until completion. We don't disappear." },
  { icon: "🗂️", title: "Total Project Management", desc: "We coordinate architects, engineers, Building Control and all trades — so you don't have to." },
  { icon: "😌", title: "Your Stress Belongs To Us", desc: "We handle Building Control, inspections, scheduling and day-to-day site management." },
  { icon: "💬", title: "Clear Communication", desc: "We keep you informed at every stage. No surprises, no hidden costs, no chasing us." },
];

const testimonials = [
  { name: "Nathan Kirby", stars: 5, text: "I recently had RPV Construction complete a single-storey extension on my home, and I am extremely pleased with the outcome. The quality of the workmanship is excellent, and the project was carried out with great professionalism from start to finish. A hardworking and trustworthy family team — highly recommended!", job: "Single-storey extension" },
  { name: "Dean Papworth", stars: 5, text: "Having endured disappointment with so many builders, it was truly refreshing to meet a team who actually deliver what they promise. The standard of work was absolutely outstanding, the price was great and the time for completion was very impressive. I could not recommend these guys more.", job: "Roof replacement & driveway" },
  { name: "Victoria", stars: 5, text: "Ronaldo and his team helped my vision come to life. He was incredibly polite and honest at all stages of the work, always trying to come up with the best solution, and providing options for different budgets. No hesitation in recommending Ronaldo and his hardworking team!", job: "Structural works" },
];

export default function Home() {
  return (
    <>
      <HeroVideo />

      {/* Services */}
      <section style={{ padding: "80px 24px", background: "#152a42" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ color: "#74be43", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>What We Do</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, marginTop: 12, color: "#fff" }}>Our Services</h2>
            <p style={{ color: "#94a3b8", marginTop: 12, maxWidth: 540, margin: "12px auto 0", lineHeight: 1.7 }}>Quality construction work for homeowners across Peterborough and the surrounding areas.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {services.map(s => (
              <Link key={s.title} href={s.href} style={{ textDecoration: "none" }}>
                <div style={{ background: "rgba(34,66,103,0.5)", border: "1px solid rgba(116,190,67,0.15)", borderRadius: 12, padding: "32px 28px", transition: "all 0.3s", height: "100%" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.15rem", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: 16 }}>{s.desc}</p>
                  <span style={{ color: "#74be43", fontSize: "0.85rem", fontWeight: 600 }}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why RPV */}
      <section style={{ padding: "80px 24px", background: "#1a3350" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" }}>
          <div>
            <span style={{ color: "#74be43", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Why Choose RPV</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, marginTop: 12, marginBottom: 20, color: "#fff" }}>We treat every project as if it were our own home.</h2>
            <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 28 }}>RPV Construction is a father-and-son business founded by Ronaldo and Pashk Vila. Combining modern project management, engineering problem-solving, and over 20 years of practical construction experience.</p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap", marginBottom: 32 }}>
              {[{ num: "20+", label: "Years Experience" }, { num: "100%", label: "On-Site Focus" }, { num: "5★", label: "Google Reviews" }].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: "#74be43" }}>{stat.num}</div>
                  <div style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: 4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
            <Link href="/about" style={{ display: "inline-block", background: "transparent", color: "#74be43", border: "2px solid #74be43", padding: "12px 28px", borderRadius: 8, fontWeight: 700, textDecoration: "none" }}>Our Story →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {whyUs.map(w => (
              <div key={w.title} style={{ background: "rgba(21,42,66,0.8)", border: "1px solid rgba(129,194,226,0.15)", borderRadius: 10, padding: "24px 20px" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{w.icon}</div>
                <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", marginBottom: 8 }}>{w.title}</h4>
                <p style={{ color: "#94a3b8", fontSize: "0.82rem", lineHeight: 1.6 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section style={{ padding: "60px 24px", background: "linear-gradient(135deg, #0c6a38 0%, #156092 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.5, marginBottom: 12 }}>"Your stress belongs to us, while your focus stays on enjoying the transformation of your home."</p>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem" }}>— Ronaldo Vila, Founder, RPV Construction</p>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "80px 24px", background: "#152a42" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ color: "#74be43", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>What Clients Say</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, marginTop: 12, color: "#fff" }}>Real Reviews</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: "rgba(34,66,103,0.4)", border: "1px solid rgba(116,190,67,0.15)", borderRadius: 12, padding: "32px 28px" }}>
                <div style={{ color: "#f59e0b", fontSize: "1.1rem", marginBottom: 16 }}>{"★".repeat(t.stars)}</div>
                <p style={{ color: "#cbd5e1", lineHeight: 1.75, fontSize: "0.93rem", marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ color: "#fff", fontWeight: 700 }}>{t.name}</div>
                <div style={{ color: "#74be43", fontSize: "0.82rem", marginTop: 4 }}>{t.job}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/testimonials" style={{ color: "#74be43", textDecoration: "none", fontWeight: 600 }}>Read all reviews →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "#1a3350", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: "#fff", marginBottom: 16 }}>Ready to start your project?</h2>
          <p style={{ color: "#94a3b8", lineHeight: 1.7, marginBottom: 36 }}>Get in touch today for a free, no-obligation quote. We cover Peterborough, Stamford, Bourne and the surrounding areas.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#74be43", color: "#152a42", padding: "16px 36px", borderRadius: 8, fontWeight: 800, textDecoration: "none" }}>Get a Free Quote</Link>
            <a href="https://wa.me/447548627968" target="_blank" rel="noopener noreferrer" style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)", padding: "16px 36px", borderRadius: 8, fontWeight: 700, textDecoration: "none" }}>💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
