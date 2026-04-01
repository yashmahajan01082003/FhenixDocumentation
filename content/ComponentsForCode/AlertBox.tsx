type AlertBoxProps = {
 variant?: "warning"| "info"| "tip";
 title?: string;
 children: React.ReactNode;
};

function WarningIcon() {
 return (
 <svg width="18"height="18"viewBox="0 0 24 24"fill="none"stroke="var(--color-warning-text)"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round">
 <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>
 <path d="M12 9v4M12 17h.01"/>
 </svg>
 );
}

function InfoIcon() {
 return (
 <svg width="18"height="18"viewBox="0 0 24 24"fill="none"stroke="var(--color-info-text)"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round">
 <circle cx="12"cy="12"r="10"/>
 <path d="M12 16v-4M12 8h.01"/>
 </svg>
 );
}

function TipIcon() {
 return (
 <svg width="18"height="18"viewBox="0 0 24 24"fill="none"stroke="var(--color-tip-text)"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round">
 <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
 <path d="M9 18h6M10 22h4"/>
 </svg>
 );
}

const variantStyles = {
 warning: {
 bg: "var(--color-warning-bg)",
 border: "var(--color-warning-border)",
 color: "var(--color-warning-text)",
 Icon: WarningIcon,
 },
 info: {
 bg: "var(--color-info-bg)",
 border: "var(--color-info-border)",
 color: "var(--color-info-text)",
 Icon: InfoIcon,
 },
 tip: {
 bg: "var(--color-tip-bg)",
 border: "var(--color-tip-border)",
 color: "var(--color-tip-text)",
 Icon: TipIcon,
 },
};

export default function AlertBox({
 variant = "warning",
 title,
 children,
}: AlertBoxProps) {
 const s = variantStyles[variant];
 const IconComponent = s.Icon;

 return (
 <div
 style={{
 display: "flex",
 gap: 14,
 padding: "14px 18px",
 borderRadius: 12,
 background: s.bg,
 border: `1px solid ${s.border}`,
 marginBottom: 20,
 }}
 >
 <span style={{ flexShrink: 0, marginTop: 2 }}>
 <IconComponent />
 </span>
 <div style={{ flex: 1, minWidth: 0 }}>
 {title && (
 <div
 style={{
 fontSize: 14,
 fontWeight: 600,
 color: s.color,
 marginBottom: 4,
 }}
 >
 {title}
 </div>
 )}
 <div
 style={{
 fontSize: 13.5,
 lineHeight: 1.6,
 color: "var(--color-text-secondary)",
 }}
 >
 {children}
 </div>
 </div>
 </div>
 );
}