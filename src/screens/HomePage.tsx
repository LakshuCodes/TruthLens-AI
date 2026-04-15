"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export default function HomePage() {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Detect" },
    { href: "/how-it-works", label: "How it Works" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
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
        @keyframes spin { to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4,0,0.6,1) infinite; }
      `}</style>

      <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
        {/* Nav */}
        <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, background: "rgba(248,249,250,0.85)", backdropFilter: "blur(20px)", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", maxWidth: 1280, margin: "0 auto" }}>
            <Link href="/" style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.05em", color: "#0f172a", textDecoration: "none" }}>
              TruthLens AI
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: 14, fontWeight: 500, letterSpacing: "-0.02em", textDecoration: "none",
                    color: pathname === link.href ? "#1d4ed8" : "#475569",
                    borderBottom: pathname === link.href ? "2px solid #1d4ed8" : "none",
                    paddingBottom: pathname === link.href ? 4 : 0,
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button onClick={() => router.push("/auth?tab=signin")} style={{ padding: "8px 20px", fontSize: 14, fontWeight: 600, borderRadius: 12, color: "#475569", background: "transparent", border: "none", cursor: "pointer" }}>
                Sign In
              </button>
              <button onClick={() => router.push("/auth?tab=signup")} style={{ padding: "8px 20px", fontSize: 14, fontWeight: 600, borderRadius: 12, background: "#004ac6", color: "#fff", border: "none", cursor: "pointer", boxShadow: "0 4px 14px rgba(0,74,198,0.25)" }}>
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Main */}
        <main style={{ paddingTop: 96, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, maxWidth: 1280, margin: "0 auto" }}>

          {/* Hero */}
          <section style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 64, paddingTop: 48, paddingBottom: 48, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 300, display: "flex", flexDirection: "column", gap: 32 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", borderRadius: 9999, background: "#dbe1ff", color: "#003ea8", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>shield</span>
                Verification 2.0
              </div>
              <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "#191c1d", lineHeight: 1.1, margin: 0 }}>
                Detect <span style={{ color: "#004ac6", fontStyle: "italic" }}>Manipulated</span> Images & Videos with AI
              </h1>
              <p style={{ fontSize: 18, color: "#434655", lineHeight: 1.7, maxWidth: 560, margin: 0 }}>
                TruthLens uses state-of-the-art forensic neural networks to identify synthetic media, deepfakes, and pixel-level inconsistencies with legal-grade precision.
              </p>

              {/* Upload Area */}
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: -4, background: "linear-gradient(135deg, #004ac6, #006c49)", borderRadius: 16, filter: "blur(8px)", opacity: 0.1 }} />
                <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px dashed #c3c6d7", background: "#fff", borderRadius: 16, padding: 48, cursor: "pointer", transition: "border-color 0.2s" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#edeeef", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <span className="material-symbols-outlined" style={{ color: "#004ac6", fontSize: 32 }}>upload_file</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 8px" }}>Drop media for analysis</h3>
                  <p style={{ color: "#434655", fontSize: 14, margin: 0 }}>PNG, JPG, MP4 or WEBM up to 100MB</p>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 280, maxWidth: 420 }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.25)" }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMTsoq4asVaj_YErda_H-hPqrr7wbgO0FxXQ3nB3x067TlT_qd21Y1RpIdTnAmAOXdRaQ1zJdK2dbs2o5qINa-cQke6QbrTxfJ59fpPBo5Y4zipMSm9HU-9Ma8w2f4R3c-Wg0SNzCMJ-z3qpUeuG7Wpk9XhiflimmyWaonc3dV7TZWYFniRX0SskdzlUqEXWr_rU4E9Og0KAJS_8fDDw5rHrP4ettw-hYXEsY1ifjvvif7uoujPJ_L-ZB9wN2eCDv84uzpLw5d-PGZ"
                  alt="High-tech digital forensic interface"
                  style={{ width: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
                <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, padding: 16, backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.1)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#6ffbbe", animation: "pulse 2s infinite" }} />
                    <span style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Live Forensics Engine Active</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Analysis State */}
          <section style={{ maxWidth: 700, margin: "0 auto 48px", padding: "48px 32px", background: "#f3f4f5", borderRadius: 16, border: "1px solid rgba(195,198,215,0.15)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, textAlign: "center" }}>
              <div style={{ position: "relative", width: 80, height: 80 }}>
                <div style={{ position: "absolute", inset: 0, border: "4px solid rgba(0,74,198,0.2)", borderRadius: "50%" }} />
                <div style={{ position: "absolute", inset: 0, border: "4px solid #004ac6", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
              </div>
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 8px" }}>Analyzing with AI...</h2>
                <p style={{ color: "#434655", margin: 0 }}>Scanning for compression artifacts and GAN-signatures</p>
              </div>
              <div style={{ width: "100%", maxWidth: 400, background: "#e1e3e4", borderRadius: 9999, height: 8, overflow: "hidden" }}>
                <div style={{ background: "#004ac6", height: "100%", borderRadius: 9999, width: "65%", transition: "width 0.7s" }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#737686", letterSpacing: "0.1em", textTransform: "uppercase" }}>Processing Frame 442/680</span>
            </div>
          </section>

          {/* Results Section */}
          <section style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32, paddingTop: 48, paddingBottom: 48 }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32, flexWrap: "wrap" as const }}>
              {/* Forensic Visualizer */}
              <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 6px rgba(0,0,0,0.05)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f3f4f5" }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, display: "flex", alignItems: "center", gap: 8, margin: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>biotech</span>
                    Forensic Visualizer
                  </h3>
                  <div style={{ display: "flex", background: "#e1e3e4", padding: 4, borderRadius: 10, gap: 2 }}>
                    <button style={{ padding: "4px 16px", fontSize: 12, fontWeight: 700, borderRadius: 8, background: "#fff", color: "#004ac6", border: "none", cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>Original</button>
                    <button style={{ padding: "4px 16px", fontSize: 12, fontWeight: 700, borderRadius: 8, background: "transparent", color: "#434655", border: "none", cursor: "pointer" }}>Heatmap</button>
                  </div>
                </div>
                <div style={{ aspectRatio: "16/9", position: "relative", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_jK4c9ZdeDyy65z1ARJsLDgOOFLaSYL4txR2knlzWMfIABR7hWVxD4lk8h0akz4GnwnIqgIwrh21mVbGhvrxSCN9T_kEpzAEWXGHGl_Y4GUSEHFnOPqxfxETRvxOqcMEL7nrE9PQMjTh9PPE8i-ZH-7tlSKwe7UOMEloNJeIGYbZsE17O7kFkMI0gTepE5eRGsL5UuaRR76sQlbZkuKQZxUC_Blt_q1hC9UUrmAswuVC07AUPB-vTZIWWXESkkolEzRLojR4VIFkC"
                    alt="Forensic analysis with manipulation detection"
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                  <div style={{ position: "absolute", top: "25%", left: "33%", width: 128, height: 128, border: "2px solid #ab0b1c", borderRadius: 10, background: "rgba(171,11,28,0.1)", backdropFilter: "blur(4px)" }}>
                    <span style={{ position: "absolute", top: -12, left: 0, fontSize: 10, color: "#fff", fontWeight: 700, background: "#ab0b1c", padding: "2px 4px" }}>MANIPULATION DETECTED</span>
                  </div>
                </div>
              </div>

              {/* Verdict */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ background: "#f3f4f5", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#737686", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Verification Result</span>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "#cf2c30", borderRadius: 9999, color: "#fff", fontWeight: 700, fontSize: 24, letterSpacing: "-0.04em", boxShadow: "0 8px 20px rgba(171,11,28,0.25)" }}>
                    <span className="material-symbols-outlined">report</span>
                    FAKE
                  </div>
                  <div style={{ marginTop: 32, width: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#434655", textTransform: "uppercase" }}>Confidence Score</span>
                      <span style={{ fontSize: 30, fontWeight: 900, color: "#191c1d" }}>87<span style={{ fontSize: 18 }}>%</span></span>
                    </div>
                    <div style={{ width: "100%", height: 12, background: "#e1e3e4", borderRadius: 9999, overflow: "hidden" }}>
                      <div style={{ height: "100%", background: "#ab0b1c", borderRadius: 9999, width: "87%" }} />
                    </div>
                  </div>
                </div>

                <div style={{ background: "#f3f4f5", borderRadius: 16, padding: 24 }}>
                  <h4 style={{ fontSize: 11, fontWeight: 600, color: "#434655", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Technical Explanation</h4>
                  <p style={{ color: "#191c1d", lineHeight: 1.6, fontStyle: "italic", margin: 0, fontSize: 14 }}>
                    "Analysis identified inconsistent lighting patterns on the subject's left iris and high-frequency GAN artifacts in the hair texture. The metadata shows evidence of re-sampling and hidden watermark stripping."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Report Section */}
          <section style={{ padding: "48px 32px", background: "#e1e3e4", borderRadius: 16, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap" as const }}>
              <div style={{ display: "flex", gap: 48, flexWrap: "wrap" as const }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#737686", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>Risk Level</span>
                  <p style={{ fontSize: 24, fontWeight: 700, color: "#ab0b1c", textTransform: "uppercase", letterSpacing: "-0.04em", margin: 0 }}>Critical Alert</p>
                </div>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#737686", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>Manipulation Type</span>
                  <p style={{ fontSize: 24, fontWeight: 700, color: "#191c1d", margin: 0 }}>Deepfake / AI-Synthesis</p>
                </div>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#737686", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>Asset ID</span>
                  <p style={{ fontSize: 18, fontFamily: "monospace", color: "#434655", margin: 0 }}>TL-7742-XF9</p>
                </div>
              </div>
              <button style={{ display: "flex", alignItems: "center", gap: 12, background: "#191c1d", color: "#f8f9fa", padding: "16px 32px", borderRadius: 12, fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 8px 25px rgba(0,0,0,0.2)", whiteSpace: "nowrap" }}>
                <span className="material-symbols-outlined">download</span>
                Download Report
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer style={{ background: "#f1f5f9", padding: "48px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, maxWidth: 1280, margin: "0 auto" }}>
            <div>
              <span style={{ fontSize: 18, fontWeight: 700, color: "#0f172a" }}>TruthLens AI</span>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, marginTop: 16 }}>Protecting the integrity of digital media through advanced neural forensic analysis.</p>
            </div>
            <div>
              <h4 style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#0f172a", marginBottom: 16 }}>Legal & Technical</h4>
              {["Privacy Policy", "Terms of Service", "Security Whitepaper", "API Documentation"].map((item) => (
                <a key={item} href="#" style={{ display: "block", fontSize: 14, color: "#64748b", textDecoration: "none", marginBottom: 8 }}>{item}</a>
              ))}
            </div>
            <div>
              <h4 style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#0f172a", marginBottom: 16 }}>Contact</h4>
              <a href="mailto:forensics@truthlens.ai" style={{ display: "block", fontSize: 14, color: "#64748b", textDecoration: "none", marginBottom: 8 }}>forensics@truthlens.ai</a>
              <span style={{ fontSize: 14, color: "#64748b" }}>San Francisco, CA</span>
            </div>
            <div>
              <div style={{ padding: 16, background: "rgba(219,225,255,0.4)", borderRadius: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#004ac6", display: "block", marginBottom: 4 }}>Hackathon Build v1.0</span>
                <p style={{ fontSize: 12, color: "#434655", margin: 0 }}>Created for the 2024 AI Ethics Challenge.</p>
              </div>
              <p style={{ fontSize: 14, color: "#64748b" }}>© 2024 TruthLens AI Forensic Systems. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
