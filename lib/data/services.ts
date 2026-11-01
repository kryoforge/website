import type { Capability, TechStackDomain, WhyPillar, WorkflowStep } from "./types"

export const capabilities: Capability[] = [
  {
    id: "ns3-engineering",
    number: "01",
    title: "NS-3 Network & Protocol Engineering",
    description:
      "Custom C++ protocol design for IoT, 6LoWPAN, RPL, VANET, and 5G topologies. End-to-end evaluation of Packet Delivery Ratio (PDR), throughput, latency, control overhead, and energy consumption.",
    metrics: [
      "Custom C++ routing & MAC protocol design",
      "IoT, 6LoWPAN, RPL, VANET (802.11p), 5G NR",
      "PDR, Latency, Throughput & Control Overhead",
      "Energy models & Battery lifetime profiling",
    ],
    accent: "sky",
    icon: "network",
  },
  {
    id: "cyber-security",
    number: "02",
    title: "Cyber-Security & Attack Modeling",
    description:
      "Multi-vector threat simulation including Sinkhole, DDoS, MAC spoofing, wireless jamming, and Cloud-Edge-End Zero-Trust defense mechanisms with real-time anomaly detection and node blacklisting.",
    metrics: [
      "Sinkhole, Blackhole & DIO/DIS rank spoofing",
      "DDoS flooding & MAC address spoofing triggers",
      "Cloud-Edge-End 3-tier Zero-Trust architectures",
      "Real-time threshold logic & node blacklisting",
    ],
    accent: "rose",
    icon: "shield",
  },
  {
    id: "ai-quantum",
    number: "03",
    title: "Deep Learning & Quantum Algorithms",
    description:
      "Advanced model implementations including Swin-Transformer Spiking Neural Networks (SNN) for medical image segmentation, Multi-Agent Deep Reinforcement Learning (MA-DRL), and Variational Quantum Eigensolver (VQE) circuits.",
    metrics: [
      "Swin-Transformer Spiking Neural Networks (SNN)",
      "Multi-Agent Deep Reinforcement Learning (MA-DRL)",
      "Parameterized VQE circuits & Ansatz optimization",
      "PyTorch, PennyLane & Qiskit simulation pipelines",
    ],
    accent: "violet",
    icon: "atom",
  },
  {
    id: "publication-analytics",
    number: "04",
    title: "Publication Analytics & Visualization",
    description:
      "Automated Python data pipelines (pandas, matplotlib, seaborn) that convert raw simulation traces and FlowMonitor outputs into 300 DPI serif-formatted figures and LaTeX-ready comparison tables.",
    metrics: [
      "FlowMonitor XML & AsciiTrace parsers to CSV",
      "300 DPI serif figures (Computer Modern / Times)",
      "Multi-curve comparative benchmarks & error bars",
      "Automated LaTeX booktabs performance tables",
    ],
    accent: "emerald",
    icon: "chart",
  },
]

