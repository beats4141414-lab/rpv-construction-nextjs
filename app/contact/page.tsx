import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact RPV Construction | Free Quote Peterborough",
  description: "Get a free no-obligation quote from RPV Construction. Call 0333 880 9181, WhatsApp 07548 627 968, or email info@rpvconstruction.co.uk. Based in Peterborough.",
};

export default function Contact() {
  return (
    <>
      <div style={{ paddingTop: 120, paddingBottom: 60, background: "#1a3350", textAlign: "center", padding: "120px 24px 60px" }}>
        <span style={{ color: "#74be43", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Get In Touch</span>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", marginTop: 12 }}>Get a Free Quote</h1>
        <p style={{ color: "#94a3b8", maxWidth: 540, margin: "16px auto 0", lineHeight: 1.7 }}>Tell us about your project and we will get back to you within 24 hours. No obligation, no pressure.</p>
      </div>

      <section style={{ padding: "80px 24px", background: "#152a42" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60 }}>

          {/* Contact details */}
          <div>
            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.5rem", marginBottom: 32 }}>Contact Details</h2>
            {[
              { icon: "💬", label: "WhatsApp", value: "07548 627 968", href: "https://wa.me/447548627968", color: "#74be43" },
              { icon: "📞", label: "Phone", value: "0333 880 9181", href: "tel:03338809181", color: "#81c2e2" },
              { icon: "✉️", label: "Email", value: "info@rpvconstruction.co.uk", href: "mailto:info@rpvconstruction.co.uk", color: "#94a3b8" },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px", background: "rgba(34,66,103,0.4)", borderRadius: 10, marginBottom: 16, textDecoration: "none", border: "1px solid rgba(116,190,67,0.1)" }}>
                <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
                <div>
                  <div style={{ color: "#94a3b8", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>{c.label}</div>
                  <div style={{ color: c.color, fontWeight: 700, fontSize: "1rem", marginTop: 4 }}>{c.value}</div>
                </div>
              </a>
            ))}
            <div style={{ padding: "20px", background: "rgba(34,66,103,0.4)", borderRadius: 10, border: "1px solid rgba(116,190,67,0.1)" }}>
              <div style={{ color: "#74be43", fontWeight: 700, marginBottom: 8 }}>⏰ Working Hours</div>
              <p style={{ color: "#cbd5e1", fontSize: "0.9rem", lineHeight: 1.7 }}>Monday – Sunday: 7am – 7pm</p>
              <div style={{ color: "#74be43", fontWeight: 700, margin: "12px 0 8px" }}>📍 Areas We Cover</div>
              <p style={{ color: "#cbd5e1", fontSize: "0.9rem", lineHeight: 1.7 }}>Peterborough, Stamford, Bourne and all surrounding areas.</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.5rem", marginBottom: 32 }}>Send Us a Message</h2>
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Your Name *", type: "text", placeholder: "John Smith" },
                { label: "Phone Number *", type: "tel", placeholder: "07700 900000" },
                { label: "Email Address", type: "email", placeholder: "john@example.com" },
              ].map(f => (
                <div key={f.label}>
                  <label style={{ display: "block", color: "#94a3b8", fontSize: "0.85rem", marginBottom: 8 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{ width: "100%", padding: "14px 16px", background: "rgba(34,66,103,0.5)", border: "1px solid rgba(129,194,226,0.2)", borderRadius: 8, color: "#fff", fontSize: "1rem", outline: "none" }} />
                </div>
              ))}
              <div>
                <label style={{ display: "block", color: "#94a3b8", fontSize: "0.85rem", marginBottom: 8 }}>Type of Work *</label>
                <select style={{ width: "100%", padding: "14px 16px", background: "rgba(34,66,103,0.5)", border: "1px solid rgba(129,194,226,0.2)", borderRadius: 8, color: "#fff", fontSize: "1rem", outline: "none" }}>
                  <option value="">Select a service...</option>
                  <option>New Build</option>
                  <option>Extension</option>
                  <option>Roofing</option>
                  <option>Garage Conversion</option>
                  <option>Renovation / Refurbishment</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", color: "#94a3b8", fontSize: "0.85rem", marginBottom: 8 }}>Tell us about your project</label>
                <textarea placeholder="Describe your project, location, and any key details..." style={{ width: "100%", padding: "14px 16px", background: "rgba(34,66,103,0.5)", border: "1px solid rgba(129,194,226,0.2)", borderRadius: 8, color: "#fff", fontSize: "1rem", outline: "none", minHeight: 120, resize: "vertical", fontFamily: "inherit" }} />
              </div>
              <button type="submit" style={{ background: "#74be43", color: "#152a42", padding: "16px", borderRadius: 8, fontWeight: 800, fontSize: "1rem", border: "none", cursor: "pointer" }}>
                Send Enquiry →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
