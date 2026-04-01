import Image from "next/image";
import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function DeploymentToolsDeepDive() {
    return (
        <div className="p-6 text-gray-200 bg-black min-h-screen">

            <h1 className="text-2xl font-bold mb-6">
                🔧 Tools Required for Deployment
            </h1>

            <Section title="🧠 System Flow Overview">
                <CodeSnippet code={`Wallet → RPC → Blockchain → Explorer`} />
            </Section>

            {/* WALLET */}
            <Section title="🦊 1. Wallet (MetaMask)">
                <p>
                    Your wallet is your blockchain identity. It signs every transaction you send.
                </p>

                <div className="mt-4">
                    <Image
                        src="/private_address_image.png"
                        alt="MetaMask Wallet / Private Key"
                        width={800}
                        height={450}
                        style={{ borderRadius: "12px" }}
                        priority
                    />
                </div>

                <RuleList
                    items={[
                        "Stores your private key securely",
                        "Signs deployment transactions",
                        "Represents your blockchain identity",
                    ]}
                />
            </Section>

            {/* RPC */}
            <Section title="🌐 2. RPC (Network Connection)">
                <p>
                    RPC connects your application to the blockchain network.
                </p>

                <div className="mt-4">
                    <Image
                        src="/infura_rpc.png"
                        alt="RPC / Infura Key Setup"
                        width={800}
                        height={450}
                        style={{ borderRadius: "12px" }}
                    />
                </div>

                <RuleList
                    items={[
                        "Sends deployment transactions to blockchain",
                        "Reads blockchain state",
                        "Acts as communication bridge",
                    ]}
                />
            </Section>

            {/* METAMASK DEV */}
            <Section title="🧑‍💻 3. MetaMask Developer Portal">
                <p>
                    Used to access RPC endpoints and network configuration details.
                </p>

                <div className="mt-4">
                    <Image
                        src="/metamask.png"
                        alt="MetaMask Developer Portal"
                        width={800}
                        height={450}
                        style={{ borderRadius: "12px" }}
                    />
                </div>

                <RuleList
                    items={[
                        "Provides RPC URLs",
                        "Helps configure test networks",
                        "Used for Sepolia setup",
                    ]}
                />
            </Section>

            {/* FAUCET */}
            <h3 className="font-semibold mt-6">🚰 4. Faucet (Test ETH)</h3>

            <p>
                Deployment on blockchain requires <b>gas fees</b>, even on test networks like Sepolia.
                Since we are not using real money, we get free test ETH from something called a <b>faucet</b>.
            </p>

            <p>
                A faucet is simply a service that gives you free Sepolia ETH so you can test deployments safely.
            </p>

            <h4 className="font-semibold mt-4">🧠 Ways to Get Sepolia ETH</h4>

            <hr />

            <h4 className="mt-4">1. 🦊 MetaMask Developer Faucet</h4>

            <p>
                MetaMask provides an official faucet through its developer tools.
            </p>

            <ul>
                <li>Requires MetaMask wallet connection</li>
                <li>Uses “Proof of Humanity” verification (like GitHub, social login, or identity checks)</li>
                <li>May have restrictions based on region or usage limits</li>
            </ul>

            <p>
                📌 Useful for experimentation, but not always the most reliable for repeated testing.
            </p>

            <p>
                Docs: https://docs.metamask.io/developer-tools/faucet
            </p>

            <hr />

            <h4 className="mt-4">2. ☁️ Google Cloud Web3 Faucet (Recommended)</h4>

            <p>
                This is the method we will use in this workshop.
            </p>

            <p>
                Google Cloud provides a simple and reliable faucet for Sepolia ETH under its Web3 infrastructure tools.
            </p>
            <div className="mt-4">
                <Image
                    src="/faucet.png"
                    alt="Google Cloud Web3 Faucet"
                    width={800}
                    height={450}
                    style={{ borderRadius: "12px" }}
                />
            </div>

            <ul>
                <li>No complex verification flows like proof-of-humanity systems</li>
                <li>Directly sends Sepolia ETH to your wallet</li>
                <li>Stable and widely used in developer environments</li>
                <li>Better reliability for continuous testing</li>
            </ul>

            <p>
                📌 This will be our primary faucet for deployment practice.
            </p>

            <p>
                Link: https://cloud.google.com/application/web3/faucet/ethereum/sepolia
            </p>

            <hr />

            <h4 className="mt-4">3. 🌐 Alternative Public Faucets</h4>

            <p>
                There are also community-run Sepolia faucets available across different platforms.
            </p>

            <ul>
                <li>May require social login or wallet activity proof</li>
                <li>Often rate-limited (low daily ETH requests)</li>
                <li>Less reliable for structured learning environments</li>
            </ul>

            <p>
                📌 Useful as backup if primary faucets fail.
            </p>

            <hr />

            <h4 className="mt-4">🧩 How Faucet Fits into Deployment</h4>

            <pre>
                Faucet → gives test ETH
                ↓
                Wallet → receives balance
                ↓
                Deployment → uses gas fee
                ↓
                Blockchain → executes transaction
            </pre>

            <hr />

            <p>
                🧠 <b>Key Insight:</b> Without faucet ETH, your deployment transaction will fail because the blockchain
                requires gas fees even in test environments.
            </p>
            {/* FLOW */}
            <Section title="🧩 How Everything Connects">
                <CodeSnippet
                    code={`MetaMask (Wallet)
↓
RPC (Connection)
↓
Faucet (Gas)
↓
Blockchain Execution
↓
Explorer Verification`}
                />
            </Section>

            {/* FINAL */}
            <Section title="🧠 Final Insight">
                <p>
                    Each tool plays a specific role — identity, connection, funding, and verification —
                    forming the complete deployment pipeline.
                </p>
            </Section>

        </div>
    );
}