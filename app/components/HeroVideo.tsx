'use client';
import { useEffect, useRef } from 'react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const handleScroll = () => {
      const hero = heroRef.current;
      if (!hero || !video || !video.duration) return;

      const rect = hero.getBoundingClientRect();
      const heroHeight = hero.offsetHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / heroHeight));
      video.currentTime = progress * video.duration;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={heroRef} style={{ position: 'relative', height: '200vh' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        {/* Video */}
        <video
          ref={videoRef}
          src="/hero.mp4"
          muted
          playsInline
          preload="auto"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(21,42,66,0.55) 0%, rgba(21,42,66,0.35) 50%, rgba(21,42,66,0.75) 100%)' }} />

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(116,190,67,0.15)', border: '1px solid rgba(116,190,67,0.4)', borderRadius: 30, padding: '6px 18px', marginBottom: 24 }}>
            <span style={{ color: '#74be43', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>Peterborough & Surrounding Areas</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, maxWidth: 800 }}>
            <span style={{ color: '#ffffff' }}>Built </span>
            <span style={{ color: '#74be43' }}>Properly.</span>
            <br />
            <span style={{ color: '#ffffff' }}>Managed </span>
            <span style={{ color: '#81c2e2' }}>Consciously.</span>
          </h1>

          <p style={{ color: '#cbd5e1', fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: 600, lineHeight: 1.7, marginBottom: 16 }}>
            Trusted builders for homeowners across Peterborough. New builds, extensions, roofing and garage conversions — managed from start to finish.
          </p>

          <p style={{ color: '#74be43', fontSize: '1.1rem', fontWeight: 700, marginBottom: 40, fontStyle: 'italic' }}>
            "Your stress belongs to us."
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/contact" style={{ background: '#74be43', color: '#152a42', padding: '16px 36px', borderRadius: 8, fontWeight: 800, fontSize: '1rem', textDecoration: 'none', transition: 'transform 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
              Get a Free Quote
            </a>
            <a href="https://wa.me/447548627968" target="_blank" rel="noopener noreferrer"
              style={{ background: 'transparent', color: '#fff', padding: '16px 36px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)', transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#74be43')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}>
              💬 WhatsApp Us
            </a>
          </div>

          {/* Scroll indicator */}
          <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <span style={{ color: '#94a3b8', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
            <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #74be43, transparent)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
