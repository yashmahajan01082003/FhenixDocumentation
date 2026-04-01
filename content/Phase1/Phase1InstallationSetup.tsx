import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeBlock from "@/content/ComponentsForCode/CodeBlock";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function Phase1InstallationSetup() {
    return (
        <div className="p-6 text-gray-200 bg-black min-h-screen">

            <h1 className="text-2xl font-bold mb-6">
                🚀 Phase 1 — Hardhat + CoFHE TypeScript Setup (Strict Flow)
            </h1>

            {/* STEP 1 */}
            <Section title="🧱 1. Initialize Node Project">
                <CodeBlock file="terminal" code={`npm init -y`} />

                <p className="text-sm text-gray-400 mt-2">
                    Creates the base Node.js project.
                </p>

                <CodeSnippet
                    code={`project-root/
└── package.json`}
                />
            </Section>

            {/* STEP 2 */}
            <Section title="📦 2. Install Hardhat + Tooling Dependencies">
                <CodeSnippet
                    code={`npm install --save-dev hardhat@^2.22.3 @nomicfoundation/hardhat-toolbox@^6.1.2 typescript@^6.0.2 ts-node@^10.9.2`}
                />

                <RuleList
                    items={[
                        "hardhat → core Ethereum development environment",
                        "hardhat-toolbox → ethers v6, chai, testing utilities",
                        "typescript → typed scripting environment",
                        "ts-node → execute TS directly without compilation",
                    ]}
                />

                <CodeSnippet
                    code={`project-root/
├── package.json
├── package-lock.json
└── node_modules/`}
                />
            </Section>

            {/* STEP 3 */}
            <Section title="🔐 3. Install CoFHE + Fhenix Dependencies">
                <CodeSnippet
                    code={`npm install @cofhe/hardhat-plugin@^0.4.0 @cofhe/sdk@0.4.0 @fhenixprotocol/cofhe-contracts@0.1.0`}
                />

                <RuleList
                    items={[
                        "@cofhe/hardhat-plugin → injects FHE execution into Hardhat",
                        "@cofhe/sdk → client-side encryption + permit handling",
                        "@fhenixprotocol/cofhe-contracts → encrypted primitives for Solidity",
                    ]}
                />

                <p className="text-sm text-gray-400">
                    No new folders appear — dependencies are added inside node_modules.
                </p>
            </Section>

            {/* STEP 4 */}
            <Section title="⚙️ 4. Initialize Hardhat Project">
                <CodeBlock file="terminal" code={`npx hardhat`} />

                <RuleList
                    items={[
                        "Select: Create TypeScript project",
                        "Accept sample project",
                    ]}
                />

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

            {/* CONFIG */}
            <Section title="⚙️ 5. Hardhat Configuration (MANDATORY)">
                <p className="text-sm text-gray-400 mb-2">
                    📄 File: hardhat.config.ts
                </p>

                <CodeSnippet
                    code={`import "@cofhe/hardhat-plugin";
import "@nomicfoundation/hardhat-toolbox";

const config = {
  solidity: {
    version: "0.8.28", // or 0.8.25
    settings: {
      evmVersion: "cancun",
    },
  },
};

export default config;`}
                />

                <RuleList
                    items={[
                        "Plugin order defines execution order",
                        "CoFHE plugin injects encrypted execution runtime",
                        "Toolbox provides ethers v6 + testing utilities",
                        "Cancun EVM ensures compatibility with latest opcodes",
                    ]}
                />
            </Section>

            {/* PRINCIPLES */}
            <Section title="🧠 6. System Principles">
                <RuleList
                    items={[
                        "Deterministic setup > flexible setup",
                        "All versions must remain locked",
                        "Execution must be reproducible across machines",
                        "Cryptographic systems require strict environment control",
                    ]}
                />
            </Section>

            {/* FAILURE */}
            <Section title="🧯 7. Failure Modes">
                <RuleList
                    items={[
                        "Changing versions breaks plugin compatibility",
                        "Incorrect plugin order breaks execution pipeline",
                        "Skipping TypeScript setup breaks scripts",
                        "Unpinned dependencies cause inconsistent builds",
                    ]}
                />
            </Section>

            {/* OUTCOME */}
            <Section title="🚀 8. Outcome">
                <RuleList
                    items={[
                        "Hardhat TypeScript project initialized",
                        "CoFHE plugin integrated",
                        "Fhenix SDK installed",
                        "Encrypted smart contract environment ready",
                        "Deterministic execution ensured",
                    ]}
                />
            </Section>

            {/* 🆕 SINGLE COMMAND SETUP MOVED TO LAST */}
            <Section title="⚡ Single Command Setup (Recommended)">
                <p className="text-sm text-gray-400 mb-2">
                    Run this single PowerShell command to fully bootstrap everything in one go:
                </p>

                <CodeSnippet
                    code={`npm init -y && npm install --save-dev hardhat@^2.22.3 @nomicfoundation/hardhat-toolbox@^6.1.2 typescript@^6.0.2 ts-node@^10.9.2 && npm install @cofhe/hardhat-plugin@^0.4.0 @cofhe/sdk@0.4.0 @fhenixprotocol/cofhe-contracts@0.1.0 && npx hardhat`}
                />

                <RuleList
                    items={[
                        "Initializes Node project",
                        "Installs Hardhat + TypeScript tooling",
                        "Installs CoFHE + Fhenix dependencies",
                        "Launches Hardhat setup wizard automatically",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    Equivalent to running all installation steps manually in sequence.
                </p>
            </Section>

            {/* META */}
            <Section title="🧠 FINAL META PRINCIPLE">
                <p className="text-yellow-300 font-medium">
                    This is not installation — it is deterministic environment construction.
                </p>

                <p className="text-sm text-gray-400 mt-2">
                    Each step transforms the system state in a controlled, reproducible way.
                </p>
            </Section>
        </div>
    );
}