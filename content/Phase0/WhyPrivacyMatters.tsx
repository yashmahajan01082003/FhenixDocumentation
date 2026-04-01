"use client";

import { useEffect, useRef, useState } from "react";
import Section from "@/content/ComponentsForCode/Section";
import { Eye, UserX, Search, MessageSquareWarning, ScanEye, LayoutTemplate } from "lucide-react";

export default function WhyPrivacyMatters() {
    const iframeRef = useRef(null);
    const [loadIframe, setLoadIframe] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setLoadIframe(true);
                observer.disconnect();
            }
        });
        if (iframeRef.current) observer.observe(iframeRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div style={{ paddingBottom: "60px", animation: "fadeIn 0.6s ease-out" }}>
            <Section title="The Glass House Dilemma">
                <p style={{ fontSize: "1.2rem", color: "var(--color-text-secondary)", marginBottom: "32px", lineHeight: "1.6" }}>
                    Imagine you live in a house made completely of glass.
                </p>

                <div
                    ref={iframeRef}
                    style={{
                        borderRadius: "20px", overflow: "hidden", border: "1px solid var(--color-border-primary)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)", marginBottom: "40px",
                        background: "var(--color-bg-secondary)"
                    }}
                >
                    {loadIframe ? (
                        <iframe src="/glass.html" title="3D glass house" width="100%" height="500px" style={{ border: "none" }} />
                    ) : (
                        <div style={{ height: "500px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-muted)" }}>
                            Loading 3D glass house...
                        </div>
                    )}
                </div>
            </Section>

            <Section title="The Transparency Problem">
                <div style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "24px", padding: "40px", marginBottom: "40px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ color: "var(--color-text-secondary)" }}><Eye size={28} /></div>
                        The walls are see-through... everyone outside watches you
                    </h3>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "32px" }}>
                        {["They see what snacks you eat", "They see what games you play", "They see how many toys you have", "They even see when you sleep"].map((item, i) => (
                            <div key={i} style={{
                                background: "rgba(0,0,0,0.4)", borderRadius: "12px", padding: "16px",
                                borderLeft: "3px solid var(--color-accent)", color: "var(--color-text-secondary)", fontSize: "14px"
                            }}>
                                {item}
                            </div>
                        ))}
                    </div>

                    <p style={{ color: "var(--color-text-primary)", fontSize: "1.1rem", marginBottom: "12px", fontWeight: 500 }}>
                        At first, it might feel okay... because you are not hiding anything.
                    </p>
                    <p style={{ color: "var(--color-accent)", fontSize: "1.1rem", fontWeight: 600 }}>
                        But after some time, it starts to feel uncomfortable.
                    </p>
                </div>
            </Section>

            <Section title="The Threat Vector">
                <p style={{ fontSize: "1.2rem", color: "var(--color-text-primary)", marginBottom: "24px", fontWeight: 600 }}>
                    Now imagine bigger problems...
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "40px" }}>
                    {[
                        { icon: <UserX size={28} />, text: "Someone sees your toys and wants to steal them" },
                        { icon: <Search size={28} />, text: "Someone keeps watching you every single day" },
                        { icon: <MessageSquareWarning size={28} />, text: "People talk about everything you do" },
                        { icon: <ScanEye size={28} />, text: "Someone uses what they see to trick you" }
                    ].map((issue, idx) => (
                        <div key={idx} style={{
                            display: "flex", alignItems: "center", gap: "16px",
                            background: "linear-gradient(135deg, rgba(255,50,50,0.05), transparent)",
                            border: "1px solid rgba(255,50,50,0.15)", borderRadius: "16px", padding: "20px",
                            transition: "transform 0.2s"
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                        >
                            <div style={{ color: "var(--color-text-secondary)" }}>{issue.icon}</div>
                            <div style={{ color: "var(--color-text-secondary)", fontSize: "14.5px", lineHeight: "1.5", fontWeight: 500 }}>{issue.text}</div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: "center", padding: "24px", background: "var(--color-bg-secondary)", borderRadius: "16px", marginBottom: "40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                    <p style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--color-text-primary)", margin: 0 }}>
                        You would want curtains or walls to protect yourself, right?
                    </p>
                    <div style={{ color: "var(--color-text-secondary)", display: "flex", alignItems: "center" }}><LayoutTemplate size={24} /></div>
                </div>
            </Section>

            <Section title="The State of Blockchain Today">
                <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
                    This is exactly how many blockchains work right now. They are like a glass house where:
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "32px" }}>
                    {["Everyone can see your money", "Everyone can see what you send and receive", "Everyone can see what you're doing"].map((item, idx) => (
                        <div key={idx} style={{
                            flex: 1, minWidth: "220px", padding: "20px", borderRadius: "16px",
                            background: "var(--color-bg-elevated)", border: "1px solid var(--color-border-primary)",
                            display: "flex", alignItems: "flex-start", gap: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                        }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "4px", background: "var(--color-accent)", marginTop: "6px", flexShrink: 0 }} />
                            <span style={{ color: "var(--color-text-primary)", fontWeight: 500, fontSize: "15px" }}>{item}</span>
                        </div>
                    ))}
                </div>

                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "16px" }}>This openness causes severe problems:</h4>
                <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
                    {["People can track everything you do", "You become a target if you have a lot of money", "Others can learn your financial habits", "Businesses cannot keep trade secrets"].map((prob, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--color-text-secondary)", fontSize: "14.5px" }}>
                            <span style={{ color: "#ff4d4f", fontSize: "18px" }}>×</span> {prob}
                        </li>
                    ))}
                </ul>

                <p style={{ fontSize: "1.1rem", color: "var(--color-text-primary)", fontWeight: 500, marginBottom: "40px", borderLeft: "4px solid var(--color-border-secondary)", paddingLeft: "16px" }}>
                    Being open is good. <strong style={{ color: "#ff4d4f" }}>But being watched all the time is not safe.</strong> Just like a real house needs walls and curtains, blockchain also needs privacy.
                </p>

                <div style={{ textAlign: "center" }}>
                    <div style={{
                        display: "inline-block", padding: "20px 40px",
                        background: "linear-gradient(135deg, rgba(255,106,61,0.1), transparent)",
                        border: "1px solid var(--color-accent)", borderRadius: "100px",
                        color: "var(--color-accent)", fontSize: "1.3rem", fontWeight: 700, fontStyle: "italic",
                        boxShadow: "0 4px 24px rgba(255,106,61,0.2)", marginBottom: "32px"
                    }}>
                        "Transparency isn't just openness, it's vulnerability."
                    </div>

                    <div>
                        <button style={{
                            background: "var(--color-accent)", color: "#fff", border: "none",
                            padding: "16px 32px", borderRadius: "12px", fontSize: "1.1rem", fontWeight: 700,
                            cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s",
                            boxShadow: "0 4px 16px rgba(255,106,61,0.4)"
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,106,61,0.5)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(255,106,61,0.4)"; }}
                        >
                            Learn How We Add Privacy
                        </button>
                    </div>
                </div>
            </Section>
        </div>
    );
}