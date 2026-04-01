import React from "react";

type FeatureCardProps = {
    title: string;
    description: string;
    bullets: string[];
};

export default function FeatureCard({ title, description, bullets }: FeatureCardProps) {
    return (
        <div style={{
            background: "var(--color-bg-secondary)",
            border: "1px solid var(--color-border-primary)",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "24px",
            transition: "all 0.3s ease",
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "var(--color-accent-subtle)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--color-border-primary)";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", margin: 0, marginBottom: "8px" }}>
                {title}
            </h3>
            <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", margin: 0, marginBottom: "16px", lineHeight: 1.5 }}>
                {description}
            </p>

            <ul style={{ margin: 0, paddingLeft: "8px", listStyle: "none" }}>
                {bullets.map((bullet, idx) => (
                    <li key={idx} style={{
                        display: "flex", alignItems: "flex-start", gap: "10px",
                        fontSize: "13.5px", color: "var(--color-text-secondary)",
                        marginBottom: idx === bullets.length - 1 ? 0 : "10px",
                        lineHeight: 1.5
                    }}>
                        <div style={{ marginTop: "6px", width: "4px", height: "4px", borderRadius: "2px", background: "var(--color-accent)", flexShrink: 0 }} />
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
