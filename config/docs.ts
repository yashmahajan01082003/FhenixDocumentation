import WhyPrivacyMatters from "@/content/Phase0/WhyPrivacyMatters";
import ProveWithoutRevealing from "@/content/Phase0/ProveWithoutRevealing";
import Phase1CommonErrors from "@/content/Phase1/Phase1CommonErrors";
import HowFHEWorks from "@/content/Phase0/HowFHEWorks";
import IntroducingFhenix from "@/content/Phase0/IntroducingFhenix";
import WorkshopRoadmap from "@/content/Phase0/WorkshopRoadmap";
import Phase1InstallationSetup from "@/content/Phase1/Phase1InstallationSetup";
import Phase1SingleCommandSetup from "@/content/Phase1/Phase1SingleCommandSetup";
import ConfidentialVaultDocs from "@/content/Phase2/ConfidentialVaultDocs";
import CompileFlowDocs from "@/content/Phase2/CompileFlowDocs";
import TestingDocumentation from "@/content/Phase2/TestingDocumentation";
import DeploymentIntro from "@/content/Phase3/DeploymentIntro";
import DeploymentToolsDeepDive from "@/content/Phase3/DeploymentToolsDeepDive";
import DeploymentCodeSetup from "@/content/Phase3/DeploymentSetup";
import DappSetup from "@/content/Phase4/DappSetup";
import FrontendConfigDocs from "@/content/Phase4/FrontendConfigDocs";
import CofheServiceDocs from "@/content/Phase4/CofheServiceDocs";
import ReactUIDocs from "@/content/Phase4/ReactUIDocs";
import CofheRunOutput from "@/content/Phase4/CofheRunOutput";

export type RightPanelSection = {
    heading: string;
    items: string[];
};

export type DocItem = {
    slug: string;
    title: string;
    component: React.ComponentType;
    rightPanel: RightPanelSection[];
};

export type PhaseConfig = {
    phase: string;
    title: string;
    items: DocItem[];
};

