import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#0d1e30', borderTop: '1px solid rgba(116,190,67,0.15)', padding: '60px 40px 30px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 40 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Image src="/rpv-logo.png" alt="RPV Construction" width={44} height={44} style={{ objectFit: 'contain' }} />
              <span style={{ color: '#fff', fontWeight: 800, fontSize: '1rem' }}>RPV Construction</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 16 }}>
              Built Properly. Managed Consciously.<br />Peterborough & surrounding areas.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <a href="https://wa.me/447548627968" style={{ color: '#74be43', textDecoration: 'none', fontSize: '0.9rem' }}>💬 WhatsApp: 07548 627 968</a>
              <a href="tel:03338809181" style={{ color: '#81c2e2', textDecoration: 'none', fontSize: '0.9rem' }}>📞 Call: 0333 880 9181</a>
              <a href="mailto:info@rpvconstruction.co.uk" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>✉️ info@rpvconstruction.co.uk</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#74be43', fontWeight: 700, marginBottom: 16, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { href: '/services/new-builds', label: 'New Builds' },
                { href: '/services/extensions', label: 'Extensions & Renovations' },
                { href: '/services/roofing', label: 'Roofing' },
                { href: '/services/garage-conversions', label: 'Garage Conversions' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 style={{ color: '#74be43', fontWeight: 700, marginBottom: 16, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Areas We Cover</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { href: '/extensions-peterborough', label: 'Extensions Peterborough' },
                { href: '/roofing-peterborough', label: 'Roofing Peterborough' },
                { href: '/extensions-stamford', label: 'Extensions Stamford' },
                { href: '/roofing-stamford', label: 'Roofing Stamford' },
                { href: '/extensions-bourne', label: 'Extensions Bourne' },
                { href: '/new-builds-peterborough', label: 'New Builds Peterborough' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: '#74be43', fontWeight: 700, marginBottom: 16, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { href: '/about', label: 'About Us' },
                { href: '/projects', label: 'Our Projects' },
                { href: '/testimonials', label: 'Testimonials' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact Us' },
              ].map(l => (
                <li key={l.href}><Link href={l.href} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>{l.label}</Link></li>
              ))}
            </ul>
            <div style={{ marginTop: 20, padding: '12px 16px', background: 'rgba(116,190,67,0.08)', borderRadius: 8, borderLeft: '3px solid #74be43' }}>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.6 }}>
                ⏰ Mon–Sun: 7am – 7pm<br />
                📍 Peterborough, Stamford, Bourne & surrounding areas
              </p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#64748b', fontSize: '0.85rem' }}>© 2026 RPV Construction Ltd. All rights reserved.</p>
          <p style={{ color: '#64748b', fontSize: '0.85rem' }}>Fully insured. Peterborough, UK.</p>
        </div>
      </div>
    </footer>
  );
}
