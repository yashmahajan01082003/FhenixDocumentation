"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { docsConfig } from "@/config/docs";
import { useSidebar } from "./SidebarContext";

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            style={{
                transition: "transform 0.25s ease",
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
                opacity: 0.45,
                flexShrink: 0,
            }}
        >
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
}

export default function Sidebar() {
    const pathname = usePathname();
    const { isOpen, close } = useSidebar();
    const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>(
        Object.fromEntries(docsConfig.map((p) => [p.phase, true]))
    );

    const togglePhase = (phase: string) => {
        setExpandedPhases((prev) => ({ ...prev, [phase]: !prev[phase] }));
    };

    const sidebarContent = (
        <div style={{ padding: "20px 16px", height: "100%", overflowY: "auto" }}>
            {/* Sidebar title */}
            <div style={{
                padding: "0 12px 18px",
                marginBottom: 10,
                borderBottom: "1px solid var(--color-border-primary)",
            }}>
                <span style={{
                    fontSize: 11, fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "0.1em",
                    color: "var(--color-text-muted)",
                }}>
                    Documentation
                </span>
            </div>

            {docsConfig.map((phase, phaseIdx) => {
                const isExpanded = expandedPhases[phase.phase] !== false;

                return (
                    <div key={phase.phase} style={{
                        marginBottom: 6,
                        animation: `fadeIn 0.3s ease-out ${phaseIdx * 0.05}s both`,
                    }}>
                        {/* Phase header — larger, bolder */}
                        <button
                            onClick={() => togglePhase(phase.phase)}
                            style={{
                                display: "flex", alignItems: "center", gap: 8,
                                width: "100%", padding: "10px 12px",
                                border: "none", borderRadius: 8,
                                background: "transparent", cursor: "pointer",
                                fontFamily: "var(--font-sans)",
                                fontSize: 13.5, fontWeight: 600,
                                color: "var(--color-text-primary)",
                                textAlign: "left",
                                transition: "color 0.2s, background 0.2s",
                                letterSpacing: "-0.01em",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "var(--color-bg-tertiary)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            <ChevronIcon open={isExpanded} />
                            <span style={{ flex: 1 }}>{phase.title}</span>
                        </button>

                        {/* Items — smaller, subordinate */}
                        <div style={{
                            overflow: "hidden",
                            maxHeight: isExpanded ? 1000 : 0,
                            opacity: isExpanded ? 1 : 0,
                            transition: "max-height 0.35s ease, opacity 0.25s ease",
                            paddingLeft: 14,
                        }}>
                            <ul style={{
                                listStyle: "none", padding: "4px 0", margin: 0,
                                borderLeft: "1px solid var(--color-border-primary)",
                            }}>
                                {phase.items.map((item) => {
                                    const href = `/docs/${phase.phase}/${item.slug}`;
                                    const isActive = pathname === href;

                                    return (
                                        <li key={item.slug}>
                                            <Link
                                                href={href}
                                                onClick={close}
                                                style={{
                                                    display: "block",
                                                    padding: "7px 14px",
                                                    marginLeft: -1,
                                                    borderLeft: isActive
                                                        ? "2px solid var(--color-accent)"
                                                        : "2px solid transparent",
                                                    borderRadius: "0 8px 8px 0",
                                                    fontSize: 13,
                                                    fontWeight: isActive ? 500 : 400,
                                                    color: isActive
                                                        ? "var(--color-accent)"
                                                        : "var(--color-text-secondary)",
                                                    background: isActive
                                                        ? "var(--color-accent-subtle)"
                                                        : "transparent",
                                                    textDecoration: "none",
                                                    transition: "all 0.2s ease",
                                                    lineHeight: 1.5,
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (!isActive) {
                                                        e.currentTarget.style.color = "var(--color-text-primary)";
                                                        e.currentTarget.style.background = "var(--color-bg-tertiary)";
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (!isActive) {
                                                        e.currentTarget.style.color = "var(--color-text-secondary)";
                                                        e.currentTarget.style.background = "transparent";
                                                    }
                                                }}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );

    return (
        <>
            {/* Desktop sidebar */}
            <aside
                className="desktop-sidebar"
                style={{
                    position: "fixed", top: 60, left: 0, bottom: 0,
                    width: 320,
                    background: "var(--color-bg-secondary)",
                    borderRight: "1px solid var(--color-border-primary)",
                    overflowY: "auto", zIndex: 40,
                }}
            >
                {sidebarContent}
            </aside>

            {/* Mobile overlay */}
            {isOpen && (
                <>
                    <div
                        onClick={close}
                        style={{
                            position: "fixed", inset: 0, zIndex: 55,
                            background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)",
                        }}
                        className="animate-fade-in"
                    />
                    <aside
                        style={{
                            position: "fixed", top: 0, left: 0, bottom: 0,
                            width: 320,
                            background: "var(--color-bg-secondary)",
                            borderRight: "1px solid var(--color-border-primary)",
                            overflowY: "auto", zIndex: 60, paddingTop: 60,
                        }}
                        className="animate-slide-in-left"
                    >
                        {sidebarContent}
                    </aside>
                </>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-sidebar { display: none !important; }
                }
            `}</style>
        </>
    );
}