"use client";

import React from "react";
import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";
import VerticalFlow from "@/content/ComponentsForCode/VerticalFlow";
import { FileCode, Link, CheckCircle, Network, RefreshCw, Zap, Terminal, ClipboardList, PackageOpen } from "lucide-react";

export default function CompileFlowDocs() {
    const internalFlowSteps = [
        { label: "Scan Contracts", desc: "Hardhat scans all contracts in /contracts folder", icon: <FileCode size={28} /> },
        { label: "Resolve Imports", desc: "Resolves all imports (like FHE.sol, plugins, libraries)", icon: <Link size={28} /> },
        { label: "Validation", desc: "Checks syntax and type correctness", icon: <CheckCircle size={28} /> },
        { label: "Dependency Graph", desc: "Builds dependency graph of all contracts", icon: <Network size={28} /> },
        { label: "Generate IR", desc: "Converts Solidity → Intermediate Representation (IR)", icon: <RefreshCw size={28} /> },
        { label: "Optimization", desc: "Optimizes gas and execution logic", icon: <Zap size={28} /> },
        { label: "EVM Bytecode", desc: "Converts IR → EVM Bytecode", icon: <Terminal size={28} /> },
        { label: "ABI Generation", desc: "Generates ABI for each contract", icon: <ClipboardList size={28} /> },
        { label: "Build Artifacts", desc: "Stores everything in build artifacts", icon: <PackageOpen size={28} /> }
    ];

    return (
        <div style={{ paddingBottom: "60px", animation: "fadeIn 0.6s ease-out" }}>
            {/* COMMAND */}
            <Section title="1. Command to Compile Contract">
                <CodeSnippet code={`npx hardhat compile`} />
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginTop: 12 }}>
                    This command tells Hardhat to convert your Solidity code into machine-readable format.
                </p>
            </Section>

            {/* INTERNAL FLOW */}
            <Section title="2. What Happens Internally">
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                    Think of this as converting human instructions into blockchain-ready machine code. Behind the scenes, the compiler runs through an intricate pipeline:
                </p>

                <div style={{ position: "relative", paddingLeft: "24px", marginBottom: "40px" }}>
                    {/* Spine */}
                    <div style={{ position: "absolute", left: 0, top: "24px", bottom: "24px", width: "4px", background: "linear-gradient(to bottom, var(--color-accent), transparent)", borderRadius: "2px" }} />

                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        {internalFlowSteps.map((step, idx) => (
                            <div key={idx} style={{
                                display: "flex", alignItems: "center", gap: "20px",
                                background: "var(--color-bg-secondary)", border: "1px solid var(--color-border-primary)",
                                padding: "16px 24px", borderRadius: "16px", position: "relative",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.05)", transition: "transform 0.2s"
                            }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateX(4px)"; e.currentTarget.style.borderColor = "var(--color-accent-subtle)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.borderColor = "var(--color-border-primary)"; }}
                            >
                                {/* Connection dot */}
                                <div style={{ position: "absolute", left: "-28px", width: "12px", height: "12px", borderRadius: "6px", background: "var(--color-bg-primary)", border: "3px solid var(--color-accent)", zIndex: 2 }} />

                                <div style={{ color: "var(--color-text-secondary)" }}>{step.icon}</div>
                                <div>
                                    <h4 style={{ color: "var(--color-text-primary)", fontWeight: 700, fontSize: "15px", marginBottom: "4px" }}>{step.label}</h4>
                                    <p style={{ color: "var(--color-text-secondary)", fontSize: "14px", margin: 0 }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* OUTPUT */}
            <Section title="3. Output Generated After Compilation">
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 16 }}>
                    After compilation, Hardhat creates these important folders:
                </p>

                <CodeSnippet
                    code={`artifacts/
├── contracts/
│   └── ConfidentialVault.sol/
│       └── ConfidentialVault.json ← ABI + Bytecode

cache/ ← speeds up future builds`}
                />

                <div style={{ marginTop: 24, padding: "24px", background: "var(--color-bg-secondary)", borderRadius: "16px", border: "1px solid var(--color-border-primary)" }}>
                    <RuleList
                        items={[
                            "ABI (Application Binary Interface) → how frontend talks to contract",
                            "Bytecode → actual machine code deployed on blockchain",
                            "Metadata → compiler + version info",
                            "Cache → avoids recompiling unchanged files",
                        ]}
                    />
                </div>
            </Section>

            {/* HOW USED LATER */}
            <Section title="4. How This Output Is Used Later">
                <RuleList
                    items={[
                        "Deployment scripts use Bytecode to deploy contract",
                        "Frontend uses ABI to call functions like deposit()",
                        "Wallets encode transactions using ABI",
                        "Debugging tools read metadata for errors",
                    ]}
                />
            </Section>

            {/* FINAL FLOW */}
            <Section title="5. Simple Mental Model">
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                    This is the full pipeline from code &rarr; blockchain execution.
                </p>

                <VerticalFlow
                    steps={[
                        "Solidity Code",
                        "Compilation (npx hardhat compile)",
                        "artifacts/ (ABI + Bytecode)",
                        "Deployment Script",
                        "Blockchain Contract",
                        "Frontend Interaction"
                    ]}
                />
            </Section>

        </div>
    );
}