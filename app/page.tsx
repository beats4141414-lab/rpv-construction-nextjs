import HeroVideo from "./components/HeroVideo";
import ScrollReveal from "./components/ScrollReveal";
import StatCounter from "./components/StatCounter";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroVideo />

      {/* ── PHILOSOPHY ────────────────────────────────────── */}
      <section style={{ background: '#f7f4ef', padding: '120px 64px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
              <div>
                <div style={{ width: 32, height: 1, background: '#74be43', marginBottom: 20 }} />
                <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#9a9a9a' }}>
                  Our Philosophy
                </p>
              </div>
              <div>
                <p style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', fontWeight: 300, lineHeight: 1.6, color: '#0c0c0c', marginBottom: 32 }}>
                  RPV Construction was founded on a single principle: that every homeowner deserves a builder who treats their project with the same care and accountability they would give their own home.
                </p>
                <p style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.85, color: '#6b6b6b', maxWidth: 580 }}>
                  We don't spread ourselves across dozens of sites at once. We don't disappear after the contract is signed. We stay on site, manage every detail, and communicate clearly at every stage — because we understand that for most homeowners, this is one of the most significant investments they will ever make.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section style={{ background: '#ffffff' }}>

        {/* Extensions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '80vh' }}>
          <ScrollReveal>
            <div style={{ position: 'relative', overflow: 'hidden', height: '100%', minHeight: 520 }}>
              {/* Replace with RPV completed extension photography */}
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop"
                alt="Modern rear extension — replace with RPV project photography"
                fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div style={{ padding: '80px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#74be43', marginBottom: 20 }}>Extensions &amp; Renovations</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 4vw, 4rem)', letterSpacing: '2px', color: '#0c0c0c', lineHeight: 0.95, marginBottom: 28 }}>
                TRANSFORMING<br />EXISTING HOMES
              </h2>
              <p style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.85, color: '#6b6b6b', marginBottom: 40, maxWidth: 440 }}>
                Rear extensions, side extensions, double-storey builds, loft conversions, structural alterations, RSJ installations, full refurbishments, kitchens, bathrooms and internal reconfigurations. We manage every stage — from architect coordination to Building Control sign-off.
              </p>
              <Link href="/services/extensions" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#0c0c0c', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #0c0c0c', paddingBottom: 2, transition: 'color 0.2s' }}>
                View service
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* New Builds */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '80vh' }}>
          <ScrollReveal delay={100}>
            <div style={{ padding: '80px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#f7f4ef' }}>
              <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#74be43', marginBottom: 20 }}>New Builds</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 4vw, 4rem)', letterSpacing: '2px', color: '#0c0c0c', lineHeight: 0.95, marginBottom: 28 }}>
                BUILT FROM<br />THE GROUND UP
              </h2>
              <p style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.85, color: '#6b6b6b', marginBottom: 40, maxWidth: 440 }}>
                Bespoke single plots and small residential developments. We manage the full process — from initial planning and architectural drawings through to structural engineering, foundations, build and completion. Every decision documented. Every standard met.
              </p>
              <Link href="/services/new-builds" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#0c0c0c', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #0c0c0c', paddingBottom: 2, transition: 'color 0.2s' }}>
                View service
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ position: 'relative', overflow: 'hidden', height: '100%', minHeight: 520 }}>
              {/* Replace with RPV new build exterior photography */}
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85&auto=format&fit=crop"
                alt="New build residential home — replace with RPV project photography"
                fill style={{ objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Roofing */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '70vh' }}>
          <ScrollReveal>
            <div style={{ position: 'relative', overflow: 'hidden', height: '100%', minHeight: 480 }}>
              {/* Replace with RPV roofing project photography */}
              <Image
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85&auto=format&fit=crop"
                alt="Completed roof replacement — replace with RPV project photography"
                fill style={{ objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div style={{ padding: '80px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#74be43', marginBottom: 20 }}>Roofing</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 4vw, 4rem)', letterSpacing: '2px', color: '#0c0c0c', lineHeight: 0.95, marginBottom: 28 }}>
                PROTECTED<br />FOR DECADES
              </h2>
              <p style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.85, color: '#6b6b6b', marginBottom: 40, maxWidth: 440 }}>
                Pitched roof replacements, flat roofs, GRP warm roof systems, repairs, roof insulation upgrades and full roofline works. All roofing is carried out to current Building Regulations standards with appropriate sign-off.
              </p>
              <Link href="/services/roofing" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#0c0c0c', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #0c0c0c', paddingBottom: 2, transition: 'color 0.2s' }}>
                View service
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Garage Conversions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '70vh' }}>
          <ScrollReveal delay={100}>
            <div style={{ padding: '80px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#f7f4ef' }}>
              <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#74be43', marginBottom: 20 }}>Garage Conversions</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 4vw, 4rem)', letterSpacing: '2px', color: '#0c0c0c', lineHeight: 0.95, marginBottom: 28 }}>
                UNLOCKING<br />HIDDEN SPACE
              </h2>
              <p style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.85, color: '#6b6b6b', marginBottom: 40, maxWidth: 440 }}>
                Transform an underused garage into a bedroom, home office, gym or additional living space. We handle the full conversion — structural assessment, damp proofing, insulation, electrics, plastering and Building Control sign-off.
              </p>
              <Link href="/services/garage-conversions" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#0c0c0c', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #0c0c0c', paddingBottom: 2, transition: 'color 0.2s' }}>
                View service
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ position: 'relative', overflow: 'hidden', height: '100%', minHeight: 480 }}>
              {/* Replace with RPV garage conversion photography */}
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85&auto=format&fit=crop"
                alt="Garage conversion to living space — replace with RPV project photography"
                fill style={{ objectFit: 'cover' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <section style={{ background: '#0c0c0c', padding: '72px 64px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 48 }}>
          <StatCounter end={20} suffix="+" label="Years Combined Experience" />
          <StatCounter end={100} suffix="%" label="Projects Delivered On Site" />
          <StatCounter end={5} suffix="★" label="Google Review Average" />
          <StatCounter end={7} suffix=" Days" label="A Week, 7am–7pm" />
        </div>
      </section>

      {/* ── THE DIFFERENCE ────────────────────────────────── */}
      <section style={{ background: '#0d1e30', padding: '140px 64px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(116,190,67,0.7)', marginBottom: 40 }}>The RPV Difference</p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 6rem)', letterSpacing: '2px', color: '#f7f4ef', lineHeight: 0.92, marginBottom: 56 }}>
              YOUR STRESS<br />
              <span style={{ WebkitTextStroke: '1px rgba(247,244,239,0.25)', color: 'transparent' }}>BELONGS</span><br />
              TO US.
            </h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginBottom: 80 }}>
            {[
              { heading: 'We stay on site.', body: 'Many builders spread themselves across multiple projects at once, leaving clients wondering when they\'ll return. Once we start your project, our focus remains entirely on your project until it is complete.' },
              { heading: 'We manage everything.', body: 'Architects, structural engineers, Building Control, inspections, specialist trades — we coordinate the entire process on your behalf so you don\'t have to navigate any of it alone.' },
              { heading: 'We remove the stress.', body: 'Construction projects can feel overwhelming. We handle the day-to-day entirely, keeping you informed without burdening you with every detail. Your focus stays on the result.' },
              { heading: 'We communicate clearly.', body: 'No surprises. No hidden costs. No chasing. You will always know where your project stands, what is happening next, and who is responsible for each element.' },
            ].map((item, i) => (
              <ScrollReveal key={item.heading} delay={i * 60}>
                <div>
                  <div style={{ width: 24, height: 1, background: '#74be43', marginBottom: 16 }} />
                  <h3 style={{ color: '#f7f4ef', fontWeight: 500, fontSize: '1rem', marginBottom: 12, letterSpacing: '0.2px' }}>{item.heading}</h3>
                  <p style={{ color: 'rgba(247,244,239,0.4)', fontSize: '0.88rem', lineHeight: 1.85, fontWeight: 300 }}>{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'rgba(247,244,239,0.4)', textDecoration: 'none', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', transition: 'color 0.2s' }}>
              About RPV Construction
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FEATURED WORK ─────────────────────────────────── */}
      <section style={{ background: '#f7f4ef', padding: '120px 64px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
              <div>
                <div style={{ width: 32, height: 1, background: '#74be43', marginBottom: 20 }} />
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', letterSpacing: '2px', color: '#0c0c0c', lineHeight: 0.95 }}>
                  SELECTED<br />PROJECTS
                </h2>
              </div>
              <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#9a9a9a', textDecoration: 'none', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', transition: 'color 0.2s' }}>
                View all projects
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </ScrollReveal>

          {/* Asymmetric grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gridTemplateRows: 'auto auto', gap: 12 }}>
            <ScrollReveal>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 4, height: '100%', minHeight: 600 }}>
                {/* Replace with RPV featured extension or new build project */}
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=85&auto=format&fit=crop"
                  alt="Featured RPV project — replace with completed extension photography"
                  fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 32px', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.68rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 6 }}>Peterborough</p>
                  <p style={{ color: '#ffffff', fontWeight: 500, fontSize: '0.95rem' }}>Rear Extension &amp; Full Renovation</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 4, height: 290 }}>
                {/* Replace with RPV roof replacement project photography */}
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&q=85&auto=format&fit=crop"
                  alt="RPV completed project interior — replace with project photography"
                  fill style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px', background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)' }}>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 4 }}>Stamford</p>
                  <p style={{ color: '#ffffff', fontWeight: 500, fontSize: '0.88rem' }}>Loft Conversion</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 4, height: 290 }}>
                {/* Replace with RPV garage conversion project photography */}
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop"
                  alt="RPV completed roofing project — replace with project photography"
                  fill style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px', background: 'linear-gradient(to top, rgba(0,0,0,0.65), transparent)' }}>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 4 }}>Bourne</p>
                  <p style={{ color: '#ffffff', fontWeight: 500, fontSize: '0.88rem' }}>Full Roof Replacement</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ───────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '140px 64px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '5rem', color: 'rgba(116,190,67,0.15)', lineHeight: 0.7, marginBottom: 32 }}>"</div>
            <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 300, lineHeight: 1.65, color: '#0c0c0c', marginBottom: 48 }}>
              Having endured disappointment with so many builders, it was truly refreshing to meet a team who actually deliver what they promise. The standard of work was absolutely outstanding, the price was great, and the time for completion was very impressive. The guys literally worked six days a week, ten hours a day to finish within the agreed timescale — at no extra expense to me. I could not recommend these guys more.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ width: 1, height: 40, background: '#74be43' }} />
              <div>
                <p style={{ color: '#0c0c0c', fontWeight: 600, fontSize: '0.9rem' }}>Dean Papworth</p>
                <p style={{ color: '#9a9a9a', fontSize: '0.78rem', marginTop: 3 }}>Roof replacement &amp; driveway, Peterborough</p>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 3 }}>
                {[...Array(5)].map((_, i) => <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#74be43"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ marginTop: 64 }}>
              <Link href="/testimonials" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#9a9a9a', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', transition: 'color 0.2s' }}>
                Read all reviews
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ABOUT STRIP ───────────────────────────────────── */}
      <section style={{ background: '#f7f4ef' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '70vh' }}>
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: 560 }}>
            {/* Replace with professional portrait of Ronaldo & Pashk Vila on site */}
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=85&auto=format&fit=crop"
              alt="Ronaldo & Pashk Vila, RPV Construction — replace with professional portrait"
              fill style={{ objectFit: 'cover' }}
            />
          </div>
          <ScrollReveal>
            <div style={{ padding: '80px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ width: 32, height: 1, background: '#74be43', marginBottom: 20 }} />
              <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#9a9a9a', marginBottom: 24 }}>About RPV</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.4rem, 3.5vw, 3.5rem)', letterSpacing: '2px', color: '#0c0c0c', lineHeight: 0.95, marginBottom: 28 }}>
                A FAMILY<br />BUSINESS BUILT<br />ON TRUST
              </h2>
              <p style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.85, color: '#6b6b6b', marginBottom: 20, maxWidth: 420 }}>
                RPV Construction is a father-and-son business founded by Ronaldo and Pashk Vila. The name comes from our family surname, and it represents the values we stand for — honesty, craftsmanship, accountability, and pride.
              </p>
              <p style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.85, color: '#6b6b6b', marginBottom: 40, maxWidth: 420 }}>
                Founded in 2023, we bring together decades of combined experience spanning residential construction, commercial works, structural engineering and major infrastructure projects.
              </p>
              <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#0c0c0c', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid #0c0c0c', paddingBottom: 2, transition: 'color 0.2s' }}>
                Our story
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section style={{ background: '#0c0c0c', padding: '140px 64px', textAlign: 'center' }}>
        <ScrollReveal>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <div style={{ width: 1, height: 64, background: 'linear-gradient(to bottom, transparent, rgba(247,244,239,0.15))', margin: '0 auto 56px' }} />
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '3px', color: '#f7f4ef', lineHeight: 0.92, marginBottom: 32 }}>
              READY TO START<br />YOUR PROJECT?
            </h2>
            <p style={{ color: 'rgba(247,244,239,0.35)', fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, marginBottom: 56, maxWidth: 480, margin: '0 auto 56px' }}>
              We offer a free, no-obligation consultation and quote. We cover Peterborough, Stamford, Bourne and the surrounding areas. We respond within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                background: '#f7f4ef', color: '#0c0c0c',
                padding: '15px 44px', borderRadius: 4,
                fontWeight: 600, fontSize: '0.85rem',
                textDecoration: 'none', letterSpacing: '0.5px',
                transition: 'background 0.2s',
              }}>
                Get a Free Quote
              </Link>
              <a href="tel:03338809181" style={{ color: 'rgba(247,244,239,0.3)', fontSize: '0.85rem', textDecoration: 'none', padding: '15px 24px', letterSpacing: '0.5px', fontWeight: 400, transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}>
                0333 880 9181
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
