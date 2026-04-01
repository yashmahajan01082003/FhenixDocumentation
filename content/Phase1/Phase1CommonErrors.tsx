import Section from "@/content/ComponentsForCode/Section";
import RuleList from "@/content/ComponentsForCode/RuleList";
import CodeBlock from "@/content/ComponentsForCode/CodeBlock";
import CodeSnippet from "@/content/ComponentsForCode/CodeSnippet";

export default function Phase1CommonErrors() {
    return (
        <div className="p-6 text-gray-200 bg-black min-h-screen">

            <h1 className="text-2xl font-bold mb-6">
                🧯 Phase 1 — Common Environment Errors & Fixes
            </h1>

            {/* NODE VERSION */}
            <Section title="⚠️ 1. Incorrect Node.js Version">
                <RuleList
                    items={[
                        "Using Node 18 or below",
                        "Using experimental / unstable Node versions",
                        "Mismatch between system Node and project expectations",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    Hardhat + CoFHE depend on stable runtime behavior. Older or unstable Node versions break internal execution hooks.
                </p>

                <CodeBlock file="terminal" code={`node -v`} />

                <RuleList
                    items={[
                        "Use Node.js 20+ (LTS recommended)",
                        "Reinstall Node if version mismatch persists",
                    ]}
                />
            </Section>

            {/* NPM CACHE / INSTALL */}
            <Section title="⚠️ 2. Broken Dependency Installation">
                <RuleList
                    items={[
                        "Interrupted npm install",
                        "Corrupted node_modules",
                        "Mismatched package-lock.json",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    Partial installs lead to inconsistent dependency graphs and runtime failures.
                </p>

                <CodeSnippet
                    code={`rm -rf node_modules package-lock.json
npm install`}
                />

                <p className="text-sm text-gray-400">
                    This resets the dependency graph completely.
                </p>
            </Section>

            {/* VERSION DRIFT */}
            <Section title="⚠️ 3. Version Drift (Critical)">
                <RuleList
                    items={[
                        "Upgrading Hardhat independently",
                        "Installing latest versions without pinning",
                        "Mixing incompatible plugin versions",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    Hardhat, toolbox, and CoFHE plugins are tightly coupled. Even minor version drift can break execution.
                </p>

                <RuleList
                    items={[
                        "Always use exact versions from documentation",
                        "Do NOT run npm update blindly",
                        "Avoid mixing package versions manually",
                    ]}
                />
            </Section>

            {/* GLOBAL VS LOCAL */}
            <Section title="⚠️ 4. Global vs Local Hardhat Conflict">
                <RuleList
                    items={[
                        "Using globally installed Hardhat",
                        "Different versions globally vs locally",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    Global Hardhat can override local project configuration, causing unexpected behavior.
                </p>

                <CodeSnippet
                    code={`npx hardhat`}
                />

                <RuleList
                    items={[
                        "Always use npx hardhat (local version)",
                        "Avoid global installations",
                    ]}
                />
            </Section>

            {/* POWERSHELL EXECUTION POLICY */}
            <Section title="⚠️ 5. PowerShell Script Not Running (Windows)">
                <RuleList
                    items={[
                        "Running ./setup.ps1 fails",
                        "Execution policy restrictions",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    Windows blocks script execution by default for security reasons.
                </p>

                <CodeSnippet
                    code={`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`}
                />

                <RuleList
                    items={[
                        "Run this before executing setup.ps1",
                        "Does not permanently change system policy",
                    ]}
                />
            </Section>

            {/* PATH ISSUES */}
            <Section title="⚠️ 6. Node / npm Not Recognized">
                <RuleList
                    items={[
                        "node or npm command not found",
                        "PATH not configured properly",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    System cannot locate Node installation binaries.
                </p>

                <RuleList
                    items={[
                        "Reinstall Node.js using official installer",
                        "Ensure PATH includes Node installation directory",
                        "Restart terminal after installation",
                    ]}
                />
            </Section>

            {/* NETWORK */}
            <Section title="⚠️ 7. Network / Registry Issues">
                <RuleList
                    items={[
                        "npm install fails or hangs",
                        "Slow dependency resolution",
                        "Corporate firewall restrictions",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    Dependency installation depends on npm registry access.
                </p>

                <CodeSnippet
                    code={`npm config set registry https://registry.npmjs.org/`}
                />

                <RuleList
                    items={[
                        "Check internet connection",
                        "Disable VPN if causing issues",
                        "Retry installation",
                    ]}
                />
            </Section>

            {/* HARDHAT INIT ERROR */}
            <Section title="⚠️ 8. Hardhat Initialization Error">
                <RuleList
                    items={[
                        "Error: No Hardhat config file found",
                        "Running wrong command",
                    ]}
                />

                <p className="text-sm text-gray-400 mt-2">
                    Happens when Hardhat is executed without initialization.
                </p>

                <CodeSnippet
                    code={`npx hardhat`}
                />

                <RuleList
                    items={[
                        "Do NOT use: npx hardhat init",
                        "Use interactive CLI instead",
                    ]}
                />
            </Section>

            {/* PRINCIPLE */}
            <Section title="🧠 Root Principle">
                <p className="text-yellow-300 font-medium">
                    Most setup failures are not bugs — they are environment inconsistencies.
                </p>

                <RuleList
                    items={[
                        "Deterministic setup requires strict version control",
                        "Environment must match expected runtime exactly",
                        "Every deviation introduces hidden instability",
                    ]}
                />
            </Section>

        </div>
    );
}