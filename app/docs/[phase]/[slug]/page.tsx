import { docsConfig } from "@/config/docs";
import Link from "next/link";

export default async function DocPage({
    params,
}: {
    params: Promise<{ phase: string; slug: string }>;
}) {
    const { phase, slug } = await params;

    const phaseData = docsConfig.find((p) => p.phase === phase);
    const item = phaseData?.items.find((i) => i.slug === slug);

    if (!item) {
        return (
            <div
                style={{
                    textAlign: "center",
                    padding: "80px 20px",
                }}
            >
                <h1
                    style={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        marginBottom: 12,
                    }}
                >
                    Page Not Found
                </h1>
                <p style={{ color: "var(--color-text-muted)" }}>
                    The requested documentation page doesn&apos;t exist.
                </p>
            </div>
        );
    }

    // Find prev/next
    const allItems = docsConfig.flatMap((p) =>
        p.items.map((i) => ({ ...i, phase: p.phase, phaseTitle: p.title }))
    );
    const currentIdx = allItems.findIndex(
        (i) => i.phase === phase && i.slug === slug
    );
    const prev = currentIdx > 0 ? allItems[currentIdx - 1] : null;
    const next =
        currentIdx < allItems.length - 1 ? allItems[currentIdx + 1] : null;

    const Component = item.component;

    return (
        <div className="animate-fade-in">
            {/* Breadcrumb */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    color: "var(--color-text-muted)",
                    marginBottom: 24,
                }}
            >
                <Link
                    href="/"
                    style={{
                        color: "var(--color-text-muted)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                    }}
                >
                    Docs
                </Link>
                <span style={{ opacity: 0.4 }}>›</span>
                <span style={{ color: "var(--color-text-secondary)" }}>
                    {phaseData?.title}
                </span>
                <span style={{ opacity: 0.4 }}>›</span>
                <span style={{ color: "var(--color-accent)" }}>
                    {item.title}
                </span>
            </div>

            {/* Title */}
            <h1
                style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    marginBottom: 8,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.2,
                }}
            >
                {item.title}
            </h1>

            <div
                style={{
                    height: 3,
                    width: 48,
                    borderRadius: 2,
                    background:
                        "linear-gradient(90deg, var(--color-accent), transparent)",
                    marginBottom: 32,
                }}
            />

            {/* Content */}
            <Component />

            {/* Prev / Next Navigation */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    marginTop: 56,
                    paddingTop: 24,
                    borderTop: "1px solid var(--color-border-primary)",
                }}
            >
                {prev ? (
                    <Link
                        href={`/docs/${prev.phase}/${prev.slug}`}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            padding: "14px 18px",
                            borderRadius: 12,
                            border: "1px solid var(--color-border-primary)",
                            background: "var(--color-bg-secondary)",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                            flex: 1,
                            maxWidth: "48%",
                        }}
                    >
                        <span
                            style={{
                                fontSize: 12,
                                color: "var(--color-text-muted)",
                            }}
                        >
                            ← Previous
                        </span>
                        <span
                            style={{
                                fontSize: 14,
                                fontWeight: 500,
                                color: "var(--color-accent)",
                            }}
                        >
                            {prev.title}
                        </span>
                    </Link>
                ) : (
                    <div />
                )}

                {next ? (
                    <Link
                        href={`/docs/${next.phase}/${next.slug}`}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            padding: "14px 18px",
                            borderRadius: 12,
                            border: "1px solid var(--color-border-primary)",
                            background: "var(--color-bg-secondary)",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                            textAlign: "right",
                            flex: 1,
                            maxWidth: "48%",
                            marginLeft: "auto",
                        }}
                    >
                        <span
                            style={{
                                fontSize: 12,
                                color: "var(--color-text-muted)",
                            }}
                        >
                            Next →
                        </span>
                        <span
                            style={{
                                fontSize: 14,
                                fontWeight: 500,
                                color: "var(--color-accent)",
                            }}
                        >
                            {next.title}
                        </span>
                    </Link>
                ) : (
                    <div />
                )}
            </div>
        </div>
    );
}