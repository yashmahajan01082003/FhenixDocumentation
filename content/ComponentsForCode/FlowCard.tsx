import React from "react";

type FlowCardProps = {
    step: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
    highlightLines?: string[];
};

export default function FlowCard({ step, title, description, icon, highlightLines = [] }: FlowCardProps) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                background: "var(--color-bg-secondary)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: 16,
                padding: "24px",
                position: "relative",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                overflow: "hidden",
                marginBottom: 24,
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-bg-tertiary)";
                e.currentTarget.style.borderColor = "var(--color-accent-subtle)";
                e.currentTarget.style.transform = "scale(1.01)";
                e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.12)";

                const stepBadge = e.currentTarget.querySelector('.flow-badge') as HTMLElement;
                if (stepBadge) {
                    stepBadge.style.background = "var(--color-accent)";
                    stepBadge.style.color = "#fff";
                }
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--color-bg-secondary)";
                e.currentTarget.style.borderColor = "var(--color-border-primary)";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";

                const stepBadge = e.currentTarget.querySelector('.flow-badge') as HTMLElement;
                if (stepBadge) {
                    stepBadge.style.background = "var(--color-bg-elevated)";
                    stepBadge.style.color = "var(--color-text-secondary)";
                }
            }}
        >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
                {/* Step Badge */}
                <div
                    className="flow-badge"
                    style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        width: 34, height: 34, borderRadius: 10,
                        background: "var(--color-bg-elevated)",
                        color: "var(--color-text-secondary)",
                        fontSize: 14, fontWeight: 700, fontFamily: "var(--font-mono)",
                        transition: "all 0.3s ease",
                        flexShrink: 0,
                    }}
                >
                    {step}
                </div>

                <div style={{ flex: 1, marginTop: 4 }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--color-text-primary)", margin: 0, marginBottom: 6 }}>
                        {title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6, margin: 0 }}>
                        {description}
                    </p>
                </div>

                {icon && (
                    <div style={{ color: "var(--color-accent)", opacity: 0.8, marginTop: 4 }}>
                        {icon}
                    </div>
                )}
            </div>

            {/* Highlighted key points (like math rules, etc) */}
            {highlightLines.length > 0 && (
                <div style={{
                    marginTop: 8, padding: "16px", borderRadius: 12,
                    background: "var(--color-bg-primary)",
                    border: "1px dashed var(--color-border-secondary)",
                }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {highlightLines.map((line, idx) => (
                            <li key={idx} style={{
                                display: "flex", alignItems: "center", gap: 10,
                                fontSize: 13.5, color: "var(--color-text-primary)",
                                marginBottom: idx === highlightLines.length - 1 ? 0 : 10,
                            }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span dangerouslySetInnerHTML={{ __html: line }} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
