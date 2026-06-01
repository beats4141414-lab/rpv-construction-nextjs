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
      const progress = Math.max(0, Math.min(1, -hero.getBoundingClientRect().top / hero.offsetHeight));
      video.currentTime = progress * video.duration;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={heroRef} style={{ position: 'relative', height: '200vh' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>

        {/* Video — replace with drone footage of completed RPV projects */}
        <video ref={videoRef} src="/hero.mp4" muted playsInline preload="auto"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.55)' }} />

        {/* Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(7,15,26,0.3) 0%, rgba(7,15,26,0.15) 50%, rgba(7,15,26,0.6) 100%)' }} />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 10,
          height: '100%', display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', padding: '0 64px 80px',
        }}>
          {/* Location tag */}
          <div style={{ marginBottom: 32, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 1, background: 'rgba(247,244,239,0.4)' }} />
            <span style={{ color: 'rgba(247,244,239,0.5)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase' }}>
              Peterborough &amp; Surrounding Areas
            </span>
          </div>

          {/* Main headline */}
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(5rem, 12vw, 11rem)',
            lineHeight: 0.88,
            letterSpacing: '2px',
            color: '#f7f4ef',
            marginBottom: 36,
            maxWidth: '80vw',
          }}>
            Built<br />
            <span style={{ color: '#74be43' }}>Properly.</span><br />
            Managed<br />
            <span style={{ WebkitTextStroke: '1px rgba(247,244,239,0.3)', color: 'transparent' }}>Consciously.</span>
          </h1>

          {/* Divider + subline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 48 }}>
            <div style={{ width: 1, height: 48, background: 'rgba(247,244,239,0.2)' }} />
            <p style={{ color: 'rgba(247,244,239,0.55)', fontSize: '1rem', maxWidth: 420, lineHeight: 1.7, fontWeight: 300 }}>
              Residential construction managed from start to finish.
              New builds, extensions, roofing and garage conversions.
            </p>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link_a href="/contact" style={{
              background: '#f7f4ef', color: '#0c0c0c',
              padding: '14px 36px', borderRadius: 4,
              fontWeight: 600, fontSize: '0.85rem',
              textDecoration: 'none', letterSpacing: '0.5px',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#74be43')}
              onMouseLeave={e => (e.currentTarget.style.background = '#f7f4ef')}>
              Start Your Project
            </Link_a>
            <a href="https://wa.me/447548627968" target="_blank" rel="noopener noreferrer"
              style={{ color: 'rgba(247,244,239,0.55)', fontSize: '0.82rem', textDecoration: 'none', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 400, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f7f4ef')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,244,239,0.55)')}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(116,190,67,0.8)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.659 1.438 5.168L2 22l4.985-1.368A9.959 9.959 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
              WhatsApp: 07548 627 968
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: 'absolute', bottom: 40, right: 64, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 1, height: 64, background: 'linear-gradient(to bottom, transparent, rgba(247,244,239,0.3))' }} />
          <span style={{ color: 'rgba(247,244,239,0.25)', fontSize: '0.6rem', letterSpacing: '3px', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>Scroll</span>
        </div>
      </div>
    </div>
  );
}

// Thin wrapper to avoid JSX element naming issue
function Link_a({ href, children, style, onMouseEnter, onMouseLeave }: { href: string; children: React.ReactNode; style?: React.CSSProperties; onMouseEnter?: (e: React.MouseEvent<HTMLAnchorElement>) => void; onMouseLeave?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  return <a href={href} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{children}</a>;
}
