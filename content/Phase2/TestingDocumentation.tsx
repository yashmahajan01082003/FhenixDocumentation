import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeBlock from "@/content/ComponentsForCode/CodeBlock";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function TestingDocumentation() {
    return (
        <div className="p-6 text-gray-200 bg-black min-h-screen">

            <h1 className="text-2xl font-bold mb-6">
                🧪 Phase 1 — CoFHE Testing Lifecycle (Complete Flow)
            </h1>

            {/* 1. DIRECTORY STRUCTURE */}
            <Section title="📁 1. Project Directory Structure (Where Test File Goes)">
                <p className="text-sm text-gray-400 mb-2">
                    Your test file must be placed inside the <b>test/</b> folder.
                </p>

                <CodeSnippet
                    code={`project-root/
├── contracts/
│   └── ConfidentialVault.sol
├── test/
│   └── voting-test.js   ← 👈 YOUR TEST FILE GOES HERE
├── artifacts/
├── cache/
├── hardhat.config.ts
├── package.json
└── node_modules/`}
                />
            </Section>

            {/* 2. TEST FILE */}
            <Section title="📄 2. Test File (voting-test.js)">
                <CodeSnippet
                    code={`const hre = require("hardhat");
const { expect } = require("chai");
const { Encryptable, FheTypes } = require("@cofhe/sdk");

describe("ConfidentialVault", function () {
  let client;

  before(async () => {
    const [signer] = await hre.ethers.getSigners();
    client = await hre.cofhe.createClientWithBatteries(signer);
  });

  it("should store and decrypt balance", async () => {
    const Factory = await hre.ethers.getContractFactory("ConfidentialVault");
    const vault = await Factory.deploy();

    const [encrypted] = await client
      .encryptInputs([Encryptable.uint64(100n)])
      .execute();

    await vault.deposit(encrypted);

    const ctHash = await vault.getBalance();

    const balance = await client
      .decryptForView(ctHash, FheTypes.Uint64)
      .execute();

    expect(balance).to.equal(100n);
  });
});`}
                />
            </Section>

            {/* 3. EXPLANATION */}
            <Section title="🧠 3. What This Test Is Doing">
                <RuleList
                    items={[
                        "Deploys ConfidentialVault contract",
                        "Encrypts value (100) using CoFHE SDK",
                        "Sends encrypted data to smart contract",
                        "Performs encrypted computation using FHE.add()",
                        "Stores encrypted result on blockchain",
                        "Fetches encrypted balance",
                        "Decrypts value using CoFHE network",
                        "Validates final result using Chai",
                    ]}
                />
            </Section>

            {/* 4. COMMAND */}
            <Section title="⚙️ 4. Command to Run Test">
                <CodeBlock file="terminal" code={`npx hardhat test`} />
            </Section>

            {/* 5. WHAT HAPPENS ON TEST RUN */}
            <Section title="⚙️ 5. What Happens When Test Runs">
                <RuleList
                    items={[
                        "Hardhat compiles contracts (if needed)",
                        "Temporary in-memory blockchain is created",
                        "CoFHE mock system is deployed",
                        "Test file is executed step-by-step",
                        "Encrypted operations are simulated using mocks",
                        "Blockchain state exists only during execution",
                    ]}
                />
            </Section>

            {/* 6. OUTPUT */}
            <Section title="📊 6. Actual Test Output You Get">
                <CodeSnippet
                    code={`✓ cofhe-hardhat-plugin :: deploy mocks

  ✓ MockTaskManager deployed             0xeA30c4B8b44078Bbf8a6ef5b9f1eC1626C7848D9
  ✓ MockACL deployed                     0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
    ✓ ACL address set in TaskManager
    ✓ Verifier signer set
    ✓ Decrypt result signer set
  ✓ ZkVerifier signer (0x6E12D8C87503D4287c294f2Fdef96ACd9DFf6bd2) funded
    ✓ ETH balance: 10000000000000000000
  ✓ MockZkVerifier deployed              0x0000000000000000000000000000000000005001
  ✓ MockThresholdNetwork deployed        0x0000000000000000000000000000000000005002
    ✓ TestBed deployment enabled
  ✓ TestBed deployed                     0x0000000000000000000000000000000000005003

✓ cofhe-hardhat-plugin :: mocks deployed successfully

⚠ NOTE: When using mocks, FHE operations (eg FHE.add / FHE.mul) report a higher gas price due to additional on-chain mocking logic. Deploy your contracts on a testnet chain to check the true gas costs.
(Disable this warning by setting '@cofhe/sdk.gasWarning' to false in your hardhat config)

  ConfidentialVault
    ✔ should store and decrypt balance (220ms)

  1 passing (269ms)`}
                />
            </Section>

            {/* 7. AFTER TEST */}
            <Section title="🧹 7. What Happens After Test Completes">
                <RuleList
                    items={[
                        "Temporary blockchain is destroyed",
                        "All deployed contracts are removed",
                        "CoFHE mock network resets",
                        "Encrypted state is cleared",
                        "Only artifacts/ and cache/ remain",
                    ]}
                />
            </Section>

            {/* 8. FINAL SUMMARY */}
            <Section title="📌 8. Final Understanding">
                <RuleList
                    items={[
                        "Testing runs on a temporary blockchain",
                        "CoFHE uses mock infrastructure for encryption simulation",
                        "All smart contract operations remain encrypted",
                        "Decryption happens only during verification",
                        "Everything is reset after test execution",
                    ]}
                />
            </Section>

        </div>
    );
}