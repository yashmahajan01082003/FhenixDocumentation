"use client";

import { useState, useEffect, useCallback } from "react";
import { useSidebar } from "./SidebarContext";
import { useTheme } from "./ThemeContext";
import SearchModal from "./SearchModal";

function SunIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    );
}

function LogoIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L8 8l-4 6h16l-4-6-4-6z" fill="var(--color-accent)" opacity="0.9" />
            <path d="M8 14l4 8 4-8H8z" fill="var(--color-accent)" opacity="0.6" />
        </svg>
    );
}

export default function Header() {
    const { toggle } = useSidebar();
    const { theme, toggleTheme } = useTheme();
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
                    background: theme === "dark"
                        ? "rgba(10, 10, 15, 0.82)"
                        : "rgba(255, 255, 255, 0.88)",
                    backdropFilter: "blur(16px) saturate(180%)",
                    borderBottom: "1px solid var(--color-border-primary)",
                    transition: "background 0.3s ease",
                }}
            >
                {/* Left: Hamburger + Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 200 }}>
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
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Logo */}
                    <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                        <LogoIcon />
                        <span style={{ fontSize: 17, fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.03em" }}>
                            Fhenix
                        </span>
                        <span style={{
                            fontSize: 12, fontWeight: 500, color: "var(--color-text-muted)",
                            padding: "2px 8px", borderRadius: 6,
                            background: "var(--color-bg-tertiary)", border: "1px solid var(--color-border-primary)",
                        }}>
                            Docs
                        </span>
                    </a>
                </div>

                {/* Center: Search Bar */}
                <button
                    onClick={() => setSearchOpen(true)}
                    style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "8px 16px", width: "100%", maxWidth: 420,
                        borderRadius: 10, border: "1px solid var(--color-border-primary)",
                        background: "var(--color-bg-secondary)", cursor: "pointer",
                        fontFamily: "var(--font-sans)", transition: "border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border-secondary)";
                        e.currentTarget.style.background = "var(--color-bg-tertiary)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border-primary)";
                        e.currentTarget.style.background = "var(--color-bg-secondary)";
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round">
                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    </svg>
                    <span style={{ flex: 1, textAlign: "left", fontSize: 13.5, color: "var(--color-text-muted)" }}>
                        Search documentation...
                    </span>
                    <kbd style={{
                        padding: "2px 7px", borderRadius: 5, fontSize: 11, fontFamily: "var(--font-mono)",
                        background: "var(--color-bg-elevated)", color: "var(--color-text-muted)",
                        border: "1px solid var(--color-border-primary)",
                    }}>
                        Ctrl K
                    </kbd>
                </button>

                {/* Right: Theme toggle + Get API Key */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 200, justifyContent: "flex-end" }}>
                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        style={{
                            display: "flex", alignItems: "center", justifyContent: "center",
                            width: 36, height: 36, borderRadius: 10,
                            border: "1px solid var(--color-border-primary)",
                            background: "var(--color-bg-secondary)",
                            cursor: "pointer", color: "var(--color-text-secondary)",
                            transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--color-bg-tertiary)";
                            e.currentTarget.style.color = "var(--color-accent)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "var(--color-bg-secondary)";
                            e.currentTarget.style.color = "var(--color-text-secondary)";
                        }}
                    >
                        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                    </button>
                </div>
            </header>

            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

            <style>{`
                @media (max-width: 768px) {
                    .md-hidden-hamburger { display: flex !important; }
                    .get-api-key-btn { display: none !important; }
                }
            `}</style>
        </>
    );
}
