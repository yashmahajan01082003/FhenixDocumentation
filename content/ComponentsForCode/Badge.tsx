type BadgeProps = {
 children: React.ReactNode;
 variant?: "default"| "accent"| "success"| "warning";
};

const badgeColors = {
 default: {
 bg: "var(--color-bg-tertiary)",
 color: "var(--color-text-secondary)",
 border: "var(--color-border-primary)",
 },
 accent: {
 bg: "var(--color-accent-subtle)",
 color: "var(--color-accent)",
 border: "var(--color-border-accent)",
 },
 success: {
 bg: "var(--color-tip-bg)",
 color: "var(--color-tip-text)",
 border: "var(--color-tip-border)",
 },
 warning: {
 bg: "var(--color-warning-bg)",
 color: "var(--color-warning-text)",
 border: "var(--color-warning-border)",
 },
};

export default function Badge({ children, variant = "default"}: BadgeProps) {
 const s = badgeColors[variant];
 return (
 <span
 style={{
 display: "inline-flex",
 alignItems: "center",
 padding: "2px 10px",
 borderRadius: 20,
 fontSize: 12,
 fontWeight: 500,
 fontFamily: "var(--font-sans)",
 background: s.bg,
 color: s.color,
 border: `1px solid ${s.border}`,
 lineHeight: 1.6,
 }}
 >
 {children}
 </span>
 );
}