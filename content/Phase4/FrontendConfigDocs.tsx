import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function FrontendConfigDocs() {
    return (
        <div className="p-6 text-gray-200 bg-black min-h-screen">

            <h1 className="text-2xl font-bold mb-6">
                🔗 Frontend Config Setup (ABI + Contract)
            </h1>

            {/* INTRO */}
            <Section title="🧠 1. Why This Folder Exists">
                <p className="text-sm text-gray-400">
                    Your frontend cannot directly understand Solidity contracts.
                    It needs a bridge to interact with the blockchain.
                </p>

                <p className="mt-2 text-yellow-300">
                    👉 This config folder acts as that bridge.
                </p>
            </Section>

            {/* STRUCTURE */}
            <Section title="📁 2. Config Folder Structure">
                <CodeSnippet
                    code={`src/
└── config/
    ├── abi.json
    └── contract.js`}
                />

                <RuleList
                    items={[
                        "abi.json → Describes contract functions",
                        "contract.js → Stores deployed contract address",
                        "Used by frontend to interact with blockchain",
                    ]}
                />
            </Section>

            {/* ABI EXPLANATION */}
            <Section title="📜 3. What is ABI?">
                <p className="text-sm text-gray-400">
                    ABI (Application Binary Interface) is a JSON file that defines
                    how your frontend can call smart contract functions.
                </p>

                <p className="mt-2">
                    👉 Think of it as a menu of all available contract functions.
                </p>

                <RuleList
                    items={[
                        "Lists all functions (deposit, getBalance, etc.)",
                        "Defines input/output types",
                        "Required for calling contract from frontend",
                    ]}
                />
            </Section>

            {/* ABI EXAMPLE */}
            <Section title="📦 4. Example ABI Structure">
                <CodeSnippet
                    code={`{
  "name": "deposit",
  "inputs": [...],
  "outputs": [],
  "type": "function"
}`}
                />

                <p className="text-sm text-gray-400 mt-2">
                    Each object represents a function or event in your contract.
                </p>
            </Section>

            {/* HOW TO GET ABI */}
            <Section title="⬇️ 5. How to Get abi.json">
                <p className="text-sm text-gray-400">
                    ABI is automatically generated when you compile your smart contract.
                </p>

                <CodeSnippet
                    code={`artifacts/contracts/ConfidentialVault.sol/ConfidentialVault.json`}
                />

                <RuleList
                    items={[
                        "Run: npx hardhat compile",
                        "Go to artifacts/contracts/YourContract.sol/",
                        "Open the generated JSON file",
                        "Copy the 'abi' array",
                        "Paste it into src/config/abi.json",
                    ]}
                />
            </Section>

            {/* CONTRACT FILE */}
            <Section title="📍 6. contract.js (Contract Address)">
                <p className="text-sm text-gray-400">
                    This file stores the deployed contract address.
                </p>

                <CodeSnippet
                    code={`export const CONTRACT_ADDRESS = "YOUR_DEPLOYED_ADDRESS";`}
                />

                <RuleList
                    items={[
                        "Address is generated after deployment",
                        "Frontend uses it to locate contract on blockchain",
                        "Must match the network (Sepolia, etc.)",
                        "Never hardcode wrong network address",
                    ]}
                />
            </Section>

            {/* HOW TO GET ADDRESS */}
            <Section title="📡 7. Where to Get Contract Address">
                <RuleList
                    items={[
                        "From terminal after deployment",
                        "From deployment script logs",
                        "From Sepolia Etherscan",
                        "From Hardhat output",
                    ]}
                />

                <p className="text-yellow-300 mt-2">
                    👉 This is the unique location of your contract on blockchain.
                </p>
            </Section>

            {/* HOW THEY WORK TOGETHER */}
            <Section title="🔄 8. How ABI + Address Work Together">
                <CodeSnippet
                    code={`Frontend
   ↓
ABI (What functions exist)
   +
Contract Address (Where contract lives)
   ↓
Blockchain Interaction`}
                />

                <RuleList
                    items={[
                        "ABI tells HOW to interact",
                        "Address tells WHERE to interact",
                        "Both are required for any dApp",
                    ]}
                />
            </Section>

            {/* FINAL */}
            <Section title="🧠 Final Insight">
                <p className="text-yellow-300 font-medium">
                    Without ABI + Address, your frontend cannot talk to your smart contract.
                </p>

                <p className="text-sm text-gray-400 mt-2">
                    This config layer is what turns your UI into a real Web3 application.
                </p>
            </Section>

        </div>
    );
}