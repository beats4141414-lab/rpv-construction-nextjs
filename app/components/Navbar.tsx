'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(21, 42, 66, 0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(116, 190, 67, 0.15)' : 'none',
        padding: scrolled ? '12px 40px' : '20px 40px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Image src="/rpv-logo.png" alt="RPV Construction" width={50} height={50} style={{ objectFit: 'contain' }} />
          <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.5px' }}>RPV Construction</span>
        </Link>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: 28, listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#74be43')}
                onMouseLeave={e => (e.currentTarget.style.color = '#cbd5e1')}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" style={{ background: '#74be43', color: '#152a42', padding: '10px 22px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#fff', fontSize: '1.5rem' }} className="mobile-menu-btn">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(21, 42, 66, 0.98)', padding: '20px 40px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '1rem', fontWeight: 500 }}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ background: '#74be43', color: '#152a42', padding: '12px 22px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}>
            Get a Quote
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
