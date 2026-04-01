import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function DeploymentComponent() {
    return (
        <div className="p-6 text-gray-200 bg-black min-h-screen">

            <h1 className="text-2xl font-bold mb-6">
                🚀 What is Deployment in Smart Contracts?
            </h1>

            <Section title="🧠 Simple Understanding">
                <p>
                    Deployment is the process of taking your smart contract code and making it live on a blockchain network.
                    Once deployed, it becomes permanent, accessible, and interactable by anyone.
                </p>

                <p className="mt-2">
                    Think of deployment as moving your contract from your computer → to the blockchain.
                </p>

                <CodeSnippet code={`Code → Compile → Sign → Send → Blockchain → Live Contract`} />
            </Section>

            <Section title="❓ Why do we need Deployment?">
                <RuleList
                    items={[
                        "Smart contracts on your system are not accessible to users",
                        "Blockchain requires deployed bytecode to execute logic",
                        "Frontend apps need a contract address to interact with",
                    ]}
                />
            </Section>

            <Section title="🧩 What happens during Deployment?">
                <RuleList
                    items={[
                        "Solidity code is compiled into bytecode",
                        "A deployment transaction is created",
                        "Wallet (MetaMask / Private Key) signs it",
                        "Transaction is sent via RPC",
                        "Blockchain executes and stores the contract",
                        "A contract address is generated",
                    ]}
                />
            </Section>

            <Section title="⚙️ What do we need for Deployment?">

                <h3 className="font-semibold mt-2">🔑 1. Wallet / Private Key</h3>
                <p>
                    Used to sign transactions and prove ownership of deployment.
                    Usually comes from MetaMask.
                </p>

                <h3 className="font-semibold mt-6">🌐 2. RPC URL</h3>
                <p>
                    RPC is the connection between your code and the blockchain.
                </p>

                <p className="mt-2">👉 Get RPC URL from MetaMask Developer Portal:</p>

                <a
                    href="https://developer.metamask.io/login"
                    target="_blank"
                    className="text-blue-400 underline"
                >
                    MetaMask Developer Portal
                </a>

                <h3 className="font-semibold mt-6">🦊 3. MetaMask Wallet</h3>

                <RuleList
                    items={[
                        "Managing accounts",
                        "Switching networks (like Sepolia)",
                        "Signing transactions",
                    ]}
                />

                <h3 className="font-semibold mt-6">🚰 4. Faucet (Test ETH)</h3>
                <p>
                    Needed because deployment requires gas fees. Faucets give free Sepolia ETH for testing.
                </p>

                <h3 className="font-semibold mt-6">🔎 5. Sepolia Etherscan</h3>

                <RuleList
                    items={[
                        "Track transactions",
                        "Verify contract deployment",
                        "View contract address",
                    ]}
                />

                <a
                    href="https://sepolia.etherscan.io"
                    target="_blank"
                    className="text-blue-400 underline"
                >
                    Sepolia Etherscan
                </a>
            </Section>

            <Section title="🔄 Full Deployment Flow">
                <CodeSnippet
                    code={`MetaMask Wallet
↓
Private Key
↓
Hardhat / Script Config
↓
RPC URL (MetaMask Developer Portal)
↓
Transaction Signing
↓
Sepolia Blockchain
↓
Contract Deployment
↓
Etherscan Verification`}
                />
            </Section>

            <Section title="🧠 Key Takeaway">
                <p>
                    Deployment is a signed blockchain transaction that permanently stores your smart contract on the network.
                </p>
            </Section>

        </div>
    );
}