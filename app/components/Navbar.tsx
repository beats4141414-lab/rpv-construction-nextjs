'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { href: '/services/new-builds', label: 'New Builds', desc: 'Bespoke new homes from foundations to finish' },
  { href: '/services/extensions', label: 'Extensions', desc: 'Rear, side, double-storey and loft conversions' },
  { href: '/services/roofing', label: 'Roofing', desc: 'Pitched, flat, GRP and all roofline works' },
  { href: '/services/garage-conversions', label: 'Garage Conversions', desc: 'Living space, office or additional bedroom' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      setAtTop(window.scrollY < 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isDark = atTop; // dark = over dark hero
  const linkColor = isDark ? 'rgba(247,244,239,0.65)' : 'rgba(12,12,12,0.55)';
  const linkHover = isDark ? '#f7f4ef' : '#0c0c0c';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
        background: scrolled
          ? 'rgba(247,244,239,0.96)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: scrolled ? '16px 48px' : '28px 48px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'padding 0.5s ease',
        }}>

          {/* Logo — image only */}
          <Link href="/" aria-label="RPV Construction home">
            <Image
              src="/rpv-logo.png"
              alt="RPV Construction"
              width={scrolled ? 44 : 52}
              height={scrolled ? 44 : 52}
              style={{ objectFit: 'contain', transition: 'all 0.3s ease', display: 'block' }}
            />
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">

            {/* Services dropdown */}
            <div ref={dropRef} style={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              <button style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: linkColor, fontSize: '0.82rem', fontWeight: 500,
                padding: '8px 14px', borderRadius: 6, letterSpacing: '0.3px',
                display: 'flex', alignItems: 'center', gap: 4,
                fontFamily: "'DM Sans', sans-serif",
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
                onMouseLeave={e => (e.currentTarget.style.color = linkColor)}>
                Services
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'none' }}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>

              {/* Dropdown */}
              <div style={{
                position: 'absolute', top: 'calc(100% + 12px)', left: '50%',
                transform: servicesOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-6px)',
                width: 480, padding: '8px',
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 12,
                boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06)',
                opacity: servicesOpen ? 1 : 0,
                pointerEvents: servicesOpen ? 'auto' : 'none',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                  {services.map(s => (
                    <Link key={s.href} href={s.href} onClick={() => setServicesOpen(false)}
                      style={{ display: 'block', padding: '14px 16px', borderRadius: 8, textDecoration: 'none', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#f7f4ef')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                      <div style={{ color: '#0c0c0c', fontWeight: 600, fontSize: '0.85rem', marginBottom: 2 }}>{s.label}</div>
                      <div style={{ color: '#9a9a9a', fontSize: '0.75rem', lineHeight: 1.4 }}>{s.desc}</div>
                    </Link>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', marginTop: 6, paddingTop: 6 }}>
                  <Link href="/services" onClick={() => setServicesOpen(false)}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', color: '#74be43', textDecoration: 'none', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.5px' }}>
                    View all services
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </div>

            {[
              { href: '/projects', label: 'Projects' },
              { href: '/about', label: 'About' },
              { href: '/testimonials', label: 'Testimonials' },
              { href: '/blog', label: 'Journal' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                style={{ color: linkColor, textDecoration: 'none', fontSize: '0.82rem', fontWeight: 500, padding: '8px 14px', borderRadius: 6, letterSpacing: '0.3px', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
                onMouseLeave={e => (e.currentTarget.style.color = linkColor)}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }} className="desktop-nav">
            <a href="tel:03338809181"
              style={{ color: isDark ? 'rgba(247,244,239,0.5)' : 'rgba(12,12,12,0.4)', fontSize: '0.78rem', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.3px', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = isDark ? '#f7f4ef' : '#0c0c0c')}
              onMouseLeave={e => (e.currentTarget.style.color = isDark ? 'rgba(247,244,239,0.5)' : 'rgba(12,12,12,0.4)')}>
              0333 880 9181
            </a>
            <Link href="/contact" style={{
              background: '#0c0c0c', color: '#f7f4ef',
              padding: '10px 22px', borderRadius: 6,
              fontWeight: 500, fontSize: '0.8rem',
              textDecoration: 'none', letterSpacing: '0.5px',
              transition: 'background 0.2s, transform 0.2s',
              whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#74be43'; (e.currentTarget as HTMLElement).style.color = '#0c0c0c'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0c0c0c'; (e.currentTarget as HTMLElement).style.color = '#f7f4ef'; }}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-btn"
            style={{ display: 'none', background: 'none', border: '1px solid rgba(12,12,12,0.15)', borderRadius: 6, padding: '8px 10px', cursor: 'pointer', color: isDark ? '#f7f4ef' : '#0c0c0c' }}
            aria-label="Menu">
            {mobileOpen
              ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h12"/></svg>
            }
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)', padding: '20px 28px 28px' }}>
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/services/new-builds', label: 'New Builds', sub: true },
              { href: '/services/extensions', label: 'Extensions', sub: true },
              { href: '/services/roofing', label: 'Roofing', sub: true },
              { href: '/services/garage-conversions', label: 'Garage Conversions', sub: true },
              { href: '/projects', label: 'Projects' },
              { href: '/about', label: 'About' },
              { href: '/testimonials', label: 'Testimonials' },
              { href: '/blog', label: 'Journal' },
              { href: '/contact', label: 'Contact' },
            ].map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '12px 0', color: (l as any).sub ? '#9a9a9a' : '#0c0c0c', textDecoration: 'none', fontSize: (l as any).sub ? '0.85rem' : '1rem', fontWeight: 400, paddingLeft: (l as any).sub ? '16px' : '0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)}
              style={{ display: 'block', marginTop: 20, background: '#0c0c0c', color: '#f7f4ef', padding: '14px', borderRadius: 8, fontWeight: 500, textDecoration: 'none', textAlign: 'center', fontSize: '0.9rem' }}>
              Get a Free Quote
            </Link>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
