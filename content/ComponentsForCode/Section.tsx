type SectionProps = {
    title: string;
    children: React.ReactNode;
    id?: string;
};

export default function Section({ title, children, id }: SectionProps) {
    // Generate an ID from the title if one isn't explicitly provided.
    // E.g., "1. What is This Layer?" -> "what-is-this-layer"
    const sectionId = id || title.toLowerCase().replace(/^[0-9.\s]+/, '').replace(/[\s()]+/g, "-").replace(/[^a-z0-9-]/g, "");

    return (
        <section id={sectionId} style={{ marginBottom: 40, scrollMarginTop: 100 }}>
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