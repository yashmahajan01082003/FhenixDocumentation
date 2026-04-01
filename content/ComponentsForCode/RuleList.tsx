type RuleListProps = {
    items: string[];
};

export default function RuleList({ items }: RuleListProps) {
    return (
        <ul className="list-disc pl-5 space-y-1">
            {items.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    );
}