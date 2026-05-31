import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Reviews | RPV Construction Peterborough",
  description: "Read real reviews from RPV Construction customers in Peterborough. 5-star rated builders specialising in extensions, roofing and new builds.",
};

const testimonials = [
  { name: "Nathan Kirby", stars: 5, text: "I recently had RPV Construction complete a single-storey extension on my home, and I am extremely pleased with the outcome. The quality of the workmanship is excellent, and the project was carried out with great professionalism from start to finish. Ronaldo was always responsive and happy to answer any questions I had, while the father worked tirelessly on the labour side to ensure everything was done to a high standard. A hardworking and trustworthy family team — highly recommended!", job: "Single-storey extension" },
  { name: "Dean Papworth", stars: 5, text: "Having endured disappointment with so many builders, it was truly refreshing to meet a team who actually deliver what they promise. Having used RPV construction to remove a garage and re-lay a driveway, I was so impressed by the incredibly high standard of finish, very prompt completion and great value for money. The standard of work was absolutely outstanding, the price was great and once again, the time for completion was very impressive. The guys literally worked 6 days a week, 10 hours a day to finish within the agreed timescale, at no extra expense to me. I could not recommend these guys more.", job: "Garage removal & driveway" },
  { name: "Victoria", stars: 5, text: "Ronaldo and his team helped my vision come to life. He undertook work including but not limited to; removing two chimney breasts, chimney stack, and made the remaining walls structurally sound. He was incredibly polite and honest at all stages of the work, always trying to come up with the best solution, and providing options for different budgets. He was always happy to answer any questions I had either while on site or by phone. No hesitation in recommending Ronaldo and his hardworking team!", job: "Structural works" },
];

export default function Testimonials() {
  return (
    <>
      <div style={{ padding: "120px 24px 60px", background: "#1a3350", textAlign: "center" }}>
        <span style={{ color: "#74be43", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>What Clients Say</span>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", marginTop: 12 }}>Customer Reviews</h1>
        <p style={{ color: "#94a3b8", maxWidth: 540, margin: "16px auto 0", lineHeight: 1.7 }}>Real reviews from real homeowners across Peterborough and the surrounding areas.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 32, flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}><div style={{ fontSize: "2rem", fontWeight: 900, color: "#74be43" }}>5★</div><div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Average Rating</div></div>
          <div style={{ textAlign: "center" }}><div style={{ fontSize: "2rem", fontWeight: 900, color: "#74be43" }}>100%</div><div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>5-Star Reviews</div></div>
        </div>
      </div>

      <section style={{ padding: "80px 24px", background: "#152a42" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>
          {testimonials.map(t => (
            <div key={t.name} style={{ background: "rgba(34,66,103,0.4)", border: "1px solid rgba(116,190,67,0.15)", borderRadius: 12, padding: "36px 32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
                <div>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem" }}>{t.name}</div>
                  <div style={{ color: "#74be43", fontSize: "0.85rem", marginTop: 4 }}>{t.job}</div>
                </div>
                <div style={{ color: "#f59e0b", fontSize: "1.2rem" }}>{"★".repeat(t.stars)}</div>
              </div>
              <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontStyle: "italic" }}>"{t.text}"</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <p style={{ color: "#94a3b8", marginBottom: 24 }}>Ready to experience the RPV difference?</p>
          <Link href="/contact" style={{ background: "#74be43", color: "#152a42", padding: "16px 36px", borderRadius: 8, fontWeight: 800, textDecoration: "none" }}>Get a Free Quote</Link>
        </div>
      </section>
    </>
  );
}
