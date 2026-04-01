"use client";

import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";
import { ScrollText, MapPin, Link as LinkIcon } from "lucide-react";

export default function FrontendConfigDocs() {
    return (
        <div style={{ paddingBottom: "60px", animation: "fadeIn 0.6s ease-out" }}>
            {/* INTRO */}
            <Section title="1. Why This Folder Exists">
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 12 }}>
                    Your frontend cannot directly understand Solidity contracts. It needs a bridge to interact with the blockchain.
                </p>
                <p style={{ fontSize: 15, color: "var(--color-accent)", fontWeight: 600 }}>
                    This config folder acts as that bridge.
                </p>
            </Section>

            {/* STRUCTURE */}
            <Section title="2. Config Folder Structure">
                <CodeSnippet
                    code={`src/
└── config/
    ├── abi.json
    └── contract.js`}
                />
                <div style={{ marginTop: 20 }}>
                    <RuleList
                        items={[
                            "abi.json → Describes contract functions",
                            "contract.js → Stores deployed contract address",
                            "Used by frontend to interact with blockchain",
                        ]}
                    />
                </div>
            </Section>

            {/* ABI EXPLANATION */}
            <Section title="3. What is ABI?">
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 12 }}>
                    ABI (Application Binary Interface) is a JSON file that defines how your frontend can call smart contract functions.
                    Think of it as a menu of all available contract functions.
                </p>
                <RuleList
                    items={[
                        "Lists all functions (deposit, getBalance, etc.)",
                        "Defines input/output types",
                        "Required for calling contract from frontend",
                    ]}
                />
            </Section>

            {/* ABI EXAMPLE */}
            <Section title="4. Example ABI Structure">
                <CodeSnippet
                    code={`{
    "name": "deposit",
    "inputs": [...],
    "outputs": [],
    "type": "function"
}`}
                />
                <p style={{ fontSize: 14, color: "var(--color-text-muted)", marginTop: 12 }}>
                    Each object represents a function or event in your contract.
                </p>
            </Section>

            {/* HOW TO GET ABI */}
            <Section title="5. How to Get abi.json">
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 16 }}>
                    ABI is automatically generated when you compile your smart contract.
                </p>
                <CodeSnippet code={`artifacts/contracts/ConfidentialVault.sol/ConfidentialVault.json`} />
                <div style={{ marginTop: 20, padding: 24, background: "var(--color-bg-secondary)", borderRadius: 16 }}>
                    <ol style={{ paddingLeft: 20, margin: 0, color: "var(--color-text-secondary)", fontSize: "14.5px", display: "flex", flexDirection: "column", gap: 12 }}>
                        <li>Run: <code>npx hardhat compile</code></li>
                        <li>Go to <code>artifacts/contracts/YourContract.sol/</code></li>
                        <li>Open the generated JSON file</li>
                        <li>Copy the <code>abi</code> array</li>
                        <li>Paste it into <code>src/config/abi.json</code></li>
                    </ol>
                </div>
            </Section>

            {/* CONTRACT FILE */}
            <Section title="6. contract.js (Contract Address)">
                <CodeSnippet code={`export const CONTRACT_ADDRESS = "YOUR_DEPLOYED_ADDRESS";`} />
                <div style={{ marginTop: 20 }}>
                    <RuleList
                        items={[
                            "Address is generated after deployment",
                            "Frontend uses it to locate contract on blockchain",
                            "Must match the network (Sepolia, etc.)",
                        ]}
                    />
                </div>
            </Section>

            {/* HOW THEY WORK TOGETHER */}
            <Section title="7. How ABI + Address Work Together">
                <p style={{ fontSize: 16, color: "var(--color-text-primary)", fontWeight: 500, marginBottom: 24 }}>
                    The relationship between these two pieces is critical for any decentralized application.
                </p>

                {/* VISUAL DIAGRAM */}
                <div style={{
                    display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: "16px", marginBottom: "40px",
                    background: "var(--color-bg-secondary)", padding: "32px", borderRadius: "24px", border: "1px solid var(--color-border-primary)",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
                }}>
                    <div style={{
                        flex: 1, minWidth: "220px", background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent)",
                        border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "16px", padding: "24px", textAlign: "center", position: "relative"
                    }}>
                        <div style={{ color: "#10b981", marginBottom: "12px", display: "flex", justifyContent: "center" }}><ScrollText size={32} /></div>
                        <h4 style={{ color: "var(--color-text-primary)", fontSize: "1.2rem", fontWeight: 800, marginBottom: "8px" }}>ABI.json</h4>
                        <div style={{ display: "inline-block", background: "#10b981", color: "#fff", padding: "4px 12px", borderRadius: "100px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                            The "How"
                        </div>
                        <p style={{ color: "var(--color-text-secondary)", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>
                            Provides the <strong>instructions</strong> and rules. Tells the frontend exactly how a function needs to be formatted before sending.
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", color: "var(--color-text-muted)" }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </div>

                    <div style={{
                        flex: 1, minWidth: "220px", background: "linear-gradient(135deg, rgba(255, 106, 61, 0.1), transparent)",
                        border: "1px solid rgba(255, 106, 61, 0.2)", borderRadius: "16px", padding: "24px", textAlign: "center", position: "relative"
                    }}>
                        <div style={{ color: "var(--color-accent)", marginBottom: "12px", display: "flex", justifyContent: "center" }}><MapPin size={32} /></div>
                        <h4 style={{ color: "var(--color-text-primary)", fontSize: "1.2rem", fontWeight: 800, marginBottom: "8px" }}>Address</h4>
                        <div style={{ display: "inline-block", background: "var(--color-accent)", color: "#fff", padding: "4px 12px", borderRadius: "100px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
                            The "Where"
                        </div>
                        <p style={{ color: "var(--color-text-secondary)", fontSize: "14px", lineHeight: "1.5", margin: 0 }}>
                            Provides the <strong>destination</strong>. Tells the transaction exactly which smart contract to execute the rules on.
                        </p>
                    </div>

                    <div style={{ width: "100%", height: "1px", background: "var(--color-border-secondary)", margin: "8px 0" }} />

                    <div style={{
                        width: "100%", background: "var(--color-bg-elevated)", border: "1px solid var(--color-border-secondary)",
                        borderRadius: "16px", padding: "20px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px"
                    }}>
                        <span style={{ color: "var(--color-text-secondary)" }}><LinkIcon size={24} /></span>
                        <p style={{ color: "var(--color-text-primary)", fontSize: "16px", fontWeight: 600, margin: 0 }}>
                            Together, they form the complete bridge to Web3 execution.
                        </p>
                    </div>
                </div>

            </Section>

            {/* FINAL */}
            <Section title="Final Insight">
                <div style={{
                    padding: "20px 24px", background: "linear-gradient(135deg, rgba(255,255,255,0.02), var(--color-bg-secondary))",
                    borderLeft: "4px solid var(--color-accent)", borderRadius: "8px", border: "1px solid var(--color-border-primary)"
                }}>
                    <p style={{ color: "var(--color-text-primary)", fontSize: "15px", fontWeight: 600, marginBottom: "8px" }}>
                        Without ABI + Address, your frontend cannot talk to your smart contract.
                    </p>
                    <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0 }}>
                        This config layer is what turns an ordinary UI into a powerful decentralized application.
                    </p>
                </div>
            </Section>

        </div>
    );
}