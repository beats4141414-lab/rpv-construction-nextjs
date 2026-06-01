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
      const progress = Math.max(0, Math.min(1, -rect.top / hero.offsetHeight));
      video.currentTime = progress * video.duration;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={heroRef} style={{ position: 'relative', height: '200vh' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

        {/* Video */}
        <video ref={videoRef} src="/hero.mp4" muted playsInline preload="auto"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />

        {/* Multi-layer overlay for depth */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(9,15,26,0.65) 0%, rgba(9,15,26,0.3) 40%, rgba(9,15,26,0.7) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(116,190,67,0.05) 0%, transparent 60%)' }} />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 10,
          height: '100%', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 24px',
        }}>
          {/* Eyebrow */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            marginBottom: 32, opacity: 0.9,
          }}>
            <div style={{ width: 24, height: 1, background: '#74be43' }} />
            <span style={{ color: '#74be43', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase' }}>
              Peterborough &amp; Surrounding Areas
            </span>
            <div style={{ width: 24, height: 1, background: '#74be43' }} />
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(4rem, 11vw, 10rem)',
            lineHeight: 0.9,
            letterSpacing: '4px',
            marginBottom: 24,
            textTransform: 'uppercase',
          }}>
            <span style={{ display: 'block', color: '#f5f7fa' }}>Built</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #74be43 0%, #81c2e2 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Properly.</span>
            <span style={{ display: 'block', color: '#f5f7fa' }}>Managed</span>
            <span style={{ display: 'block', color: 'rgba(245,247,250,0.45)' }}>Consciously.</span>
          </h1>

          {/* Subheading */}
          <p style={{
            color: 'rgba(245,247,250,0.6)',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            maxWidth: 520, lineHeight: 1.75,
            marginBottom: 14, fontWeight: 300, letterSpacing: '0.2px',
          }}>
            Trusted builders for homeowners across Peterborough. New builds, extensions, roofing and garage conversions — managed from start to finish.
          </p>

          {/* Tagline */}
          <p style={{ color: '#74be43', fontSize: '0.88rem', fontWeight: 500, marginBottom: 44, letterSpacing: '0.5px', fontStyle: 'italic' }}>
            "Your stress belongs to us."
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/contact" style={{
              background: 'linear-gradient(135deg, #74be43, #5a9933)',
              color: '#090f1a', padding: '14px 36px', borderRadius: 7,
              fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
              letterSpacing: '0.5px', boxShadow: '0 8px 32px rgba(116,190,67,0.3)',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              Get a Free Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="https://wa.me/447548627968" target="_blank" rel="noopener noreferrer" style={{
              background: 'rgba(245,247,250,0.06)',
              color: '#f5f7fa', padding: '14px 36px', borderRadius: 7,
              fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none',
              border: '1px solid rgba(245,247,250,0.15)',
              backdropFilter: 'blur(8px)',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#74be43"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.659 1.438 5.168L2 22l4.985-1.368A9.959 9.959 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
              WhatsApp Us
            </a>
          </div>

          {/* Scroll cue */}
          <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <span style={{ color: 'rgba(245,247,250,0.3)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Scroll</span>
            <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(116,190,67,0.6), transparent)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
