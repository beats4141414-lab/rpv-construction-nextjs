'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { href: '/services/new-builds', label: 'New Builds', desc: 'Bespoke homes from foundations to finish' },
  { href: '/services/extensions', label: 'Extensions & Renovations', desc: 'Rear, side, loft and full refurbishments' },
  { href: '/services/roofing', label: 'Roofing', desc: 'Pitched, flat, GRP and roofline works' },
  { href: '/services/garage-conversions', label: 'Garage Conversions', desc: 'Living space, office or bedroom' },
];

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        background: scrolled
          ? 'rgba(9,15,26,0.92)'
          : 'linear-gradient(to bottom, rgba(9,15,26,0.8), transparent)',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(116,190,67,0.08)' : 'none',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: scrolled ? '14px 40px' : '22px 40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'padding 0.4s ease',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0 }}>
            <Image src="/rpv-logo.png" alt="RPV Construction" width={42} height={42} style={{ objectFit: 'contain' }} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem', letterSpacing: '2px', color: '#f5f7fa' }}>RPV</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', letterSpacing: '3px', color: '#74be43', textTransform: 'uppercase', fontWeight: 600 }}>Construction</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-nav">
            <Link href="/" style={navLinkStyle}>Home</Link>

            {/* Services dropdown */}
            <div ref={dropdownRef} style={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              <button style={{ ...navLinkStyle, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  style={{ transition: 'transform 0.2s', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>

              {/* Mega dropdown */}
              <div style={{
                position: 'absolute', top: 'calc(100% + 16px)', left: '50%',
                transform: servicesOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-8px)',
                width: 520, background: 'rgba(9,15,26,0.97)',
                border: '1px solid rgba(116,190,67,0.12)',
                borderRadius: 14, padding: '8px',
                opacity: servicesOpen ? 1 : 0,
                pointerEvents: servicesOpen ? 'auto' : 'none',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
                  {services.map(s => (
                    <Link key={s.href} href={s.href} onClick={() => setServicesOpen(false)}
                      style={{ display: 'block', padding: '14px 16px', borderRadius: 10, textDecoration: 'none', transition: 'background 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(116,190,67,0.07)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                      <div style={{ color: '#f5f7fa', fontWeight: 600, fontSize: '0.88rem', marginBottom: 3 }}>{s.label}</div>
                      <div style={{ color: '#7a8fa6', fontSize: '0.78rem', lineHeight: 1.4 }}>{s.desc}</div>
                    </Link>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid rgba(116,190,67,0.08)', marginTop: 8, paddingTop: 8 }}>
                  <Link href="/services" onClick={() => setServicesOpen(false)}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', color: '#74be43', textDecoration: 'none', fontSize: '0.82rem', fontWeight: 600 }}>
                    View all services
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </div>

            {links.slice(1).map(l => (
              <Link key={l.href} href={l.href} style={navLinkStyle}>{l.label}</Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="desktop-nav">
            <a href="https://wa.me/447548627968" target="_blank" rel="noopener noreferrer"
              style={{ color: '#74be43', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, letterSpacing: '0.3px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#74be43"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.659 1.438 5.168L2 22l4.985-1.368A9.959 9.959 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
              07548 627 968
            </a>
            <Link href="/contact" style={{
              background: 'linear-gradient(135deg, #74be43, #5a9933)',
              color: '#090f1a', padding: '10px 22px', borderRadius: 7,
              fontWeight: 700, textDecoration: 'none', fontSize: '0.85rem',
              letterSpacing: '0.3px', whiteSpace: 'nowrap',
              boxShadow: '0 4px 20px rgba(116,190,67,0.25)',
              transition: 'box-shadow 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 28px rgba(116,190,67,0.4)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(116,190,67,0.25)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-btn"
            style={{ display: 'none', background: 'none', border: '1px solid rgba(116,190,67,0.2)', borderRadius: 8, padding: '8px 10px', cursor: 'pointer', color: '#f5f7fa' }}
            aria-label="Toggle menu">
            {mobileOpen
              ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            }
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: 'rgba(9,15,26,0.98)', borderTop: '1px solid rgba(116,190,67,0.08)', padding: '16px 24px 24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <Link href="/" onClick={() => setMobileOpen(false)} style={mobileLinkStyle}>Home</Link>
              <Link href="/services" onClick={() => setMobileOpen(false)} style={mobileLinkStyle}>Services</Link>
              {services.map(s => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                  style={{ ...mobileLinkStyle, paddingLeft: 20, fontSize: '0.88rem', color: '#7a8fa6' }}>
                  — {s.label}
                </Link>
              ))}
              {links.slice(1).map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={mobileLinkStyle}>{l.label}</Link>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                style={{ display: 'block', marginTop: 16, background: 'linear-gradient(135deg, #74be43, #5a9933)', color: '#090f1a', padding: '14px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}>
                Get a Free Quote
              </Link>
            </div>
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

const navLinkStyle: React.CSSProperties = {
  color: 'rgba(245,247,250,0.7)',
  textDecoration: 'none',
  fontSize: '0.85rem',
  fontWeight: 500,
  padding: '8px 12px',
  borderRadius: 6,
  letterSpacing: '0.3px',
  transition: 'color 0.2s',
  fontFamily: "'DM Sans', sans-serif",
};

const mobileLinkStyle: React.CSSProperties = {
  color: 'rgba(245,247,250,0.75)',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  padding: '12px 0',
  borderBottom: '1px solid rgba(255,255,255,0.05)',
  display: 'block',
};
