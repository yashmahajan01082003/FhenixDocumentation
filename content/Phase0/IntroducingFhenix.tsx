"use client";

import Section from "@/content/ComponentsForCode/Section";
import DiagramBox from "@/content/ComponentsForCode/DiagramBox";

export default function IntroducingFhenix() {
    return (
        <div style={{ paddingBottom: "40px" }}>
            <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 32 }}>
                We've seen the problem. We've seen the breakthrough with Fully Homomorphic Encryption. Now the question is... How do we actually use this in real applications?
            </p>

            <Section title="The Blindfolded Smart Contract">
                <p style={{ marginBottom: 32 }}>
                    Imagine a smart contract that can run perfectly... but cannot see your data.
                </p>

                <DiagramBox
                    title="Encrypted Execution Architecture"
                    description="Fhenix enables end-to-end encrypted smart contract execution."
                    steps={[
                        { title: "User Input", details: "Client encrypts data perfectly locally.", highlight: false },
                        { title: "Smart Contract", details: "Receives encrypted strings and executes logic on them completely blind.", highlight: true },
                        { title: "Fhenix Network", details: "Produces encrypted results without exposing the underlying values.", highlight: false },
                        { title: "Decryption", details: "Only authorized wallets can decrypt the final state.", highlight: true }
                    ]}
                />
            </Section>

            <Section title="What Fhenix Does">
                <p style={{ marginBottom: 20 }}>
                    Fhenix brings this idea to life. You don't need to build complex cryptography from scratch. Fhenix gives you the tools to just build.
                </p>

                <div style={{
                    display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 32
                }}>
                    {[
                        "Run contracts on encrypted data",
                        "Perform real FHE computation",
                        "Keep sensitive data hidden",
                        "Authorized decryption only"
                    ].map((feature, i) => (
                        <div key={i} style={{
                            padding: "16px", borderRadius: 12, background: "var(--color-bg-secondary)",
                            border: "1px solid var(--color-border-primary)", color: "var(--color-text-primary)",
                            fontSize: 14, display: "flex", gap: 12, alignItems: "center"
                        }}>
                            <div style={{ width: 6, height: 6, borderRadius: 3, background: "var(--color-accent)" }} />
                            {feature}
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Why Build with Fhenix?">
                <div style={{
                    display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, marginBottom: 32
                }}>
                    {[
                        { title: "Privacy by default", desc: "User data is never exposed to nodes." },
                        { title: "Full computation", desc: "Not just storage, real logic on encrypted data." },
                        { title: "No crypto headache", desc: "Focus on your app, not the math." },
                        { title: "New use cases", desc: "Build apps that were impossible before." }
                    ].map((feature, i) => (
                        <div key={i} style={{
                            padding: "20px", borderRadius: 16, background: "var(--color-bg-tertiary)",
                            border: "1px solid var(--color-border-secondary)"
                        }}>
                            <strong style={{ display: "block", color: "var(--color-text-primary)", fontSize: 15, marginBottom: 8 }}>
                                {feature.title}
                            </strong>
                            <span style={{ color: "var(--color-text-secondary)", fontSize: 14, lineHeight: 1.5 }}>
                                {feature.desc}
                            </span>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="What You Can Build">
                <div style={{ marginBottom: 32 }}>
                    <ul style={{
                        listStyle: "none", padding: 0, margin: 0,
                        display: "flex", flexDirection: "column", gap: 12
                    }}>
                        {[
                            "Confidential DeFi (private balances & trades)",
                            "Private voting systems",
                            "Secure healthcare applications",
                            "Data marketplaces without data exposure"
                        ].map((item, idx) => (
                            <li key={idx} style={{
                                padding: "12px 16px", borderRadius: 10, background: "var(--color-bg-secondary)",
                                borderLeft: "3px solid var(--color-accent)", color: "var(--color-text-primary)",
                                fontSize: 14
                            }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{
                    padding: "24px", textAlign: "center",
                    background: "var(--color-bg-elevated)", borderRadius: 16,
                    border: "1px dashed var(--color-border-secondary)",
                    marginTop: 40
                }}>
                    <p style={{ color: "var(--color-text-primary)", fontSize: 16, marginBottom: 20 }}>
                        Until now, blockchains forced a trade-off: <br />
                        <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>Transparency &rarr; no privacy</span> OR <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>Privacy &rarr; no trust</span>
                    </p>
                    <p style={{ color: "var(--color-text-primary)", fontSize: 18, fontWeight: 700, margin: 0 }}>
                        Fhenix removes that trade-off. You get both.
                    </p>
                </div>

                <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
                    <button style={{
                        padding: "14px 32px",
                        background: "linear-gradient(135deg, var(--color-accent), #e55a2d)",
                        color: "#fff",
                        border: "none",
                        borderRadius: 12,
                        fontWeight: 700,
                        fontSize: 15,
                        cursor: "pointer",
                        boxShadow: "0 8px 24px rgba(255, 106, 61, 0.25)",
                        transition: "all 0.2s"
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 12px 32px rgba(255, 106, 61, 0.35)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 106, 61, 0.25)";
                        }}
                    >
                        Start Building with Fhenix
                    </button>
                </div>
            </Section>
        </div>
    );
}