"use client";

import { useState } from "react";

type CodeSnippetProps = {
    code?: string;
    language?: string;
    hasTab?: boolean;
};

function highlightSyntax(code: string): React.ReactNode[] {
    const lines = code.split("\n");
    return lines.map((line, lineIdx) => {
        const tokens: React.ReactNode[] = [];
        let remaining = line;
        let tokenKey = 0;

        while (remaining.length > 0) {
            let matched = false;

            // Comments
            const commentMatch = remaining.match(/^(\/\/.*)/) || remaining.match(/^(#.*)/);
            if (commentMatch) {
                tokens.push(
                    <span key={tokenKey++} style={{ color: "#5c6370", fontStyle: "italic" }}>
                        {commentMatch[1]}
                    </span>
                );
                remaining = remaining.slice(commentMatch[1].length);
                matched = true;
                continue;
            }

            // Strings
            const stringMatch =
                remaining.match(/^("(?:[^"\\]|\\.)*")/) ||
                remaining.match(/^('(?:[^'\\]|\\.)*')/) ||
                remaining.match(/^(`(?:[^`\\]|\\.)*`)/);
            if (stringMatch) {
                tokens.push(
                    <span key={tokenKey++} style={{ color: "#98c379" }}>
                        {stringMatch[1]}
                    </span>
                );
                remaining = remaining.slice(stringMatch[1].length);
                matched = true;
                continue;
            }

            // Keywords
            const keywordMatch = remaining.match(
                /^(import|export|from|const|let|var|function|return|if|else|for|while|class|async|await|new|try|catch|throw|typeof|interface|type|enum|extends|implements|public|private|protected|static|readonly|abstract|void|null|undefined|true|false|def|self|print|pragma|solidity|contract|mapping|uint256|address|require|emit|event|modifier|memory|storage|calldata|returns|payable|view|pure|external|internal|msg|block|tx|assert|revert)\b/
            );
            if (keywordMatch) {
                tokens.push(
                    <span key={tokenKey++} style={{ color: "#c678dd" }}>
                        {keywordMatch[1]}
                    </span>
                );
                remaining = remaining.slice(keywordMatch[1].length);
                matched = true;
                continue;
            }

            // Numbers
            const numMatch = remaining.match(/^(\b\d+\.?\d*\b)/);
            if (numMatch) {
                tokens.push(
                    <span key={tokenKey++} style={{ color: "#d19a66" }}>
                        {numMatch[1]}
                    </span>
                );
                remaining = remaining.slice(numMatch[1].length);
                matched = true;
                continue;
            }

            // Function calls
            const funcMatch = remaining.match(/^(\w+)(\s*\()/);
            if (funcMatch) {
                tokens.push(
                    <span key={tokenKey++} style={{ color: "#61afef" }}>
                        {funcMatch[1]}
                    </span>
                );
                remaining = remaining.slice(funcMatch[1].length);
                matched = true;
                continue;
            }

            // Decorators / annotations
            const decoratorMatch = remaining.match(/^(@\w+)/);
            if (decoratorMatch) {
                tokens.push(
                    <span key={tokenKey++} style={{ color: "#e5c07b" }}>
                        {decoratorMatch[1]}
                    </span>
                );
                remaining = remaining.slice(decoratorMatch[1].length);
                matched = true;
                continue;
            }

            if (!matched) {
                tokens.push(remaining[0]);
                remaining = remaining.slice(1);
            }
        }

        return (
            <span key={lineIdx}>
                {tokens}
                {lineIdx < lines.length - 1 ? "\n" : ""}
            </span>
        );
    });
}

export default function CodeSnippet({ code = "", language, hasTab }: CodeSnippetProps) {
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy code:", err);
        }
    };

    return (
        <div
            style={{
                borderRadius: hasTab ? "0 12px 12px 12px" : 12,
                overflow: "hidden",
                background: "var(--color-bg-code)",
                border: "1px solid var(--color-border-primary)",
                fontFamily: "var(--font-mono)",
                marginBottom: 16,
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px 14px",
                    background: "var(--color-bg-tertiary)",
                    borderBottom: "1px solid var(--color-border-primary)",
                    borderRadius: hasTab ? "0 12px 0 0" : "12px 12px 0 0",
                }}
            >
                <span
                    style={{
                        fontSize: 11,
                        color: "var(--color-text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontWeight: 500,
                    }}
                >
                    {language || "Code"}
                </span>

                <button
                    onClick={handleCopy}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: 12,
                        padding: "4px 10px",
                        borderRadius: 6,
                        border: "1px solid var(--color-border-primary)",
                        cursor: "pointer",
                        background: copied
                            ? "rgba(46, 204, 113, 0.1)"
                            : "var(--color-bg-elevated)",
                        color: copied
                            ? "var(--color-tip-text)"
                            : "var(--color-text-secondary)",
                        fontFamily: "var(--font-sans)",
                        transition: "all 0.2s ease",
                    }}
                >
                    {copied ? (
                        <>
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Copied!
                        </>
                    ) : (
                        <>
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect
                                    x="9"
                                    y="9"
                                    width="13"
                                    height="13"
                                    rx="2"
                                    ry="2"
                                />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                            Copy
                        </>
                    )}
                </button>
            </div>

            {/* Code block */}
            <pre
                style={{
                    margin: 0,
                    padding: "16px 18px",
                    overflowX: "auto",
                    fontSize: 13,
                    lineHeight: 1.65,
                    whiteSpace: "pre",
                    color: "#abb2bf",
                }}
            >
                <code>{highlightSyntax(code)}</code>
            </pre>
        </div>
    );
}