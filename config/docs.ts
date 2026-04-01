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
                slug: "deployment-intro",
                title: "What is Deployment?",
                component: DeploymentIntro,
                rightPanel: ["Encrypt", "Client"]
            },
            {
                slug: "deployment-tools",
                title: "Tools Needed For Deployment",
                component: DeploymentToolsDeepDive,
                rightPanel: ["Encrypt", "Client"]
            },
            {
                slug: "deployment-code-setup",
                title: "Deployment Code Setup",
                component: DeploymentCodeSetup,
                rightPanel: ["Encrypt", "Client"]
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
                rightPanel: ["Encrypt", "Client"]
            },
            {
                slug: "frontend-config",
                title: "Add Keys to Connect Frontend to Blockchain",
                component: FrontendConfigDocs,
                rightPanel: ["Encrypt", "Client"]
            },
            {
                slug: "user-friendly-cofhe-service",
                title: "User-Friendly Cofhe Service",
                component: CofheServiceDocs,
                rightPanel: ["Encrypt", "Client"]
            },
            {
                slug: "react-ui-layer",
                title: "React UI Layer — Connecting User to Blockchain",
                component: ReactUIDocs,
                rightPanel: ["Encrypt", "Client"]
            },
            {
                slug: "cofhe-run-output",
                title: "Run & Output",
                component: CofheRunOutput,
                rightPanel: ["Encrypt", "Client"]
            }
        ]
    }
];