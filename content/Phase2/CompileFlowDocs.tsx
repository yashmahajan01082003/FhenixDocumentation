import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function CompileFlowDocs() {
    return (
        <div className="p-6 text-gray-200 bg-black min-h-screen">

            <h1 className="text-2xl font-bold mb-6">
                ⚡ Contract Compilation Flow — What Actually Happens
            </h1>

            {/* COMMAND */}
            <Section title="🧪 1. Command to Compile Contract">
                <CodeSnippet
                    code={`npx hardhat compile`}
                />

                <p className="text-sm text-gray-400 mt-2">
                    This command tells Hardhat to convert your Solidity code into machine-readable format.
                </p>
            </Section>

            {/* INTERNAL FLOW */}
            <Section title="🧠 2. What Happens Internally">

                <RuleList
                    items={[
                        "Hardhat scans all contracts in /contracts folder",
                        "Resolves all imports (like FHE.sol, plugins, libraries)",
                        "Checks syntax and type correctness",
                        "Builds dependency graph of all contracts",
                        "Converts Solidity → Intermediate Representation (IR)",
                        "Optimizes gas and execution logic",
                        "Converts IR → EVM Bytecode",
                        "Generates ABI for each contract",
                        "Stores everything in build artifacts",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    Think of this as converting human instructions into blockchain-ready machine code.
                </p>
            </Section>

            {/* OUTPUT */}
            <Section title="📦 3. Output Generated After Compilation">

                <p className="text-sm text-gray-400 mb-2">
                    After compilation, Hardhat creates these important folders:
                </p>

                <CodeSnippet
                    code={`artifacts/
├── contracts/
│   └── ConfidentialVault.sol/
│       └── ConfidentialVault.json   ← ABI + Bytecode

cache/                               ← speeds up future builds`}
                />

                <RuleList
                    items={[
                        "ABI (Application Binary Interface) → how frontend talks to contract",
                        "Bytecode → actual machine code deployed on blockchain",
                        "Metadata → compiler + version info",
                        "Cache → avoids recompiling unchanged files",
                    ]}
                />
            </Section>

            {/* HOW USED LATER */}
            <Section title="🔗 4. How This Output Is Used Later">

                <RuleList
                    items={[
                        "Deployment scripts use Bytecode to deploy contract",
                        "Frontend uses ABI to call functions like deposit()",
                        "Wallets encode transactions using ABI",
                        "Debugging tools read metadata for errors",
                    ]}
                />

                <p className="text-yellow-300 mt-2 font-medium">
                    Without compilation output, nothing can be deployed or interacted with.
                </p>
            </Section>

            {/* FINAL FLOW */}
            <Section title="🔄 5. Simple Mental Model">

                <CodeSnippet
                    code={`Solidity Code
    ↓
Compilation (npx hardhat compile)
    ↓
artifacts/ (ABI + Bytecode)
    ↓
Deployment Script
    ↓
Blockchain Contract
    ↓
Frontend Interaction`}
                />

                <p className="text-sm text-gray-400 mt-2">
                    This is the full pipeline from code → blockchain.
                </p>
            </Section>

        </div>
    );
}