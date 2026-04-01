import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function ReactUIDocs() {
    return (
        <div className="p-6 text-gray-200 bg-black min-h-screen">

            <h1 className="text-2xl font-bold mb-6">
                ⚛️ React UI Layer — Function-Level Overview
            </h1>

            {/* INTRO */}
            <Section title="🧠 1. What is This Layer?">
                <p className="text-sm text-gray-400">
                    This is the frontend UI that users interact with.
                </p>

                <p className="mt-2 text-yellow-300">
                    👉 Connects user actions → Cofhe service → blockchain
                </p>
            </Section>

            {/* FILE */}
            <Section title="📁 2. File Location">
                <CodeSnippet code={`src/App.jsx`} />
            </Section>

            {/* FULL CODE */}
            <Section title="📜 3. Full App.jsx Code">
                <CodeSnippet
                    code={`import { useState, useEffect, useRef } from "react";
import {
  init,
  deposit,
  getBalance,
  publishBalance,
} from "./services/cofheService";

function App() {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      init();
      initialized.current = true;
    }
  }, []);

  const handleDeposit = async () => {
    await deposit(amount);
    alert("Deposited!");
  };

  const handleBalance = async () => {
    const bal = await getBalance();
    setBalance(bal.toString());
  };

  const handlePublish = async () => {
    await publishBalance();
    alert("Published!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Confidential Vault (Fhenix)</h2>

      <input
        type="number"
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleBalance}>Get Balance</button>
      <button onClick={handlePublish}>Publish Balance</button>

      <h3>Balance: {balance}</h3>
    </div>
  );
}

export default App;`}
                />
            </Section>

            {/* FUNCTION LEVEL */}
            <Section title="🧠 4. Function-Level Explanation">

                <h3 className="font-semibold mt-4">⚙️ init() (via useEffect)</h3>
                <p className="text-sm text-gray-400">
                    <b>Purpose:</b> Initializes Cofhe + wallet connection when UI loads.
                    <br /><br />
                    <b>Input:</b> None
                    <br />
                    <b>Output:</b> Sets up encryption + blockchain access
                    <br /><br />
                    <b>Processing:</b>
                    <br />
                    - Runs once on component mount
                    <br />
                    - Calls init() from service layer
                    <br />
                    - Ensures wallet + permits are ready
                </p>

                <h3 className="font-semibold mt-6">📥 handleDeposit()</h3>
                <p className="text-sm text-gray-400">
                    <b>Purpose:</b> Sends user input to blockchain securely.
                    <br /><br />
                    <b>Input:</b> amount (from state)
                    <br />
                    <b>Output:</b> Deposit transaction
                    <br /><br />
                    <b>Processing:</b>
                    <br />
                    - Reads input value
                    <br />
                    - Calls service.deposit()
                    <br />
                    - Triggers encryption + contract call
                </p>

                <h3 className="font-semibold mt-6">👀 handleBalance()</h3>
                <p className="text-sm text-gray-400">
                    <b>Purpose:</b> Retrieves and displays balance.
                    <br /><br />
                    <b>Input:</b> None
                    <br />
                    <b>Output:</b> Updates UI with decrypted balance
                    <br /><br />
                    <b>Processing:</b>
                    <br />
                    - Calls service.getBalance()
                    <br />
                    - Receives decrypted value
                    <br />
                    - Updates React state
                </p>

                <h3 className="font-semibold mt-6">📤 handlePublish()</h3>
                <p className="text-sm text-gray-400">
                    <b>Purpose:</b> Publishes decrypted balance on-chain.
                    <br /><br />
                    <b>Input:</b> None
                    <br />
                    <b>Output:</b> Transaction confirming public value
                    <br /><br />
                    <b>Processing:</b>
                    <br />
                    - Calls service.publishBalance()
                    <br />
                    - Generates proof + sends to contract
                </p>

            </Section>

            {/* UI ROLE */}
            <Section title="🖥️ 5. UI Responsibility">
                <RuleList
                    items={[
                        "Captures user input",
                        "Triggers service layer functions",
                        "Displays decrypted results",
                        "Does NOT handle encryption logic",
                    ]}
                />
            </Section>

            {/* FINAL */}
            <Section title="🧠 Final Insight">
                <p className="text-yellow-300 font-medium">
                    UI is thin — all intelligence lives in the Cofhe service.
                </p>

                <p className="text-sm text-gray-400 mt-2">
                    This separation keeps the system secure, modular, and scalable.
                </p>
            </Section>

        </div>
    );
}