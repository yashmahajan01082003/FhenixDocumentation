import WhyPrivacyMatters from "@/content/Phase0/WhyPrivacyMatters";
import ProveWithoutRevealing from "@/content/Phase0/ProveWithoutRevealing";
import Encryption from "@/content/Phase1/Encryption";
import HowFHEWorks from "@/content/Phase0/HowFHEWorks";
import IntroducingFhenix from "@/content/Phase0/IntroducingFhenix";
import WorkshopRoadmap from "@/content/Phase0/WorkshopRoadmap";

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
        title: "Configuring",
        items: [
            {
                slug: "encryption",
                title: "Encryption",
                component: Encryption,
                rightPanel: ["Encrypt", "Client"]
            }
        ]
    }
];