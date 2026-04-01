export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                maxWidth: 1400,
                margin: "0 auto",
                padding: "40px 32px",
            }}
            className="docs-layout"
        >
            {/* Main Content */}
            <div
                style={{
                    flex: 1,
                    minWidth: 0,
                    maxWidth: 960, // Increased max-width since Right Panel is gone
                }}
                className="doc-content"
            >
                {children}
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .docs-layout { padding: 24px 16px !important; }
                }
            `}</style>
        </div>
    );
}