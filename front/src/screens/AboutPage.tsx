"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AboutPage() {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Detect" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
  ];

  const team = [
    { name: "Dr. Elias Vance", role: "Chief Scientist", bio: "Former DARPA lead researcher in generative adversarial networks.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6w1w9tMwNE5jwMiuzUPilU5F3GriIUx2ra9whYKnuGbVOmfSHF0A-vRyKNyYsOICVutvSbPSM9lD7bhXWntLjFW6H37WMZFC-LZsZHFCN7VpgwDTEsZFEo7AIqwOhad5Ze9mFPNHyZY6KujKxqo5kknSmNcl1LyIrx1iYsh3kUYsiuK8F4DDO2DhhpijiFnYd7ib9xtTqMZ3WrWcMX596ykHSfPrubzs8g7cuuBMDl530ltCujsIJN9qIzS7kY5Ehv7rdjZOijvNW" },
    { name: "Sarah Chen", role: "Head of Integrity", bio: "Expert in digital provenance and secure metadata standards.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK7tdEzHKkFHbbDFfYu2DPVZr4UeC0A6s3yZcBQyeHnSUihaHZFNbUTAIm5fB8HnHdCzuQbkKodPyE6coTEALyfNAnVRMpH4nyicUTUSU9fgcf_R4Zgk04qrd8qD0e42RSePD_FbzBU64YLyp7WPB5M7zhiGlDVAxHxzPok2oU4umDLlijtk-FPHYanvhKUJpGNp91UaYA8MqQl_5eRWzVo13vZ0bd1wBPlYKTCZ41SuyCIEj0I01xPQYb4hcQhI2WBb9VKNQpgxTY" },
    { name: "Marcus Thorne", role: "CTO", bio: "Distributed systems architect with focus on blockchain verification.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe9oG2ygif2XxBuPpCR6KnmRw43hdw517tbmAGh5wFlT8migiO2lwCFPbHGk0pH_LAcDU4hLZDI6HRiW3C1I9v_aO0ezDDlYvvJTuJPcSrgOrVa7JAcnS4jNbsHu7oN03gTwVlCO4FLHm11kmdVh52hGEfBvPGMh3sGKKYRtAc5Zuvegi2_QUqwUxJXyM8M4LQYFu4fQImT0gVM2b-9ZqmtsUNBj477MD9aHuK5pV2DdFktZfH60JMshYG8fooE2y5t4fdORkch_SG" },
    { name: "Lena Müller", role: "Lead Analyst", bio: "Specialist in OSINT and cross-platform disinformation campaigns.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmUefAITLgSB0HzzcIqs4uA8dPl5a8XswP5-ru70kF32a1Sb00CsvjZSLW7B-I5x7G4LbSZk0WdEVruOmIVpJXzjf-yEs7gXWdUbKO4hV5Vq67EMOFc4D3MhCikjGFCs7dVvi1WsPrJGvltQq7I1DcntbXmbSuOspyOVv1YU4zZ-RckJ0Yb1oGXGwNsUxVRuEmoQokJA942I9KXr2BRPsh28umQtVpK9inaxt4nYSvP-RJv_84sv8A3-8MN3ycD6gKIQiRGAgoSbjo" },
  ];

  const values = [
    { icon: "biotech", color: "#004ac6", borderColor: "#004ac6", title: "Forensic Rigor", desc: "We don't provide \"guesses.\" Our AI engines are trained on proprietary forensic datasets to identify patterns invisible to the human eye." },
    { icon: "balance", color: "#006c49", borderColor: "#006c49", title: "Radical Objectivity", desc: "Our systems are built to be neutral. We analyze media evidence without political, corporate, or ideological bias." },
    { icon: "verified_user", color: "#ab0b1c", borderColor: "#ab0b1c", title: "Commitment to Truth", desc: "Truth is not subjective. We believe in a future where digital evidence can once again be trusted implicitly." },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-family: 'Material Symbols Outlined';
        }
        body { font-family: 'Inter', sans-serif; }
        .team-card:hover img { filter: grayscale(0); }
        .team-card img { filter: grayscale(1) contrast(1.25); transition: filter 0.5s; }
      `}</style>

      <div style={{ background: "#f8f9fa", color: "#191c1d", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
        {/* Nav */}
        <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, background: "rgba(248,249,250,0.85)", backdropFilter: "blur(20px)", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", maxWidth: 1280, margin: "0 auto" }}>
            <Link href="/" style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.05em", color: "#0f172a", textDecoration: "none" }}>
              TruthLens AI
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{
                  fontSize: 14, fontWeight: 500, letterSpacing: "-0.02em", textDecoration: "none",
                  color: pathname === link.href ? "#1d4ed8" : "#475569",
                  borderBottom: pathname === link.href ? "2px solid #1d4ed8" : "none",
                  paddingBottom: pathname === link.href ? 4 : 0,
                }}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button
              onClick={() => router.push("/auth?tab=signin")}
              style={{ padding: "8px 20px", fontSize: 14, fontWeight: 600, borderRadius: 12, color: "#475569", background: "transparent", border: "none", cursor: "pointer" }}
            >
              Sign In
            </button>
              <button
              onClick={() => router.push("/auth?tab=signup")}
              style={{ padding: "8px 20px", fontSize: 14, fontWeight: 600, borderRadius: 12, background: "#004ac6", color: "#fff", border: "none", cursor: "pointer", boxShadow: "0 4px 14px rgba(0,74,198,0.25)" }}
            >
              Get Started
            </button>

            </div>
          </div>
        </nav>

        <main style={{ paddingTop: 128, paddingBottom: 96, overflow: "hidden" }}>
          {/* Hero */}
          <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", marginBottom: 128 }}>
            <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 48, alignItems: "start", flexWrap: "wrap" as const }}>
              <div>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#004ac6", textTransform: "uppercase", marginBottom: 24, display: "block" }}>Our Mission</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#191c1d", lineHeight: 1.1, margin: "0 0 32px" }}>
                  Restoring digital trust in an era of synthetic media.
                </h1>
                <p style={{ fontSize: 20, color: "#434655", lineHeight: 1.7, maxWidth: 560, margin: 0 }}>
                  We are building the definitive forensic layer for the internet. TruthLens AI provides the tools necessary to distinguish human creation from algorithmic generation with indisputable precision.
                </p>
              </div>
              <div style={{ position: "relative" }}>
                <div style={{ aspectRatio: "4/5", borderRadius: 16, overflow: "hidden", boxShadow: "0 12px 32px rgba(25,28,29,0.06)", background: "#f3f4f5" }}>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUpiuy7oVzPIf9gVHtoeIcC9GMlnS39M9-q-ahz5Yu0edxwNE3Nyv8gmBuo4abR458mJmqN_24--_TncT895qCrOBnpNRAZfl7QMAscj_vtDTVQvLbJhvJCD7m_S6qHJefs9XJ6ETWfgQB6mVz-Bd8ePf04d6ZoLGekAOnQZ8-EXh7tqenu713Esr8MtHorJ0vU7KMPJ6mfS7J8zu29O6QJ1i_TfsrI9BdPpq-8JEWqyCR-BGRl1Dxko9JltSefyv-8vEa5PZ0wDJB"
                    alt="Digital forensic data visualization"
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.25)", transition: "filter 0.7s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0)")}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(1) contrast(1.25)")}
                  />
                </div>
                <div style={{ position: "absolute", bottom: -24, left: -24, background: "#fff", padding: 32, boxShadow: "0 12px 32px rgba(25,28,29,0.06)", borderRadius: 12, maxWidth: 260 }}>
                  <div style={{ fontSize: 36, fontWeight: 700, color: "#004ac6", marginBottom: 8 }}>99.9%</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#434655", lineHeight: 1.4 }}>Detection accuracy across GAN, Diffusion, and Transformer models.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Threat Section */}
          <section style={{ background: "#f3f4f5", padding: "128px 0" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center", flexWrap: "wrap" as const }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", borderRadius: 9999, background: "rgba(207,44,48,0.08)", color: "#ab0b1c", fontSize: 12, fontWeight: 700, marginBottom: 24 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>warning</span>
                    THE THREAT
                  </div>
                  <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 32, margin: "0 0 32px" }}>The Erosion of Objective Reality</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 24, color: "#434655", lineHeight: 1.7, fontSize: 18 }}>
                    <p style={{ margin: 0 }}>We have entered a post-truth era where synthetic media is weaponized to manipulate public opinion, undermine journalism, and destabilize institutions.</p>
                    <p style={{ margin: 0 }}>Deepfakes are no longer just a technical curiosity; they are a systemic risk to global security and personal identity. Without a reliable verification standard, the cost of information is the loss of truth itself.</p>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 48 }}>
                    <div style={{ height: 256, background: "#e1e3e4", borderRadius: 16, overflow: "hidden" }}>
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD98z16RsIYI0wa9BkTCfovydkCAwUoKHoeqnjGG_DfGP6npiZUYETOoBd3jxibdQaLwz1axgGMvrzKcvyJ8105gjVur5kKC8brTegkpzvdWpV62eSwWtnYxoYm9aqMN6Ug6YT9yyvHUForVJjhGcCxnZpC4jQh2ngW9yCpKHCoAcYRUlmv8Vs58XSqHCHlB-yF5HSxW_O-opdztPdgo2QRSLqHyqr66wkVbshWp0lmGWYFJCxuWs_mwkLHtUkFbBblq7jexCovt29i" alt="Newspaper press" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: 24, background: "#fff", borderRadius: 16, boxShadow: "0 12px 32px rgba(25,28,29,0.06)" }}>
                      <span className="material-symbols-outlined" style={{ color: "#ab0b1c", display: "block", marginBottom: 12 }}>broken_image</span>
                      <h4 style={{ fontWeight: 700, marginBottom: 4, margin: "0 0 4px" }}>Visual Manipulation</h4>
                      <p style={{ fontSize: 12, color: "#434655", margin: 0 }}>Detecting frame-level inconsistencies in video.</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ padding: 24, background: "#fff", borderRadius: 16, boxShadow: "0 12px 32px rgba(25,28,29,0.06)" }}>
                      <span className="material-symbols-outlined" style={{ color: "#004ac6", display: "block", marginBottom: 12 }}>record_voice_over</span>
                      <h4 style={{ fontWeight: 700, marginBottom: 4, margin: "0 0 4px" }}>Voice Synthesis</h4>
                      <p style={{ fontSize: 12, color: "#434655", margin: 0 }}>Analyzing frequency anomalies in cloned audio.</p>
                    </div>
                    <div style={{ height: 256, background: "#e1e3e4", borderRadius: 16, overflow: "hidden" }}>
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK-ktwLtVPro_TdzRaLFrI1YNXmdARD0g193-JNuzRahzbSnPZIZ8pO0PxU6XhltaakgINpD3bzD22aox2j2y77kzo8Sv_CX2j-bLg7ygaBw420zpYT449UPHJRZlsHT5mXWQjKUOx_1n3RdqA8qA_v6_mQpQfSno38XOhWmevwwTku_gzUkbYoiZXh9okNAFcTMudQSLvSQ3YQgMz8DIUPrdYpcnvd7ZHICAWqv7B35F4X6W4jrr9OJ_He6FZVEUw4WSFYbByLTPt" alt="Circuit board" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section style={{ padding: "128px 0", maxWidth: 1280, margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}>
            <div style={{ textAlign: "center", marginBottom: 80 }}>
              <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 16 }}>The Forensic Standard</h2>
              <p style={{ color: "#434655" }}>Our core principles guide every line of code we write.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
              {values.map((v) => (
                <div key={v.title} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: 32, borderRadius: 20, background: "#fff", boxShadow: "0 12px 32px rgba(25,28,29,0.06)", borderLeft: `4px solid ${v.borderColor}` }}>
                  <span className="material-symbols-outlined" style={{ color: v.color, fontSize: 32, marginBottom: 24 }}>{v.icon}</span>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, margin: "0 0 16px" }}>{v.title}</h3>
                  <p style={{ color: "#434655", lineHeight: 1.6, fontSize: 14, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section style={{ padding: "96px 0", background: "#f8f9fa" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, gap: 24, flexWrap: "wrap" as const }}>
                <div style={{ maxWidth: 480 }}>
                  <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 16 }}>Engineered by Experts</h2>
                  <p style={{ color: "#434655" }}>A multidisciplinary team of cryptographers, AI researchers, and former intelligence analysts.</p>
                </div>
                <button style={{ padding: "12px 24px", borderRadius: 12, background: "#e7e8e9", fontWeight: 600, color: "#191c1d", border: "none", cursor: "pointer" }}>View Open Positions</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
                {team.map((member) => (
                  <div key={member.name} className="team-card" style={{ cursor: "pointer" }}>
                    <div style={{ aspectRatio: "1/1", borderRadius: 16, background: "#e7e8e9", overflow: "hidden", marginBottom: 16 }}>
                      <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <h4 style={{ fontWeight: 700, fontSize: 18, margin: "0 0 4px" }}>{member.name}</h4>
                    <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#004ac6", margin: "0 0 8px" }}>{member.role}</p>
                    <p style={{ fontSize: 14, color: "#434655", lineHeight: 1.5, margin: 0 }}>{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 24px" }}>
            <div style={{ background: "rgba(219,225,255,0.15)", borderRadius: 32, padding: "96px 48px", textAlign: "center" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: 32 }}>Join the defense of reality.</h2>
              <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" as const }}>
                <button style={{ background: "#004ac6", color: "#fff", padding: "16px 32px", borderRadius: 12, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 8px 20px rgba(0,74,198,0.25)" }}>Start Scanning Media</button>
                <button style={{ background: "#fff", color: "#004ac6", padding: "16px 32px", borderRadius: 12, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>Read Whitepaper</button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer style={{ background: "#f1f5f9", padding: "48px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32, maxWidth: 1280, margin: "0 auto" }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>TruthLens AI</div>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>Pioneering forensic AI to secure the future of digital media.</p>
            </div>
            {[
              { title: "Platform", items: ["Detect", "API Access", "Enterprise"] },
              { title: "Resources", items: ["Security Whitepaper", "API Documentation", "Research Blog"] },
              { title: "Legal", items: ["Privacy Policy", "Terms of Service"] },
            ].map((col) => (
              <div key={col.title}>
                <h5 style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>{col.title}</h5>
                {col.items.map((item) => (
                  <a key={item} href="#" style={{ display: "block", fontSize: 14, color: "#64748b", textDecoration: "none", marginBottom: 8 }}>{item}</a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ maxWidth: 1280, margin: "48px auto 0", paddingTop: 32, borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
            <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>© 2024 TruthLens AI Forensic Systems. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
