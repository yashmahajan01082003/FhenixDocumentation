"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Brain, Settings, FileText, Rocket, MonitorPlay, ArrowRight, ArrowRightCircle, Sparkles, Binary } from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#050505", color: "#ffffff", overflow: "hidden", position: "relative" }}>

      {/* GLOBAL KEYFRAMES */}
      <style suppressHydrationWarning>{`
        @keyframes floatGlow {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.15; }
          50% { transform: translateY(-30px) scale(1.1); opacity: 0.25; }
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
        @keyframes pulseBorder {
          0%, 100% { border-color: rgba(255, 106, 61, 0.2); }
          50% { border-color: rgba(255, 106, 61, 0.6); box-shadow: 0 0 20px rgba(255, 106, 61, 0.2); }
        }
      `}</style>

      {/* DYNAMIC BACKGROUND EFFECTS */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: "none" }}>

        {/* Animated Orbs */}
        <div style={{
          position: "absolute", top: "-15%", left: "10%", width: "800px", height: "800px",
          borderRadius: "50%", background: "var(--color-accent)", filter: "blur(200px)",
          animation: "floatGlow 15s ease-in-out infinite", zIndex: 0,
          transform: isClient ? `translate(${-mousePosition.x * 2}px, ${-mousePosition.y * 2}px)` : "none",
          transition: "transform 0.1s ease-out"
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", right: "-10%", width: "600px", height: "600px",
          borderRadius: "50%", background: "#e55a2d", filter: "blur(180px)",
          animation: "floatGlow 18s ease-in-out infinite reverse", zIndex: 0,
          transform: isClient ? `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)` : "none",
          transition: "transform 0.1s ease-out"
        }} />
        <div style={{
          position: "absolute", top: "40%", left: "50%", width: "400px", height: "400px",
          borderRadius: "50%", background: "#4a30ff", filter: "blur(200px)", opacity: 0.1,
          animation: "floatGlow 20s linear infinite", zIndex: 0
        }} />

        {/* Center Vignette */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: "radial-gradient(circle at center, transparent 0%, #050505 80%)", zIndex: 1 }} />

        {/* Moving Grid */}
        <div style={{
          position: "absolute", top: "-40px", left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px', zIndex: 0, opacity: 0.7,
          animation: "gridMove 3s linear infinite"
        }} />
      </div>

      {/* CONTENT LAYER */}
      <main style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto", padding: "120px 24px 80px", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* HERO */}
        <div style={{
          textAlign: "center", marginBottom: "100px",
          transition: "transform 0.1s ease-out",
          transform: isClient ? `perspective(1000px) rotateX(${-mousePosition.y * 0.2}deg) rotateY(${mousePosition.x * 0.2}deg)` : "none"
        }}>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 24px",
            background: "rgba(255, 106, 61, 0.08)", border: "1px solid rgba(255, 106, 61, 0.2)",
            borderRadius: "100px", color: "var(--color-accent)", fontWeight: 700, fontSize: "14px",
            letterSpacing: "1px", marginBottom: "32px", animation: "pulseBorder 4s infinite",
            backdropFilter: "blur(10px)"
          }}>
            <Sparkles size={16} /> Welcome to the Next Generation
          </div>

          <h1 style={{
            fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: "32px", letterSpacing: "-0.03em",
            color: "#ffffff"
          }}>
            Compute Without<br />
            <span style={{
              background: "linear-gradient(to right, #ffccb8, var(--color-accent), #ff8a66, #ffccb8)",
              backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              animation: "shine 4s linear infinite",
              position: "relative", display: "inline-block"
            }}>
              Revealing.
              {/* High-tech underline */}
              <div style={{ position: "absolute", bottom: "-15px", left: "10%", width: "80%", height: "4px", background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)", filter: "blur(2px)" }} />
              <div style={{ position: "absolute", bottom: "-15px", left: "20%", width: "60%", height: "2px", background: "var(--color-accent)" }} />
            </span>
          </h1>

          <p style={{
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: "rgba(255,255,255,0.7)", maxWidth: "760px",
            margin: "0 auto 48px", lineHeight: 1.6, fontWeight: 500,
            textShadow: "0 2px 10px rgba(0,0,0,0.5)"
          }}>
            Master <strong style={{ color: "#fff" }}>Fully Homomorphic Encryption (FHE)</strong> on Ethereum.
            A zero-to-one developer framework for building completely uncompromised, confidential Web3 architectures.
          </p>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/docs/phase-0/why-privacy-matters" style={{ textDecoration: "none" }}>
              <button style={{
                background: "linear-gradient(135deg, var(--color-accent), #e55a2d)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)",
                padding: "20px 48px", borderRadius: "16px", fontSize: "1.15rem", fontWeight: 700, cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", boxShadow: "0 10px 40px rgba(255, 106, 61, 0.4)",
                display: "flex", alignItems: "center", gap: "12px", position: "relative", overflow: "hidden"
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(255, 106, 61, 0.6)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 10px 40px rgba(255, 106, 61, 0.4)"; }}
              >
                Launch Masterclass <ArrowRight size={20} />
              </button>
            </Link>

            <Link href="/docs/phase-1/single-setup" style={{ textDecoration: "none" }}>
              <button style={{
                background: "rgba(20, 20, 25, 0.6)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)",
                padding: "20px 48px", borderRadius: "16px", fontSize: "1.15rem", fontWeight: 600, cursor: "pointer",
                transition: "all 0.3s ease", backdropFilter: "blur(10px)",
                display: "flex", alignItems: "center", gap: "10px"
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "var(--color-accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(20, 20, 25, 0.6)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <Binary size={20} /> Quick Setup
              </button>
            </Link>
          </div>
        </div>

        {/* MASONRY/GRID PHASES */}
        <div style={{ width: "100%", maxWidth: "1100px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "32px", padding: "0 16px" }}>
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", margin: "0 0 8px 0" }}>Developer Architecture</h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.1rem", margin: 0 }}>The 5 deterministic phases of confidential dApp creation.</p>
            </div>
            <div style={{ height: "1px", flex: 1, margin: "0 32px", background: "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)" }} />
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px",
            perspective: "1000px"
          }}>
            {[
              { phase: "Phase 0", title: "Conceptual Foundation", desc: "Understand the FHE breakthrough, the glass house dilemma, and proving without revealing.", icon: <Brain size={44} strokeWidth={1.2} />, link: "/docs/phase-0/why-privacy-matters" },
              { phase: "Phase 1", title: "Environment Setup", desc: "Deterministic installation of Hardhat, CoFHE toolkit, and TypeScript dependencies.", icon: <Settings size={44} strokeWidth={1.2} />, link: "/docs/phase-1/single-setup" },
              { phase: "Phase 2", title: "Confidential Contracts", desc: "Write your first FHE.sol smart contract using encrypted types and sealed operations.", icon: <FileText size={44} strokeWidth={1.2} />, link: "/docs/phase-2/confidential-vault" },
              { phase: "Phase 3", title: "Deployment Pipeline", desc: "Deploy your compiled bytecode securely to the Fhenix testnet via Ignition scripts.", icon: <Rocket size={44} strokeWidth={1.2} />, link: "/docs/phase-3/deployment-intro" },
              { phase: "Phase 4", title: "Frontend Integration", desc: "Connect standard React UI to encrypted on-chain state via the CoFHE SDK protocol.", icon: <MonitorPlay size={44} strokeWidth={1.2} />, link: "/docs/phase-4/dapp-architecture" },
            ].map((item, idx) => (
              <Link key={idx} href={item.link} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{
                  background: "linear-gradient(160deg, rgba(30, 30, 35, 0.8), rgba(15, 15, 20, 0.9))",
                  border: "1px solid rgba(255,255,255,0.05)", borderRadius: "24px", padding: "40px",
                  height: "100%", transition: "all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)", position: "relative",
                  overflow: "hidden", display: "flex", flexDirection: "column", gap: "20px",
                  backdropFilter: "blur(20px)",
                  transformStyle: "preserve-3d"
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateZ(30px) translateY(-10px) rotateX(2deg)";
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(255, 106, 61, 0.15)";
                    const indicator = e.currentTarget.querySelector('.card-indicator') as HTMLElement;
                    if (indicator) indicator.style.transform = "translateX(5px)";
                    const bgGlow = e.currentTarget.querySelector('.card-glow') as HTMLElement;
                    if (bgGlow) bgGlow.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateZ(0) translateY(0) rotateX(0)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.boxShadow = "none";
                    const indicator = e.currentTarget.querySelector('.card-indicator') as HTMLElement;
                    if (indicator) indicator.style.transform = "translateX(0)";
                    const bgGlow = e.currentTarget.querySelector('.card-glow') as HTMLElement;
                    if (bgGlow) bgGlow.style.opacity = "0";
                  }}
                >
                  {/* Internal Glow Effect */}
                  <div className="card-glow" style={{ position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%", background: "radial-gradient(circle at center, rgba(255,106,61,0.08) 0%, transparent 60%)", opacity: 0, transition: "opacity 0.5s", zIndex: 0, pointerEvents: "none" }} />

                  {/* Top Edge Highlight */}
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "2px", background: "linear-gradient(90deg, transparent, rgba(255,106,61,0.5), transparent)", opacity: 0.5 }} />

                  <div style={{ position: "relative", zIndex: 1, color: "rgba(255,255,255,0.7)" }}>
                    {item.icon}
                  </div>

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-accent)", boxShadow: "0 0 10px var(--color-accent)" }} />
                      {item.phase}
                    </div>
                    <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", margin: "0 0 16px 0", letterSpacing: "-0.01em" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>

                  <div className="card-indicator" style={{ position: "relative", zIndex: 1, marginTop: "auto", paddingTop: "20px", color: "#fff", fontWeight: 700, fontSize: "15px", display: "flex", alignItems: "center", gap: "8px", transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
                    Enter Module <ArrowRightCircle size={18} color="var(--color-accent)" />
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </main >
    </div >
  );
}