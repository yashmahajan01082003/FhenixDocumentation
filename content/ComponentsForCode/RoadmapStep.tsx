import React from "react";

type RoadmapStepProps = {
    stepNumber: string;
    title: string;
    description: string;
    items: string[];
    isActive?: boolean;
    isLast?: boolean;
};

export default function RoadmapStep({
    stepNumber,
    title,
    description,
    items,
    isActive = false,
    isLast = false
}: RoadmapStepProps) {
    return (
        <div style={{ display: "flex", gap: "24px", position: "relative", marginBottom: isLast ? 0 : 32 }}>
            {/* Timeline Vertical Line */}
            {!isLast && (
                <div
                    style={{
                        position: "absolute",
                        left: 20,
                        top: 48,
                        bottom: -32,
                        width: 2,
                        background: isActive
                            ? "linear-gradient(to bottom, var(--color-accent), rgba(255, 106, 61, 0.1))"
                            : "var(--color-border-secondary)",
                    }}
                />
            )}

            {/* Glowing Node */}
            <div style={{
                position: "relative",
                flexShrink: 0,
                width: 42,
                height: 42,
                borderRadius: 21,
                background: isActive ? "var(--color-bg-secondary)" : "var(--color-bg-tertiary)",
                border: `2px solid ${isActive ? "var(--color-accent)" : "var(--color-border-secondary)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: isActive ? "var(--color-accent)" : "var(--color-text-muted)",
                fontSize: 14,
                fontWeight: 700,
                boxShadow: isActive ? "0 0 20px rgba(255, 106, 61, 0.3)" : "none",
                zIndex: 2,
                fontFamily: "var(--font-mono)",
            }}>
                {stepNumber}
            </div>

            {/* Content Card */}
            <div
                style={{
                    flex: 1,
                    background: "var(--color-bg-tertiary)",
                    border: "1px solid var(--color-border-primary)",
                    borderRadius: 16,
                    padding: "24px",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                }}
                className="roadmap-card"
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.borderColor = isActive ? "var(--color-accent)" : "var(--color-border-secondary)";
                    e.currentTarget.style.boxShadow = isActive ? "0 8px 30px rgba(255, 106, 61, 0.15)" : "0 8px 24px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "var(--color-border-primary)";
                    e.currentTarget.style.boxShadow = "none";
                }}
            >
                {/* Subtle gradient background glow for active step */}
                {isActive && (
                    <div style={{
                        position: "absolute",
                        top: 0, right: 0, width: 200, height: 200,
                        background: "radial-gradient(circle at top right, rgba(255, 106, 61, 0.1), transparent 70%)",
                        pointerEvents: "none",
                    }} />
                )}

                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 12, marginTop: 0 }}>
                    {title}
                </h3>

                <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>
                    {description}
                </p>

                {items.length > 0 && (
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                        gap: "10px",
                    }}>
                        {items.map((item, idx) => (
                            <div key={idx} style={{
                                display: "flex", alignItems: "center", gap: 8,
                                fontSize: 13, color: "var(--color-text-secondary)",
                                background: "var(--color-bg-secondary)",
                                padding: "6px 12px", borderRadius: 8,
                                border: "1px solid var(--color-border-primary)",
                            }}>
                                <div style={{ width: 4, height: 4, borderRadius: 2, background: "var(--color-accent)", opacity: 0.8 }} />
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