export const docsConfig: PhaseConfig[] = [
    {
        phase: "phase-0",
        title: "Understanding Problems and Breakthroughs",
        items: [
            {
                slug: "why-privacy-matters",
                title: "Why Blockchains Need Privacy?",
                component: WhyPrivacyMatters,
                rightPanel: [
                    { heading: "Overview", items: ["Why Privacy Matters", "The Transparency Problem"] },
                    { heading: "Key Concepts", items: ["Public Ledgers", "Data Exposure Risks"] },
                ]
            },
            {
                slug: "prove-without-revealing",
                title: "What If You Could Prove Without Revealing?",
                component: ProveWithoutRevealing,
                rightPanel: [
                    { heading: "Overview", items: ["Zero-Knowledge Proofs", "Proof Systems"] },
                    { heading: "Applications", items: ["Privacy Preservation", "Verification"] },
                ]
            },
            {
                slug: "how-fhe-works",
                title: "How Does FHE Actually Work?",
                component: HowFHEWorks,
                rightPanel: [
                    { heading: "Encryption", items: ["Turn Data into Secret Code", "Special Math Rules"] },
                    { heading: "FHE Process", items: ["Encrypted Computation", "Decryption"] },
                ]
            },
            {
                slug: "introducing-fhenix",
                title: "From Idea to Reality: Fhenix",
                component: IntroducingFhenix,
                rightPanel: [
                    { heading: "Overview", items: ["What is Fhenix", "Architecture"] },
                    { heading: "Features", items: ["FHE Integration", "Smart Contracts"] },
                ]
            },
            {
                slug: "roadmap-for-workshop",
                title: "Roadmap for the Workshop",
                component: WorkshopRoadmap,
                rightPanel: [
                    { heading: "Workshop Plan", items: ["Phase Overview", "Learning Goals"] },
                    { heading: "Prerequisites", items: ["Requirements", "Setup"] },
                ]
            },
        ]
    },
    {
        phase: "phase-1",
        title: "Setting up your environment",
        items: [
            {
                slug: "environment-construction",
                title: "Deterministic Environment Construction",
                component: Phase1InstallationSetup,
                rightPanel: [
                    { heading: "Installation", items: ["Node.js Setup", "Hardhat Config"] },
                    { heading: "Configuration", items: ["FHE Plugin", "Network Setup"] },
                ]
            },
            {
                slug: "single-command-setup",
                title: "Single Command Environment Construction",
                component: Phase1SingleCommandSetup,
                rightPanel: [
                    { heading: "Quick Start", items: ["One-Command Setup", "Verification"] },
                    { heading: "Troubleshooting", items: ["Common Issues", "Fix Steps"] },
                ]
            },
            {
                slug: "common-errors",
                title: "Common Errors and Troubleshooting",
                component: Phase1CommonErrors,
                rightPanel: [
                    { heading: "Errors", items: ["Build Errors", "Runtime Errors"] },
                    { heading: "Solutions", items: ["Quick Fixes", "Debug Tips"] },
                ]
            }
        ]
    },
    {
        phase: "phase-2",
        title: "Creating and Testing Your First Contract",
        items: [
            {
                slug: "first-smart-contract",
                title: "Creating Contract using Fhenix",
                component: ConfidentialVaultDocs,
                rightPanel: [
                    { heading: "Contract Structure", items: ["Encrypted Types", "State Variables"] },
                    { heading: "Functions", items: ["Deposit", "Get Balance", "Publish"] },
                ]
            },
            {
                slug: "compilation-of-contract",
                title: "Compilation of Contract",
                component: CompileFlowDocs,
                rightPanel: [
                    { heading: "Compilation", items: ["FHE Compilation", "Artifact Output"] },
                    { heading: "Verification", items: ["Check ABI", "Contract Validation"] },
                ]
            },
            {
                slug: "common-errors",
                title: "Testing Contract Locally",
                component: TestingDocumentation,
                rightPanel: [
                    { heading: "Testing", items: ["Local Network", "Test Scripts"] },
                    { heading: "Validation", items: ["Encrypt & Decrypt", "Assertions"] },
                ]
            }
        ]
    },
    {
        phase: "phase-3",
        title: "Deploying Your First Contract",
        items: [
            {
                slug: "deployment-intro",
                title: "What is Deployment?",
                component: DeploymentIntro,
                rightPanel: [
                    { heading: "Concepts", items: ["What is Deployment", "Why Deploy"] },
                    { heading: "Requirements", items: ["Wallet & Keys", "RPC URL", "Test ETH"] },
                ]
            },
            {
                slug: "deployment-tools",
                title: "Tools Needed For Deployment",
                component: DeploymentToolsDeepDive,
                rightPanel: [
                    { heading: "Wallet", items: ["MetaMask Setup", "Private Key"] },
                    { heading: "Network", items: ["RPC Configuration", "Faucets"] },
                ]
            },
            {
                slug: "deployment-code-setup",
                title: "Deployment Code Setup",
                component: DeploymentCodeSetup,
                rightPanel: [
                    { heading: "Configuration", items: ["Deploy Script", "Environment Variables"] },
                    { heading: "Execution", items: ["Run Deploy", "Verify Contract"] },
                ]
            }
        ]
    },
    {
        phase: "phase-4",
        title: "Connecting Smart Contract to FrontEnd",
        items: [
            {
                slug: "dapp-intro-setup",
                title: "Setup for Dapp",
                component: DappSetup,
                rightPanel: [
                    { heading: "Project Setup", items: ["Create React App", "Install Dependencies"] },
                    { heading: "Structure", items: ["File Organization", "Configuration"] },
                ]
            },
            {
                slug: "frontend-config",
                title: "Add Keys to Connect Frontend to Blockchain",
                component: FrontendConfigDocs,
                rightPanel: [
                    { heading: "Configuration", items: ["Contract Address", "ABI Setup"] },
                    { heading: "Connection", items: ["Provider Config", "Signer Setup"] },
                ]
            },
            {
                slug: "user-friendly-cofhe-service",
                title: "User-Friendly Cofhe Service",
                component: CofheServiceDocs,
                rightPanel: [
                    { heading: "Service Layer", items: ["Init Function", "Encrypt & Send"] },
                    { heading: "Operations", items: ["Deposit", "Balance", "Publish"] },
                ]
            },
            {
                slug: "react-ui-layer",
                title: "React UI Layer — Connecting User to Blockchain",
                component: ReactUIDocs,
                rightPanel: [
                    { heading: "UI Layer", items: ["App Component", "State Management"] },
                    { heading: "Functions", items: ["init()", "handleDeposit()", "handleBalance()", "handlePublish()"] },
                ]
            },
            {
                slug: "cofhe-run-output",
                title: "Run & Output",
                component: CofheRunOutput,
                rightPanel: [
                    { heading: "Execution", items: ["Run DApp", "Expected Output"] },
                    { heading: "Verification", items: ["Transaction Check", "Balance Display"] },
                ]
            }
        ]
    }
];