import React from "react";

type DiagramBoxProps = {
    title: string;
    description: string;
    steps: {
        title: string;
        details: string;
        highlight?: boolean;
    }[];
};

export default function DiagramBox({ title, description, steps }: DiagramBoxProps) {
    return (
        <div style={{
            background: "linear-gradient(180deg, var(--color-bg-secondary) 0%, var(--color-bg-tertiary) 100%)",
            border: "1px solid var(--color-border-primary)",
            borderRadius: 16,
            padding: "32px",
            marginBottom: 40,
            position: "relative",
            overflow: "hidden",
        }}>
            {/* Background glowing blob */}
            <div style={{
                position: "absolute",
                top: -50, left: "50%",
                transform: "translateX(-50%)",
                width: 300, height: 100,
                background: "var(--color-accent)",
                opacity: 0.05,
                filter: "blur(60px)",
                pointerEvents: "none"
            }} />

            <div style={{ textAlign: "center", marginBottom: 32 }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 12, marginTop: 0 }}>
                    {title}
                </h3>
                <p style={{ fontSize: "14.5px", color: "var(--color-text-secondary)", maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
                    {description}
                </p>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                position: "relative"
            }}>
                {/* Connecting Line */}
                <div style={{
                    position: "absolute",
                    left: "50%",
                    top: 20,
                    bottom: 20,
                    width: 2,
                    background: "var(--color-border-secondary)",
                    transform: "translateX(-50%)",
                    zIndex: 0,
                    opacity: 0.5,
                }} className="diagram-connector-line" />

                {steps.map((step, idx) => (
                    <div key={idx} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 24,
                        position: "relative",
                        zIndex: 1,
                    }}>
                        {/* Empty spacer for alternating layout */}
                        {idx % 2 !== 0 && <div style={{ flex: 1 }} className="diagram-spacer" />}

                        {/* Node */}
                        <div style={{
                            width: 36, height: 36, borderRadius: 18,
                            background: step.highlight ? "var(--color-accent)" : "var(--color-bg-elevated)",
                            border: `4px solid var(--color-bg-secondary)`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: step.highlight ? "#fff" : "var(--color-text-muted)",
                            fontSize: 14, fontWeight: 700, flexShrink: 0,
                            boxShadow: step.highlight ? "0 0 20px rgba(255, 106, 61, 0.4)" : "none",
                            margin: "0 auto",
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)"
                        }}>
                            {idx + 1}
                        </div>

                        {/* Content Box */}
                        <div style={{
                            flex: 1,
                            background: "var(--color-bg-primary)",
                            border: `1px solid ${step.highlight ? "var(--color-accent-subtle)" : "var(--color-border-primary)"}`,
                            borderRadius: 12,
                            padding: "16px 20px",
                            textAlign: idx % 2 === 0 ? "right" : "left",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                            marginLeft: idx % 2 === 0 ? 0 : "40px",
                            marginRight: idx % 2 === 0 ? "40px" : 0,
                        }}>
                            <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 6, marginTop: 0 }}>
                                {step.title}
                            </h4>
                            <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>
                                {step.details}
                            </p>
                        </div>

                        {/* Empty spacer for alternating layout */}
                        {idx % 2 === 0 && <div style={{ flex: 1 }} className="diagram-spacer" />}
                    </div>
                ))}
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .diagram-connector-line { left: 24px !important; transform: none !important; }
                    .diagram-spacer { display: none !important; }
                    .diagram-node { left: 24px !important; transform: translateX(-50%) !important; margin: 0 !important; }
                }
            `}</style>
        </div>
    );
}
