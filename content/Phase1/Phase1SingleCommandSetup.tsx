import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeBlock from "@/content/ComponentsForCode/CodeBlock";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function Phase1SingleCommandSetup() {
    return (
        <div className="p-6 text-gray-200 bg-black min-h-screen">

            <h1 className="text-2xl font-bold mb-6">
                ⚡ Phase 1 — Single Command Setup (Automation)
            </h1>

            {/* PREREQUISITE */}
            <Section title="🧱 0. Prerequisite (MANDATORY)">
                <RuleList
                    items={[
                        "Install Node.js LTS (version 22 or higher)",
                        "Do NOT use Node 16 or 18",
                        "Use only stable LTS builds (no experimental versions)",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    This setup depends on modern runtime features required by Hardhat and CoFHE.
                </p>
            </Section>

            {/* OVERVIEW */}
            <Section title="🧠 What This Does">
                <p className="text-sm text-gray-400">
                    This approach compresses the entire Phase 1 setup into a single command.
                </p>

                <RuleList
                    items={[
                        "Initializes Node.js project",
                        "Installs Hardhat + TypeScript tooling",
                        "Installs CoFHE + Fhenix dependencies",
                        "Launches Hardhat project setup",
                    ]}
                />
            </Section>

            {/* COMMAND */}
            <Section title="⚡ Run Single Command">
                <CodeSnippet
                    code={`npm init -y && npm install --save-dev hardhat@^2.22.3 @nomicfoundation/hardhat-toolbox@^6.1.2 typescript@^6.0.2 ts-node@^10.9.2 && npm install @cofhe/hardhat-plugin@^0.4.0 @cofhe/sdk@0.4.0 @fhenixprotocol/cofhe-contracts@0.1.0 && npx hardhat`}
                />

                <p className="text-sm text-gray-400 mt-2">
                    This executes all installation steps sequentially.
                </p>
            </Section>

            {/* HOW TO RUN */}
            <Section title="🖥️ How to Run Properly">
                <RuleList
                    items={[
                        "Open terminal inside an empty project folder",
                        "Paste the command and press Enter",
                        "Wait for all dependencies to install",
                        "Hardhat will start automatically",
                        "Select: Create TypeScript project",
                        "Accept sample project setup",
                    ]}
                />
            </Section>

            {/* RESULT */}
            <Section title="📁 Result After Execution">
                <CodeSnippet
                    code={`project-root/
├── contracts/
│   └── Lock.sol
├── ignition/
│   └── modules/
│       └── Lock.ts
├── scripts/
├── test/
│   └── Lock.ts
├── hardhat.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── node_modules/
├── .gitignore
└── README.md`}
                />
            </Section>

            {/* POWERSHELL SCRIPT */}
            <Section title="📜 Alternative: setup.ps1 (Reusable Script)">
                <p className="text-sm text-gray-400 mb-2">
                    Instead of pasting the command every time, create a reusable script:
                </p>

                <CodeSnippet
                    code={`npm init -y

npm install --save-dev \`
hardhat@^2.22.3 \`
@nomicfoundation/hardhat-toolbox@^6.1.2 \`
typescript@^6.0.2 \`
ts-node@^10.9.2

npm install \`
@cofhe/hardhat-plugin@^0.4.0 \`
@cofhe/sdk@0.4.0 \`
@fhenixprotocol/cofhe-contracts@0.1.0

npx hardhat`}
                />

                <RuleList
                    items={[
                        "Save this file as: setup.ps1",
                        "Place it inside your project folder",
                        "Open PowerShell in that folder",
                        "Run: ./setup.ps1",
                    ]}
                />
            </Section>

            {/* PRINCIPLE */}
            <Section title="🧠 Principle">
                <p className="text-yellow-300 font-medium">
                    Automation ≠ abstraction — it is controlled reproducibility.
                </p>

                <p className="text-sm text-gray-400 mt-2">
                    You are encoding the entire environment setup into a single deterministic execution step.
                </p>
            </Section>

            {/* WARNINGS */}
            <Section title="🧯 Important Notes">
                <RuleList
                    items={[
                        "Ensure Node.js LTS (20+) is installed before running",
                        "Do NOT modify versions inside the command",
                        "Run only inside a clean/empty folder",
                        "Internet connection required for dependency installation",
                    ]}
                />
            </Section>

        </div>
    );
}