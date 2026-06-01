import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#060c14', borderTop: '1px solid rgba(116,190,67,0.07)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 56 }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <Image src="/rpv-logo.png" alt="RPV Construction" width={38} height={38} style={{ objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '1.1rem', letterSpacing: '2px', color: '#f5f7fa' }}>RPV</div>
                <div style={{ fontSize: '0.58rem', letterSpacing: '3px', color: '#74be43', textTransform: 'uppercase', fontWeight: 600 }}>Construction</div>
              </div>
            </div>
            <p style={{ color: '#7a8fa6', fontSize: '0.85rem', lineHeight: 1.75, marginBottom: 24, fontWeight: 300, maxWidth: 220 }}>
              Built Properly. Managed Consciously.<br />Peterborough & surrounding areas.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="https://wa.me/447548627968" style={{ color: '#74be43', textDecoration: 'none', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 7 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#74be43"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.89.524 3.659 1.438 5.168L2 22l4.985-1.368A9.959 9.959 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                07548 627 968
              </a>
              <a href="tel:03338809181" style={{ color: '#81c2e2', textDecoration: 'none', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 7 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#81c2e2" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.4 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                0333 880 9181
              </a>
              <a href="mailto:info@rpvconstruction.co.uk" style={{ color: '#7a8fa6', textDecoration: 'none', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: 7 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7a8fa6" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@rpvconstruction.co.uk
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'rgba(245,247,250,0.3)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 20 }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['New Builds','/services/new-builds'],['Extensions & Renovations','/services/extensions'],['Roofing','/services/roofing'],['Garage Conversions','/services/garage-conversions']].map(([label,href]) => (
                <li key={href}><Link href={href} style={{ color: '#7a8fa6', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f5f7fa')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#7a8fa6')}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 style={{ color: 'rgba(245,247,250,0.3)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 20 }}>Areas</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['Extensions Peterborough','/extensions-peterborough'],['Roofing Peterborough','/roofing-peterborough'],['Extensions Stamford','/extensions-stamford'],['Extensions Bourne','/extensions-bourne'],['New Builds Peterborough','/new-builds-peterborough']].map(([label,href]) => (
                <li key={href}><Link href={href} style={{ color: '#7a8fa6', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f5f7fa')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#7a8fa6')}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: 'rgba(245,247,250,0.3)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 20 }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['About Us','/about'],['Projects','/projects'],['Testimonials','/testimonials'],['Blog','/blog'],['Contact','/contact']].map(([label,href]) => (
                <li key={href}><Link href={href} style={{ color: '#7a8fa6', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 300, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#f5f7fa')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#7a8fa6')}>{label}</Link></li>
              ))}
            </ul>
            <div style={{ marginTop: 24, padding: '14px 16px', border: '1px solid rgba(116,190,67,0.1)', borderRadius: 8 }}>
              <p style={{ color: '#7a8fa6', fontSize: '0.78rem', lineHeight: 1.7, fontWeight: 300 }}>
                Mon–Sun: 7am – 7pm<br/>
                Peterborough, Stamford, Bourne<br/>& surrounding areas
              </p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(245,247,250,0.05)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(245,247,250,0.2)', fontSize: '0.78rem', fontWeight: 300 }}>© 2026 RPV Construction Ltd. All rights reserved. Fully insured.</p>
          <p style={{ color: 'rgba(245,247,250,0.2)', fontSize: '0.78rem', fontWeight: 300 }}>Peterborough, UK</p>
        </div>
      </div>
    </footer>
  );
}
