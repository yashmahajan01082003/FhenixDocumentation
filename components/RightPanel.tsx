"use client";

import { usePathname } from "next/navigation";
import { docsConfig } from "@/config/docs";

export default function RightPanel() {
    const path = usePathname();

    const parts = path.split("/");
    const phase = parts[2];
    const slug = parts[3];

    const phaseData = docsConfig.find(p => p.phase === phase);
    const item = phaseData?.items.find(i => i.slug === slug);

    return (
        <div>
            <h3>Context</h3>

            {item?.rightPanel?.map((point, idx) => (
                <p key={idx}>{point}</p>
            ))}
        </div>
    );
}