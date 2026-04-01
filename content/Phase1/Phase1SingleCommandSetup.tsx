"use client";

import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeBlock from "@/content/ComponentsForCode/CodeBlock";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function Phase1SingleCommandSetup() {
    return (
        <div style={{ paddingBottom: "60px", animation: "fadeIn 0.6s ease-out" }}>

            {/* PREREQUISITE */}
            <Section title="0. Prerequisite (MANDATORY)">
                <RuleList
                    items={[
                        "Install Node.js LTS (version 22 or higher)",
                        "Do NOT use Node 16 or 18",
                        "Use only stable LTS builds (no experimental versions)",
                    ]}
                />
            </Section>

            {/* COMMAND */}
            <Section title="Run Single Command">
                <CodeSnippet
                    code={`npm init -y && npm install --save-dev hardhat@^2.22.3 @nomicfoundation/hardhat-toolbox@^6.1.2 typescript@^6.0.2 ts-node@^10.9.2 && npm install @cofhe/hardhat-plugin@^0.4.0 @cofhe/sdk@0.4.0 @fhenixprotocol/cofhe-contracts@0.1.0 && npx hardhat`}
                />
            </Section>

            {/* HOW TO RUN */}
            <Section title="How to Run Properly">
                <RuleList
                    items={[
                        "Open terminal inside an empty project folder",
                        "Paste the command and press Enter",
                        "Wait for all dependencies to install",
                        "Hardhat will start automatically",
                        "Select: Create TypeScript project",
                        "Accept sample project setup",
                    ]}
                />
            </Section>

            {/* POWERSHELL SCRIPT */}
            <Section title="Alternative: setup.ps1 (Reusable Script)">
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 16 }}>
                    Instead of pasting the command every time, create a reusable script:
                </p>

                <CodeSnippet
                    code={`npm init -y

npm install --save-dev \`
hardhat@^2.22.3 \`
@nomicfoundation/hardhat-toolbox@^6.1.2 \`
typescript@^6.0.2 \`
ts-node@^10.9.2

npm install \`
@cofhe/hardhat-plugin@^0.4.0 \`
@cofhe/sdk@0.4.0 \`
@fhenixprotocol/cofhe-contracts@0.1.0

npx hardhat`}
                />
            </Section>

            {/* PRINCIPLE */}
            <Section title="Principle">
                <div style={{
                    position: "relative", padding: "40px", borderRadius: "24px",
                    background: "rgba(10, 10, 15, 0.4)", border: "1px solid var(--color-border-primary)",
                    overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center",
                    textAlign: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}>
                    {/* Glow effect */}
                    <div style={{
                        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                        width: "200px", height: "100px", background: "var(--color-accent)", filter: "blur(100px)", opacity: 0.15, zIndex: 0
                    }} />

                    <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "24px", marginBottom: "32px", flexWrap: "wrap" }}>
                            <div style={{ padding: "16px 32px", background: "var(--color-bg-secondary)", borderRadius: "12px", border: "1px solid var(--color-border-secondary)", color: "var(--color-text-primary)", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "1px" }}>
                                AUTOMATION
                            </div>
                            <div style={{ fontSize: "2rem", color: "#ff4d4f", fontWeight: 800 }}>≠</div>
                            <div style={{ padding: "16px 32px", background: "rgba(255, 77, 79, 0.1)", borderRadius: "12px", border: "1px solid rgba(255, 77, 79, 0.2)", color: "#ff4d4f", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "1px" }}>
                                ABSTRACTION
                            </div>
                        </div>

                        <div style={{ height: "40px", width: "2px", background: "var(--color-border-secondary)", margin: "0 auto 32px" }} />

                        <div style={{
                            padding: "24px", background: "linear-gradient(135deg, rgba(255, 106, 61, 0.1), transparent)",
                            border: "1px solid var(--color-accent)", borderRadius: "16px",
                            boxShadow: "0 8px 32px rgba(255, 106, 61, 0.15)", transform: "translateY(-10px)",
                            transition: "all 0.3s ease", cursor: "default"
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-14px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(255, 106, 61, 0.25)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(255, 106, 61, 0.15)"; }}
                        >
                            <h3 style={{ margin: 0, color: "var(--color-text-primary)", fontSize: "1.3rem", fontWeight: 800, marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                                <span style={{ color: "var(--color-accent)" }}>⚙️</span> Controlled Reproducibility
                            </h3>
                            <p style={{ margin: 0, color: "var(--color-text-secondary)", fontSize: "1.1rem", lineHeight: 1.6, maxWidth: "600px", marginInline: "auto" }}>
                                You are encoding the entire environment setup into a single, deterministic execution step. Every time this runs, the result is identical.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* WARNINGS */}
            <Section title="Important Notes">
                <RuleList
                    items={[
                        "Ensure Node.js LTS (20+) is installed before running",
                        "Do NOT modify versions inside the command",
                        "Run only inside a clean/empty folder",
                        "Internet connection required for dependency installation",
                    ]}
                />
            </Section>

        </div>
    );
}