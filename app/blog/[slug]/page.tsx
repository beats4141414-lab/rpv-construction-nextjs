import type { Metadata } from "next";
import Link from "next/link";

const posts: Record<string, { title: string; date: string; category: string; content: string }> = {
  "how-to-plan-a-home-extension-peterborough": {
    title: "How to Plan a Home Extension in Peterborough: A Complete Guide",
    date: "May 2026", category: "Extensions",
    content: `Planning a home extension in Peterborough can feel overwhelming — but with the right team and the right preparation, it can be one of the most rewarding investments you make in your home.

## Do You Need Planning Permission?

Most single-storey rear extensions fall under Permitted Development, meaning you don't need full planning permission. However, larger extensions, those in conservation areas, or properties that have already used their permitted development rights may require a planning application.

At RPV Construction, we advise all clients on permitted development rules before any work begins. We work closely with architects and planning consultants to make sure your project is fully compliant.

## Choosing the Right Builder

In Peterborough, there is no shortage of builders — but finding one who will actually turn up, communicate clearly, and finish the job on time is a different challenge entirely.

Here's what to look for:
- Are they fully insured?
- Do they work with Building Control?
- Will they stay on site until the project is complete?
- Do they have real reviews from local customers?

## The Build Process

A typical extension project follows this process:
1. Initial consultation and free quote
2. Architectural drawings and Building Control submission
3. Structural engineer sign-off
4. Groundworks and foundations
5. Build to wall plate level
6. Roof structure and weatherproofing
7. First fix electrics and plumbing
8. Insulation and plastering
9. Second fix, decoration and finishing

At RPV Construction, we manage every stage of this process on your behalf — coordinating all trades, passing inspections, and keeping you informed throughout.

## Get Started Today

Ready to start planning your extension? Contact RPV Construction for a free, no-obligation quote. We cover Peterborough, Stamford, Bourne and all surrounding areas.`,
  },
  "do-i-need-planning-permission-for-roofing-work": {
    title: "Do I Need Planning Permission for Roofing Work in Peterborough?",
    date: "April 2026", category: "Roofing",
    content: `Most roofing work in Peterborough does not require planning permission — but there are important exceptions that homeowners should know about before starting any work.

## What Doesn't Need Planning Permission

The following roofing works generally fall under permitted development and do not require planning permission:

- Like-for-like roof tile or slate replacements
- Flat roof repairs and re-covering (same materials)
- Roof insulation upgrades
- Guttering and fascia replacements
- Minor structural repairs

## What May Require Permission

You may need planning permission for:

- **Roof extensions or dormers** that alter the shape of the roof
- **Changes to the roof profile** that raise the ridge height
- **Properties in conservation areas** — any roof changes may need consent
- **Listed buildings** — all works require listed building consent

## Building Regulations

Even where planning permission is not required, certain roofing works must comply with Building Regulations — particularly structural changes and thermal upgrades. At RPV Construction, we always ensure our roofing work meets current Building Regulations standards and is signed off appropriately.

## Our Roofing Services in Peterborough

RPV Construction provides a full range of roofing services across Peterborough, Stamford and Bourne:

- Pitched roof replacements
- Flat roof replacements (GRP warm roof systems)
- Roof repairs
- Roof insulation upgrades
- Roofline works (fascias, soffits, guttering)

Contact us today for a free roofing survey and quote.`,
  },
  "garage-conversion-add-value-home-peterborough": {
    title: "Will a Garage Conversion Add Value to My Home in Peterborough?",
    date: "March 2026", category: "Garage Conversions",
    content: `A garage conversion is one of the most cost-effective home improvements available to Peterborough homeowners — adding usable living space without the cost and complexity of a full extension.

## How Much Value Does a Garage Conversion Add?

According to property experts, a well-executed garage conversion can add between 10% and 20% to the value of your home. In Peterborough's current market, that can represent a significant return on your investment.

The exact value added depends on:
- How the space is used (bedroom with en-suite adds most value)
- The quality of the finish
- Whether it is integrated with the main house

## Do You Need Planning Permission?

Most integral and attached garage conversions fall under Permitted Development and do not require planning permission. However, you will still need Building Regulations approval to ensure the conversion meets current standards for insulation, ventilation, fire safety and structural integrity.

## What's Involved in a Garage Conversion?

A typical garage conversion with RPV Construction includes:

1. Structural assessment and Building Control application
2. Damp proofing the floor and walls
3. Insulation to walls, floor and ceiling
4. New windows and door (if required)
5. Electrical installation
6. Plastering and finishing
7. Final Building Control sign-off

## Popular Uses for Converted Garages

- Extra bedroom (adds most value)
- Home office
- Playroom or family room
- Gym or utility room

## Get a Free Quote in Peterborough

Interested in converting your garage? RPV Construction offers free, no-obligation surveys and quotes across Peterborough, Stamford and Bourne. Contact us today to get started.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  return {
    title: post ? `${post.title} | RPV Construction` : "Blog | RPV Construction",
    description: post ? post.title : "RPV Construction Blog",
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div style={{ padding: "120px 24px", textAlign: "center", background: "#152a42", minHeight: "60vh" }}>
        <h1 style={{ color: "#fff" }}>Post not found</h1>
        <Link href="/blog" style={{ color: "#74be43" }}>← Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <div style={{ padding: "120px 24px 60px", background: "#1a3350", textAlign: "center" }}>
        <span style={{ background: "rgba(116,190,67,0.15)", color: "#74be43", padding: "4px 12px", borderRadius: 20, fontSize: "0.8rem", fontWeight: 600 }}>{post.category}</span>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", marginTop: 16, maxWidth: 800, margin: "16px auto 0", lineHeight: 1.3 }}>{post.title}</h1>
        <p style={{ color: "#64748b", marginTop: 16 }}>{post.date} · RPV Construction</p>
      </div>

      <section style={{ padding: "60px 24px", background: "#152a42" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ color: "#cbd5e1", lineHeight: 1.9, fontSize: "1rem" }}>
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("## ")) {
                return <h2 key={i} style={{ color: "#fff", fontWeight: 800, fontSize: "1.4rem", margin: "36px 0 16px" }}>{para.replace("## ", "")}</h2>;
              }
              if (para.startsWith("- ")) {
                return (
                  <ul key={i} style={{ paddingLeft: 24, marginBottom: 16 }}>
                    {para.split("\n").map((item, j) => (
                      <li key={j} style={{ color: "#cbd5e1", marginBottom: 8 }}>{item.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              if (/^\d\./.test(para)) {
                return (
                  <ol key={i} style={{ paddingLeft: 24, marginBottom: 16 }}>
                    {para.split("\n").map((item, j) => (
                      <li key={j} style={{ color: "#cbd5e1", marginBottom: 8 }}>{item.replace(/^\d\. /, "")}</li>
                    ))}
                  </ol>
                );
              }
              return <p key={i} style={{ marginBottom: 20 }}>{para}</p>;
            })}
          </div>

          <div style={{ marginTop: 60, padding: "32px", background: "linear-gradient(135deg, rgba(12,106,56,0.3), rgba(21,96,146,0.3))", borderRadius: 12, border: "1px solid rgba(116,190,67,0.2)", textAlign: "center" }}>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.3rem", marginBottom: 12 }}>Ready to get started?</h3>
            <p style={{ color: "#94a3b8", marginBottom: 24 }}>Contact RPV Construction for a free, no-obligation quote in Peterborough and surrounding areas.</p>
            <Link href="/contact" style={{ background: "#74be43", color: "#152a42", padding: "14px 32px", borderRadius: 8, fontWeight: 800, textDecoration: "none" }}>Get a Free Quote</Link>
          </div>

          <div style={{ marginTop: 40 }}>
            <Link href="/blog" style={{ color: "#74be43", textDecoration: "none", fontWeight: 600 }}>← Back to Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