export const technicalStackMatrix: TechStackDomain[] = [
  {
    domain: "Network Simulators",
    accent: "sky",
    icon: "network",
    tools: [
      "NS-3 (ns-3.46.1 & legacy versions)",
      "NetAnim (3.109)",
      "FlowMonitor",
      "Mobility & Traffic Generators (grid_gen.py, TCL traces)",
    ],
  },
  {
    domain: "Protocols & Layers",
    accent: "violet",
    icon: "layers",
    tools: [
      "RPL",
      "6LoWPAN",
      "IPv6",
      "ICMPv6 (DIO/DAO/DIS)",
      "IEEE 802.15.4",
      "IEEE 802.11b/p (WAVE)",
      "Ad-Hoc Wi-Fi",
      "UDP/TCP Socket Programming",
    ],
  },
  {
    domain: "Security & Threat Models",
    accent: "rose",
    icon: "shield",
    tools: [
      "Sinkhole Detection",
      "Blackhole Routing",
      "DDoS Flooding",
      "MAC Spoofing",
      "Wireless Jamming",
      "Zero-Trust Architecture",
      "Risk-Adaptive ABE",
    ],
  },
  {
    domain: "AI, ML & Quantum",
    accent: "indigo",
    icon: "atom",
    tools: [
      "Deep Reinforcement Learning (MA-DRL)",
      "Swin-Transformers",
      "Spiking Neural Networks (SNN)",
      "Variational Quantum Eigensolver (VQE)",
      "PyTorch",
      "Qiskit / Circuit Sim",
    ],
  },
  {
    domain: "Languages",
    accent: "amber",
    icon: "terminal",
    tools: [
      "C++ (Core NS-3 & STL)",
      "Python 3",
      "TCL",
      "Bash / Shell Scripting",
    ],
  },
  {
    domain: "Data & Visualization",
    accent: "emerald",
    icon: "chart",
    tools: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "300 DPI Serif Charts",
      "Line, Area, Multi-Bar, Scatter Thresholds",
    ],
  },
  {
    domain: "Metrics Engineered",
    accent: "fuchsia",
    icon: "gauge",
    tools: [
      "TPR / Detection Rate",
      "FPR & FNR",
      "Packet Delivery Ratio (PDR)",
      "End-to-End Delay",
      "Throughput (Kbps/Mbps)",
      "Energy Consumption (Joules)",
      "Control Overhead",
    ],
  },
  {
    domain: "Delivery & Documentation",
    accent: "cyan",
    icon: "fileText",
    tools: [
      "Clean README.md Execution Guides",
      "CLI Build Wrappers (./ns3 run)",
      "Annotated Source Code",
      "CSV Metric Logs",
      "NetAnim XML Visualization Traces",
    ],
  },
]

export const whyWorkWithKryoForge: WhyPillar[] = [
  {
    number: "01",
    title: "100% Novelty & IP Protection",
    body: "We never resell your custom algorithm or publish your source code. Once delivered, your exact model combination and parameters remain strictly confidential so your paper's novelty is never compromised.",
  },
  {
    number: "02",
    title: "Base-Paper vs. Proposed Benchmarking",
    body: "Reviewers reject papers without comparative proof. Every simulation is structured to benchmark your proposed algorithm directly against 1–2 standard baseline protocols in the exact same environment.",
  },
  {
    number: "03",
    title: "Publication-Ready Visuals (300 DPI)",
    body: "No messy Excel screenshots. Every project includes automated Python scripts that generate high-resolution, serif-font academic figures ready to drop straight into IEEE or Springer templates.",
  },
  {
    number: "04",
    title: "Zero-Friction Reproducibility",
    body: "You receive the complete C++ source script, CSV dataset, NetAnim .xml trace file, and a step-by-step terminal execution guide so you can run and demonstrate the project on your own machine effortlessly.",
  },
]

export const researchWorkflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "Base Paper & Objective Review",
    duration: "24 Hours",
    description:
      "Share your base paper, problem statement, or target metrics via email. We review the mathematical feasibility and simulator requirements within 24 hours.",
    accent: "#3a4cff",
    accentRgb: "58 76 255",
  },
  {
    number: "02",
    title: "Scope & Metric Lock",
    duration: "Day 1",
    description:
      "You receive a clear written scope defining the exact topology (node count, mobility, duration), baseline protocols, and the 5–6 evaluation metrics to be plotted.",
    accent: "#8a3dff",
    accentRgb: "138 61 255",
  },
  {
    number: "03",
    title: "Core Protocol / Model Coding",
    duration: "Days 2–5",
    description:
      "We engineer the custom C++ NS-3 module or Python ML architecture, configuring packet headers, trace sinks, and attack/defense triggers.",
    accent: "#22cfee",
    accentRgb: "34 207 238",
  },
  {
    number: "04",
    title: "Metric Extraction & Graph Verification",
    duration: "Day 5–6",
    description:
      "We run the simulation, extract the CSV data, and send you water-marked previews of the terminal output table and generated PNG charts for verification.",
    accent: "#f43f5e",
    accentRgb: "244 63 94",
  },
  {
    number: "05",
    title: "Full Code & Trace Handover",
    duration: "Final Step",
    description:
      "Upon final milestone completion, you receive the clean .cc/.py source code, .csv datasets, .xml NetAnim files, and a custom README.md with exact terminal commands.",
    accent: "#10b981",
    accentRgb: "16 185 129",
  },
]
