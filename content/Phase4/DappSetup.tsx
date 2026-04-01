import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function DappSetup() {
    return (
        <div style={{ paddingBottom: "60px", animation: "fadeIn 0.6s ease-out" }}>

            {/* INTRO */}
            <Section title="1. What This Step Is About">
                <p className="text-sm text-gray-400">
                    This step does NOT involve writing any business logic.
                </p>

                <p className="text-sm text-gray-400 mt-2">
                    You are only preparing a frontend environment that is compatible
                    with your smart contract system.
                </p>

                <p className="text-yellow-300 mt-2">
                    Think of this as preparing the “interface shell” — not the functionality.
                </p>
            </Section>

            {/* CREATE APP */}
            <Section title="2. Create Frontend Project">
                <CodeSnippet
                    code={`npm create vite@latest fhenix-cofhe-dapp
choose react and javascript
cd ./fhenix-cofhe-dapp/`}
                />

                <RuleList
                    items={[
                        "Creates a clean React application",
                        "Uses Vite (fast build tool)",
                        "No blockchain logic yet — only structure",
                    ]}
                />
            </Section>

            {/* INSTALL DEPENDENCIES */}
            <Section title="3. Install Required Packages">
                <CodeSnippet
                    code={`npm install @cofhe/sdk@^0.4.0 react@19.2.4 react-dom@19.2.4 viem@2.47.6`}
                />

                <RuleList
                    items={[
                        "@cofhe/sdk → ensures frontend can support encrypted workflows later",
                        "react & react-dom → UI rendering system",
                        "viem → enables communication with blockchain networks",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    At this stage, these are only installed for compatibility —
                    not actively used yet.
                </p>
            </Section>

            {/* DIRECTORY */}
            <Section title="4. Project Structure Created">
                <CodeSnippet
                    code={`fhenix-cofhe-dapp/
├── node_modules/
├── public/
│ ├── favicon.svg
│ └── icons.svg
├── src/
│ ├── assets/
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js`}
                />

                <RuleList
                    items={[
                        "src/ → where all frontend logic will go (later)",
                        "App.jsx → root UI component",
                        "main.jsx → entry point of application",
                        "public/ → static assets",
                        "vite.config.js → build + dev server config",
                    ]}
                />
            </Section>

            {/* COMPATIBILITY */}
            <Section title="5. Why This Setup Matters">
                <RuleList
                    items={[
                        "Ensures frontend can later talk to blockchain",
                        "Supports Cofhe SDK (for encryption/decryption)",
                        "Supports RPC communication via viem",
                        "Keeps versions aligned with backend setup",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    Without this setup, frontend → contract interaction would break.
                </p>
            </Section>

            {/* RUN */}
            <Section title="6. Verify Setup (Run Project)">
                <CodeSnippet
                    code={`npm run dev`}
                />

                <RuleList
                    items={[
                        "Starts development server",
                        "Confirms project is correctly initialized",
                        "Ensures all dependencies are working",
                    ]}
                />
            </Section>

            {/* FINAL */}
            <Section title="Final Understanding">
                <p className="text-yellow-300 font-medium">
                    This step is about compatibility — not functionality.
                </p>

                <p className="text-sm text-gray-400 mt-2">
                    You are preparing a frontend system that is capable of handling
                    encrypted blockchain interactions in later phases.
                </p>
            </Section>

        </div>
    );
}