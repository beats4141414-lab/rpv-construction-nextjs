import HeroVideo from "./components/HeroVideo";
import ScrollReveal from "./components/ScrollReveal";
import StatCounter from "./components/StatCounter";
import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "New Builds", desc: "Bespoke new homes built from foundations to finishing touches, fully managed.", href: "/services/new-builds"
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Extensions & Renovations", desc: "Rear, side, double-storey extensions, loft conversions and full refurbishments.", href: "/services/extensions"
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M4 20V10l8-7 8 7v10"/>
      </svg>
    ),
    title: "Roofing", desc: "Pitched roofs, flat roofs, GRP warm roofs, replacements, repairs and roofline works.", href: "/services/roofing"
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8zM5 18v3M19 18v3"/>
      </svg>
    ),
    title: "Garage Conversions", desc: "Transform your garage into a bedroom, home office or living space.", href: "/services/garage-conversions"
  },
];

const whyUs = [
  { title: "We Stay On Site", desc: "Once we start, our focus remains on your project until it is complete. We don't disappear to juggle other jobs." },
  { title: "Total Project Management", desc: "We coordinate architects, engineers, Building Control and all trades so you don't have to deal with any of it." },
  { title: "Your Stress Belongs To Us", desc: "We handle inspections, scheduling and site management so your focus stays on enjoying the transformation." },
  { title: "Clear Communication", desc: "You're kept informed at every stage. No surprises, no hidden costs, no chasing us for updates." },
];

const testimonials = [
  { name: "Nathan Kirby", job: "Single-storey extension", text: "The quality of the workmanship is excellent, and the project was carried out with great professionalism from start to finish. Ronaldo was always responsive and happy to answer any questions. A hardworking and trustworthy family team — highly recommended!" },
  { name: "Dean Papworth", job: "Roof replacement & driveway", text: "It was truly refreshing to meet a team who actually deliver what they promise. The standard of work was absolutely outstanding, the price was great and the time for completion was very impressive. The guys worked 6 days a week, 10 hours a day to finish on time. I could not recommend them more." },
  { name: "Victoria", job: "Structural works", text: "Ronaldo and his team helped my vision come to life. He was incredibly polite and honest at all stages, always trying to come up with the best solution and providing options for different budgets. No hesitation in recommending Ronaldo and his hardworking team!" },
];

