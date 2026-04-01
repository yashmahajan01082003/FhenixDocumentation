"use client";

import Section from "@/content/ComponentsForCode/Section";
import RoadmapStep from "@/content/ComponentsForCode/RoadmapStep";

export default function WorkshopRoadmap() {
    return (
        <div style={{ paddingBottom: "40px" }}>
            <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 32 }}>
                You've completed Phase 0 &mdash; you now understand the problem, the breakthrough, and how Fhenix changes everything.
                <br />
                Now it's time to move from <strong>understanding &rarr; building</strong>.
            </p>

            <Section title="Phases of Development">
                <div style={{ marginTop: 32 }}>
                    <RoadmapStep
                        stepNumber="0"
                        title="Phase 0 Completed"
                        description="You've grasped the core concepts of Fully Homomorphic Encryption."
                        items={[
                            "Why privacy matters",
                            "Problems with public ledgers",
                            "FHE intuition",
                            "How Fhenix works",
                        ]}
                    />

                    <RoadmapStep
                        stepNumber="1"
                        title="Phase 1: Getting Started"
                        description="Your first hands-on interaction with Fhenix."
                        items={[
                            "Project setup",
                            "Fhenix client setup",
                            "Encrypt your first value",
                            "Understand the basic flow",
                        ]}
                        isActive={true}
                    />

                    <RoadmapStep
                        stepNumber="2"
                        title="Phase 2: Build & Test Locally"
                        description="Writing and validating your smart contracts on a local network."
                        items={[
                            "Create a contract",
                            "Use encrypted inputs",
                            "Run local computations",
                            "Test everything locally",
                        ]}
                    />

                    <RoadmapStep
                        stepNumber="3"
                        title="Phase 3: Deploy to Testnet"
                        description="Taking your application to the public Sepolia testnet."
                        items={[
                            "Deploy your contract",
                            "Connect to Sepolia",
                            "Verify deployment",
                        ]}
                    />

                    <RoadmapStep
                        stepNumber="4"
                        title="Phase 4: Frontend + Wallet"
                        description="Connecting users to your confidential smart contract via Next.js."
                        items={[
                            "Build UI (Next.js)",
                            "Connect wallet",
                            "Send encrypted inputs",
                            "Read & decrypt results",
                        ]}
                        isLast={true}
                    />
                </div>
            </Section>

            <Section title="Workshop Goals">
                <div style={{
                    background: "linear-gradient(145deg, var(--color-bg-secondary), var(--color-bg-primary))",
                    border: "1px solid var(--color-border-primary)",
                    borderRadius: 16,
                    padding: 24,
                    marginTop: 16,
                }}>
                    <p style={{ margin: 0, marginBottom: 16, color: "var(--color-text-primary)" }}>
                        By the end of this workshop, you will have:
                    </p>

                    <ul style={{ margin: 0, paddingLeft: 20, color: "var(--color-text-secondary)" }}>
                        <li style={{ marginBottom: 8 }}>A working Fhenix smart contract</li>
                        <li style={{ marginBottom: 8 }}>Deployed on testnet</li>
                        <li style={{ marginBottom: 0 }}>A full frontend interacting with it</li>
                    </ul>

                    <div style={{
                        marginTop: 24,
                        padding: "16px 20px",
                        background: "var(--color-accent-subtle)",
                        borderRadius: 12,
                        borderLeft: "4px solid var(--color-accent)",
                        color: "var(--color-accent)",
                        fontWeight: 600,
                        fontStyle: "italic",
                        fontSize: 15,
                    }}>
                        "From idea &rarr; to working encrypted application."
                    </div>
                </div>

                <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}>
                    <button style={{
                        padding: "12px 24px",
                        background: "var(--color-accent)",
                        color: "#fff",
                        border: "none",
                        borderRadius: 10,
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: "pointer",
                        boxShadow: "0 4px 14px rgba(255, 106, 61, 0.3)",
                        transition: "transform 0.2s",
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                    >
                        Start Phase 1
                    </button>
                </div>
            </Section>
        </div>
    );
}