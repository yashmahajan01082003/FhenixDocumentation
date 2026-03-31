export default function WorkshopRoadmap() {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial", lineHeight: "1.6" }}>
            <h1>Workshop Roadmap</h1>

            <p>
                You’ve completed Phase 1 — you now understand how Fhenix works and how to get started.
            </p>

            <p>
                Now let’s move from understanding → building 🚀
            </p>

            <h3>Phase 1 ✅ Completed</h3>

            <ul>
                <li>🛠️ Project setup</li>
                <li>🔌 Fhenix client setup</li>
                <li>🔐 Encrypting data</li>
                <li>⚙️ Basic flow understanding</li>
            </ul>

            <h3>Phase 2: Build & Test Locally 🧪</h3>

            <p>
                Now you will write your first smart contract using encrypted data.
            </p>

            <ul>
                <li>📜 Create a contract</li>
                <li>🔐 Use encrypted inputs</li>
                <li>⚙️ Run local computations</li>
                <li>🧪 Test everything locally</li>
            </ul>

            <h3>Phase 3: Deploy to Sepolia 🌐</h3>

            <p>
                Take your contract live on a testnet.
            </p>

            <ul>
                <li>🚀 Deploy your contract</li>
                <li>🔗 Connect to Sepolia network</li>
                <li>✅ Verify deployment</li>
            </ul>

            <h3>Phase 4: Frontend + Wallet Integration 💻</h3>

            <p>
                Build a complete user experience.
            </p>

            <ul>
                <li>🖥️ Create a frontend (Next.js)</li>
                <li>👛 Connect wallet (e.g. MetaMask)</li>
                <li>🔁 Send encrypted inputs</li>
                <li>📦 Read & decrypt results</li>
            </ul>

            <p>
                By the end of this workshop, you will have:
            </p>

            <ul>
                <li>✅ A working Fhenix smart contract</li>
                <li>✅ Deployed on testnet</li>
                <li>✅ A full frontend interacting with it</li>
            </ul>

            <p style={{ marginTop: "20px", fontStyle: "italic", fontWeight: "bold" }}>
                “From idea → to working encrypted application.”
            </p>

            <button style={{ marginTop: "10px" }}>
                Start Phase 2
            </button>
        </div>
    );
}