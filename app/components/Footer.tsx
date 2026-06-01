'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#0c0c0c', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 64px 48px' }}>

        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 64, marginBottom: 80, paddingBottom: 64, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>

          {/* Brand */}
          <div>
            <Image src="/rpv-logo.png" alt="RPV Construction" width={48} height={48} style={{ objectFit: 'contain', marginBottom: 24 }} />
            <p style={{ color: 'rgba(247,244,239,0.25)', fontSize: '0.85rem', lineHeight: 1.8, fontWeight: 300, maxWidth: 240, marginBottom: 32 }}>
              Built Properly. Managed Consciously.<br />
              Serving Peterborough and the surrounding areas.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="https://wa.me/447548627968" style={{ color: 'rgba(247,244,239,0.35)', textDecoration: 'none', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#74be43')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,244,239,0.35)')}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.659 1.438 5.168L2 22l4.985-1.368A9.959 9.959 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                07548 627 968
              </a>
              <a href="tel:03338809181" style={{ color: 'rgba(247,244,239,0.35)', textDecoration: 'none', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f7f4ef')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,244,239,0.35)')}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.81 2 2 0 012.4 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                0333 880 9181
              </a>
              <a href="mailto:info@rpvconstruction.co.uk" style={{ color: 'rgba(247,244,239,0.35)', textDecoration: 'none', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f7f4ef')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,244,239,0.35)')}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@rpvconstruction.co.uk
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ color: 'rgba(247,244,239,0.2)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 24 }}>Services</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['New Builds', '/services/new-builds'], ['Extensions', '/services/extensions'], ['Roofing', '/services/roofing'], ['Garage Conversions', '/services/garage-conversions']].map(([l, h]) => (
                <Link key={h} href={h} style={{ color: 'rgba(247,244,239,0.3)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f7f4ef')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,244,239,0.3)')}>
                  {l}
                </Link>
              ))}
            </nav>
          </div>

          {/* Areas */}
          <div>
            <p style={{ color: 'rgba(247,244,239,0.2)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 24 }}>Areas</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['Peterborough', '/extensions-peterborough'], ['Stamford', '/extensions-stamford'], ['Bourne', '/extensions-bourne'], ['New Builds Peterborough', '/new-builds-peterborough'], ['Roofing Peterborough', '/roofing-peterborough']].map(([l, h]) => (
                <Link key={h} href={h} style={{ color: 'rgba(247,244,239,0.3)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f7f4ef')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,244,239,0.3)')}>
                  {l}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <p style={{ color: 'rgba(247,244,239,0.2)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 24 }}>Company</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['About', '/about'], ['Projects', '/projects'], ['Testimonials', '/testimonials'], ['Journal', '/blog'], ['Contact', '/contact']].map(([l, h]) => (
                <Link key={h} href={h} style={{ color: 'rgba(247,244,239,0.3)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f7f4ef')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,244,239,0.3)')}>
                  {l}
                </Link>
              ))}
            </nav>
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              <p style={{ color: 'rgba(247,244,239,0.2)', fontSize: '0.75rem', lineHeight: 1.7, fontWeight: 300 }}>
                Monday – Sunday<br />7am – 7pm
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ color: 'rgba(247,244,239,0.15)', fontSize: '0.75rem', fontWeight: 300 }}>
            © 2026 RPV Construction Ltd. All rights reserved. Fully insured. Peterborough, UK.
          </p>
          <p style={{ color: 'rgba(247,244,239,0.1)', fontSize: '0.72rem', fontWeight: 300, letterSpacing: '0.3px' }}>
            Built Properly. Managed Consciously.
          </p>
        </div>
      </div>
    </footer>
  );
}
