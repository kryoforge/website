import type { CaseStudy } from "./types"

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "sos-rpl-sinkhole-detection",
    title: "SoS-RPL — IoT Sinkhole Detection & Mitigation",
    category: "IoT Security / RPL Routing",
    summary:
      "Distributed 3-phase defense schema utilizing DI-RANK and DV-RANK threshold logic to detect rank misrepresentation, propagate ICMPv6 root alerts, and isolate malicious sinkhole nodes.",
    metricsBadge: "97.80% Detection Rate (TPR) · 88.50% PDR Restored · 3.50% FPR",
    techTags: ["C++", "ns-3.46.1", "IPv6 / ICMPv6", "FlowMonitor", "NetAnim", "Python"],
    highlights: [
      { value: "97.80%", label: "Detection Rate (TPR)" },
      { value: "88.50%", label: "PDR Restored" },
      { value: "3.50%", label: "False Positive Rate (FPR)" },
    ],
    accent: "rose",
    icon: "shield",
    surface: "security",
    benchmark: "Benchmarked directly against standard RFC 6550 RPL and Sec-RPL under 30-node and 60-node topological densities.",
    methodologySteps: [
      "Phase 1: Local DI-RANK variance monitoring on DODAG rank announcements.",
      "Phase 2: Collaborative neighbor verification via DV-RANK delta thresholding.",
      "Phase 3: Root-directed ICMPv6 alert dispatch and dynamic sinkhole node blacklisting.",
    ],
    reproducibility: "Automated ./ns3 run execution with FlowMonitor trace extraction and 300 DPI ROC/PDR comparison charts.",
  },
  {
    id: 2,
    slug: "ee-gtm-rpl-mobile-iot",
    title: "EE-GTM-RPL — Energy-Efficient Game-Theoretic Mobile RPL",
    category: "Mobile IoT / Low-Power & Lossy Networks (LLNs)",
    summary:
      "Game-theoretic parent selection and mobility-aware routing framework benchmarking Standard RPL, GTM-RPL, and proposed EE-GTM-RPL across 50 mobile sensor nodes.",
    metricsBadge: "96.63% PDR · 0.9052s Avg Delay · 2.521 J Energy (30% Saved)",
    techTags: ["C++", "NS-3", "Game Theory", "Energy Model", "NetAnim XML"],
    highlights: [
      { value: "96.63%", label: "Packet Delivery Ratio (PDR)" },
      { value: "0.9052s", label: "Average End-to-End Delay" },
      { value: "30%", label: "Energy Consumption Saved" },
    ],
    accent: "emerald",
    icon: "network",
    surface: "topology",
    benchmark: "Tri-protocol comparative suite: Standard RPL vs. GTM-RPL vs. Proposed EE-GTM-RPL across random waypoint mobility models.",
    methodologySteps: [
      "Nash Equilibrium formulation for parent selection under remaining node energy constraints.",
      "Link-quality (ETX) combined with node velocity vectors to suppress frequent DIS resets.",
      "Dynamic transmission power scaling on mobile low-power sensor nodes.",
    ],
    reproducibility: "Full ns-3.46.1 C++ codebase, NetAnim XML animation trace, and publication-ready multi-bar delay/energy charts.",
  },
  {
    id: 3,
    slug: "cloud-edge-end-zero-trust",
    title: "Cloud-Edge-End Zero-Trust Security Architecture",
    category: "Multi-Tier Network Security",
    summary:
      "3-tier Cloud-Edge-End simulation modeling simultaneous DDoS flooding, MAC spoofing, and physical-layer wireless jamming with automated trust verification and mitigation.",
    metricsBadge: "Multi-Vector Defense · 3-Tier Topology · Real-Time Trust Scoring",
    techTags: ["NS-3", "C++", "Zero-Trust", "802.11 / Wireless", "Python Analytics"],
    highlights: [
      { value: "3-Tier", label: "Cloud-Edge-End Hierarchy" },
      { value: "Real-Time", label: "Continuous Trust Scoring" },
      { value: "< 24ms", label: "Attack Isolation Latency" },
    ],
    accent: "indigo",
    icon: "lock",
    surface: "network",
    benchmark: "Evaluated against perimeter-only firewalls and static access control policies under high-frequency traffic attacks.",
    methodologySteps: [
      "Multi-vector threat injection: TCP SYN flood (Cloud), ARP/MAC spoofing (Edge), and RF jamming (End).",
      "Dynamic behavioral trust metric computed from packet forward ratio and signature authenticity.",
      "Automated edge-level token revocation and upstream cloud gateway firewall updates.",
    ],
    reproducibility: "Complete topology scripts, synthetic attack generators, and high-resolution serif trust-decay curves.",
  },
  {
    id: 4,
    slug: "vanet-dt-marl",
    title: "VANET Digital Twin with Multi-Agent DRL (VANET-DT-MARL)",
    category: "Vehicular Networks & Reinforcement Learning",
    summary:
      "Digital-twin-assisted vehicular ad-hoc network combining realistic mobility traces (my_traffic.tcl) with Multi-Agent Deep Reinforcement Learning for dynamic routing and resource allocation.",
    metricsBadge: "Digital Twin Sync · MA-DRL Policy Optimization · High-Mobility QoS",
    techTags: ["NS-3", "C++", "Python", "MA-DRL", "TCL Mobility Traces"],
    highlights: [
      { value: "Real-Time", label: "Digital Twin State Synchronization" },
      { value: "MA-DRL", label: "Decentralized Policy Actors" },
      { value: "42% Gain", label: "High-Speed Throughput" },
    ],
    accent: "sky",
    icon: "car",
    surface: "drl",
    benchmark: "Compared with greedy geographic routing (GPSR) and clustering-based vehicular protocols in realistic urban grid simulations.",
    methodologySteps: [
      "Integration of micro-simulation vehicle mobility traces (my_traffic.tcl) with NS-3 IEEE 802.11p PHY/MAC.",
      "Multi-agent actor-critic reinforcement learning pipeline interfacing with NS-3 socket states.",
      "Continuous reward function penalizing packet drops and handoff delays in high-density corridors.",
    ],
    reproducibility: "C++ NS-3 simulation bindings, Python DRL agent scripts, and 300 DPI reward convergence & latency plots.",
  },
  {
    id: 5,
    slug: "vanet-multi-orof-hybrid-dpc",
    title: "VANET Multi-OROF & Hybrid DPC Routing Suite",
    category: "Intelligent Transportation Systems (ITS)",
    summary:
      "Comparative vehicular routing implementations evaluating Multi-Objective Routing Optimization (Multi-OROF) and Hybrid Dynamic Power/Path Control (DPC) under varying vehicle densities.",
    metricsBadge: "Dual Protocol Benchmark · Dynamic Power Control · Low Packet Loss",
    techTags: ["NS-3", "C++", "VANET", "802.11p / WAVE", "NetAnim"],
    highlights: [
      { value: "Dual", label: "Protocol Comparative Suite" },
      { value: "Adaptive", label: "Dynamic Power/Path Control" },
      { value: "94.2%", label: "High-Density Packet Delivery" },
    ],
    accent: "amber",
    icon: "workflow",
    surface: "topology",
    benchmark: "Direct side-by-side benchmark of Multi-OROF vs. Hybrid DPC vs. standard AODV across vehicle densities from 20 to 120 nodes.",
    methodologySteps: [
      "Objective functions weighting link stability, vehicle velocity disparity, and path hop-count.",
      "Adaptive RF transmission power modulation to alleviate channel contention at intersections.",
      "Comprehensive evaluation of control message overhead across highway and urban topology presets.",
    ],
    reproducibility: "Complete scenario setup scripts, NetAnim trajectory visualization traces, and publication-ready multi-curve graphs.",
  },
  {
    id: 6,
    slug: "risk-adaptive-abe-iot-ddos",
    title: "Risk-Adaptive Attribute-Based Encryption (ABE) & IoT DDoS",
    category: "Cryptographic Access Control & Intrusion Defense",
    summary:
      "Evaluation of lightweight risk-adaptive encryption overhead alongside high-rate IoT DDoS traffic generation, packet filtering, and throughput recovery analysis.",
    metricsBadge: "Adaptive Access Control · Low Crypto Overhead · DDoS Resilience",
    techTags: ["NS-3", "C++", "Access Control", "DDoS Modeling", "Matplotlib"],
    highlights: [
      { value: "Adaptive", label: "Dynamic Security Policy Shift" },
      { value: "< 8.2ms", label: "Lightweight Decryption Overhead" },
      { value: "91.4%", label: "Throughput Retained During DDoS" },
    ],
    accent: "fuchsia",
    icon: "lock",
    surface: "security",
    benchmark: "Benchmarked against standard CP-ABE and non-adaptive cryptographic frameworks under sustained UDP flood attacks.",
    methodologySteps: [
      "Dynamic risk score calculations based on device anomaly levels and surrounding traffic volume.",
      "Adaptive policy simplification: lowering ciphertext attribute expansion during surge conditions.",
      "FlowMonitor metric extraction logging encryption delay, processing energy, and packet filtering rates.",
    ],
    reproducibility: "Standalone NS-3 scenario script, CSV performance logs, and publication-ready Matplotlib comparison graphs.",
  },
  {
    id: 7,
    slug: "swin-transformer-spiking-neural-network",
    title: "Swin-Transformer Spiking Neural Network (Swin-SNN)",
    category: "Medical AI & Computer Vision",
    summary:
      "Hybrid Swin-Transformer and Spiking Neural Network architecture engineered for high-precision MRI brain tumor segmentation and medical image enhancement.",
    metricsBadge: "High Dice Similarity · Low-Compute Spiking Layers · MRI Segmentation",
    techTags: ["Python", "PyTorch", "Swin-Transformer", "Spiking Neural Networks", "Medical Imaging"],
    highlights: [
      { value: "0.912", label: "Dice Similarity Coefficient" },
      { value: "68% Less", label: "Compute Energy vs. Pure ViT" },
      { value: "Sub-pixel", label: "Tumor Boundary Precision" },
    ],
    accent: "violet",
    icon: "brain",
    surface: "spiking",
    benchmark: "Directly benchmarked against 3D U-Net, standard Swin-UNet, and baseline Spiking Neural Networks on the BraTS MRI dataset.",
    methodologySteps: [
      "Shifted window multi-head self-attention extracting hierarchical multi-scale spatial representations.",
      "Membrane potential integrate-and-fire (LIF) spiking neuron layers replacing heavy matrix multiplications.",
      "Surrogate gradient backpropagation enabling end-to-end training stability on medical volumes.",
    ],
    reproducibility: "PyTorch model architecture files, evaluation metrics pipeline, and 300 DPI loss/Dice curves with segmentation visual overlays.",
  },
  {
    id: 8,
    slug: "variational-quantum-eigensolver-vqe",
    title: "Variational Quantum Eigensolver (VQE) Benchmarking",
    category: "Quantum Computing & Hybrid Algorithms",
    summary:
      "Parameterized quantum circuit design and classical optimizer evaluation for ground-state molecular energy estimation and convergence stability analysis.",
    metricsBadge: "Ansatz Optimization · Fast Convergence · Noise-Resilient Modeling",
    techTags: ["Python", "Quantum Circuits", "VQE", "Hamiltonian Simulation", "Scientific Plotting"],
    highlights: [
      { value: "10^-4 Hartree", label: "Chemical Accuracy Threshold" },
      { value: "3x Faster", label: "Convergence with COBYLA/SPSA" },
      { value: "Noise-Tolerant", label: "Depolarizing Channel Resilience" },
    ],
    accent: "cyan",
    icon: "atom",
    surface: "quantum",
    benchmark: "Systematic comparison of UCCSD, RyRz, and Hardware-Efficient ansatzes across multiple classical optimizers (COBYLA, SLSQP, SPSA).",
    methodologySteps: [
      "Jordan-Wigner and Bravyi-Kitaev qubit mapping of molecular Hamiltonian operators.",
      "Parameterized quantum state preparation on noisy intermediate-scale quantum (NISQ) models.",
      "Convergence profiling across circuit depth, entangler layout, and quantum noise probabilities.",
    ],
    reproducibility: "Python quantum simulation notebooks, Hamiltonian benchmark scripts, and 300 DPI publication energy-convergence figures.",
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export function getAdjacentCaseStudies(slug: string) {
  const i = caseStudies.findIndex((c) => c.slug === slug)
  return {
    prev: caseStudies[(i - 1 + caseStudies.length) % caseStudies.length],
    next: caseStudies[(i + 1) % caseStudies.length],
  }
}
