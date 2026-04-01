"use client";

import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";
import FunctionTooltip from "@/content/ComponentsForCode/FunctionTooltip";

export default function ReactUIDocs() {
    return (
        <div style={{ paddingBottom: "60px", animation: "fadeIn 0.6s ease-out" }}>
            {/* INTRO */}
            <Section title="1. What is This Layer?">
                <p style={{ fontSize: 16, color: "var(--color-text-secondary)", marginBottom: 16 }}>
                    This is the frontend UI that users interact with.
                </p>

                <p style={{ fontSize: 15, color: "var(--color-accent)", fontWeight: 600 }}>
                    Connects user actions &rarr; Cofhe service &rarr; blockchain
                </p>
            </Section>

            {/* FILE */}
            <Section title="2. File Location">
                <CodeSnippet code={`src/App.jsx`} />
            </Section>

            {/* FULL CODE */}
            <Section title="3. Full App.jsx Code">
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
            <Section title="4. Function-Level Explanation">
                <p style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 24 }}>
                    Hover over the UI event handlers to see how they wire up the encryption service to the interface state.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                        <FunctionTooltip
                            name="init() (via useEffect)"
                            purpose="Initializes Cofhe + wallet connection when UI loads."
                            input="None"
                            output="Sets up encryption + blockchain access"
                            processing={[
                                "Runs once on component mount",
                                "Calls init() from service layer",
                                "Ensures wallet + permits are ready"
                            ]}
                        />
                    </div>

                    <div>
                        <FunctionTooltip
                            name="handleDeposit()"
                            purpose="Sends user input to blockchain securely."
                            input="amount (from state)"
                            output="Deposit transaction"
                            processing={[
                                "Reads input value",
                                "Calls service.deposit()",
                                "Triggers encryption + contract call"
                            ]}
                        />
                    </div>

                    <div>
                        <FunctionTooltip
                            name="handleBalance()"
                            purpose="Retrieves and displays balance."
                            input="None"
                            output="Updates UI with decrypted balance"
                            processing={[
                                "Calls service.getBalance()",
                                "Receives decrypted value",
                                "Updates React state"
                            ]}
                        />
                    </div>

                    <div>
                        <FunctionTooltip
                            name="handlePublish()"
                            purpose="Publishes decrypted balance on-chain."
                            input="None"
                            output="Transaction confirming public value"
                            processing={[
                                "Calls service.publishBalance()",
                                "Generates proof + sends to contract"
                            ]}
                        />
                    </div>
                </div>
            </Section>

            {/* UI ROLE */}
            <Section title="5. UI Responsibility">
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
            <Section title="Final Insight">
                <div style={{
                    padding: "20px 24px", background: "var(--color-bg-elevated)",
                    borderLeft: "4px solid var(--color-accent)", borderRadius: "8px",
                }}>
                    <p style={{ color: "var(--color-text-primary)", fontSize: "15px", fontWeight: 600, marginBottom: "8px" }}>
                        UI is thin &mdash; all intelligence lives in the Cofhe service.
                    </p>
                    <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: 0 }}>
                        This separation keeps the system secure, modular, and scalable.
                    </p>
                </div>
            </Section>

        </div>
    );
}