"use client";

import { useState, useEffect, useCallback } from "react";
import { useSidebar } from "./SidebarContext";
import SearchModal from "./SearchModal";

export default function Header() {
    const { toggle } = useSidebar();
    const [searchOpen, setSearchOpen] = useState(false);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
            e.preventDefault();
            setSearchOpen(true);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    return (
        <>
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 60,
                    zIndex: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 24px",
                    background: "rgba(10, 10, 15, 0.82)",
                    backdropFilter: "blur(16px) saturate(180%)",
                    borderBottom: "1px solid var(--color-border-primary)",
                }}
            >
                {/* Left: Hamburger + Logo */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        minWidth: 200,
                    }}
                >
                    {/* Hamburger — mobile only */}
                    <button
                        onClick={toggle}
                        aria-label="Toggle sidebar"
                        className="md-hidden-hamburger"
                        style={{
                            display: "none",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 6,
                            borderRadius: 8,
                            color: "var(--color-text-secondary)",
                            transition: "color 0.2s",
                        }}
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Logo */}
                    <a
                        href="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            textDecoration: "none",
                        }}
                    >
                        <span style={{ fontSize: 22 }}>🔥</span>
                        <span
                            style={{
                                fontSize: 17,
                                fontWeight: 700,
                                color: "var(--color-text-primary)",
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Fhenix
                        </span>
                        <span
                            style={{
                                fontSize: 12,
                                fontWeight: 500,
                                color: "var(--color-text-muted)",
                                padding: "2px 8px",
                                borderRadius: 6,
                                background: "var(--color-bg-tertiary)",
                                border: "1px solid var(--color-border-primary)",
                            }}
                        >
                            Docs
                        </span>
                    </a>
                </div>

                {/* Center: Search Bar */}
                <button
                    onClick={() => setSearchOpen(true)}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 16px",
                        width: "100%",
                        maxWidth: 420,
                        borderRadius: 10,
                        border: "1px solid var(--color-border-primary)",
                        background: "var(--color-bg-secondary)",
                        cursor: "pointer",
                        fontFamily: "var(--font-sans)",
                        transition: "border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                            "var(--color-border-secondary)";
                        e.currentTarget.style.background =
                            "var(--color-bg-tertiary)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                            "var(--color-border-primary)";
                        e.currentTarget.style.background =
                            "var(--color-bg-secondary)";
                    }}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-text-muted)"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                    <span
                        style={{
                            flex: 1,
                            textAlign: "left",
                            fontSize: 13.5,
                            color: "var(--color-text-muted)",
                        }}
                    >
                        Search documentation...
                    </span>
                    <kbd
                        style={{
                            padding: "2px 7px",
                            borderRadius: 5,
                            fontSize: 11,
                            fontFamily: "var(--font-mono)",
                            background: "var(--color-bg-elevated)",
                            color: "var(--color-text-muted)",
                            border: "1px solid var(--color-border-primary)",
                        }}
                    >
                        Ctrl K
                    </kbd>
                </button>

                {/* Right: Get API Key */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        minWidth: 200,
                        justifyContent: "flex-end",
                    }}
                >
                    <a
                        href="#"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "8px 18px",
                            borderRadius: 10,
                            fontSize: 13.5,
                            fontWeight: 600,
                            color: "#fff",
                            background:
                                "linear-gradient(135deg, var(--color-accent), #e55a2d)",
                            textDecoration: "none",
                            transition: "transform 0.15s, box-shadow 0.2s",
                            boxShadow: "0 2px 12px rgba(255, 106, 61, 0.25)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-1px)";
                            e.currentTarget.style.boxShadow =
                                "0 4px 20px rgba(255, 106, 61, 0.35)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                                "0 2px 12px rgba(255, 106, 61, 0.25)";
                        }}
                    >
                        Get API Key
                    </a>
                </div>
            </header>

            <SearchModal
                isOpen={searchOpen}
                onClose={() => setSearchOpen(false)}
            />

            {/* Mobile-only hamburger visibility */}
            <style>{`
                @media (max-width: 768px) {
                    .md-hidden-hamburger { display: flex !important; }
                }
            `}</style>
        </>
    );
}
