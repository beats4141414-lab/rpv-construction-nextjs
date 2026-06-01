import HeroVideo from "./components/HeroVideo";
import ScrollReveal from "./components/ScrollReveal";
import StatCounter from "./components/StatCounter";
import Link from "next/link";

const services = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, title: "New Builds", desc: "Bespoke new homes built from foundations to finishing touches. Fully managed from planning through completion.", href: "/services/new-builds" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, title: "Extensions & Renovations", desc: "Rear, side and double-storey extensions, loft conversions, structural works and full refurbishments.", href: "/services/extensions" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V10l8-7 8 7v10"/></svg>, title: "Roofing", desc: "Pitched roofs, flat roofs, GRP warm roofs, full replacements, repairs and all roofline works.", href: "/services/roofing" },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8zM5 18v3M19 18v3"/></svg>, title: "Garage Conversions", desc: "Transform your garage into a living space, home office or additional bedroom.", href: "/services/garage-conversions" },
];

const testimonials = [
  { name: "Nathan Kirby", job: "Single-storey extension", text: "The quality of the workmanship is excellent, and the project was carried out with great professionalism from start to finish. Ronaldo was always responsive and happy to answer any questions. A hardworking and trustworthy family team — highly recommended!" },
  { name: "Dean Papworth", job: "Roof replacement & driveway", text: "It was truly refreshing to meet a team who actually deliver what they promise. The standard of work was absolutely outstanding, the price was great and the time for completion was very impressive. The guys worked 6 days a week, 10 hours a day to finish on time. I could not recommend them more." },
  { name: "Victoria", job: "Structural works", text: "Ronaldo and his team helped my vision come to life. He was incredibly polite and honest at all stages, always trying to come up with the best solution and providing options for different budgets. No hesitation in recommending Ronaldo and his team!" },
];

