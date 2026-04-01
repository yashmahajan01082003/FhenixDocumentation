"use client";

import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import ArrowFlow from "@/content/ComponentsForCode/ArrowFlow";

export default function DeploymentIntro() {
    return (
        <div style={{ paddingBottom: "40px" }}>
            <Section title="Simple Understanding">
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: 16 }}>
                    Deployment is the process of taking your smart contract code and making it live on a blockchain network.
                    Once deployed, it becomes permanent, accessible, and interactable by anyone.
                </p>

                <p style={{ fontSize: 15, color: "var(--color-text-primary)", fontWeight: 500, marginBottom: 24 }}>
                    Think of deployment as moving your contract from your computer &rarr; to the blockchain.
                </p>

                <ArrowFlow
                    steps={[
                        "Code", "Compile", "Sign", "Send", "Blockchain", "Live Contract"
                    ]}
                />
            </Section>

            <Section title="Why do we need Deployment?">
                <RuleList
                    items={[
                        "Smart contracts on your local system are not accessible to users",
                        "The blockchain requires deployed bytecode to execute logic",
                        "Frontend apps need a unique contract address to interact with",
                    ]}
                />
            </Section>

            <Section title="What happens during Deployment?">
                <RuleList
                    items={[
                        "Solidity code is compiled into bytecode",
                        "A deployment transaction is created",
                        "Your Wallet (MetaMask / Private Key) signs it",
                        "The transaction is sent via RPC",
                        "The blockchain executes and stores the contract permanently",
                        "A unique contract address is generated",
                    ]}
                />
            </Section>

            <Section title="Requirements for Deployment">
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24, marginTop: 16 }}>
                    <div>
                        <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 8 }}>1. Wallet / Private Key</h4>
                        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0 }}>Used to sign transactions and prove ownership of deployment. Usually from MetaMask.</p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 8 }}>2. RPC URL</h4>
                        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0, marginBottom: 8 }}>RPC is the connection between your code and the blockchain.</p>
                        <a href="https://developer.metamask.io/login" target="_blank" style={{ color: "var(--color-accent)", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>&rarr; MetaMask Developer Portal</a>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 8 }}>3. MetaMask Wallet</h4>
                        <RuleList items={["Managing accounts", "Switching networks (like Sepolia)", "Signing transactions"]} />
                    </div>

                    <div>
                        <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 8 }}>4. Faucet (Test ETH)</h4>
                        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0 }}>Needed because deployment requires gas fees. Faucets give free Sepolia ETH for testing.</p>
                    </div>

                    <div>
                        <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 8 }}>5. Sepolia Etherscan</h4>
                        <RuleList items={["Track transactions", "Verify contract deployment", "View contract address"]} />
                        <div style={{ marginTop: 8 }}>
                            <a href="https://sepolia.etherscan.io" target="_blank" style={{ color: "var(--color-accent)", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>&rarr; Sepolia Etherscan</a>
                        </div>
                    </div>
                </div>
            </Section>

            <Section title="Full Deployment Flow">
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                    From configuration to verification.
                </p>
                <ArrowFlow
                    steps={[
                        "MetaMask Wallet", "Private Key", "Hardhat Config", "RPC URL", "Transaction Signing", "Sepolia Blockchain", "Contract Deployment", "Etherscan Verification"
                    ]}
                />
            </Section>

            <Section title="Key Takeaway">
                <div style={{
                    padding: "20px 24px", background: "var(--color-bg-elevated)",
                    borderLeft: "4px solid var(--color-accent)", borderRadius: "8px",
                    color: "var(--color-text-primary)", fontSize: "15px", fontWeight: 500
                }}>
                    Deployment is a signed blockchain transaction that permanently stores your smart contract on the network.
                </div>
            </Section>
        </div>
    );
}