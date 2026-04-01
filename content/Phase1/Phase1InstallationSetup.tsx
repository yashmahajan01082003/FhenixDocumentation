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
                    Hardhat and CoFHE depend on modern Node.js runtime behavior for deterministic execution.
                </p>
            </Section>

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
                        "hardhat-toolbox → provides ethers v6, chai, testing utilities",
                        "typescript → enables typed scripting environment",
                        "ts-node → runs TypeScript files without manual compilation",
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
                        "@cofhe/hardhat-plugin → integrates Fully Homomorphic Encryption (FHE) into the Hardhat workflow",
                        "It modifies the compile, deploy, and execution pipeline so smart contracts can operate on encrypted data",
                        "It also provides a mock FHE runtime locally, allowing encrypted logic to be tested without a real network",

                        "@cofhe/sdk → acts as the client-side bridge for encryption workflows",
                        "It is responsible for encrypting inputs before sending them to contracts",
                        "It manages permissions (permits) required to decrypt results securely",
                        "It ensures that sensitive data is never exposed in plaintext during interaction",

                        "@fhenixprotocol/cofhe-contracts → provides Solidity-level encrypted primitives",
                        "These include encrypted data types (like encrypted integers and booleans)",
                        "It enables writing smart contracts that perform computation directly on encrypted values",
                        "It ensures compatibility with the CoFHE execution model used by the plugin",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    These packages together enable a full encrypted execution pipeline:
                    inputs are encrypted on the client, processed securely inside smart contracts,
                    and only decrypted when explicitly permitted.
                </p>

                <p className="text-sm text-gray-400">
                    All dependencies are installed inside <b>node_modules</b> and automatically linked into the Hardhat environment.
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
            <Section title="⚙️ 5. Hardhat Configuration">
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
                        "CoFHE plugin must be loaded to enable encrypted execution",
                        "Toolbox provides ethers v6 and testing utilities",
                        "Solidity version must match compiler expectations",
                        "EVM Cancun ensures compatibility with latest features",
                    ]}
                />
            </Section>

            {/* OUTCOME */}
            <Section title="🚀 6. Outcome">
                <RuleList
                    items={[
                        "Node.js project initialized",
                        "Hardhat TypeScript project created",
                        "CoFHE plugin installed and configured",
                        "Fhenix SDK installed",
                        "Project structure generated",
                        "Ready for development",
                    ]}
                />
            </Section>


        </div>
    );
}