import { docsConfig } from "@/config/docs";

export default async function DocPage({
    params,
}: {
    params: Promise<{ phase: string; slug: string }>;
}) {
    const { phase, slug } = await params;

    const phaseData = docsConfig.find((p) => p.phase === phase);
    const item = phaseData?.items.find((i) => i.slug === slug);

    if (!item) {
        return <div>Not Found</div>;
    }

    const Component = item.component;

    return (
        <div>
            <Component />
        </div>
    );
}