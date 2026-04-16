"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const BACKEND_URL = "http://localhost:5000";

async function analyzeImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(`${BACKEND_URL}/analyze-image`, { method: "POST", body: formData });
  if (!response.ok) throw new Error("Image analysis failed");
  return response.json();
}

async function analyzeVideo(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(`${BACKEND_URL}/analyze-video`, { method: "POST", body: formData });
  if (!response.ok) throw new Error("Video analysis failed");
  return response.json();
}

function generateReportHTML(result: any, file: File, imageDataUrl: string | null, elaDataUrl: string | null) {
  const isFake = result?.label === "FAKE";
  const verdictColor = isFake ? "#ab0b1c" : "#1a7a52";
  const now = new Date();
  const dateStr = now.toLocaleString("en-IN", { dateStyle: "full", timeStyle: "medium" });
  const assetId = "TL-" + Math.floor(Math.random() * 9000 + 1000) + "-" + Math.random().toString(36).substring(2, 5).toUpperCase();
  const riskLevel = isFake ? (result.confidence > 85 ? "CRITICAL" : "HIGH") : (result.confidence > 85 ? "AUTHENTIC" : "LOW RISK");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>TruthLens AI — Forensic Report ${assetId}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; background: #f8f9fa; color: #191c1d; }
    .page { max-width: 900px; margin: 0 auto; padding: 48px 40px; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; padding-bottom: 32px; border-bottom: 3px solid #191c1d; margin-bottom: 40px; }
    .logo { font-size: 28px; font-weight: 900; letter-spacing: -0.05em; color: #0f172a; }
    .logo span { color: #004ac6; }
    .report-meta { text-align: right; font-size: 12px; color: #737686; }
    .report-meta strong { display: block; font-size: 14px; color: #191c1d; margin-bottom: 4px; }
    .verdict-banner { display: flex; align-items: center; justify-content: space-between; padding: 32px 40px; border-radius: 16px; margin-bottom: 40px; background: ${isFake ? "#fff0f0" : "#f0fff8"}; border: 2px solid ${verdictColor}; }
    .verdict-label { font-size: 48px; font-weight: 900; color: ${verdictColor}; letter-spacing: -0.04em; }
    .verdict-sub { font-size: 13px; color: #737686; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-bottom: 8px; }
    .confidence-row { display: flex; align-items: center; gap: 16px; margin-top: 12px; }
    .confidence-num { font-size: 36px; font-weight: 900; color: #191c1d; }
    .confidence-bar-bg { flex: 1; height: 12px; background: #e1e3e4; border-radius: 99px; overflow: hidden; }
    .confidence-bar { height: 100%; background: ${verdictColor}; border-radius: 99px; width: ${result.confidence}%; }
    .section { margin-bottom: 40px; }
    .section-title { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #737686; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid #e1e3e4; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .info-card { background: #fff; border-radius: 12px; padding: 20px 24px; border: 1px solid #e1e3e4; }
    .info-label { font-size: 11px; font-weight: 600; color: #737686; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
    .info-value { font-size: 18px; font-weight: 700; color: #191c1d; }
    .img-section { display: grid; grid-template-columns: ${elaDataUrl ? "1fr 1fr" : "1fr"}; gap: 24px; margin-bottom: 40px; }
    .img-box { background: #0f172a; border-radius: 12px; overflow: hidden; }
    .img-box img { width: 100%; height: 280px; object-fit: contain; display: block; }
    .img-label { padding: 10px 16px; font-size: 12px; font-weight: 600; color: #fff; background: rgba(255,255,255,0.1); }
    .explanation { background: #fff; border-radius: 12px; padding: 24px; border: 1px solid #e1e3e4; font-size: 15px; line-height: 1.7; color: #191c1d; font-style: italic; }
    .footer { margin-top: 64px; padding-top: 24px; border-top: 1px solid #e1e3e4; display: flex; justify-content: space-between; align-items: center; }
    .footer-left { font-size: 12px; color: #737686; }
    .footer-badge { font-size: 11px; font-weight: 700; color: #004ac6; background: #dbe1ff; padding: 4px 12px; border-radius: 99px; }
    .warning-box { background: ${isFake ? "#fff0f0" : "#f0fff8"}; border: 1px solid ${verdictColor}40; border-radius: 12px; padding: 16px 20px; margin-bottom: 40px; font-size: 13px; color: ${verdictColor}; font-weight: 600; }
    @media print { body { background: #fff; } .page { padding: 24px; } }
  </style>
</head>
<body>
<div class="page">
  <div class="header">
    <div>
      <div class="logo">Truth<span>Lens</span> AI</div>
      <div style="font-size:12px;color:#737686;margin-top:4px;">Forensic Media Analysis Report</div>
    </div>
    <div class="report-meta">
      <strong>Asset ID: ${assetId}</strong>
      <div>Generated: ${dateStr}</div>
      <div>File: ${file.name}</div>
      <div>Type: ${result.type === "video" ? "Video" : "Image"} Analysis</div>
    </div>
  </div>

  <div class="verdict-banner">
    <div>
      <div class="verdict-sub">Verification Result</div>
      <div class="verdict-label">${result.label}</div>
      <div class="confidence-row">
        <div style="font-size:13px;color:#737686;font-weight:600;">Confidence</div>
        <div class="confidence-bar-bg"><div class="confidence-bar"></div></div>
        <div class="confidence-num">${result.confidence}%</div>
      </div>
    </div>
    <div style="text-align:right;">
      <div class="verdict-sub">Risk Level</div>
      <div style="font-size:28px;font-weight:900;color:${verdictColor};">${riskLevel}</div>
      <div style="font-size:13px;color:#737686;margin-top:8px;">${result.type === "video" ? "Video / Deepfake Detection" : "Image / AI-Synthesis Detection"}</div>
    </div>
  </div>

  <div class="warning-box">
    ${isFake
      ? `⚠️ This ${result.type} has been flagged as potentially manipulated or AI-generated. Do not use this media as evidence without further verification.`
      : `✅ No significant manipulation was detected. This ${result.type} appears to be authentic based on our forensic analysis.`
    }
  </div>

  ${imageDataUrl ? `
  <div class="section">
    <div class="section-title">Forensic Visualization</div>
    <div class="img-section">
      <div class="img-box">
        <div class="img-label">Original Media</div>
        <img src="${imageDataUrl}" alt="Original"/>
      </div>
      ${elaDataUrl ? `
      <div class="img-box">
        <div class="img-label">ELA Heatmap — Compression Analysis</div>
        <img src="${elaDataUrl}" alt="ELA Heatmap"/>
      </div>` : ""}
    </div>
  </div>` : ""}

  <div class="section">
    <div class="section-title">File Metadata</div>
    <div class="grid-2">
      <div class="info-card">
        <div class="info-label">File Name</div>
        <div class="info-value" style="font-size:14px;font-family:monospace;">${file.name}</div>
      </div>
      <div class="info-card">
        <div class="info-label">File Size</div>
        <div class="info-value">${(file.size / 1024 / 1024).toFixed(2)} MB</div>
      </div>
      <div class="info-card">
        <div class="info-label">File Type</div>
        <div class="info-value">${file.type || "Unknown"}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Analysis Method</div>
        <div class="info-value" style="font-size:14px;">${result.type === "video" ? "Frame Sampling + CNN" : "Deep CNN + ELA"}</div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Technical Analysis</div>
    <div class="explanation">
      ${result.label === "FAKE"
        ? `Our forensic model detected synthetic or manipulated patterns in this ${result.type} with ${result.confidence}% confidence. ${result.type === "image" ? "Error Level Analysis (ELA) reveals compression inconsistencies in specific regions, which are characteristic of AI-generated or digitally composited media. These anomalies are typically caused by GAN-based generation, face-swapping algorithms, or post-processing tools." : "Frame-by-frame analysis identified GAN artifacts and temporal inconsistencies across multiple sampled frames. The model detected unnatural blending artifacts and statistical irregularities typical of video deepfake synthesis."}`
        : `No significant manipulation signatures were detected in this ${result.type}. The compression patterns, noise distribution, and pixel-level statistics are consistent with authentic, unedited media captured by a real camera sensor. Confidence level: ${result.confidence}%.`
      }
    </div>
  </div>

  <div class="section">
    <div class="section-title">Disclaimer</div>
    <div style="font-size:13px;color:#737686;line-height:1.7;background:#fff;padding:20px 24px;border-radius:12px;border:1px solid #e1e3e4;">
      This report is generated automatically by TruthLens AI forensic systems and is intended for informational purposes only.
      The results represent the model's statistical assessment and should not be used as sole legal evidence.
      False positives and false negatives are possible. For legal proceedings, consult a certified digital forensics expert.
    </div>
  </div>

  <div class="footer">
    <div class="footer-left">
      <strong>TruthLens AI Forensic Systems</strong><br/>
      forensics@truthlens.ai · INDIA<br/>
      © ${now.getFullYear()} All rights reserved.
    </div>
    <div class="footer-badge">Hackathon Build v1.0</div>
  </div>
</div>
</body>
</html>`;
}

export default function HomePage() {
  const pathname = usePathname();
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [viewMode, setViewMode] = useState("original");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [elaImageUrl, setElaImageUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [elaDataUrl, setElaDataUrl] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    if (isAnalyzing) {
      let value = 0;
      const interval = setInterval(() => {
        const increment = value < 80 ? 8 : 1;
        value = Math.min(value + increment, 92);
        setProgress(value);
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isAnalyzing]);

  const handleFileSelected = async (selectedFile: File) => {
    setFile(selectedFile);
    setResult(null);
    setError(null);
    setElaImageUrl(null);
    setImageDataUrl(null);
    setElaDataUrl(null);
    setViewMode("original");
    setIsAnalyzing(true);
    setProgress(0);

    // Read file as base64 for embedding in report
    const reader = new FileReader();
    reader.onload = (e) => setImageDataUrl(e.target?.result as string);
    reader.readAsDataURL(selectedFile);

    try {
      let data;
      if (selectedFile.type.startsWith("video")) {
        data = await analyzeVideo(selectedFile);
      } else {
        data = await analyzeImage(selectedFile);
        if (data.ela_image) {
          const filename = data.ela_image.replace(/\\/g, "/").split("/").pop();
          const elaUrl = `${BACKEND_URL}/static/uploads/${filename}`;
          setElaImageUrl(elaUrl);
          // Also fetch ELA as base64 for the report
          try {
            const elaResp = await fetch(elaUrl);
            const elaBlob = await elaResp.blob();
            const elaReader = new FileReader();
            elaReader.onload = (e) => setElaDataUrl(e.target?.result as string);
            elaReader.readAsDataURL(elaBlob);
          } catch {}
        }
      }
      setProgress(100);
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Analysis failed. Make sure the backend is running.");
      setProgress(0);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) handleFileSelected(dropped);
  };

  const handleDownloadReport = async () => {
    if (!result || !file) return;
    setIsDownloading(true);
    try {
      const html = generateReportHTML(result, file, imageDataUrl, elaDataUrl);
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      // Open in new tab with print dialog (for Save as PDF)
      const win = window.open(url, "_blank");
      if (win) {
        win.onload = () => setTimeout(() => win.print(), 800);
      }

      // Also download as .html file directly
      const a = document.createElement("a");
      a.href = url;
      a.download = `TruthLens-Report-${file.name.split(".")[0]}-${Date.now()}.html`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    } finally {
      setIsDownloading(false);
    }
  };

  const isFake = result?.label === "FAKE";
  const verdictColor = isFake ? "#ab0b1c" : "#006c49";
  const verdictBg = isFake ? "#cf2c30" : "#1a7a52";
  const verdictIcon = isFake ? "report" : "verified";
  const riskLevel = isFake
    ? result.confidence > 85 ? "Critical Alert" : "High Risk"
    : result?.confidence > 85 ? "Authentic" : "Likely Real";

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
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; font-family: 'Material Symbols Outlined'; }
        body { font-family: 'Inter', sans-serif; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
        .upload-zone:hover { border-color: #004ac6 !important; background: #f0f4ff !important; }
        .drag-over { border-color: #004ac6 !important; background: #e8efff !important; }
        .dl-btn:hover:not(:disabled) { background: #2d3748 !important; transform: translateY(-1px); box-shadow: 0 12px 30px rgba(0,0,0,0.3) !important; }
        .dl-btn { transition: all 0.2s !important; }
      `}</style>

      <div style={{ background: "#f8f9fa", color: "#191c1d", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>

        {/* Nav */}
        <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 50, background: "rgba(248,249,250,0.85)", backdropFilter: "blur(20px)", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", maxWidth: 1280, margin: "0 auto" }}>
            <Link href="/" style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.05em", color: "#0f172a", textDecoration: "none" }}>TruthLens AI</Link>
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ fontSize: 14, fontWeight: 500, textDecoration: "none", color: pathname === link.href ? "#1d4ed8" : "#475569", borderBottom: pathname === link.href ? "2px solid #1d4ed8" : "none", paddingBottom: pathname === link.href ? 4 : 0 }}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button style={{ padding: "8px 20px", fontSize: 14, fontWeight: 600, borderRadius: 12, color: "#475569", background: "transparent", border: "none", cursor: "pointer" }}>Sign In</button>
              <button style={{ padding: "8px 20px", fontSize: 14, fontWeight: 600, borderRadius: 12, background: "#004ac6", color: "#fff", border: "none", cursor: "pointer" }}>Get Started</button>
            </div>
          </div>
        </nav>

        <main style={{ paddingTop: 96, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, maxWidth: 1280, margin: "0 auto" }}>

          {/* Hero */}
          <section style={{ display: "flex", alignItems: "center", gap: 64, paddingTop: 48, paddingBottom: 48, flexWrap: "wrap" }}>
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

              {/* Upload */}
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: -4, background: "linear-gradient(135deg, #004ac6, #006c49)", borderRadius: 16, filter: "blur(8px)", opacity: 0.1 }} />
                <div
                  className={`upload-zone ${isDragging ? "drag-over" : ""}`}
                  onClick={() => document.getElementById("fileInput")?.click()}
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "2px dashed #c3c6d7", background: "#fff", borderRadius: 16, padding: 48, cursor: "pointer", transition: "all 0.2s" }}
                >
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#edeeef", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <span className="material-symbols-outlined" style={{ color: "#004ac6", fontSize: 32 }}>upload_file</span>
                  </div>
                  {file && <p style={{ marginTop: 4, marginBottom: 8, fontSize: 13, fontWeight: 600, color: "#004ac6", background: "#dbe1ff", padding: "4px 12px", borderRadius: 8 }}>📎 {file.name}</p>}
                  <input id="fileInput" type="file" accept="image/*,video/*" style={{ display: "none" }} onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFileSelected(f); e.target.value = ""; }} />
                  <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 8px" }}>Drop media for analysis</h3>
                  <p style={{ color: "#434655", fontSize: 14, margin: 0 }}>PNG, JPG, MP4 or WEBM up to 100MB</p>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, minWidth: 280, maxWidth: 420 }}>
              <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.25)" }}>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMTsoq4asVaj_YErda_H-hPqrr7wbgO0FxXQ3nB3x067TlT_qd21Y1RpIdTnAmAOXdRaQ1zJdK2dbs2o5qINa-cQke6QbrTxfJ59fpPBo5Y4zipMSm9HU-9Ma8w2f4R3c-Wg0SNzCMJ-z3qpUeuG7Wpk9XhiflimmyWaonc3dV7TZWYFniRX0SskdzlUqEXWr_rU4E9Og0KAJS_8fDDw5rHrP4ettw-hYXEsY1ifjvvif7uoujPJ_L-ZB9wN2eCDv84uzpLw5d-PGZ" alt="Forensic interface" style={{ width: "100%", objectFit: "cover" }} />
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

          {/* Error */}
          {error && (
            <section style={{ maxWidth: 700, margin: "0 auto 48px", padding: "32px", background: "#fff5f5", borderRadius: 16, border: "1px solid #feb2b2" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span className="material-symbols-outlined" style={{ color: "#ab0b1c", fontSize: 28 }}>error</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#ab0b1c" }}>Analysis Failed</h3>
                  <p style={{ margin: "4px 0 0", fontSize: 14, color: "#434655" }}>{error}</p>
                </div>
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 13, color: "#737686" }}>
                💡 Make sure the backend is running: <code style={{ background: "#f3f4f5", padding: "2px 6px", borderRadius: 4 }}>python app.py</code> in the <code style={{ background: "#f3f4f5", padding: "2px 6px", borderRadius: 4 }}>back/</code> folder.
              </p>
            </section>
          )}

          {/* Analyzing */}
          {isAnalyzing && (
            <section style={{ maxWidth: 700, margin: "0 auto 48px", padding: "48px 32px", background: "#f3f4f5", borderRadius: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, textAlign: "center" }}>
                <div style={{ position: "relative", width: 80, height: 80 }}>
                  <div style={{ position: "absolute", inset: 0, border: "4px solid rgba(0,74,198,0.2)", borderRadius: "50%" }} />
                  <div style={{ position: "absolute", inset: 0, border: "4px solid #004ac6", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                </div>
                <div>
                  <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 8px" }}>Analyzing with AI...</h2>
                  <p style={{ color: "#434655", margin: 0 }}>{file?.type.startsWith("video") ? "Extracting frames and running deepfake detection" : "Scanning for compression artifacts and GAN-signatures"}</p>
                </div>
                <div style={{ width: "100%", maxWidth: 400, background: "#e1e3e4", borderRadius: 9999, height: 8, overflow: "hidden" }}>
                  <div style={{ background: "#004ac6", height: "100%", borderRadius: 9999, width: `${progress}%`, transition: "width 0.7s" }} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#737686", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {progress < 40 ? "Uploading file..." : progress < 70 ? "Running model inference..." : "Generating report..."}
                </span>
              </div>
            </section>
          )}

          {/* Results */}
          {result && !isAnalyzing && (
            <section style={{ display: "grid", gap: 32, paddingTop: 48, paddingBottom: 48 }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32 }}>

                {/* Visualizer */}
                <div style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 6px rgba(0,0,0,0.05)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f3f4f5" }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, display: "flex", alignItems: "center", gap: 8, margin: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: "#004ac6" }}>biotech</span>
                      Forensic Visualizer
                    </h3>
                    {result.type === "image" && elaImageUrl && (
                      <div style={{ display: "flex", background: "#e1e3e4", padding: 4, borderRadius: 10, gap: 2 }}>
                        <button onClick={() => setViewMode("original")} style={{ padding: "4px 16px", fontSize: 12, fontWeight: 700, borderRadius: 8, background: viewMode === "original" ? "#fff" : "transparent", color: viewMode === "original" ? "#004ac6" : "#434655", border: "none", cursor: "pointer" }}>Original</button>
                        <button onClick={() => setViewMode("heatmap")} style={{ padding: "4px 16px", fontSize: 12, fontWeight: 700, borderRadius: 8, background: viewMode === "heatmap" ? "#fff" : "transparent", color: viewMode === "heatmap" ? "#004ac6" : "#434655", border: "none", cursor: "pointer" }}>ELA Heatmap</button>
                      </div>
                    )}
                  </div>
                  <div style={{ aspectRatio: "16/9", position: "relative", background: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                    {file && file.type.startsWith("video") ? (
                      <video src={URL.createObjectURL(file)} controls style={{ maxWidth: "100%", maxHeight: "100%" }} />
                    ) : viewMode === "heatmap" && elaImageUrl ? (
                      <img src={elaImageUrl} alt="ELA Heatmap" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} onError={() => setElaImageUrl(null)} />
                    ) : (
                      <img src={file ? URL.createObjectURL(file) : ""} alt="Uploaded" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    )}
                    {isFake && (
                      <div style={{ position: "absolute", top: "25%", left: "33%", width: 128, height: 128, border: "2px solid #ab0b1c", borderRadius: 10, background: "rgba(171,11,28,0.1)", backdropFilter: "blur(4px)" }}>
                        <span style={{ position: "absolute", top: -12, left: 0, fontSize: 10, color: "#fff", fontWeight: 700, background: "#ab0b1c", padding: "2px 4px" }}>MANIPULATION DETECTED</span>
                      </div>
                    )}
                  </div>
                  {viewMode === "heatmap" && elaImageUrl && (
                    <div style={{ padding: "12px 24px", background: "#f8f9fa", borderTop: "1px solid #e1e3e4", fontSize: 12, color: "#434655" }}>
                      <span style={{ fontWeight: 600 }}>ELA (Error Level Analysis):</span> Brighter areas indicate higher compression inconsistency — a sign of manipulation or compositing.
                    </div>
                  )}
                </div>

                {/* Verdict */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <div style={{ background: "#f3f4f5", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#737686", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Verification Result</span>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: verdictBg, borderRadius: 9999, color: "#fff", fontWeight: 700, fontSize: 24, letterSpacing: "-0.04em", boxShadow: `0 8px 20px ${verdictColor}40` }}>
                      <span className="material-symbols-outlined">{verdictIcon}</span>
                      {result.label}
                    </div>
                    <div style={{ marginTop: 32, width: "100%" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 8 }}>
                        <span style={{ fontSize: 11, fontWeight: 600, color: "#434655", textTransform: "uppercase" }}>Confidence Score</span>
                        <span style={{ fontSize: 30, fontWeight: 900, color: "#191c1d" }}>{result.confidence}<span style={{ fontSize: 18 }}>%</span></span>
                      </div>
                      <div style={{ width: "100%", height: 12, background: "#e1e3e4", borderRadius: 9999, overflow: "hidden" }}>
                        <div style={{ height: "100%", background: verdictColor, borderRadius: 9999, width: `${result.confidence}%`, transition: "width 1s ease" }} />
                      </div>
                    </div>
                    <div style={{ marginTop: 16, padding: "6px 16px", background: "#e1e3e4", borderRadius: 9999, fontSize: 12, fontWeight: 600, color: "#434655", display: "flex", alignItems: "center", gap: 6 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{result.type === "video" ? "movie" : "image"}</span>
                      {result.type === "video" ? "Video Analysis" : "Image Analysis"}
                    </div>
                  </div>

                  <div style={{ background: "#f3f4f5", borderRadius: 16, padding: 24 }}>
                    <h4 style={{ fontSize: 11, fontWeight: 600, color: "#434655", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Technical Explanation</h4>
                    <p style={{ color: "#191c1d", lineHeight: 1.6, fontStyle: "italic", margin: 0, fontSize: 14 }}>
                      {result.label === "FAKE"
                        ? `Our forensic model detected synthetic patterns in this ${result.type} with ${result.confidence}% confidence. ${result.type === "image" ? "ELA heatmap reveals compression inconsistencies typical of AI-generated or manipulated media." : "Frame-by-frame analysis identified GAN artifacts across multiple sampled frames."}`
                        : `No significant manipulation was detected. This ${result.type} shows natural compression patterns consistent with authentic, unedited media (${result.confidence}% confidence).`}
                    </p>
                  </div>

                  <button onClick={() => document.getElementById("fileInput")?.click()} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 24px", background: "#004ac6", color: "#fff", border: "none", borderRadius: 12, fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>refresh</span>
                    Analyze Another File
                  </button>
                </div>
              </div>

              {/* Report Bar */}
              <div style={{ padding: "40px 32px", background: "#e1e3e4", borderRadius: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#737686", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>Risk Level</span>
                      <p style={{ fontSize: 24, fontWeight: 700, color: verdictColor, textTransform: "uppercase", letterSpacing: "-0.04em", margin: 0 }}>{riskLevel}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#737686", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>Detection Type</span>
                      <p style={{ fontSize: 24, fontWeight: 700, color: "#191c1d", margin: 0 }}>{result.type === "video" ? "Video / Deepfake" : "Image / AI-Synthesis"}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "#737686", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 4 }}>File</span>
                      <p style={{ fontSize: 16, fontFamily: "monospace", color: "#434655", margin: 0 }}>{file?.name}</p>
                    </div>
                  </div>

                  {/* ✅ WORKING DOWNLOAD BUTTON */}
                  <button
                    className="dl-btn"
                    onClick={handleDownloadReport}
                    disabled={isDownloading}
                    style={{ display: "flex", alignItems: "center", gap: 12, background: isDownloading ? "#555" : "#191c1d", color: "#f8f9fa", padding: "16px 32px", borderRadius: 12, fontWeight: 700, border: "none", cursor: isDownloading ? "wait" : "pointer", boxShadow: "0 8px 25px rgba(0,0,0,0.2)", whiteSpace: "nowrap", fontSize: 15 }}
                  >
                    <span className="material-symbols-outlined">{isDownloading ? "hourglass_empty" : "download"}</span>
                    {isDownloading ? "Generating..." : "Download Report"}
                  </button>
                </div>
                <p style={{ margin: "16px 0 0", fontSize: 12, color: "#737686" }}>
                  💡 Report opens in a new tab — press <strong>Ctrl+P (Cmd+P on Mac) → Save as PDF</strong> to save as a PDF file.
                </p>
              </div>
            </section>
          )}
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
              <span style={{ fontSize: 14, color: "#64748b" }}>INDIA</span>
            </div>
            <div>
              <div style={{ padding: 16, background: "rgba(219,225,255,0.4)", borderRadius: 12, marginBottom: 16 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#004ac6", display: "block", marginBottom: 4 }}>Hackathon Build v1.0</span>
                <p style={{ fontSize: 12, color: "#434655", margin: 0 }}>Created for the 2026 AI / ML Hackathon.</p>
              </div>
              <p style={{ fontSize: 14, color: "#64748b" }}>© 2026 TruthLens AI Forensic Systems. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}