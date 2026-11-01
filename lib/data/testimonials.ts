import type { ResearcherOutcome } from "./types"

export const researcherOutcomes: ResearcherOutcome[] = [
  {
    id: "outcome-1",
    title: "IoT Security Scholar",
    quote:
      "We needed our mathematical rank-threshold formulas translated into a working NS-3 simulation with a clear comparison against standard RPL. KryoForge delivered the complete C++ implementation, CSV logs, and 6 publication-ready charts ahead of our submission deadline.",
    badge: "97.8% Detection Accuracy Achieved",
    author: "PhD Research Scholar",
    role: "IoT Security & RPL Routing Lead",
    initials: "IS",
    rating: 5,
  },
  {
    id: "outcome-2",
    title: "Mobile LLN Researcher",
    quote:
      "Getting mobile nodes to work with game-theoretic parent selection in NS-3 was blocking our paper for months. The delivered code compiled cleanly on ns-3.46.1 and proved a 30% energy reduction over baseline RPL.",
    badge: "3 Protocols Benchmarked",
    author: "Wireless Networks Researcher",
    role: "Low-Power & Lossy Networks Lab",
    initials: "ML",
    rating: 5,
  },
  {
    id: "outcome-3",
    title: "Vehicular AI Lead",
    quote:
      "Integrating multi-agent reinforcement learning metrics with realistic VANET traffic traces required someone who understood both C++ networking and Python data pipelines. The execution was flawless.",
    badge: "End-to-End Simulation & Plotting",
    author: "Academic Research Lead",
    role: "Intelligent Transportation Systems Group",
    initials: "VA",
    rating: 5,
  },
]
