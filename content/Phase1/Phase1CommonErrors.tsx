"use client";

import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeBlock from "@/content/ComponentsForCode/CodeBlock";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";
import { ShieldAlert, Pin, Scale, TriangleAlert } from "lucide-react";

export default function Phase1CommonErrors() {
    return (
        <div style={{ paddingBottom: "60px", animation: "fadeIn 0.6s ease-out" }}>

            {/* VERSION DRIFT */}
            <Section title="1. Version Drift (Critical)">
                <RuleList items={[
                    "Upgrading Hardhat independently",
                    "Installing latest versions without pinning",
                    "Mixing incompatible plugin versions",
                ]} />
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginTop: 12 }}>
                    Hardhat, toolbox, and CoFHE plugins are tightly coupled. Even minor version drift can break execution.
                </p>
            </Section>

            {/* NPM CACHE / INSTALL */}
            <Section title="2. Broken Dependency Installation">
                <RuleList items={["Interrupted npm install", "Corrupted node_modules", "Mismatched package-lock.json"]} />
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginTop: 12, marginBottom: 16 }}>
                    Partial installs lead to inconsistent dependency graphs and runtime failures. Reset with:
                </p>
                <CodeSnippet code={`rm -rf node_modules package-lock.json\nnpm install`} />
            </Section>

            {/* HARDHAT INIT ERROR */}
            <Section title="3. Hardhat Initialization Error">
                <RuleList items={["Error: No Hardhat config file found", "Running wrong command"]} />
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginTop: 12 }}>
                    Happens when Hardhat is executed without initialization. Use <code>npx hardhat</code> interactive CLI, never <code>npx hardhat init</code>.
                </p>
            </Section>

            {/* PRINCIPLE */}
            <Section title="Root Principle">
                <div style={{
                    background: "linear-gradient(135deg, rgba(255, 77, 79, 0.05), transparent)",
                    border: "1px solid rgba(255, 77, 79, 0.2)",
                    borderRadius: "20px", padding: "32px", marginTop: "16px",
                    display: "flex", flexDirection: "column", gap: "24px"
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", borderBottom: "1px solid rgba(255, 77, 79, 0.1)", paddingBottom: "24px" }}>
                        <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255, 77, 79, 0.1)", color: "#ff4d4f", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <ShieldAlert size={28} />
                        </div>
                        <h2 style={{ color: "var(--color-text-primary)", fontSize: "1.4rem", fontWeight: 800, margin: 0, lineHeight: 1.4 }}>
                            Most setup failures are not bugs <br />
                            <span style={{ color: "#ff4d4f" }}>they are environment inconsistencies.</span>
                        </h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
                        {[
                            { icon: <Pin size={24} />, title: "Strict Version Control", text: "Deterministic setup absolutely requires strict version pinning." },
                            { icon: <Scale size={24} />, title: "Exact Match Runtime", text: "Your environment must match the expected runtime architecture flawlessly." },
                            { icon: <TriangleAlert size={24} />, title: "Hidden Instability", text: "Every minor deviation from the setup introduces critical, hidden execution failures." }
                        ].map((card, idx) => (
                            <div key={idx} style={{
                                padding: "20px", background: "var(--color-bg-elevated)",
                                borderRadius: "12px", border: "1px solid var(--color-border-secondary)",
                                transition: "all 0.2s", cursor: "default"
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "#ff4d4f"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(255, 77, 79, 0.1)"; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--color-border-secondary)"; e.currentTarget.style.boxShadow = "none"; }}
                            >
                                <div style={{ color: "#ff4d4f", marginBottom: "12px" }}>{card.icon}</div>
                                <h4 style={{ color: "var(--color-text-primary)", fontSize: "1.1rem", fontWeight: 700, margin: "0 0 8px 0" }}>{card.title}</h4>
                                <p style={{ color: "var(--color-text-secondary)", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

        </div>
    );
}