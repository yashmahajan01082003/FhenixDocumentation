"use client";

import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";
import FunctionTooltip from "@/content/ComponentsForCode/FunctionTooltip";

export default function CofheServiceDocs() {
    return (
        <div style={{ paddingBottom: "40px" }}>
            {/* STRUCTURE */}
            <Section title="1. Project Structure">
                <CodeSnippet
                    code={`src/
├── config/
│   ├── abi.json
│   └── contract.js
├── services/
│   └── cofheService.js
├── App.jsx
└── main.jsx`}
                />
            </Section>

            {/* FULL FILE */}
            <Section title="2. Full cofheService.js File">
                <CodeSnippet code={`// imports
import { createCofheConfig, createCofheClient } from "@cofhe/sdk/web";
import { Encryptable, FheTypes } from "@cofhe/sdk";
import { chains } from "@cofhe/sdk/chains";
import { createPublicClient, createWalletClient, http, custom } from "viem";
import { sepolia } from "viem/chains";
import { CONTRACT_ADDRESS } from "../config/contract";
import ABI from "../config/abi.json";

// global state
let client;
let publicClient;
let walletClient;
let account;

// init
export async function init() {
    await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0xaa36a7" }],
    });

    const config = createCofheConfig({
        supportedChains: [chains.sepolia],
    });

    client = createCofheClient(config);

    publicClient = createPublicClient({
        chain: sepolia,
        transport: http(),
    });

    walletClient = createWalletClient({
        chain: sepolia,
        transport: custom(window.ethereum),
    });

    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });

    account = accounts[0];

    await client.connect(publicClient, walletClient);
    walletClient.account = account;

    await client.permits.getOrCreateSelfPermit();
}

// deposit
export async function deposit(amount) {
    const [encryptedAmount] = await client
        .encryptInputs([Encryptable.uint64(BigInt(amount))])
        .execute();

    await walletClient.writeContract({
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: "deposit",
        args: [encryptedAmount],
        account,
    });
}

// get balance
export async function getBalance() {
    const permit = await client.permits.getOrCreateSelfPermit();

    const ctHash = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: "getBalance",
        account,
    });

    return await client
        .decryptForView(ctHash, FheTypes.Uint64)
        .withPermit(permit)
        .execute();
}

// publish
export async function publishBalance() {
    const permit = await client.permits.getOrCreateSelfPermit();

    const ctHash = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: "getBalance",
        account,
    });

    const { decryptedValue, signature } = await client
        .decryptForTx(ctHash)
        .withPermit(permit)
        .execute();

    await walletClient.writeContract({
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: "publishBalance",
        args: [ctHash, decryptedValue, signature],
        account,
    });
}`}
                />
            </Section>

            {/* FUNCTION LEVEL */}
            <Section title="3. Function-Level Explanation">
                <p style={{ color: "var(--color-text-secondary)", marginBottom: 24, fontSize: 15 }}>
                    Hover over the function names below to see exactly what they do, what inputs they take, and how the encryption steps are applied.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                        <FunctionTooltip
                            name="init()"
                            purpose="Initializes Cofhe + blockchain environment."
                            input="None"
                            output="Sets up global clients (no return)"
                            processing={[
                                "Switches wallet to Sepolia network",
                                "Creates Cofhe encryption client",
                                "Initializes public + wallet clients",
                                "Connects wallet account",
                                "Generates permit for encrypted operations"
                            ]}
                        />
                    </div>

                    <div>
                        <FunctionTooltip
                            name="deposit(amount)"
                            purpose="Stores encrypted value on-chain."
                            input="amount (number)"
                            output="Transaction sent to contract"
                            processing={[
                                "Converts amount → uint64",
                                "Encrypts using Cofhe",
                                "Sends encrypted value to smart contract"
                            ]}
                        />
                    </div>

                    <div>
                        <FunctionTooltip
                            name="getBalance()"
                            purpose="Retrieves and decrypts balance."
                            input="None"
                            output="Decrypted balance (number)"
                            processing={[
                                "Fetches encrypted balance (ctHash)",
                                "Uses permit for access",
                                "Decrypts locally in browser"
                            ]}
                        />
                    </div>

                    <div>
                        <FunctionTooltip
                            name="publishBalance()"
                            purpose="Publishes decrypted balance on-chain."
                            input="None"
                            output="Transaction confirming public value"
                            processing={[
                                "Fetches encrypted balance",
                                "Decrypts + generates cryptographic proof",
                                "Sends value + signature to contract"
                            ]}
                        />
                    </div>
                </div>
            </Section>

            {/* FINAL */}
            <Section title="Final Insight">
                <p style={{ color: "var(--color-accent)", fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
                    This is encrypted computation, not just API calls.
                </p>

                <RuleList
                    items={[
                        "Data stays encrypted on-chain",
                        "Decryption requires explicit permission",
                        "Frontend participates in secure computation",
                    ]}
                />
            </Section>

        </div>
    );
}