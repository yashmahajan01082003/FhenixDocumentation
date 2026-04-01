"use client";

import Section from "@/content/ComponentsForCode/Section";
import FlowCard from "@/content/ComponentsForCode/FlowCard";

export default function HowFHEWorks() {
    return (
        <div style={{ paddingBottom: "40px" }}>
            <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 40 }}>
                It might feel like magic... but there's a real process behind it. Let's break it down step by step into the 5 core mechanics that define Fully Homomorphic Encryption.
            </p>

            <Section title="The Processing Pipeline">
                <div style={{ marginTop: 24 }}>
                    <FlowCard
                        step={1}
                        title="Turn Data into a Secret Code"
                        description="Your data (like a number or balance) is transformed into a special encrypted form. It no longer looks like a number... it looks like random noise. Only you have the key to understand it."
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        }
                    />

                    <FlowCard
                        step={2}
                        title="Special Math Rules"
                        description="Here's the real trick: The encrypted data still follows mathematical rules. So when a computer performs operations on encrypted data, the results align perfectly."
                        highlightLines={[
                            "Adding encrypted values = <strong>encrypted sum</strong>",
                            "Multiplying encrypted values = <strong>encrypted result</strong>"
                        ]}
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            </svg>
                        }
                    />

                    <FlowCard
                        step={3}
                        title="Compute Without Seeing"
                        description="The system runs logic directly on encrypted data. It follows instructions perfectly... but it is completely blind to the actual data. Like solving a puzzle without ever seeing the pieces."
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg>
                        }
                    />

                    <FlowCard
                        step={4}
                        title="Get the Encrypted Result"
                        description="After computation, the result is still encrypted. No one has seen anything yet. The server or node doing the processing has exactly zero knowledge of what occurred."
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
                        }
                    />

                    <FlowCard
                        step={5}
                        title="Reveal Only at the End"
                        description="Only the original person with the decryption key can translate the result back into plaintext. And when they do... the answer is exactly correct."
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        }
                    />
                </div>
            </Section>

            <Section title="Why This Feels Like Magic">
                <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 24,
                }}>
                    <div style={{
                        padding: 24, borderRadius: 16, background: "var(--color-bg-secondary)", border: "1px solid var(--color-border-primary)"
                    }}>
                        <h4 style={{ color: "var(--color-text-primary)", fontSize: 16, marginBottom: 12 }}>Under the Hood</h4>
                        <ul style={{ color: "var(--color-text-secondary)", margin: 0, paddingLeft: 20 }}>
                            <li style={{ marginBottom: 8 }}>The system never sees your data</li>
                            <li style={{ marginBottom: 8 }}>But it still computes perfectly</li>
                            <li>Your secrets are never exposed</li>
                        </ul>
                    </div>

                    <div style={{
                        padding: 24, borderRadius: 16, background: "var(--color-bg-secondary)", border: "1px solid var(--color-border-primary)"
                    }}>
                        <h4 style={{ color: "var(--color-text-primary)", fontSize: 16, marginBottom: 12 }}>Analogy</h4>
                        <ul style={{ color: "var(--color-text-secondary)", margin: 0, paddingLeft: 20 }}>
                            <li style={{ marginBottom: 8 }}>Doing math without seeing numbers</li>
                            <li style={{ marginBottom: 8 }}>Opening a box without unlocking it</li>
                            <li>A machine that works while blindfolded</li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    marginTop: 32, padding: "20px", textAlign: "center",
                    background: "var(--color-accent-subtle)", borderRadius: 12,
                    color: "var(--color-accent)", fontWeight: 600, fontSize: 16,
                }}>
                    "It's not magic... It's mathematics making privacy possible."
                </div>

                <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
                    <button style={{
                        padding: "12px 32px",
                        background: "var(--color-bg-elevated)",
                        color: "var(--color-text-primary)",
                        border: "1px solid var(--color-border-secondary)",
                        borderRadius: 10,
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: "pointer",
                        transition: "all 0.2s",
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--color-bg-tertiary)";
                            e.currentTarget.style.borderColor = "var(--color-text-muted)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "var(--color-bg-elevated)";
                            e.currentTarget.style.borderColor = "var(--color-border-secondary)";
                        }}
                    >
                        See FHE in Action
                    </button>
                </div>
            </Section>
        </div>
    );
}