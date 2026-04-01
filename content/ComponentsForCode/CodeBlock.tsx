import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

type CodeBlockProps = {
    title?: string;
    file?: string;
    code: string;
};

export default function CodeBlock({ title, file, code }: CodeBlockProps) {
    return (
        <div className="space-y-2">
            {title && (
                <p className="text-sm text-gray-400">{title}</p>
            )}

            {file && (
                <p className="text-xs text-green-400">
                    📄 {file}
                </p>
            )}

            <CodeSnippet code={code} />
        </div>
    );
}