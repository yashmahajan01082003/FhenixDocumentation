"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { docsConfig } from "@/config/docs";

type SearchResult = {
    title: string;
    phase: string;
    phaseTitle: string;
    slug: string;
};

export default function SearchModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const results: SearchResult[] = query.trim()
        ? docsConfig.flatMap((phase) =>
            phase.items
                .filter((item) =>
                    item.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((item) => ({
                    title: item.title,
                    phase: phase.phase,
                    phaseTitle: phase.title,
                    slug: item.slug,
                }))
        )
        : docsConfig.flatMap((phase) =>
            phase.items.map((item) => ({
                title: item.title,
                phase: phase.phase,
                phaseTitle: phase.title,
                slug: item.slug,
            }))
        );

    useEffect(() => {
        if (isOpen) {
            setQuery("");
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    const navigate = useCallback(
        (result: SearchResult) => {
            router.push(`/docs/${result.phase}/${result.slug}`);
            onClose();
        },
        [router, onClose]
    );

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((i) => Math.max(i - 1, 0));
            } else if (e.key === "Enter" && results[selectedIndex]) {
                navigate(results[selectedIndex]);
            } else if (e.key === "Escape") {
                onClose();
            }
        },
        [results, selectedIndex, navigate, onClose]
    );

    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 100,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: "min(20vh, 140px)",
                background: "rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(8px)",
            }}
            className="animate-fade-in"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: "100%",
                    maxWidth: 580,
                    margin: "0 16px",
                    borderRadius: 16,
                    overflow: "hidden",
                    background: "var(--color-bg-secondary)",
                    border: "1px solid var(--color-border-secondary)",
                    boxShadow:
                        "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
                }}
                className="animate-scale-in"
            >
                {/* Search Input */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "16px 20px",
                        borderBottom: "1px solid var(--color-border-primary)",
                    }}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-text-muted)"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search documentation..."
                        style={{
                            flex: 1,
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            fontSize: 16,
                            color: "var(--color-text-primary)",
                            fontFamily: "var(--font-sans)",
                        }}
                    />
                    <kbd
                        style={{
                            padding: "3px 8px",
                            borderRadius: 6,
                            fontSize: 11,
                            fontFamily: "var(--font-mono)",
                            background: "var(--color-bg-tertiary)",
                            color: "var(--color-text-muted)",
                            border: "1px solid var(--color-border-primary)",
                        }}
                    >
                        ESC
                    </kbd>
                </div>

                {/* Results */}
                <div
                    style={{
                        maxHeight: 400,
                        overflowY: "auto",
                        padding: "8px",
                    }}
                >
                    {results.length === 0 ? (
                        <div
                            style={{
                                textAlign: "center",
                                padding: "32px 16px",
                                color: "var(--color-text-muted)",
                                fontSize: 14,
                            }}
                        >
                            No results found for &ldquo;{query}&rdquo;
                        </div>
                    ) : (
                        results.map((result, idx) => (
                            <button
                                key={`${result.phase}-${result.slug}`}
                                onClick={() => navigate(result)}
                                onMouseEnter={() => setSelectedIndex(idx)}
                                style={{
                                    display: "block",
                                    width: "100%",
                                    textAlign: "left",
                                    padding: "10px 14px",
                                    borderRadius: 10,
                                    border: "none",
                                    cursor: "pointer",
                                    fontFamily: "var(--font-sans)",
                                    background:
                                        idx === selectedIndex
                                            ? "var(--color-accent-subtle)"
                                            : "transparent",
                                    transition: "background 0.15s ease",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 500,
                                        color:
                                            idx === selectedIndex
                                                ? "var(--color-accent)"
                                                : "var(--color-text-primary)",
                                        marginBottom: 2,
                                    }}
                                >
                                    {result.title}
                                </div>
                                <div
                                    style={{
                                        fontSize: 12,
                                        color: "var(--color-text-muted)",
                                    }}
                                >
                                    {result.phaseTitle}
                                </div>
                            </button>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
