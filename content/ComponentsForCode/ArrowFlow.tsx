import React from "react";

type ArrowFlowProps = {
    steps: string[];
};

export default function ArrowFlow({ steps }: ArrowFlowProps) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            background: "linear-gradient(145deg, var(--color-bg-secondary), rgba(0,0,0,0.5))",
            padding: "32px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 106, 61, 0.2)",
            marginBottom: "40px",
            marginLeft: "20px",
            marginRight: "20px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 12px 32px rgba(0,0,0,0.2)"
        }}>
            {/* Background Glow */}
            <div style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                width: "80%", height: "100%", background: "var(--color-accent)",
                filter: "blur(120px)", opacity: 0.1, zIndex: 0
            }} />

            {steps.map((step, idx) => (
                <React.Fragment key={idx}>
                    <div style={{
                        position: "relative",
                        zIndex: 1,
                        background: idx === steps.length - 1
                            ? "linear-gradient(135deg, var(--color-accent), #e55a2d)"
                            : "rgba(255, 255, 255, 0.05)",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        border: idx === steps.length - 1 ? "none" : "1px solid var(--color-border-secondary)",
                        color: idx === steps.length - 1 ? "#fff" : "var(--color-text-primary)",
                        fontWeight: 700,
                        fontSize: "14.5px",
                        boxShadow: idx === steps.length - 1 ? "0 4px 16px rgba(255,106,61,0.4)" : "0 4px 12px rgba(0,0,0,0.1)",
                        backdropFilter: "blur(10px)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        cursor: "default"
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-3px)";
                            if (idx !== steps.length - 1) {
                                e.currentTarget.style.borderColor = "var(--color-accent-subtle)";
                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            if (idx !== steps.length - 1) {
                                e.currentTarget.style.borderColor = "var(--color-border-secondary)";
                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                            }
                        }}
                    >
                        {step}
                    </div>

                    {idx < steps.length - 1 && (
                        <div style={{
                            position: "relative", zIndex: 1,
                            color: "var(--color-accent)", opacity: 0.8,
                            display: "flex", alignItems: "center"
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
