"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";

type FunctionTooltipProps = {
    name: string;
    purpose: string;
    input: string;
    output: string;
    processing: string[];
};

export default function FunctionTooltip({
    name,
    purpose,
    input,
    output,
    processing,
}: FunctionTooltipProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        // Position slightly above and to the right of the button
        setCoords({
            x: rect.left + rect.width / 2,
            y: rect.top - 10,
        });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <span
            className="function-tooltip-wrapper"
            style={{ display: "inline-block", position: "relative", marginBottom: "12px", zIndex: isHovered ? 100 : 1 }}
        >
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    background: isHovered
                        ? "linear-gradient(135deg, var(--color-accent), #e55a2d)"
                        : "var(--color-bg-secondary)",
                    border: isHovered
                        ? "1px solid var(--color-accent)"
                        : "1px solid var(--color-border-secondary)",
                    color: isHovered ? "#fff" : "var(--color-text-primary)",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    fontSize: "15px",
                    fontWeight: 600,
                    fontFamily: "var(--font-mono)",
                    cursor: "help",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: isHovered
                        ? "0 8px 24px rgba(255, 106, 61, 0.4)"
                        : "0 2px 8px rgba(0,0,0,0.1)",
                    transform: isHovered ? "translateY(-2px)" : "translateY(0)"
                }}
            >
                {name}
            </button>

            {isHovered && typeof window !== "undefined" && createPortal(
                <div
                    style={{
                        position: "fixed",
                        left: coords.x,
                        top: coords.y,
                        transform: "translate(-50%, -100%)",
                        width: "max-content",
                        maxWidth: "340px",
                        background: "rgba(10, 10, 15, 0.75)",
                        backdropFilter: "blur(24px) saturate(200%)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "16px",
                        padding: "20px",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 106, 61, 0.2) inset",
                        zIndex: 99999,
                        pointerEvents: "none",
                        animation: "tooltipSlideUpAndFade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                    }}
                >
                    {/* Glowing Accent Top */}
                    <div style={{
                        position: "absolute", top: 0, left: "20%", right: "20%", height: "2px",
                        background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                        opacity: 0.8
                    }} />

                    <div style={{ marginBottom: "16px" }}>
                        <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-text-muted)", fontWeight: 700, display: "block", marginBottom: "4px" }}>
                            Purpose
                        </span>
                        <div style={{ fontSize: "14.5px", color: "#fff", fontWeight: 500, lineHeight: 1.4 }}>
                            {purpose}
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: "24px", marginBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "16px" }}>
                        <div style={{ flex: 1 }}>
                            <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-text-muted)", fontWeight: 700, display: "block", marginBottom: "4px" }}>
                                Input
                            </span>
                            <div style={{ fontSize: "13px", color: "var(--color-accent)", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                                {input}
                            </div>
                        </div>
                        <div style={{ width: "1px", background: "rgba(255,255,255,0.1)" }} />
                        <div style={{ flex: 1 }}>
                            <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-text-muted)", fontWeight: 700, display: "block", marginBottom: "4px" }}>
                                Output
                            </span>
                            <div style={{ fontSize: "13px", color: "#10b981", fontWeight: 600, fontFamily: "var(--font-mono)" }}>
                                {output}
                            </div>
                        </div>
                    </div>

                    <div>
                        <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--color-text-muted)", fontWeight: 700, display: "block", marginBottom: "8px" }}>
                            Processing Steps
                        </span>
                        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                            {processing.map((step, idx) => (
                                <li key={idx} style={{
                                    fontSize: "13px", color: "rgba(255,255,255,0.85)",
                                    display: "flex", alignItems: "flex-start", gap: "8px", lineHeight: 1.4
                                }}>
                                    <span style={{ color: "var(--color-accent)", fontSize: "10px", marginTop: "3px" }}>▶</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>,
                document.body
            )}

            <style>{`
                @keyframes tooltipSlideUpAndFade {
                    from { opacity: 0; transform: translate(-50%, -90%) scale(0.96); }
                    to { opacity: 1; transform: translate(-50%, -100%) scale(1); }
                }
            `}</style>
        </span>
    );
}