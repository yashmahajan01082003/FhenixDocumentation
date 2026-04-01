type SectionProps = {
    title: string;
    children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
    return (
        <section style={{ marginBottom: 40 }}>
            <h2
                style={{
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    marginBottom: 16,
                    paddingBottom: 12,
                    borderBottom: "1px solid var(--color-border-primary)",
                    paddingLeft: 14,
                    borderLeft: "3px solid var(--color-accent)",
                    letterSpacing: "-0.01em",
                }}
            >
                {title}
            </h2>
            <div style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
                {children}
            </div>
        </section>
    );
}