export default function Home() {
  return (
    <>
      <HeroVideo />

      {/* Trust bar */}
      <div style={{ background: '#0d1e30', borderBottom: '1px solid rgba(116,190,67,0.12)', padding: '16px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 'clamp(24px, 5vw, 64px)', flexWrap: 'wrap', alignItems: 'center' }}>
          {[
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, text: 'Fully Insured' },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>, text: 'Building Control Managed' },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, text: '5★ Google Reviews' },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, text: '7am–7pm, 7 Days a Week' },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, text: 'Peterborough & Surrounding Areas' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {item.icon}
              <span style={{ color: '#94a3b8', fontSize: '0.82rem', fontWeight: 500, whiteSpace: 'nowrap' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section style={{ padding: '96px 24px', background: '#152a42' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span style={{ color: '#74be43', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>What We Do</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, marginTop: 12, color: '#fff', lineHeight: 1.2 }}>Our Services</h2>
              <p style={{ color: '#94a3b8', marginTop: 14, maxWidth: 500, margin: '14px auto 0', lineHeight: 1.75, fontSize: '1.05rem' }}>
                Quality construction for homeowners across Peterborough — managed from start to finish.
              </p>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 80}>
                <Link href={s.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="card-hover" style={{ background: 'rgba(34,66,103,0.35)', border: '1px solid rgba(116,190,67,0.12)', borderRadius: 14, padding: '32px 26px', height: '100%', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ marginBottom: 20 }}>{s.icon}</div>
                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: 20 }}>{s.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#74be43', fontSize: '0.85rem', fontWeight: 600 }}>
                      <span>Learn more</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '72px 24px', background: '#1a3350', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(116,190,67,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 40, position: 'relative' }}>
          <StatCounter end={20} suffix="+" label="Years Combined Experience" />
          <StatCounter end={100} suffix="%" label="Projects Completed On Site" />
          <StatCounter end={5} suffix="★" label="Google Review Rating" />
          <StatCounter end={7} suffix=" Days" label="A Week, 7am–7pm" />
        </div>
      </section>

      {/* Why RPV */}
      <section style={{ padding: '96px 24px', background: '#152a42' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 72, alignItems: 'center' }}>
          <div>
            <ScrollReveal>
              <span style={{ color: '#74be43', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>Why Choose RPV</span>
              <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 800, marginTop: 12, marginBottom: 20, color: '#fff', lineHeight: 1.2 }}>
                We treat every project as if it were our own home.
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.85, marginBottom: 32, fontSize: '1.05rem' }}>
                RPV Construction is a father-and-son business founded by Ronaldo and Pashk Vila — combining modern project management, engineering problem-solving, and over 20 years of practical experience.
              </p>
              <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#74be43', border: '1.5px solid #74be43', padding: '12px 26px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem', transition: 'background 0.2s' }}>
                Our Story
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </ScrollReveal>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {whyUs.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 80}>
                <div style={{ background: 'rgba(21,42,66,0.7)', border: '1px solid rgba(129,194,226,0.12)', borderRadius: 12, padding: '22px 18px', height: '100%' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(116,190,67,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '0.92rem', marginBottom: 8, lineHeight: 1.3 }}>{w.title}</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.65 }}>{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section style={{ padding: '72px 24px', background: 'linear-gradient(135deg, #0c6a38 0%, #156092 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <ScrollReveal>
          <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
            <svg width="40" height="28" viewBox="0 0 40 28" fill="rgba(255,255,255,0.2)" style={{ marginBottom: 20, display: 'block', margin: '0 auto 20px' }}>
              <path d="M0 28V16.8C0 7.467 5.6 2.333 16.8 0l2.4 4C13.067 5.6 9.867 8.4 9.6 12H16V28H0zm22 0V16.8C22 7.467 27.6 2.333 38.8 0l2.4 4C35.067 5.6 31.867 8.4 31.6 12H38V28H22z"/>
            </svg>
            <p style={{ fontSize: 'clamp(1.3rem, 3vw, 1.9rem)', fontWeight: 700, color: '#fff', lineHeight: 1.55, marginBottom: 16 }}>
              Your stress belongs to us, while your focus stays on enjoying the transformation of your home.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', fontWeight: 500 }}>— Ronaldo Vila, Founder, RPV Construction</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '96px 24px', background: '#1a3350' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span style={{ color: '#74be43', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>What Clients Say</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, marginTop: 12, color: '#fff' }}>Real Reviews</h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div style={{ background: 'rgba(21,42,66,0.6)', border: '1px solid rgba(116,190,67,0.12)', borderRadius: 14, padding: '32px 26px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                  <p style={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: '0.93rem', fontStyle: 'italic', flex: 1, marginBottom: 24 }}>"{t.text}"</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 18 }}>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>{t.name}</div>
                    <div style={{ color: '#74be43', fontSize: '0.8rem', marginTop: 3, fontWeight: 500 }}>{t.job}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: 44 }}>
              <Link href="/testimonials" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#74be43', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}>
                Read all reviews
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '96px 24px', background: '#152a42', textAlign: 'center' }}>
        <ScrollReveal>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>
              Ready to start your project?
            </h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: 40, fontSize: '1.05rem' }}>
              Free, no-obligation quote. We cover Peterborough, Stamford, Bourne and surrounding areas. Typically respond within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: '#74be43', color: '#152a42', padding: '15px 36px', borderRadius: 8, fontWeight: 800, textDecoration: 'none', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Get a Free Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a href="https://wa.me/447548627968" target="_blank" rel="noopener noreferrer"
                style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.25)', padding: '15px 36px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#74be43"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.891.525 3.659 1.438 5.168L2 22l4.985-1.367A9.959 9.959 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fillRule="evenodd" clipRule="evenodd"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
