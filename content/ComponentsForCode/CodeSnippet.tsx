"use client";

import { useState } from "react";

type CodeSnippetProps = {
    code?: string;
};

export default function CodeSnippet({ code = "" }: CodeSnippetProps) {
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Failed to copy code:", err);
        }
    };

    return (
        <div
            style={{
                borderRadius: "16px",
                overflow: "hidden",
                backgroundColor: "#18181b",
                color: "#f4f4f5",
                border: "1px solid #27272a",
                fontFamily: "monospace",
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px 12px",
                    backgroundColor: "#27272a",
                    borderBottom: "1px solid #3f3f46",
                }}
            >
                <span style={{ fontSize: "11px", color: "#a1a1aa" }}>Code</span>

                <button
                    onClick={handleCopy}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "12px",
                        padding: "4px 10px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: "#3f3f46",
                        color: "#f4f4f5",
                    }}
                >
                    {copied ? "✓ Copied" : "📋 Copy"}
                </button>
            </div>

            {/* Code block */}
            <pre
                style={{
                    margin: 0,
                    padding: "12px",
                    overflowX: "auto",
                    fontSize: "13px",
                    lineHeight: "1.5",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                }}
            >
                <code>{code}</code>
            </pre>
        </div>
    );
}