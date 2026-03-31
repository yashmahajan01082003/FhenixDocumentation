export default function HowFHEWorks() {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial", lineHeight: "1.6" }}>
            <h1>How Does Fully Homomorphic Encryption Actually Work?</h1>

            <p>
                It might feel like magic… but there’s a real process behind it ✨
            </p>

            <p>
                Let’s break it down step by step.
            </p>

            <h3>Step 1: Turn Data into a Secret Code 🔐</h3>

            <p>
                Your data (like a number or balance) is transformed into a special encrypted form.
            </p>

            <p>
                It no longer looks like a number…
                it looks like random noise 🤯
            </p>

            <p>
                Only you have the key to understand it.
            </p>

            <h3>Step 2: Special Math Rules 🧠</h3>

            <p>
                Here’s the real trick:
            </p>

            <p>
                The encrypted data still follows mathematical rules.
            </p>

            <p>
                So when a computer performs operations on encrypted data…
            </p>

            <ul>
                <li>➕ Adding encrypted values = encrypted sum</li>
                <li>✖️ Multiplying encrypted values = encrypted result</li>
            </ul>

            <p>
                Even though it doesn’t know the actual values inside 👀❌
            </p>

            <h3>Step 3: Compute Without Seeing ⚙️</h3>

            <p>
                The system runs logic directly on encrypted data.
            </p>

            <p>
                It follows instructions perfectly…
                but it is completely blind to the actual data 🕶️
            </p>

            <p>
                Like solving a puzzle without ever seeing the pieces.
            </p>

            <h3>Step 4: Get the Encrypted Result 📦</h3>

            <p>
                After computation, the result is still encrypted.
            </p>

            <p>
                No one has seen anything yet.
            </p>

            <h3>Step 5: Reveal Only at the End 🔓</h3>

            <p>
                Only the person with the key can decrypt the result.
            </p>

            <p>
                And when they do…
                the answer is exactly correct ✅
            </p>

            <h3>Why This Feels Like Magic 🤯</h3>

            <ul>
                <li>👀 The system never sees your data</li>
                <li>⚙️ But it still computes perfectly</li>
                <li>🔐 Your secrets are never exposed</li>
            </ul>

            <p>
                It’s like:
            </p>

            <ul>
                <li>🧮 Doing math without seeing numbers</li>
                <li>📦 Opening a box without unlocking it</li>
                <li>🕶️ A machine that works while blindfolded</li>
            </ul>

            <p>
                But it’s not magic…
            </p>

            <p>
                It’s mathematics making privacy possible.
            </p>

            <p style={{ marginTop: "20px", fontStyle: "italic", fontWeight: "bold" }}>
                “The computer works on your data… without ever knowing it.”
            </p>

            <button style={{ marginTop: "10px" }}>
                See FHE in Action
            </button>
        </div>
    );
}