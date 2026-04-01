type SectionProps = {
    title: string;
    children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
    return (
        <section className="mb-8">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            {children}
        </section>
    );
}