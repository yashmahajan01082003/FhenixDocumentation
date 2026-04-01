"use client";

import { usePathname } from "next/navigation";
import { docsConfig } from "@/config/docs";

export default function RightPanel() {
    const path = usePathname();
    const parts = path.split("/");
    const phase = parts[2];
    const slug = parts[3];

    const phaseData = docsConfig.find((p) => p.phase === phase);
    const item = phaseData?.items.find((i) => i.slug === slug);

    if (!item?.rightPanel?.length) return null;

    return (
        <aside
            className="right-panel"
            style={{
                position: "sticky",
                top: 84,
                maxHeight: "calc(100vh - 100px)",
                overflowY: "auto",
                padding: "0 16px",
            }}
        >
            <div
                style={{
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--color-text-muted)",
                    marginBottom: 12,
                    paddingBottom: 8,
                    borderBottom: "1px solid var(--color-border-primary)",
                }}
            >
                On this page
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {item.rightPanel.map((point, idx) => (
                    <li key={idx}>
                        <a
                            href={`#${point.toLowerCase().replace(/\s+/g, "-")}`}
                            style={{
                                display: "block",
                                padding: "5px 0",
                                fontSize: 13,
                                color: "var(--color-text-muted)",
                                textDecoration: "none",
                                borderLeft: "2px solid transparent",
                                paddingLeft: 12,
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color =
                                    "var(--color-text-primary)";
                                e.currentTarget.style.borderLeftColor =
                                    "var(--color-accent)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color =
                                    "var(--color-text-muted)";
                                e.currentTarget.style.borderLeftColor =
                                    "transparent";
                            }}
                        >
                            {point}
                        </a>
                    </li>
                ))}
            </ul>

            <style>{`
                @media (max-width: 1100px) {
                    .right-panel { display: none !important; }
                }
            `}</style>
        </aside>
    );
}