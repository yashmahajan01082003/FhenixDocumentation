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

export const docsConfig = [
    {
        phase: "phase-0",
        title: "Understanding Problems and Breakthroughs",
        items: [
            {
                slug: "why-privacy-matters",
                title: "Why Blockchains Need Privacy?",
                component: WhyPrivacyMatters,
                rightPanel: ["Overview", "Basics"]
            },
            {
                slug: "prove-without-revealing",
                title: "What If You Could Prove Without Revealing?",
                component: ProveWithoutRevealing,
                rightPanel: ["Overview", "Basics"]
            },
            {
                slug: "how-fhe-works",
                title: "How Does FHE Actually Work?",
                component: HowFHEWorks,
                rightPanel: ["Overview", "Basics"]
            },
            {
                slug: "introducing-fhenix",
                title: "From Idea to Reality: Fhenix",
                component: IntroducingFhenix,
                rightPanel: ["Overview", "Basics"]
            },
            {
                slug: "roadmap-for-workshop",
                title: "Roadmap for the Workshop",
                component: WorkshopRoadmap,
                rightPanel: ["Overview", "Basics"]
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
                rightPanel: ["Encrypt", "Client"]
            },
            {
                slug: "single-command-setup",
                title: "Single Command Environment Construction",
                component: Phase1SingleCommandSetup,
                rightPanel: ["Encrypt", "Client"]
            },
            {
                slug: "common-errors",
                title: "Common Errors and Troubleshooting",
                component: Phase1CommonErrors,
                rightPanel: ["Encrypt", "Client"]
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
                rightPanel: ["Encrypt", "Client"]
            },
            {
                slug: "compilation-of-contract",
                title: "Compilation of Contract",
                component: CompileFlowDocs,
                rightPanel: ["Encrypt", "Client"]
            },
            {
                slug: "common-errors",
                title: "Testing Contract Locally",
                component: TestingDocumentation,
                rightPanel: ["Encrypt", "Client"]
            }
        ]
    },
    {
        phase: "phase-3",
        title: "Deploying Your First Contract",
        items: [
            {
                slug: "first-smart-contract",
                title: "What is Deployment?",
                component: ConfidentialVaultDocs,
                rightPanel: ["Encrypt", "Client"]
            },
            {
                slug: "compilation-of-contract",
                title: "Sepolia Testnets",
                component: CompileFlowDocs,
                rightPanel: ["Encrypt", "Client"]
            },
            {
                slug: "common-errors",
                title: "Deployment",
                component: TestingDocumentation,
                rightPanel: ["Encrypt", "Client"]
            }
        ]
    }
];