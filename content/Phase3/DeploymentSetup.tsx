import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function DeploymentCodeSetup() {
    return (
        <div className="p-6 text-gray-200 bg-black min-h-screen">

            <h1 className="text-2xl font-bold mb-6">
                ⚙️ Deployment Code Setup — Smart Contract Pipeline
            </h1>

            {/* INTRO */}
            <Section title="🚀 1. What We Are Building Here">
                <p className="text-sm text-gray-400">
                    Now we move from theory → real implementation.
                    This setup connects your smart contract project to the blockchain network.
                </p>

                <p className="mt-2 text-yellow-300">
                    Think of this as wiring your app so it can actually deploy contracts.
                </p>
            </Section>

            {/* DIRECTORY STRUCTURE */}
            <Section title="📁 2. Project Directory Structure">
                <p className="text-sm text-gray-400">
                    This is the standard Hardhat + deployment project layout.
                </p>

                <CodeSnippet
                    code={`deployUsingTestNet/
│
├── contracts/
│   └── ConfidentialVault.sol
│
├── scripts/
│   └── deploy.js
│
├── test/
│   └── vault.test.js
│
├── hardhat.config.js
├── .env
└── package.json`}
                />

                <RuleList
                    items={[
                        "contracts/ → Smart contract code lives here",
                        "scripts/ → Deployment logic",
                        "test/ → Automated testing",
                        "hardhat.config.js → Blockchain configuration",
                        ".env → Sensitive keys (NEVER expose)"
                    ]}
                />
            </Section>

            {/* DOTENV INSTALL */}
            <Section title="📦 3. Install dotenv (MANDATORY)">
                <CodeSnippet code={`npm install dotenv`} />

                <RuleList
                    items={[
                        "Loads environment variables from .env file",
                        "Prevents hardcoding private keys",
                        "Required for real network deployment"
                    ]}
                />
            </Section>

            {/* ENV FILE */}
            <Section title="🔐 4. Environment Variables (.env)">
                <p className="text-sm text-gray-400">
                    This file stores sensitive credentials needed for deployment.
                </p>

                <CodeSnippet
                    code={`PRIVATE_KEY=
SEPOLIA_RPC_URL=`}
                />

                <RuleList
                    items={[
                        "PRIVATE_KEY → Used to sign blockchain transactions",
                        "SEPOLIA_RPC_URL → Connects your app to Sepolia network",
                        "Never push .env to GitHub",
                        "Always keep it local and secure"
                    ]}
                />
            </Section>

            {/* HARDHAT CONFIG */}
            <Section title="⚙️ 5. Hardhat Configuration">
                <p className="text-sm text-gray-400">
                    Hardhat controls compilation, deployment, and plugin integration.
                </p>

                <CodeSnippet
                    code={`require("@nomicfoundation/hardhat-toolbox");
require("@cofhe/hardhat-plugin");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      evmVersion: "cancun",
    },
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};`}
                />

                <RuleList
                    items={[
                        "dotenv loads .env variables",
                        "RPC URL connects to Sepolia network",
                        "Private key signs transactions",
                        "Cofhe plugin enables encrypted contracts",
                    ]}
                />
            </Section>

            {/* DEPLOY SCRIPT */}
            <Section title="🚀 6. Deployment Script (scripts/deploy.js)">
                <p className="text-sm text-gray-400">
                    This script deploys your contract to the blockchain.
                </p>

                <CodeSnippet
                    code={`const hre = require("hardhat");

async function main() {
    const Factory = await hre.ethers.getContractFactory("ConfidentialVault");

    const contract = await Factory.deploy();

    await contract.waitForDeployment();

    console.log("✅ Contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});`}
                />

                <RuleList
                    items={[
                        "Gets contract factory",
                        "Deploys contract to Sepolia",
                        "Waits for confirmation",
                        "Prints deployed contract address"
                    ]}
                />
            </Section>

            {/* COMMAND */}
            <Section title="▶️ 7. Deployment Command">
                <p className="text-sm text-gray-400">
                    Run this command to deploy your contract on Sepolia testnet.
                </p>

                <CodeSnippet
                    code={`npx hardhat run scripts/deploy.js --network sepolia`}
                />
            </Section>

            {/* OUTPUT */}
            <Section title="📦 8. Expected Output">
                <CodeSnippet
                    code={`[dotenv@17.3.1] injecting env (2) from .env
[dotenv@17.3.1] injecting env (0) from .env
✅ Contract deployed to: 0x9b568888e69e92f92B27348fb6010Eb1057a302c`}
                />

                <RuleList
                    items={[
                        "dotenv loads environment variables",
                        "Hardhat connects to Sepolia",
                        "Contract gets deployed successfully",
                        "You receive contract address"
                    ]}
                />
            </Section>

            {/* FINAL INSIGHT */}
            <Section title="🧠 9. Key Insight">
                <p className="text-yellow-300 font-medium">
                    Deployment is not just a command — it is a full pipeline.
                </p>

                <p className="text-sm text-gray-400 mt-2">
                    Every part (env → config → script → network) works together to push your contract to blockchain.
                </p>
            </Section>

        </div>
    );
}