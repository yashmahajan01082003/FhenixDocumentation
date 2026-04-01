import RightPanel from "@/components/RightPanel";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                display: "flex",
                maxWidth: 1200,
                margin: "0 auto",
                padding: "32px 24px",
                gap: 32,
            }}
            className="docs-layout"
        >
            {/* Main Content */}
            <div
                style={{
                    flex: 1,
                    minWidth: 0,
                    maxWidth: 780,
                }}
                className="doc-content"
            >
                {children}
            </div>

            {/* Right Panel */}
            <div
                style={{
                    width: 200,
                    flexShrink: 0,
                }}
                className="right-panel-wrapper"
            >
                <RightPanel />
            </div>

            <style>{`
                @media (max-width: 1100px) {
                    .right-panel-wrapper { display: none !important; }
                }
                @media (max-width: 768px) {
                    .docs-layout { padding: 20px 16px !important; }
                }
            `}</style>
        </div>
    );
}