export default function Home() {
  return (
    <>
      <HeroVideo />

      {/* Trust strip */}
      <div style={{ background: 'rgba(9,15,26,0.95)', borderBottom: '1px solid rgba(116,190,67,0.07)', padding: '14px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 'clamp(20px,4vw,56px)', flexWrap: 'wrap' }}>
          {[
            ['Fully Insured', <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>],
            ['Building Control Managed', <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>],
            ['5★ Google Reviews', <svg width="14" height="14" viewBox="0 0 24 24" fill="#74be43"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>],
            ['7am–7pm, 7 Days a Week', <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#74be43" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>],
          ].map(([text, icon], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              {icon}
              <span style={{ color: 'rgba(245,247,250,0.45)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.3px', whiteSpace: 'nowrap' }}>{text as string}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section style={{ padding: '104px 24px', background: 'linear-gradient(180deg, #0d1e30 0%, #090f1a 100%)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ marginBottom: 72 }}>
              <div style={{ width: 36, height: 1.5, background: 'linear-gradient(90deg,#74be43,transparent)', marginBottom: 20 }} />
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.8rem,5vw,4.5rem)', letterSpacing: '3px', color: '#f5f7fa', lineHeight: 0.95, marginBottom: 20 }}>
                OUR SERVICES
              </h2>
              <p style={{ color: '#7a8fa6', maxWidth: 440, lineHeight: 1.8, fontSize: '1rem', fontWeight: 300 }}>
                Quality construction for homeowners across Peterborough — managed entirely from start to finish.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 1, background: 'rgba(116,190,67,0.06)', border: '1px solid rgba(116,190,67,0.06)', borderRadius: 16, overflow: 'hidden' }}>
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 60}>
                <Link href={s.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div style={{ background: '#090f1a', padding: '40px 32px', height: '100%', transition: 'background 0.25s', cursor: 'pointer' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(116,190,67,0.04)')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#090f1a')}>
                    <div style={{ marginBottom: 24, padding: '10px', background: 'rgba(116,190,67,0.08)', borderRadius: 10, display: 'inline-flex' }}>{s.icon}</div>
                    <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.5rem', letterSpacing: '2px', color: '#f5f7fa', marginBottom: 12 }}>{s.title}</h3>
                    <p style={{ color: '#7a8fa6', lineHeight: 1.75, fontSize: '0.88rem', marginBottom: 24, fontWeight: 300 }}>{s.desc}</p>
                    <span style={{ color: '#74be43', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6 }}>
                      Learn more
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '72px 24px', background: 'linear-gradient(135deg, rgba(116,190,67,0.06) 0%, rgba(129,194,226,0.04) 100%)', borderTop: '1px solid rgba(116,190,67,0.07)', borderBottom: '1px solid rgba(116,190,67,0.07)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 48 }}>
          <StatCounter end={20} suffix="+" label="Years Combined Experience" />
          <StatCounter end={100} suffix="%" label="On-Site Dedication" />
          <StatCounter end={5} suffix="★" label="Google Rating" />
          <StatCounter end={7} suffix=" Days" label="A Week, 7am–7pm" />
        </div>
      </section>

      {/* About strip */}
      <section style={{ padding: '104px 24px', background: '#090f1a' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 80, alignItems: 'center' }}>
          <ScrollReveal>
            <div style={{ width: 36, height: 1.5, background: 'linear-gradient(90deg,#74be43,transparent)', marginBottom: 20 }} />
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.4rem,4vw,3.8rem)', letterSpacing: '3px', color: '#f5f7fa', lineHeight: 1, marginBottom: 24 }}>
              WE TREAT EVERY<br />
              <span style={{ background: 'linear-gradient(135deg,#74be43,#81c2e2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                PROJECT AS OUR OWN.
              </span>
            </h2>
            <p style={{ color: '#7a8fa6', lineHeight: 1.85, marginBottom: 20, fontWeight: 300, fontSize: '1rem' }}>
              RPV Construction is a father-and-son business founded by Ronaldo and Pashk Vila. Combining modern project management, engineering problem-solving, and over 20 years of practical experience.
            </p>
            <p style={{ color: '#7a8fa6', lineHeight: 1.85, marginBottom: 36, fontWeight: 300, fontSize: '1rem' }}>
              Once we start your project, we stay on site until it is complete. We coordinate architects, engineers, and Building Control — so you don't have to.
            </p>
            <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#f5f7fa', border: '1px solid rgba(245,247,250,0.15)', padding: '12px 24px', borderRadius: 7, fontWeight: 500, textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.5px', transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(116,190,67,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(245,247,250,0.15)')}>
              Our Story
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { title: 'We Stay On Site', desc: 'Once we start, we stay until it\'s done. No disappearing, no juggling multiple jobs.' },
              { title: 'Total Management', desc: 'Architects, engineers, Building Control — we coordinate everything.' },
              { title: 'Your Stress Is Ours', desc: 'We handle inspections, scheduling and site management throughout.' },
              { title: 'Clear Communication', desc: 'You\'re kept informed at every stage. No surprises, no hidden costs.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 70}>
                <div style={{ background: 'rgba(13,30,48,0.8)', border: '1px solid rgba(245,247,250,0.05)', borderRadius: 12, padding: '24px 20px', height: '100%', transition: 'border-color 0.25s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(116,190,67,0.2)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(245,247,250,0.05)')}>
                  <div style={{ width: 28, height: 1.5, background: '#74be43', marginBottom: 14 }} />
                  <h4 style={{ color: '#f5f7fa', fontWeight: 600, fontSize: '0.88rem', marginBottom: 8, letterSpacing: '0.3px' }}>{item.title}</h4>
                  <p style={{ color: '#7a8fa6', fontSize: '0.8rem', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ padding: '96px 24px', background: 'linear-gradient(135deg, #0c1f0f 0%, #091622 50%, #0a1929 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(116,190,67,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <ScrollReveal>
          <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
            <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '6rem', color: 'rgba(116,190,67,0.12)', lineHeight: 0.6, marginBottom: 24, letterSpacing: '-4px' }}>"</div>
            <p style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', color: '#f5f7fa', lineHeight: 1.3, marginBottom: 24, letterSpacing: '2px' }}>
              YOUR STRESS BELONGS TO US, WHILE YOUR FOCUS STAYS ON ENJOYING THE TRANSFORMATION OF YOUR HOME.
            </p>
            <p style={{ color: 'rgba(245,247,250,0.35)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500 }}>
              — Ronaldo Vila, Founder
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '104px 24px', background: 'linear-gradient(180deg, #090f1a 0%, #0d1e30 100%)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ marginBottom: 72 }}>
              <div style={{ width: 36, height: 1.5, background: 'linear-gradient(90deg,#74be43,transparent)', marginBottom: 20 }} />
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.8rem,5vw,4.5rem)', letterSpacing: '3px', color: '#f5f7fa', lineHeight: 0.95 }}>
                WHAT CLIENTS SAY
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 80}>
                <div style={{ border: '1px solid rgba(245,247,250,0.06)', borderRadius: 14, padding: '36px 30px', height: '100%', display: 'flex', flexDirection: 'column', transition: 'border-color 0.25s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(116,190,67,0.2)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(245,247,250,0.06)')}>
                  <div style={{ display: 'flex', gap: 2, marginBottom: 24 }}>
                    {[...Array(5)].map((_, j) => <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="#74be43"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}
                  </div>
                  <p style={{ color: 'rgba(245,247,250,0.55)', lineHeight: 1.85, fontSize: '0.9rem', flex: 1, marginBottom: 28, fontWeight: 300, fontStyle: 'italic' }}>"{t.text}"</p>
                  <div style={{ borderTop: '1px solid rgba(245,247,250,0.06)', paddingTop: 20 }}>
                    <div style={{ color: '#f5f7fa', fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ color: '#74be43', fontSize: '0.75rem', marginTop: 3, fontWeight: 500, letterSpacing: '0.5px' }}>{t.job}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginTop: 52 }}>
              <Link href="/testimonials" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#74be43', fontWeight: 500, textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Read all reviews
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '104px 24px', background: '#090f1a', textAlign: 'center' }}>
        <ScrollReveal>
          <div style={{ maxWidth: 620, margin: '0 auto' }}>
            <div style={{ width: 36, height: 1.5, background: 'linear-gradient(90deg,#74be43,transparent)', margin: '0 auto 24px' }} />
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(2.8rem,5vw,4rem)', letterSpacing: '3px', color: '#f5f7fa', marginBottom: 20, lineHeight: 1 }}>
              START YOUR PROJECT
            </h2>
            <p style={{ color: '#7a8fa6', lineHeight: 1.8, marginBottom: 44, fontWeight: 300, fontSize: '1rem' }}>
              Free, no-obligation quote. We cover Peterborough, Stamford, Bourne and surrounding areas. We typically respond within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: 'linear-gradient(135deg,#74be43,#5a9933)', color: '#090f1a', padding: '14px 36px', borderRadius: 7, fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.5px', boxShadow: '0 8px 32px rgba(116,190,67,0.25)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Get a Free Quote
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a href="https://wa.me/447548627968" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: 'rgba(245,247,250,0.7)', border: '1px solid rgba(245,247,250,0.12)', padding: '14px 36px', borderRadius: 7, fontWeight: 500, textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#74be43"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.659 1.438 5.168L2 22l4.985-1.368A9.959 9.959 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
