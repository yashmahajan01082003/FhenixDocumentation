export default function WorkshopRoadmap() {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial", lineHeight: "1.6" }}>
            <h1>Workshop Roadmap</h1>

            <p>
                You’ve completed Phase 0 — you now understand the problem, the breakthrough, and how Fhenix changes everything.
            </p>

            <p>
                Now it’s time to move from <b>understanding → building</b> 🚀
            </p>

            <h3>Phase 0 ✅ Completed</h3>

            <ul>
                <li>🏠 Why privacy matters</li>
                <li>🕵️ Problems with public blockchains</li>
                <li>🔐 FHE intuition (locked box)</li>
                <li>⚡ How Fhenix works</li>
            </ul>

            <h3>Phase 1: Getting Started ⚡</h3>

            <p>
                Your first hands-on interaction with Fhenix.
            </p>

            <ul>
                <li>🛠️ Project setup</li>
                <li>🔌 Fhenix client setup</li>
                <li>🔐 Encrypt your first value</li>
                <li>⚙️ Understand the basic flow</li>
            </ul>

            <h3>Phase 2: Build & Test Locally 🧪</h3>

            <ul>
                <li>📜 Create a contract</li>
                <li>🔐 Use encrypted inputs</li>
                <li>⚙️ Run local computations</li>
                <li>🧪 Test everything locally</li>
            </ul>

            <h3>Phase 3: Deploy to Testnet 🌐</h3>

            <ul>
                <li>🚀 Deploy your contract</li>
                <li>🔗 Connect to Sepolia</li>
                <li>✅ Verify deployment</li>
            </ul>

            <h3>Phase 4: Frontend + Wallet 💻</h3>

            <ul>
                <li>🖥️ Build UI (Next.js)</li>
                <li>👛 Connect wallet</li>
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
                Start Phase 1
            </button>
        </div>
    );
}