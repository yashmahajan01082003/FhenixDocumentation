import Link from "next/link";
import { docsConfig } from "@/config/docs";

export default function Sidebar() {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "100vh",
                width: "250px",
                overflowY: "auto",
                padding: "20px",
                borderRight: "1px solid #eee",
                backgroundColor: "#fff"
            }}
        >
            <h2>Documentation</h2>

            {docsConfig.map((phase) => (
                <div key={phase.phase} style={{ marginBottom: "20px" }}>
                    <h3>{phase.title}</h3>

                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {phase.items.map((item) => (
                            <li key={item.slug} style={{ marginBottom: "8px" }}>
                                <Link href={`/docs/${phase.phase}/${item.slug}`}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}