"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function PricingPage() {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ];

  const plans = [
    {
      name: "Free Plan", price: "$0", period: "/mo", isPopular: false,
      features: ["10 uploads/day", "Basic detection", "Standard scores"],
      cta: "Get Started",
      bgStyle: { background: "#f3f4f5" },
      ctaStyle: { background: "#e1e3e4", color: "#191c1d" },
      nameColor: "#434655",
    },
    {
      name: "Pro Plan", price: "$19", period: "/mo", isPopular: true,
      features: ["Unlimited uploads", "Advanced detection", "Forensic heatmaps", "Detailed explanations", "Priority processing"],
      cta: "Upgrade to Pro",
      bgStyle: { background: "#fff", boxShadow: "0 12px 32px rgba(25,28,29,0.06)", outline: "2px solid #004ac6" },
      ctaStyle: { background: "#004ac6", color: "#fff", boxShadow: "0 4px 14px rgba(0,74,198,0.3)" },
      nameColor: "#004ac6",
    },
    {
      name: "Enterprise Plan", price: "Custom", period: "", isPopular: false,
      features: ["API access", "Bulk analysis", "Team collaboration", "Custom reports", "Dedicated support"],
      cta: "Contact Sales",
      bgStyle: { background: "#f3f4f5" },
      ctaStyle: { background: "#e1e3e4", color: "#191c1d" },
      nameColor: "#434655",
    },
  ];

  const tableRows = [
    { feature: "Upload Limits", free: "10 / day", pro: "Unlimited", enterprise: "Unlimited + Bulk" },
    { feature: "AI Accuracy", free: "Standard", pro: "Advanced (99.8%)", enterprise: "Custom Trained" },
    { feature: "Highlight Visualization", free: null, pro: true, enterprise: true },
    { feature: "Report Export", free: "PDF (Watermarked)", pro: "White-label PDF", enterprise: "Full Data Export" },
    { feature: "API Access", free: null, pro: null, enterprise: true },
  ];

  const faqs = [
    {
      q: "How accurate is the detection?",
      a: "TruthLens AI uses state-of-the-art forensic models that are updated weekly. On our Pro plan, we offer 99.8% accuracy on known GAN and Diffusion models.",
    },
    {
      q: "Is my data stored on your servers?",
      a: "No. We maintain a strict privacy-first policy. Once an analysis is complete and you close the session, the uploaded media is purged from our processing buffers immediately.",
    },
    {
      q: "Can I upgrade or downgrade anytime?",
      a: "Yes. You can manage your subscription from your dashboard. Plan changes take effect at the start of the next billing cycle.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-family: 'Material Symbols Outlined';
          vertical-align: middle;
        }
        body { font-family: 'Inter', sans-serif; }
        .plan-card { transition: background 0.2s; }
      `}</style>

      <div style={{ background: "#f8f9fa", color: "#191c1d", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
        {/* Nav */}
        <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, background: "rgba(248,249,250,0.9)", backdropFilter: "blur(20px)", transition: "background 0.2s" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", maxWidth: 1280, margin: "0 auto" }}>
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
            <button
            onClick={() => router.push("/auth?tab=signup")}
            style={{ padding: "8px 24px", background: "#004ac6", color: "#fff", borderRadius: 12, fontWeight: 600, border: "none", cursor: "pointer" }}
           >
             Get Started
            </button>
          </div>
        </nav>

        <main style={{ paddingTop: 128, paddingBottom: 96 }}>
          {/* Hero */}
          <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 80px", textAlign: "center" }}>
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 3.75rem)", fontWeight: 900, letterSpacing: "-0.04em", margin: "0 0 24px", color: "#191c1d" }}>
              Simple, Transparent Pricing
            </h1>
            <p style={{ fontSize: 20, color: "#434655", maxWidth: 560, margin: "0 auto 16px", lineHeight: 1.7 }}>
              Choose a plan that fits your verification needs. From independent researchers to global newsrooms, we scale with your forensic demands.
            </p>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#004ac6", textTransform: "uppercase", letterSpacing: "0.12em", background: "#dbe1ff", display: "inline-block", padding: "4px 16px", borderRadius: 9999 }}>
              Start free, upgrade anytime
            </span>
          </section>

          {/* Pricing Cards */}
          <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 128px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
              {plans.map((plan) => (
                <div key={plan.name} className="plan-card" style={{ ...plan.bgStyle, padding: 32, borderRadius: 16, display: "flex", flexDirection: "column", position: "relative" }}>
                  {plan.isPopular && (
                    <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", background: "#004ac6", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 16px", borderRadius: 9999, whiteSpace: "nowrap" }}>
                      Most Popular
                    </div>
                  )}
                  <div style={{ marginBottom: 32 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: plan.nameColor, marginBottom: 8 }}>{plan.name}</h3>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                      <span style={{ fontSize: 36, fontWeight: 900, color: "#191c1d" }}>{plan.price}</span>
                      {plan.period && <span style={{ color: "#434655" }}>{plan.period}</span>}
                    </div>
                  </div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40, flexGrow: 1, listStyle: "none", padding: 0, margin: "0 0 40px" }}>
                    {plan.features.map((f, i) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <span className="material-symbols-outlined" style={{ color: "#006c49", fontSize: 20, flexShrink: 0 }}>check_circle</span>
                        <span style={{ color: plan.isPopular && i === 0 ? "#191c1d" : "#434655", fontWeight: plan.isPopular && i === 0 ? 700 : 400 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button style={{ ...plan.ctaStyle, width: "100%", padding: "12px 24px", borderRadius: 12, fontWeight: 700, border: "none", cursor: "pointer", fontSize: 15, transition: "opacity 0.2s" }}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Comparison */}
          <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px 128px" }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 48, textAlign: "center" }}>Compare Capabilities</h2>
            <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 12px rgba(0,0,0,0.04)", overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#f3f4f5" }}>
                    {["Feature", "Free", "Pro", "Enterprise"].map((h, i) => (
                      <th key={h} style={{ padding: 24, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: i === 2 ? "#004ac6" : "#434655", textAlign: i === 0 ? "left" : "center" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, ri) => (
                    <tr key={row.feature} style={{ borderTop: "1px solid #edeeef" }}>
                      <td style={{ padding: 24, fontWeight: 500, color: "#191c1d" }}>{row.feature}</td>
                      {[row.free, row.pro, row.enterprise].map((cell, ci) => (
                        <td key={ci} style={{ padding: 24, textAlign: "center" }}>
                          {cell === true ? (
                            <span className="material-symbols-outlined" style={{ color: "#006c49" }}>check_circle</span>
                          ) : cell === null ? (
                            <span className="material-symbols-outlined" style={{ color: "#737686" }}>close</span>
                          ) : (
                            <span style={{ color: ci === 1 ? "#191c1d" : "#434655", fontWeight: ci === 1 ? 700 : 400, fontSize: 14 }}>{cell}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Trust Section */}
          <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px 128px" }}>
            <div style={{ background: "#f3f4f5", borderRadius: 16, padding: 48, display: "flex", flexDirection: "row", alignItems: "center", gap: 48, flexWrap: "wrap" as const }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 24 }}>Built for journalists and fact-checkers</h2>
                <p style={{ color: "#434655", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                  Our forensic tools are engineered for professional environments where accuracy is non-negotiable. We don't just provide a score; we provide the evidence.
                </p>
                <div style={{ display: "flex", gap: 24, flexWrap: "wrap" as const }}>
                  {[
                    { icon: "verified_user", label: "SOC2 Compliant" },
                    { icon: "encrypted", label: "End-to-End Encryption" },
                    { icon: "visibility_off", label: "Privacy-First Policy" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>{item.icon}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#191c1d" }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 200, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { val: "99%", label: "Detection Rate" },
                  { val: "0", label: "Data Storage" },
                ].map((stat) => (
                  <div key={stat.label} style={{ background: "#e1e3e4", padding: 24, borderRadius: 12, textAlign: "center" }}>
                    <p style={{ fontSize: 36, fontWeight: 900, color: "#004ac6", margin: "0 0 8px" }}>{stat.val}</p>
                    <p style={{ fontSize: 11, fontWeight: 700, color: "#434655", textTransform: "uppercase", margin: 0 }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section style={{ maxWidth: 700, margin: "0 auto", padding: "0 32px 128px" }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 48, textAlign: "center" }}>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {faqs.map((faq) => (
                <div key={faq.q} style={{ background: "#f8f9fa", padding: 24, borderRadius: 12, borderBottom: "1px solid #edeeef" }}>
                  <h4 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8, margin: "0 0 8px" }}>{faq.q}</h4>
                  <p style={{ color: "#434655", lineHeight: 1.7, margin: 0, fontSize: 15 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 16, background: "#004ac6", padding: "80px 48px", textAlign: "center", color: "#fff" }}>
              <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: 24, position: "relative", zIndex: 1 }}>
                Start verifying content with confidence
              </h2>
              <p style={{ fontSize: 20, marginBottom: 40, opacity: 0.9, maxWidth: 560, margin: "0 auto 40px", position: "relative", zIndex: 1, lineHeight: 1.6 }}>
                Join thousands of professionals who trust TruthLens AI for forensic-grade media analysis.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" as const, position: "relative", zIndex: 1 }}>
                <button style={{ padding: "16px 32px", background: "#fff", color: "#004ac6", fontWeight: 900, borderRadius: 12, border: "none", cursor: "pointer" }}>Try for Free</button>
                <button style={{ padding: "16px 32px", background: "rgba(37,99,235,0.8)", color: "#fff", fontWeight: 700, borderRadius: 12, border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer" }}>View Live Demo</button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer style={{ background: "#f8f9fa", borderTop: "1px solid rgba(226,232,240,0.5)" }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "48px 32px", maxWidth: 1280, margin: "0 auto", flexWrap: "wrap" as const, gap: 24 }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>TruthLens AI</div>
              <p style={{ fontSize: 14, color: "#64748b", margin: 0 }}>© 2024 TruthLens AI. Forensic Precision in Media.</p>
            </div>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" as const }}>
              {["About", "Contact", "Privacy Policy", "Terms of Service"].map((item) => (
                <a key={item} href="#" style={{ fontSize: 14, color: "#64748b", textDecoration: "none" }}>{item}</a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
