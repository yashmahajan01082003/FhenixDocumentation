"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { docsConfig } from "@/config/docs";

export default function RightPanel() {
    const path = usePathname();
    const parts = path.split("/");
    const phase = parts[2];
    const slug = parts[3];

    const [activeId, setActiveId] = useState<string>("");

    const phaseData = docsConfig.find((p) => p.phase === phase);
    const item = phaseData?.items.find((i) => i.slug === slug);

    useEffect(() => {
        if (!item?.rightPanel?.length) return;

        // Collect all IDs we need to observe
        const ids = item.rightPanel.flatMap((section) =>
            section.items.map((subItem) =>
                subItem.toLowerCase().replace(/^[0-9.\s]+/, '').replace(/[\s()]+/g, "-").replace(/[^a-z0-9-]/g, "")
            )
        );

        const observer = new IntersectionObserver(
            (entries) => {
                // Find all intersecting entries
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);

                if (visibleEntries.length > 0) {
                    // Pick the first visible section to be active
                    setActiveId(visibleEntries[0].target.id);
                }
            },
            {
                rootMargin: "-20% 0px -60% 0px", // triggers when element is roughly in middle
                threshold: 0,
            }
        );

        // Observe DOM elements
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [item, path]);

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
            {/* Phase badge */}
            <div style={{
                fontSize: 10, fontWeight: 600,
                textTransform: "uppercase", letterSpacing: "0.1em",
                color: "var(--color-accent)", marginBottom: 6,
            }}>
                {phaseData?.title}
            </div>

            {/* Page title */}
            <div style={{
                fontSize: 13, fontWeight: 600,
                color: "var(--color-text-primary)", marginBottom: 16,
                paddingBottom: 12,
                borderBottom: "1px solid var(--color-border-primary)",
                lineHeight: 1.4,
            }}>
                {item.title}
            </div>

            {/* Sections */}
            {item.rightPanel.map((section, sIdx) => (
                <div key={sIdx} style={{ marginBottom: 18 }}>
                    {/* Section heading */}
                    <div style={{
                        fontSize: 11, fontWeight: 600,
                        textTransform: "uppercase", letterSpacing: "0.08em",
                        color: "var(--color-text-muted)", marginBottom: 8,
                        display: "flex", alignItems: "center", gap: 6,
                    }}>
                        <div style={{
                            width: 4, height: 4, borderRadius: 2,
                            background: "var(--color-accent)", flexShrink: 0,
                        }} />
                        {section.heading}
                    </div>

                    {/* Subsection items */}
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, paddingLeft: 10 }}>
                        {section.items.map((subItem, iIdx) => {
                            const subId = subItem.toLowerCase().replace(/^[0-9.\s]+/, '').replace(/[\s()]+/g, "-").replace(/[^a-z0-9-]/g, "");
                            const isActive = activeId === subId;

                            return (
                                <li key={iIdx}>
                                    <a
                                        href={`#${subId}`}
                                        style={{
                                            display: "block",
                                            padding: "5px 0",
                                            paddingLeft: isActive ? 14 : 12,
                                            fontSize: isActive ? 13 : 12.5,
                                            fontWeight: isActive ? 500 : 400,
                                            color: isActive ? "var(--color-accent)" : "var(--color-text-muted)",
                                            textDecoration: "none",
                                            borderLeft: isActive ? "2px solid var(--color-accent)" : "1px solid var(--color-border-primary)",
                                            backgroundColor: isActive ? "var(--color-accent-subtle)" : "transparent",
                                            marginTop: 2,
                                            borderRadius: "0 6px 6px 0",
                                            transition: "all 0.25s ease",
                                            lineHeight: 1.5,
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.color = "var(--color-text-primary)";
                                                e.currentTarget.style.borderLeftColor = "var(--color-border-secondary)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.color = "var(--color-text-muted)";
                                                e.currentTarget.style.borderLeftColor = "var(--color-border-primary)";
                                            }
                                        }}
                                    >
                                        {subItem}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}

            <style>{`
                @media (max-width: 1100px) {
                    .right-panel { display: none !important; }
                }
            `}</style>
        </aside>
    );
}