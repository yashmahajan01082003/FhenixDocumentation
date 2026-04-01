type AlertBoxProps = {
    variant?: "warning" | "info" | "tip";
    title?: string;
    children: React.ReactNode;
};

const variantStyles = {
    warning: {
        bg: "var(--color-warning-bg)",
        border: "var(--color-warning-border)",
        color: "var(--color-warning-text)",
        icon: "⚠️",
    },
    info: {
        bg: "var(--color-info-bg)",
        border: "var(--color-info-border)",
        color: "var(--color-info-text)",
        icon: "ℹ️",
    },
    tip: {
        bg: "var(--color-tip-bg)",
        border: "var(--color-tip-border)",
        color: "var(--color-tip-text)",
        icon: "💡",
    },
};

export default function AlertBox({
    variant = "warning",
    title,
    children,
}: AlertBoxProps) {
    const s = variantStyles[variant];

    return (
        <div
            style={{
                display: "flex",
                gap: 14,
                padding: "14px 18px",
                borderRadius: 12,
                background: s.bg,
                border: `1px solid ${s.border}`,
                marginBottom: 20,
            }}
        >
            <span style={{ fontSize: 18, lineHeight: 1.4, flexShrink: 0 }}>
                {s.icon}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
                {title && (
                    <div
                        style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: s.color,
                            marginBottom: 4,
                        }}
                    >
                        {title}
                    </div>
                )}
                <div
                    style={{
                        fontSize: 13.5,
                        lineHeight: 1.6,
                        color: "var(--color-text-secondary)",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
