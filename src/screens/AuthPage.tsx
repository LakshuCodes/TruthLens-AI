"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function AuthForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [tab, setTab] = useState<"signup" | "signin">("signup");

  useEffect(() => {
    const t = searchParams.get("tab");
    if (t === "signin" || t === "signup") setTab(t);
  }, [searchParams]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .auth-input {
          width: 100%; padding: 10px 14px; border: 1.5px solid #e1e3e4;
          border-radius: 10px; font-size: 14px; color: #191c1d;
          background: #f8f9fa; outline: none; box-sizing: border-box;
          transition: border-color 0.2s;
        }
        .auth-input:focus { border-color: #004ac6; background: #fff; }
        .auth-btn-primary {
          width: 100%; padding: 12px; background: #004ac6; color: #fff;
          border: none; border-radius: 10px; font-size: 15px;
          font-weight: 700; cursor: pointer; margin-top: 8px;
          transition: opacity 0.2s;
        }
        .auth-btn-primary:hover { opacity: 0.9; }
        .auth-btn-google {
          width: 100%; padding: 11px; border: 1.5px solid #e1e3e4;
          border-radius: 10px; background: #fff; font-size: 14px;
          font-weight: 600; cursor: pointer; color: #191c1d;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          transition: background 0.2s;
        }
        .auth-btn-google:hover { background: #f3f4f5; }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#f8f9fa", display: "flex", flexDirection: "column", fontFamily: "Inter, sans-serif" }}>
        {/* Nav */}
        <nav style={{ padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.05em", color: "#0f172a", textDecoration: "none" }}>
            TruthLens AI
          </Link>
          <Link href="/" style={{ fontSize: 14, color: "#475569", textDecoration: "none" }}>← Back to home</Link>
        </nav>

        {/* Auth Card */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 16px" }}>
          <div style={{ display: "flex", width: "100%", maxWidth: 880, borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.12)", border: "1px solid rgba(195,198,215,0.3)" }}>

            {/* Left Panel */}
            <div style={{ flex: 1, background: "#004ac6", padding: 48, display: "flex", flexDirection: "column", justifyContent: "space-between", minWidth: 260 }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.12)", borderRadius: 20, padding: "4px 12px", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", marginBottom: 24 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6ffbbe", display: "inline-block" }} />
                  Live Forensics Engine
                </div>
                <h2 style={{ fontSize: 28, fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.2, margin: "0 0 16px" }}>
                  Detect manipulated media with forensic precision.
                </h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, margin: 0 }}>
                  Join thousands of journalists and fact-checkers who trust TruthLens AI for legal-grade media analysis.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 40 }}>
                {[{ val: "10K+", label: "Media scanned daily" }, { val: "99.8%", label: "Detection accuracy" }, { val: "0", label: "Data retained after session" }].map((stat) => (
                  <div key={stat.label}>
                    <div style={{ fontSize: 26, fontWeight: 900, color: "#fff", letterSpacing: "-0.04em" }}>{stat.val}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div style={{ flex: 1.3, background: "#fff", padding: 48 }}>
              {/* Tab Bar */}
              <div style={{ display: "flex", background: "#f3f4f5", borderRadius: 12, padding: 4, marginBottom: 32, gap: 4 }}>
                {(["signup", "signin"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    style={{
                      flex: 1, padding: "9px 0", border: "none", borderRadius: 9,
                      fontSize: 14, fontWeight: 600, cursor: "pointer",
                      background: tab === t ? "#fff" : "transparent",
                      color: tab === t ? "#191c1d" : "#6b7280",
                      boxShadow: tab === t ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                      transition: "all 0.2s",
                    }}
                  >
                    {t === "signup" ? "Create Account" : "Sign In"}
                  </button>
                ))}
              </div>

              {tab === "signup" ? (
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "#191c1d", margin: "0 0 6px", letterSpacing: "-0.03em" }}>Create your free account</h3>
                  <p style={{ color: "#6b7280", fontSize: 14, margin: "0 0 28px" }}>Start analyzing media — no credit card required.</p>

                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Full Name</label>
                    <input className="auth-input" type="text" placeholder="Jane Smith" />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Email Address</label>
                    <input className="auth-input" type="email" placeholder="jane@newsroom.com" />
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Password</label>
                    <input className="auth-input" type="password" placeholder="Min 8 characters" />
                  </div>

                  <button className="auth-btn-primary">Create Free Account</button>

                  <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0", color: "#9ca3af", fontSize: 12 }}>
                    <div style={{ flex: 1, height: 1, background: "#e1e3e4" }} />
                    or continue with
                    <div style={{ flex: 1, height: 1, background: "#e1e3e4" }} />
                  </div>

                  <button className="auth-btn-google">
                    <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/></svg>
                    Continue with Google
                  </button>

                  <p style={{ textAlign: "center", fontSize: 13, color: "#6b7280", marginTop: 20 }}>
                    Already have an account?{" "}
                    <button onClick={() => setTab("signin")} style={{ background: "none", border: "none", color: "#004ac6", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>
                      Sign in
                    </button>
                  </p>
                  <p style={{ textAlign: "center", fontSize: 11, color: "#9ca3af", marginTop: 12 }}>
                    By creating an account you agree to our{" "}
                    <a href="#" style={{ color: "#004ac6" }}>Terms</a> and{" "}
                    <a href="#" style={{ color: "#004ac6" }}>Privacy Policy</a>.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "#191c1d", margin: "0 0 6px", letterSpacing: "-0.03em" }}>Welcome back</h3>
                  <p style={{ color: "#6b7280", fontSize: 14, margin: "0 0 28px" }}>Sign in to your TruthLens AI account.</p>

                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Email Address</label>
                    <input className="auth-input" type="email" placeholder="jane@newsroom.com" />
                  </div>
                  <div style={{ marginBottom: 6 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Password</label>
                    <input className="auth-input" type="password" placeholder="Your password" />
                  </div>
                  <div style={{ textAlign: "right", marginBottom: 8 }}>
                    <button style={{ background: "none", border: "none", color: "#004ac6", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Forgot password?</button>
                  </div>

                  <button className="auth-btn-primary">Sign In</button>

                  <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0", color: "#9ca3af", fontSize: 12 }}>
                    <div style={{ flex: 1, height: 1, background: "#e1e3e4" }} />
                    or continue with
                    <div style={{ flex: 1, height: 1, background: "#e1e3e4" }} />
                  </div>

                  <button className="auth-btn-google">
                    <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"/></svg>
                    Continue with Google
                  </button>

                  <p style={{ textAlign: "center", fontSize: 13, color: "#6b7280", marginTop: 20 }}>
                    No account yet?{" "}
                    <button onClick={() => setTab("signup")} style={{ background: "none", border: "none", color: "#004ac6", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>
                      Create one free
                    </button>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function AuthPage() {
  return (
    <Suspense>
      <AuthForm />
    </Suspense>
  );
}