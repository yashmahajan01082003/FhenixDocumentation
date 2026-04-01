type StepBlockProps = {
 step: number;
 title: string;
 children: React.ReactNode;
 isLast?: boolean;
};

export default function StepBlock({
 step,
 title,
 children,
 isLast = false,
}: StepBlockProps) {
 return (
 <div
 style={{
 display: "flex",
 gap: 20,
 marginBottom: isLast ? 24 : 0,
 paddingBottom: isLast ? 0 : 24,
 }}
 >
 {/* Step number + connector */}
 <div
 style={{
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
 flexShrink: 0,
 }}
 >
 <div
 style={{
 width: 36,
 height: 36,
 borderRadius: 10,
 display: "flex",
 alignItems: "center",
 justifyContent: "center",
 fontSize: 15,
 fontWeight: 700,
 color: "var(--color-accent)",
 background: "var(--color-accent-glow)",
 border: "1px solid var(--color-border-accent)",
 flexShrink: 0,
 }}
 >
 {step}
 </div>
 {!isLast && (
 <div
 style={{
 flex: 1,
 width: 2,
 background:
 "linear-gradient(to bottom, var(--color-border-accent), transparent)",
 marginTop: 8,
 borderRadius: 1,
 }}
 />
 )}
 </div>

 {/* Content */}
 <div style={{ flex: 1, paddingTop: 4 }}>
 <h3
 style={{
 fontSize: "1.05rem",
 fontWeight: 600,
 color: "var(--color-text-primary)",
 marginBottom: 10,
 }}
 >
 {title}
 </h3>
 <div
 style={{
 color: "var(--color-text-secondary)",
 fontSize: 14.5,
 lineHeight: 1.7,
 }}
 >
 {children}
 </div>
 </div>
 </div>
 );
}