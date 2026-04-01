import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function ConfidentialVaultDocs() {
    return (
        <div className="p-6 text-gray-200 bg-black min-h-screen">

            <h1 className="text-2xl font-bold mb-6">
                🔐 ConfidentialVault — Private Smart Contract Explained
            </h1>

            {/* PROJECT STRUCTURE */}
            <Section title="📁 1. Project Structure Context">
                <p className="text-sm text-gray-400">
                    After initializing Hardhat, you get a sample contract (<b>Lock.sol</b>).
                    You should remove it and replace it with your own contract.
                </p>

                <CodeSnippet
                    code={`project-root/
├── contracts/
│   └── ConfidentialVault.sol   ← YOUR MAIN CONTRACT
├── ignition/
│   └── modules/
├── scripts/
├── test/
├── hardhat.config.ts
├── tsconfig.json
├── package.json
├── node_modules/
└── README.md`}
                />
            </Section>

            {/* CLEANUP */}
            <Section title="🧹 2. Clean Template Files (Important)">
                <RuleList
                    items={[
                        "Delete contracts/Lock.sol (default sample contract)",
                        "Delete test/Lock.ts (optional but recommended)",
                        "Delete ignition/modules/Lock.ts (optional)",
                        "Keep project clean and focused on your contract",
                    ]}
                />
            </Section>

            {/* WHERE TO CREATE */}
            <Section title="📍 3. Where to Create This Contract">
                <RuleList
                    items={[
                        "Go to: contracts/ folder",
                        "Create: ConfidentialVault.sol",
                        "Paste your contract code",
                        "This becomes your core smart contract",
                    ]}
                />
            </Section>

            {/* ANALOGY */}
            <Section title="🧠 4. Imagine This First (Analogy)">
                <p>
                    Imagine you have a magical piggy bank 🐷✨
                </p>

                <RuleList
                    items={[
                        "No one can see how much money is inside",
                        "Not even the system knows your balance",
                        "Only YOU can access your money",
                        "You can keep adding money safely",
                    ]}
                />

                <p className="mt-2 text-yellow-300 font-medium">
                    This contract is that piggy bank — running on blockchain.
                </p>
            </Section>

            {/* USE CASE */}
            <Section title="🎯 5. What This Contract Does">
                <RuleList
                    items={[
                        "Stores balances in encrypted form",
                        "Accepts encrypted deposits",
                        "Hides all financial data from public view",
                        "Allows secure private computation",
                    ]}
                />
            </Section>

            {/* CONTRACT CODE */}
            <Section title="📜 6. Contract Code">
                <CodeSnippet
                    code={`// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import '@fhenixprotocol/cofhe-contracts/FHE.sol';

contract ConfidentialVault {
    mapping(address => euint64) private _balances;

    function deposit(InEuint64 calldata encryptedAmount) external {
        euint64 amount = FHE.asEuint64(encryptedAmount);

        _balances[msg.sender] = FHE.add(_balances[msg.sender], amount);

        FHE.allowThis(_balances[msg.sender]);
        FHE.allowSender(_balances[msg.sender]);
    }

    function getBalance() public view returns (euint64) {
        return _balances[msg.sender];
    }

    function publishBalance(
        euint64 ctHash,
        uint64 plaintext,
        bytes calldata signature
    ) external {
        FHE.publishDecryptResult(ctHash, plaintext, signature);
    }
}`}
                />
            </Section>

            {/* BREAKDOWN */}
            <Section title="🧩 7. How It Works">

                <h3 className="font-semibold mt-2">🔐 Encrypted Storage</h3>
                <CodeSnippet code={`mapping(address => euint64) private _balances;`} />

                <p className="text-sm text-gray-400 mt-2">
                    Stores encrypted balances instead of normal numbers.
                </p>

                <p>👉 Like storing money inside a locked box.</p>

                <h3 className="font-semibold mt-6">📥 Deposit</h3>
                <CodeSnippet code={`function deposit(InEuint64 calldata encryptedAmount)`} />

                <p>Users send encrypted values.</p>

                <p>👉 Like sending sealed envelopes.</p>

                <CodeSnippet code={`FHE.add(existingBalance, amount)`} />

                <p className="text-yellow-300 mt-2">
                    👉 Performs math without opening the data.
                </p>

                <h3 className="font-semibold mt-6">🔑 Permissions</h3>
                <CodeSnippet code={`FHE.allowThis(...)
FHE.allowSender(...)`} />

                <p>Controls who can use and decrypt the data.</p>

                <h3 className="font-semibold mt-6">👀 Get Balance</h3>
                <CodeSnippet code={`function getBalance() returns (euint64)`} />

                <p className="text-yellow-300">
                    👉 Returns encrypted value (not readable directly).
                </p>

                <h3 className="font-semibold mt-6">📤 Decryption Publish</h3>
                <CodeSnippet code={`FHE.publishDecryptResult(...)`} />

                <p>Used to safely reveal value with verification.</p>
            </Section>

            {/* FLOW */}
            <Section title="🔄 8. Full Flow">
                <RuleList
                    items={[
                        "Encrypt value using SDK",
                        "Send encrypted data to contract",
                        "Contract updates encrypted balance",
                        "Fetch encrypted balance",
                        "Decrypt using permission system",
                    ]}
                />
            </Section>

            {/* WHY */}
            <Section title="🚨 9. Why This Matters">
                <RuleList
                    items={[
                        "Prevents public exposure of balances",
                        "Protects user privacy",
                        "Enables confidential applications",
                        "Brings real-world security to blockchain",
                    ]}
                />
            </Section>

            {/* FINAL */}
            <Section title="🧠 Final Understanding">
                <p className="text-yellow-300 font-medium">
                    This is not just a vault — it is encrypted computation in action.
                </p>

                <p className="text-sm text-gray-400 mt-2">
                    You are building systems where data stays private, but logic still works.
                </p>
            </Section>

        </div>
    );
}