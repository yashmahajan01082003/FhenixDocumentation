"use client";

import React from "react";
import Section from "@/content/ComponentsForCode/Section";
import { Package, Unlock, Plus, Settings, Calculator, Lock, Key, Check } from "lucide-react";

export default function ProveWithoutRevealing() {
    return (
        <div style={{ paddingBottom: "60px", animation: "fadeIn 0.6s ease-out" }}>
            <p style={{ fontSize: "1.2rem", color: "var(--color-accent)", fontWeight: 600, marginBottom: "40px" }}>
                The Locked Box Breakthrough &mdash; Fully Homomorphic Encryption
            </p>

            {/* Step 1: The Problem */}
            <Section title="The Problem with Traditional Data">
                <div style={{
                    display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "32px",
                }}>
                    <div style={{
                        background: "var(--color-bg-secondary)", border: "1px solid var(--color-border-primary)",
                        padding: "24px", borderRadius: "16px",
                    }}>
                        <div style={{ marginBottom: "16px", color: "var(--color-text-primary)" }}>
                            <Package size={32} />
                        </div>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "8px" }}>Imagine your data is in a locked box</h3>
                        <p style={{ color: "var(--color-text-secondary)", fontSize: "14.5px", lineHeight: "1.6" }}>
                            Inside the box is something highly important... like your money, your identity, or your health records.
                        </p>
                    </div>

                    <div style={{
                        background: "linear-gradient(145deg, rgba(235, 87, 87, 0.1), transparent)", border: "1px solid rgba(235, 87, 87, 0.2)",
                        padding: "24px", borderRadius: "16px",
                    }}>
                        <div style={{ marginBottom: "16px", color: "#eb5757" }}>
                            <Unlock size={32} />
                        </div>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "8px" }}>Normally, to use it...</h3>
                        <p style={{ color: "var(--color-text-secondary)", fontSize: "14.5px", lineHeight: "1.6" }}>
                            They must <strong>open the box</strong> and see everything inside. The moment the box is opened, <strong>you lose your privacy</strong>.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Step 2: The Breakthrough */}
            <Section title="The FHE Breakthrough">
                <div style={{
                    background: "linear-gradient(135deg, var(--color-bg-secondary), var(--color-bg-elevated))",
                    border: "1px solid var(--color-border-primary)", borderRadius: "20px", padding: "32px",
                    position: "relative", overflow: "hidden", marginBottom: "40px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.2)"
                }}>
                    {/* Glowing Orb Background */}
                    <div style={{
                        position: "absolute", top: "-50px", right: "-50px", width: "200px", height: "200px",
                        background: "var(--color-accent)", filter: "blur(100px)", opacity: 0.15, zIndex: 0
                    }} />

                    <div style={{ position: "relative", zIndex: 1 }}>
                        <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "20px" }}>
                            But now imagine something incredible...
                        </h3>
                        <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "24px", lineHeight: "1.6" }}>
                            You give this locked box to a machine. The machine can:
                        </p>

                        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "32px" }}>
                            {[
                                { text: "Add values", icon: <Plus size={16} /> },
                                { text: "Process transactions", icon: <Settings size={16} /> },
                                { text: "Perform calculations", icon: <Calculator size={16} /> }
                            ].map((item, i) => (
                                <div key={i} style={{
                                    background: "var(--color-bg-tertiary)", border: "1px solid var(--color-border-secondary)",
                                    padding: "10px 16px", borderRadius: "8px", color: "var(--color-text-primary)", fontWeight: 500, fontSize: "14px",
                                    display: "flex", alignItems: "center", gap: "8px"
                                }}>
                                    {item.icon} {item.text}
                                </div>
                            ))}
                        </div>

                        <div style={{ borderLeft: "4px solid var(--color-accent)", paddingLeft: "20px", marginBottom: "20px" }}>
                            <p style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "8px" }}>
                                But it can NEVER open the box.
                            </p>
                            <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.6" }}>
                                Your data stays hidden the entire time. When the work is done, you get back a locked box with the correct result inside. <strong>Only you can unlock it.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Step 3: Flowchart Core Concept */}
            <Section title="The Simple Flow">
                <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px",
                    marginBottom: "40px", flexWrap: "wrap",
                    padding: "32px", background: "var(--color-bg-secondary)", borderRadius: "16px", border: "1px solid var(--color-border-primary)"
                }}>
                    {[
                        { title: "Lock", subtitle: "(Encrypt)", icon: <Lock size={28} /> },
                        { title: "Compute", subtitle: "(While locked)", icon: <Settings size={28} /> },
                        { title: "Unlock", subtitle: "(Decrypt)", icon: <Key size={28} /> },
                    ].map((step, idx) => (
                        <React.Fragment key={idx}>
                            <div style={{ textAlign: "center", flex: 1, minWidth: "120px" }}>
                                <div style={{
                                    width: "64px", height: "64px", margin: "0 auto 16px",
                                    background: "var(--color-bg-elevated)", border: "1px solid var(--color-border-secondary)",
                                    borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "var(--color-text-primary)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                                }}>
                                    {step.icon}
                                </div>
                                <h4 style={{ color: "var(--color-text-primary)", fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>{step.title}</h4>
                                <span style={{ color: "var(--color-accent)", fontSize: "13px", fontWeight: 600 }}>{step.subtitle}</span>
                            </div>

                            {idx < 2 && (
                                <div style={{ color: "var(--color-border-secondary)" }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </Section>

            {/* Step 4: The Impact on Blockchain */}
            <Section title="Impact on Blockchain">
                <div style={{
                    background: "rgba(30,30,40,0.5)", border: "1px solid var(--color-border-primary)",
                    borderRadius: "16px", padding: "24px", marginBottom: "32px", display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap"
                }}>
                    <div style={{ flex: 1, minWidth: "250px" }}>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                            {[
                                "Your balance stays hidden",
                                "Your transactions stay private",
                                "Your data is never exposed",
                                "But everything still works correctly"
                            ].map((text, i) => (
                                <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--color-text-primary)", fontSize: "15px", fontWeight: 500 }}>
                                    <div style={{ width: "22px", height: "22px", borderRadius: "11px", background: "var(--color-accent)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                    <p style={{ fontSize: "1.1rem", color: "var(--color-text-secondary)", marginBottom: "16px" }}>
                        You no longer have to choose between privacy and usefulness.
                    </p>
                    <div style={{
                        display: "inline-block", padding: "16px 32px",
                        background: "linear-gradient(135deg, rgba(255,106,61,0.1), rgba(255,106,61,0.05))",
                        border: "1px solid var(--color-accent)", borderRadius: "100px",
                        color: "var(--color-accent)", fontSize: "1.3rem", fontWeight: 700, fontStyle: "italic",
                        boxShadow: "0 4px 24px rgba(255,106,61,0.15)"
                    }}>
                        "Compute on data without ever seeing it."
                    </div>
                </div>
            </Section>

        </div>
    );
}