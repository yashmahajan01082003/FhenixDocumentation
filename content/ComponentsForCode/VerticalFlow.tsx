import React from "react";

type VerticalFlowProps = {
    steps: string[];
};

export default function VerticalFlow({ steps }: VerticalFlowProps) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            background: "currentColor", // to be overridden
            backgroundColor: "var(--color-bg-secondary)",
            padding: "24px 32px",
            borderRadius: "16px",
            border: "1px solid var(--color-border-primary)",
            marginBottom: "32px",
            position: "relative",
        }}>
            {/* Background Line */}
            <div style={{
                position: "absolute",
                top: "40px",
                bottom: "40px",
                left: "48px",
                width: "2px",
                background: "var(--color-border-secondary)",
                zIndex: 0
            }} />

            {steps.map((step, idx) => (
                <div key={idx} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    position: "relative",
                    zIndex: 1,
                }}>
                    <div style={{
                        width: "32px", height: "32px", borderRadius: "16px",
                        background: "var(--color-bg-primary)",
                        border: "2px solid var(--color-accent)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "var(--color-accent)",
                        fontSize: "12px", fontWeight: "bold",
                    }}>
                        {idx + 1}
                    </div>

                    <div style={{
                        flex: 1,
                        background: "var(--color-bg-elevated)",
                        padding: "12px 20px",
                        borderRadius: "10px",
                        border: "1px solid var(--color-border-primary)",
                        color: "var(--color-text-primary)",
                        fontWeight: 600,
                        fontSize: "14px",
                    }}>
                        {step}
                    </div>
                </div>
            ))}
        </div>
    );
}
