import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function CofheServiceDocs() {
    return (
        <div className="p-6 text-gray-200 bg-black min-h-screen">

            <h1 className="text-2xl font-bold mb-6">
                🔐 Cofhe Service Layer — Function-Level Overview
            </h1>

            {/* STRUCTURE */}
            <Section title="🗂️ 1. Project Structure">
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
            <Section title="📜 2. Full cofheService.js File">
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
            <Section title="🧠 3. Function-Level Explanation">

                <h3 className="font-semibold mt-4">⚙️ init()</h3>
                <p className="text-sm text-gray-400">
                    <b>Purpose:</b> Initializes Cofhe + blockchain environment.
                    <br /><br />
                    <b>Input:</b> None
                    <br />
                    <b>Output:</b> Sets up global clients (no return)
                    <br /><br />
                    <b>Processing:</b>
                    <br />
                    - Switches wallet to Sepolia network
                    <br />
                    - Creates Cofhe encryption client
                    <br />
                    - Initializes public + wallet clients
                    <br />
                    - Connects wallet account
                    <br />
                    - Generates permit for encrypted operations
                </p>

                <h3 className="font-semibold mt-6">📥 deposit(amount)</h3>
                <p className="text-sm text-gray-400">
                    <b>Purpose:</b> Stores encrypted value on-chain.
                    <br /><br />
                    <b>Input:</b> amount (number)
                    <br />
                    <b>Output:</b> Transaction sent to contract
                    <br /><br />
                    <b>Processing:</b>
                    <br />
                    - Converts amount → uint64
                    <br />
                    - Encrypts using Cofhe
                    <br />
                    - Sends encrypted value to smart contract
                </p>

                <h3 className="font-semibold mt-6">👀 getBalance()</h3>
                <p className="text-sm text-gray-400">
                    <b>Purpose:</b> Retrieves and decrypts balance.
                    <br /><br />
                    <b>Input:</b> None
                    <br />
                    <b>Output:</b> Decrypted balance (number)
                    <br /><br />
                    <b>Processing:</b>
                    <br />
                    - Fetches encrypted balance (ctHash)
                    <br />
                    - Uses permit for access
                    <br />
                    - Decrypts locally in browser
                </p>

                <h3 className="font-semibold mt-6">📤 publishBalance()</h3>
                <p className="text-sm text-gray-400">
                    <b>Purpose:</b> Publishes decrypted balance on-chain.
                    <br /><br />
                    <b>Input:</b> None
                    <br />
                    <b>Output:</b> Transaction confirming public value
                    <br /><br />
                    <b>Processing:</b>
                    <br />
                    - Fetches encrypted balance
                    <br />
                    - Decrypts + generates cryptographic proof
                    <br />
                    - Sends value + signature to contract
                </p>

            </Section>

            {/* FINAL */}
            <Section title="🧠 Final Insight">
                <p className="text-yellow-300 font-medium">
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