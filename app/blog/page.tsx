import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Blog | RPV Construction Peterborough",
  description: "Expert construction advice for homeowners in Peterborough. Tips on extensions, roofing, new builds and managing your building project.",
};

const posts = [
  { slug: "how-to-plan-a-home-extension-peterborough", title: "How to Plan a Home Extension in Peterborough: A Complete Guide", excerpt: "Thinking about extending your home? From planning permission to choosing the right builder, here's everything Peterborough homeowners need to know before starting an extension project.", date: "May 2026", category: "Extensions", readTime: "6 min read" },
  { slug: "do-i-need-planning-permission-for-roofing-work", title: "Do I Need Planning Permission for Roofing Work in Peterborough?", excerpt: "Roof repairs, replacements and certain types of roof alterations have different planning rules. We break down exactly what requires permission and what falls under permitted development.", date: "April 2026", category: "Roofing", readTime: "5 min read" },
  { slug: "garage-conversion-add-value-home-peterborough", title: "Will a Garage Conversion Add Value to My Home in Peterborough?", excerpt: "Garage conversions are one of the most cost-effective ways to add space and value to your home. Find out how much value you could add and what the process involves.", date: "March 2026", category: "Garage Conversions", readTime: "4 min read" },
];

export default function Blog() {
  return (
    <>
      <div style={{ padding: "120px 24px 60px", background: "#1a3350", textAlign: "center" }}>
        <span style={{ color: "#74be43", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>Expert Advice</span>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", marginTop: 12 }}>Construction Blog</h1>
        <p style={{ color: "#94a3b8", maxWidth: 540, margin: "16px auto 0", lineHeight: 1.7 }}>Practical guides and advice for homeowners planning building projects across Peterborough.</p>
      </div>

      <section style={{ padding: "80px 24px", background: "#152a42" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>
          {posts.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(34,66,103,0.4)", border: "1px solid rgba(116,190,67,0.15)", borderRadius: 12, padding: "32px 28px", transition: "border-color 0.2s" }}>
                <div style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                  <span style={{ background: "rgba(116,190,67,0.15)", color: "#74be43", padding: "4px 10px", borderRadius: 20, fontSize: "0.75rem", fontWeight: 600 }}>{p.category}</span>
                  <span style={{ color: "#64748b", fontSize: "0.8rem" }}>{p.date} · {p.readTime}</span>
                </div>
                <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", marginBottom: 10, lineHeight: 1.4 }}>{p.title}</h2>
                <p style={{ color: "#94a3b8", lineHeight: 1.7, fontSize: "0.92rem" }}>{p.excerpt}</p>
                <p style={{ color: "#74be43", marginTop: 16, fontSize: "0.88rem", fontWeight: 600 }}>Read more →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
