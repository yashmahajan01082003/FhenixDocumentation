"use client";

import Image from "next/image";
import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import ArrowFlow from "@/content/ComponentsForCode/ArrowFlow";
import VerticalFlow from "@/content/ComponentsForCode/VerticalFlow";

export default function DeploymentToolsDeepDive() {
    return (
        <div style={{ paddingBottom: "40px" }}>
            <Section title="System Flow Overview">
                <ArrowFlow steps={["Wallet", "RPC", "Blockchain", "Explorer"]} />
            </Section>

            {/* WALLET */}
            <Section title="1. Wallet (MetaMask)">
                <p style={{ color: "var(--color-text-secondary)", fontSize: 15, marginBottom: 16 }}>
                    Your wallet is your blockchain identity. It signs every transaction you send.
                </p>

                <div style={{ marginBottom: 24, borderRadius: 12, overflow: "hidden", border: "1px solid var(--color-border-secondary)" }}>
                    <Image src="/private_address_image.png" alt="MetaMask Wallet / Private Key" width={800} height={450} style={{ display: "block", width: "100%", height: "auto" }} priority />
                </div>

                <RuleList items={["Stores your private key securely", "Signs deployment transactions", "Represents your blockchain identity"]} />
            </Section>

            {/* RPC */}
            <Section title="2. RPC (Network Connection)">
                <p style={{ color: "var(--color-text-secondary)", fontSize: 15, marginBottom: 16 }}>
                    RPC connects your application to the blockchain network.
                </p>

                <div style={{ marginBottom: 24, borderRadius: 12, overflow: "hidden", border: "1px solid var(--color-border-secondary)" }}>
                    <Image src="/infura_rpc.png" alt="RPC / Infura Key Setup" width={800} height={450} style={{ display: "block", width: "100%", height: "auto" }} />
                </div>

                <RuleList items={["Sends deployment transactions to blockchain", "Reads blockchain state", "Acts as communication bridge"]} />
            </Section>

            {/* METAMASK DEV */}
            <Section title="3. MetaMask Developer Portal">
                <p style={{ color: "var(--color-text-secondary)", fontSize: 15, marginBottom: 16 }}>
                    Used to access RPC endpoints and network configuration details.
                </p>

                <div style={{ marginBottom: 24, borderRadius: 12, overflow: "hidden", border: "1px solid var(--color-border-secondary)" }}>
                    <Image src="/metamask.png" alt="MetaMask Developer Portal" width={800} height={450} style={{ display: "block", width: "100%", height: "auto" }} />
                </div>

                <RuleList items={["Provides RPC URLs", "Helps configure test networks", "Used for Sepolia setup"]} />
            </Section>

            {/* FAUCET */}
            <Section title="4. Faucet (Test ETH)">
                <p style={{ color: "var(--color-text-secondary)", fontSize: 15, marginBottom: 12 }}>
                    Deployment on blockchain requires <strong style={{ color: "var(--color-text-primary)" }}>gas fees</strong>, even on test networks like Sepolia. Since we are not using real money, we get free test ETH from something called a <strong style={{ color: "var(--color-text-primary)" }}>faucet</strong>.
                </p>

                <p style={{ color: "var(--color-text-secondary)", fontSize: 15, marginBottom: 32 }}>
                    A faucet is simply a service that gives you free Sepolia ETH so you can test deployments safely.
                </p>

                <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 16, paddingBottom: 8, borderBottom: "1px solid var(--color-border-primary)" }}>
                    Ways to Get Sepolia ETH
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                    <div>
                        <h5 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 8 }}>Option 1: MetaMask Developer Faucet</h5>
                        <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 12 }}>MetaMask provides an official faucet through its developer tools.</p>
                        <RuleList items={["Requires MetaMask wallet connection", "Uses 'Proof of Humanity' verification", "May have restrictions based on region limits"]} />
                        <div style={{ marginTop: 12 }}><a href="https://docs.metamask.io/developer-tools/faucet" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "none", fontSize: 14 }}>&rarr; MetaMask Faucet Docs</a></div>
                    </div>

                    <div style={{ padding: 24, background: "var(--color-bg-secondary)", borderRadius: 16, border: "1px solid var(--color-accent-subtle)" }}>
                        <h5 style={{ fontSize: 15, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 8, display: "flex", gap: 8, alignItems: "center" }}>
                            <span style={{ background: "var(--color-accent)", color: "#fff", padding: "2px 8px", borderRadius: 4, fontSize: 11, textTransform: "uppercase" }}>Recommended</span>
                            Option 2: Google Cloud Web3 Faucet
                        </h5>
                        <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 16 }}>Google Cloud provides a simple and reliable faucet for Sepolia ETH under its Web3 infrastructure tools. We will use this.</p>

                        <div style={{ marginBottom: 16, borderRadius: 8, overflow: "hidden", border: "1px solid var(--color-border-primary)" }}>
                            <Image src="/faucet.png" alt="Google Cloud Web3 Faucet" width={800} height={450} style={{ display: "block", width: "100%", height: "auto" }} />
                        </div>

                        <RuleList items={["No complex verification flows", "Directly sends Sepolia ETH to your wallet", "Stable and widely used"]} />
                        <div style={{ marginTop: 16 }}><a href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>&rarr; Access Google Web3 Faucet</a></div>
                    </div>

                    <div>
                        <h5 style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text-primary)", marginBottom: 8 }}>Option 3: Alternative Public Faucets</h5>
                        <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginBottom: 12 }}>Community-run Sepolia faucets across different platforms.</p>
                        <RuleList items={["May require social login or wallet activity proof", "Often rate-limited", "Useful as backup if primary faucets fail"]} />
                    </div>
                </div>

                <div style={{ marginTop: 40, marginBottom: 24 }}>
                    <h4 style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 16 }}>How Faucet Fits into Deployment</h4>
                    <VerticalFlow steps={["Faucet gives test ETH", "Wallet receives balance", "Deployment uses gas fee", "Blockchain executes transaction"]} />
                </div>

                <div style={{ padding: "16px 20px", background: "var(--color-bg-elevated)", borderLeft: "4px solid var(--color-accent)", borderRadius: "8px", color: "var(--color-text-primary)", fontSize: "14px", fontWeight: 500 }}>
                    <strong style={{ color: "var(--color-accent)" }}>Key Insight:</strong> Without faucet ETH, your deployment transaction will fail because the blockchain requires gas fees even in test environments.
                </div>
            </Section>

            {/* FLOW */}
            <Section title="How Everything Connects">
                <VerticalFlow steps={["MetaMask (Wallet)", "RPC (Connection)", "Faucet (Gas)", "Blockchain Execution", "Explorer Verification"]} />
            </Section>

            {/* FINAL */}
            <Section title="Final Insight">
                <p style={{ color: "var(--color-text-primary)", fontSize: 16, lineHeight: 1.6 }}>
                    Each tool plays a specific role &mdash; identity, connection, funding, and verification &mdash; forming the complete deployment pipeline.
                </p>
            </Section>

        </div>
    );
}