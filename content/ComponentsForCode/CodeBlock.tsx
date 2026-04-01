import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

type CodeBlockProps = {
    title?: string;
    file?: string;
    code: string;
    language?: string;
};

export default function CodeBlock({ title, file, code, language }: CodeBlockProps) {
    return (
        <div style={{ marginBottom: 20 }}>
            {title && (
                <p
                    style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--color-text-secondary)",
                        marginBottom: 8,
                    }}
                >
                    {title}
                </p>
            )}

            {file && (
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "4px 10px",
                        borderRadius: "8px 8px 0 0",
                        fontSize: 12,
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-tip-text)",
                        background: "var(--color-bg-tertiary)",
                        border: "1px solid var(--color-border-primary)",
                        borderBottom: "none",
                        marginBottom: -1,
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                    </svg>
                    {file}
                </div>
            )}

            <CodeSnippet code={code} language={language} hasTab={!!file} />
        </div>
    );
}