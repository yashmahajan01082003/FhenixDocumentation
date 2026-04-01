"use client";

import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeBlock from "@/content/ComponentsForCode/CodeBlock";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";
import FeatureCard from "@/content/ComponentsForCode/FeatureCard";
import { Building, Wrench, BookOpen, Zap } from "lucide-react";

export default function Phase1InstallationSetup() {
    return (
        <div style={{ paddingBottom: "40px" }}>
            {/* PREREQUISITE */}
            <Section title="0. Prerequisite (MANDATORY)">
                <RuleList
                    items={[
                        "Install Node.js LTS (version 22 or higher)",
                        "Do NOT use Node 16 or 18",
                        "Use only stable LTS builds (no experimental versions)",
                    ]}
                />

                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginTop: 12 }}>
                    Hardhat and CoFHE depend on modern Node.js runtime behavior for deterministic execution.
                </p>
            </Section>

            {/* STEP 1 */}
            <Section title="1. Initialize Node Project">
                <CodeBlock file="terminal" code={`npm init -y`} />

                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginTop: 12, marginBottom: 16 }}>
                    Creates the base Node.js project.
                </p>

                <CodeSnippet
                    code={`project-root/
└── package.json`}
                />
            </Section>

            {/* STEP 2 */}
            <Section title="2. Install Hardhat + Tooling Dependencies">
                <CodeSnippet
                    code={`npm install --save-dev hardhat@^2.22.3 @nomicfoundation/hardhat-toolbox@^6.1.2 typescript@^6.0.2 ts-node@^10.9.2`}
                />

                <div style={{ marginTop: 24, marginBottom: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    {[
                        { title: "hardhat", desc: "Core Ethereum development environment", icon: <Building size={32} strokeWidth={1.5} />, color: "var(--color-accent)" },
                        { title: "hardhat-toolbox", desc: "Provides ethers v6, chai, testing utilities", icon: <Wrench size={32} strokeWidth={1.5} />, color: "#60a5fa" },
                        { title: "typescript", desc: "Enables typed scripting environment", icon: <BookOpen size={32} strokeWidth={1.5} />, color: "#3178c6" },
                        { title: "ts-node", desc: "Runs TypeScript files without manual compilation", icon: <Zap size={32} strokeWidth={1.5} />, color: "#10b981" }
                    ].map((tool, idx) => (
                        <div key={idx} style={{
                            padding: "20px", background: "var(--color-bg-secondary)",
                            borderRadius: "16px", border: "1px solid var(--color-border-primary)",
                            display: "flex", gap: "16px", alignItems: "center",
                            transition: "all 0.3s ease", cursor: "default"
                        }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderLeft = `4px solid ${tool.color}`; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderLeft = "1px solid var(--color-border-primary)"; e.currentTarget.style.boxShadow = "none"; }}
                        >
                            <div style={{ color: "var(--color-text-secondary)", opacity: 0.8 }}>{tool.icon}</div>
                            <div>
                                <h4 style={{ color: "var(--color-text-primary)", fontSize: "1.1rem", fontWeight: 700, margin: "0 0 4px 0" }}>{tool.title}</h4>
                                <p style={{ color: "var(--color-text-secondary)", fontSize: "14px", margin: 0 }}>{tool.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <CodeSnippet
                    code={`project-root/
├── package.json
├── package-lock.json
└── node_modules/`}
                />
            </Section>

            {/* STEP 3 */}
            <Section title="3. Install CoFHE + Fhenix Dependencies">
                <div style={{ marginBottom: 24 }}>
                    <CodeSnippet
                        code={`npm install @cofhe/hardhat-plugin@^0.4.0 @cofhe/sdk@0.4.0 @fhenixprotocol/cofhe-contracts@0.1.0`}
                    />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
                    <FeatureCard
                        title="@cofhe/hardhat-plugin"
                        description="Integrates Fully Homomorphic Encryption (FHE) into the Hardhat workflow."
                        bullets={[
                            "Modifies compile, deploy, and execution pipeline for encrypted data",
                            "Provides a mock FHE runtime locally",
                            "Allows encrypted logic testing without a real network"
                        ]}
                    />

                    <FeatureCard
                        title="@cofhe/sdk"
                        description="Acts as the client-side bridge for encryption workflows."
                        bullets={[
                            "Encrypts inputs before sending to contracts",
                            "Manages permits required to decrypt securely",
                            "Ensures sensitive data is never exposed in plaintext"
                        ]}
                    />

                    <FeatureCard
                        title="@fhenixprotocol/cofhe-contracts"
                        description="Provides Solidity-level encrypted primitives."
                        bullets={[
                            "Includes encrypted data types (uint, bool)",
                            "Enables smart contracts to compute directly on encrypted values",
                            "Ensures compatibility with the CoFHE execution model"
                        ]}
                    />
                </div>

                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginTop: 16, lineHeight: 1.6 }}>
                    These packages together enable a full encrypted execution pipeline: inputs are encrypted on the client, processed securely inside smart contracts, and only decrypted when explicitly permitted. All dependencies are installed inside <strong>node_modules</strong> and automatically linked into the Hardhat environment.
                </p>
            </Section>

            {/* STEP 4 */}
            <Section title="4. Initialize Hardhat Project">
                <CodeBlock file="terminal" code={`npx hardhat`} />

                <div style={{ marginTop: 20, marginBottom: 20 }}>
                    <RuleList
                        items={[
                            "Select: Create TypeScript project",
                            "Accept sample project",
                        ]}
                    />
                </div>

                <CodeSnippet
                    code={`project-root/
├── contracts/
│   └── Lock.sol
├── ignition/
│   └── modules/
│       └── Lock.ts
├── scripts/
├── test/
│   └── Lock.ts
├── hardhat.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── node_modules/
├── .gitignore
└── README.md`}
                />
            </Section>

            {/* CONFIG */}
            <Section title="5. Hardhat Configuration">
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 12 }}>
                    File: <code style={{ background: "var(--color-bg-elevated)", padding: "2px 6px", borderRadius: 4 }}>hardhat.config.ts</code>
                </p>

                <CodeSnippet
                    code={`import "@cofhe/hardhat-plugin";
import "@nomicfoundation/hardhat-toolbox";

const config = {
    solidity: {
        version: "0.8.28", // or 0.8.25
        settings: {
            evmVersion: "cancun",
        },
    },
};

export default config;`}
                />

                <div style={{ marginTop: 24 }}>
                    <RuleList
                        items={[
                            "CoFHE plugin must be loaded to enable encrypted execution",
                            "Toolbox provides ethers v6 and testing utilities",
                            "Solidity version must match compiler expectations",
                            "EVM Cancun ensures compatibility with latest features",
                        ]}
                    />
                </div>
            </Section>

            {/* OUTCOME */}
            <Section title="6. Outcome">
                <RuleList
                    items={[
                        "Node.js project initialized",
                        "Hardhat TypeScript project created",
                        "CoFHE plugin installed and configured",
                        "Fhenix SDK installed",
                        "Project structure generated",
                        "Ready for development",
                    ]}
                />
            </Section>

        </div>
    );
}