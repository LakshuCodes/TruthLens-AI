"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function HowItWorksPage() {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Detect" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
  ];

  const technologies = [
    {
      icon: "neurology", bgColor: "#dbe1ff", iconColor: "#004ac6",
      title: "Neural Network Analysis",
      desc: "Our Adversarial Detection Engines are trained on millions of synthetic and authentic pairs. They identify the \"digital signature\" left by Generative AI models that are invisible to the human eye.",
    },
    {
      icon: "grid_view", bgColor: "#6ffbbe", iconColor: "#006c49",
      title: "Pixel-Level Inconsistency",
      desc: "Every manipulation leaves artifacts. We scan for lighting mismatches, texture blending errors, and compression anomalies at the individual pixel level to find where a \"fake\" meets the \"real.\"",
    },
    {
      icon: "database", bgColor: "#ffdad7", iconColor: "#ab0b1c",
      title: "Metadata Validation",
      desc: "We forensically extract EXIF data and cryptographic headers. By cross-referencing camera profiles and temporal markers, we detect if the file history has been tampered with or stripped.",
    },
  ];

  const steps = [
    {
      num: 1, side: "right",
      title: "Step 1: Upload",
      desc: "Securely drop your media into our Private Sandbox. We utilize military-grade encryption to ensure your data remains confidential and is deleted immediately after the session.",
    },
    {
      num: 2, side: "left",
      title: "Step 2: Analyze",
      desc: "Our platform performs Layered Forensic Scanning. Our engines run simultaneous checks for GAN-artifacts, deepfake lip-sync anomalies, and structural metadata integrity.",
    },
    {
      num: 3, side: "right",
      title: "Step 3: Result",
      desc: "Receive a Comprehensive Report. This isn't a simple yes/no; you get a probability score, a heatmap of manipulated zones, and a detailed forensic breakdown for legal or professional use.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
          font-family: 'Material Symbols Outlined';
        }
        body { font-family: 'Inter', sans-serif; }
        .forensic-grid {
          background-image: radial-gradient(#c3c6d7 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .tech-card:hover .tech-icon { transform: scale(1.1); }
        .tech-icon { transition: transform 0.3s; }
      `}</style>

      <div style={{ background: "#f8f9fa", color: "#191c1d", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
        {/* Nav */}
        <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, background: "rgba(248,249,250,0.85)", backdropFilter: "blur(20px)", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", maxWidth: 1280, margin: "0 auto" }}>
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
              <button onClick={() => router.push("/auth?tab=signin")} style={{ fontSize: 14, fontWeight: 500, color: "#475569", background: "transparent", border: "none", cursor: "pointer" }}>Sign In</button>
              <button onClick={() => router.push("/auth?tab=signup")} style={{ padding: "10px 20px", fontSize: 14, fontWeight: 600, borderRadius: 12, background: "#004ac6", color: "#fff", border: "none", cursor: "pointer", boxShadow: "0 4px 14px rgba(0,74,198,0.25)" }}>Get Started</button>
            </div>
          </nav>
        </header>

        <main style={{ paddingTop: 96 }}>
          {/* Hero */}
          <section style={{ position: "relative", padding: "96px 24px", overflow: "hidden" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", flexWrap: "wrap" as const }}>
              <div style={{ position: "relative", zIndex: 1 }}>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", color: "#004ac6", textTransform: "uppercase", marginBottom: 24, display: "block" }}>The Methodology</span>
                <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#191c1d", lineHeight: 1.1, margin: "0 0 32px" }}>
                  Forensic Precision in an Age of <span style={{ color: "#004ac6" }}>Synthetic Media</span>.
                </h1>
                <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.7, maxWidth: 500, margin: "0 0 40px" }}>
                  TruthLens AI utilizes a multi-layered analytical framework to dissect digital content. From adversarial neural networks to metadata extraction, we reveal the hidden traces of manipulation.
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" as const }}>
                  {[
                    { icon: "verified", text: "99.8% Accuracy Rate" },
                    { icon: "encrypted", text: "AES-256 Encryption" },
                  ].map((badge) => (
                    <div key={badge.text} style={{ display: "flex", alignItems: "center", gap: 8, background: "#edeeef", padding: "8px 16px", borderRadius: 9999 }}>
                      <span className="material-symbols-outlined" style={{ color: "#004ac6", fontSize: 16 }}>{badge.icon}</span>
                      <span style={{ fontSize: 14, fontWeight: 500 }}>{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: -16, background: "rgba(0,74,198,0.05)", borderRadius: 40, filter: "blur(32px)" }} />
                <div style={{ position: "relative", background: "#fff", borderRadius: 32, padding: 32, boxShadow: "0 25px 50px rgba(0,0,0,0.1)", border: "1px solid rgba(195,198,215,0.1)", overflow: "hidden" }}>
                  <div className="forensic-grid" style={{ position: "absolute", inset: 0, opacity: 0.1, borderRadius: 32 }} />
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0GTQWi_7hgoNRlcT2UQ3n1Y4MO55hTIRMm5aEsFMPRwf0KwOjAEYzxOtc4kwqH68XTgDSjP7zu-3_vMBG_qFhIr0JEC0hPfMbsMjNFpeYeQ7vNtPbeTABbhO6XztRsiIS1drM9Q_2tgwHrWBURK6Xg60Dp3aDYXcVJLuPEGjCRf2f_kawLKJPFooxBXQX_GKkfA7LQ3oGUDoa2uhRr6VK0bwzdCgrm7nfieVcU8QKUuzr0YzxTuMQGHCqsOnX37mZ8jqXKRFfZCfD"
                    alt="Forensic analysis interface"
                    style={{ borderRadius: 12, position: "relative", zIndex: 1, width: "100%", height: 320, objectFit: "cover", filter: "grayscale(0.5)", transition: "filter 0.7s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0)")}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(0.5)")}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Technology Section */}
          <section style={{ padding: "96px 0", background: "#f3f4f5" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
              <div style={{ marginBottom: 80 }}>
                <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 1.9rem)", fontWeight: 700, color: "#191c1d", marginBottom: 16 }}>Our Technology</h2>
                <p style={{ color: "#434655", maxWidth: 560 }}>We don't just guess. We analyze three critical pillars of digital authenticity using proprietary forensic models.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
                {technologies.map((tech) => (
                  <div key={tech.title} className="tech-card">
                    <div className="tech-icon" style={{ width: 56, height: 56, borderRadius: 16, background: tech.bgColor, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32 }}>
                      <span className="material-symbols-outlined" style={{ color: tech.iconColor, fontSize: 30 }}>{tech.icon}</span>
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, margin: "0 0 16px" }}>{tech.title}</h3>
                    <p style={{ color: "#434655", lineHeight: 1.7, margin: 0 }}>{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Three Steps */}
          <section style={{ padding: "128px 0", background: "#f8f9fa" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
              <div style={{ textAlign: "center", marginBottom: 96 }}>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 24 }}>Three Simple Steps to Verification</h2>
                <p style={{ color: "#434655", maxWidth: 480, margin: "0 auto" }}>Our streamlined process transforms complex forensic data into actionable intelligence within minutes.</p>
              </div>

              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 128 }}>
                {/* Vertical line */}
                <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "rgba(195,198,215,0.3)", transform: "translateX(-50%)" }} />

                {steps.map((step, i) => (
                  <div key={step.num} style={{ position: "relative", display: "flex", flexDirection: "row", alignItems: "center", gap: 48 }}>
                    {step.side === "right" ? (
                      <>
                        <div style={{ flex: 1, textAlign: "right" }}>
                          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, margin: "0 0 16px" }}>{step.title}</h3>
                          <p style={{ color: "#434655", maxWidth: 400, marginLeft: "auto", margin: 0 }}
                            dangerouslySetInnerHTML={{ __html: step.desc.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                          />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1, position: "relative" }}>
                          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#004ac6", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 20, outline: "8px solid #f8f9fa" }}>
                            {step.num}
                          </div>
                        </div>
                        <div style={{ flex: 1 }} />
                      </>
                    ) : (
                      <>
                        <div style={{ flex: 1 }} />
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1, position: "relative" }}>
                          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#004ac6", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 20, outline: "8px solid #f8f9fa" }}>
                            {step.num}
                          </div>
                        </div>
                        <div style={{ flex: 1 }}>
                          <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, margin: "0 0 16px" }}>{step.title}</h3>
                          <p style={{ color: "#434655", maxWidth: 400, margin: 0 }}
                            dangerouslySetInnerHTML={{ __html: step.desc.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ padding: "96px 24px" }}>
            <div style={{ maxWidth: 900, margin: "0 auto", background: "#004ac6", borderRadius: 36, padding: "48px 48px", textAlign: "center", color: "#fff", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 256, height: 256, background: "rgba(255,255,255,0.1)", borderRadius: "50%", filter: "blur(48px)", transform: "translate(50%, -50%)" }} />
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, marginBottom: 24, position: "relative", zIndex: 1 }}>Ready to expose the truth?</h2>
              <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 40, fontSize: 18, maxWidth: 480, margin: "0 auto 40px", position: "relative", zIndex: 1 }}>
                Join thousands of investigative journalists and security professionals today.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" as const, position: "relative", zIndex: 1 }}>
                <button style={{ background: "#fff", color: "#004ac6", padding: "16px 32px", borderRadius: 12, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>Start Free Analysis</button>
                <button style={{ background: "rgba(37,99,235,0.8)", color: "#fff", padding: "16px 32px", borderRadius: 12, fontWeight: 700, border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer" }}>Request Enterprise Demo</button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer style={{ background: "#f1f5f9", padding: "48px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32, maxWidth: 1280, margin: "0 auto" }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>TruthLens AI</div>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>Advanced forensic systems for digital asset verification and synthetic media detection.</p>
            </div>
            {[
              { title: "Product", items: ["Detection Engine", "API Documentation", "Pricing Plans"] },
              { title: "Resources", items: ["Security Whitepaper", "Ethics in AI", "Case Studies"] },
              { title: "Legal", items: ["Privacy Policy", "Terms of Service"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>{col.title}</h4>
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
