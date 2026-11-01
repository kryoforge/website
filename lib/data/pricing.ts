import type { PricingTier } from "./types"

export const pricingTiers: PricingTier[] = [
  {
    name: "Simulation Debug & Plot",
    turnaround: "2 – 3 Days Turnaround",
    priceInr: "₹2,999",
    priceUsd: "$49",
    priceEur: "€45",
    description:
      "Fix compilation/runtime bugs in existing .cc or .py scripts, extract FlowMonitor metrics to CSV, and generate 4–6 publication-ready 300 DPI Python charts.",
    deliverables: [
      "Bug-free NS-3 compilation & execution on ns-3.46.1",
      "FlowMonitor XML trace parsing & automated CSV exports",
      "4–6 publication-ready 300 DPI serif charts (IEEE / Springer format)",
      "Terminal command execution instructions in clean markdown",
      "Fast turnaround for imminent conference/journal deadlines",
    ],
    accent: "#22cfee",
    accentRgb: "34 207 238",
    cta: "Debug My Simulation",
  },
  {
    name: "Base Paper Implementation",
    badge: "Most Popular",
    popular: true,
    turnaround: "5 – 7 Days Turnaround",
    priceInr: "₹6,999 – ₹12,000",
    priceUsd: "$99 – $160",
    priceEur: "€90 – €150",
    description:
      "Complete NS-3 C++ or Python ML implementation of an existing reference paper, 1 baseline comparison, NetAnim .xml trace file, CSV logs, 6 high-res charts, and execution README.md.",
    deliverables: [
      "Full C++ NS-3 or Python ML implementation of base paper",
      "1 standard baseline protocol comparative benchmark",
      "NetAnim .xml trace file for dynamic packet animation",
      "Raw CSV logs extracted from FlowMonitor sinks",
      "6 publication-quality 300 DPI figures & comparison table",
      "Detailed step-by-step README.md terminal execution guide",
    ],
    accent: "#8a3dff",
    accentRgb: "138 61 255",
    cta: "Implement Base Paper",
  },
  {
    name: "Custom Novel Algorithm + Benchmark Suite",
    turnaround: "2 – 3 Weeks Turnaround",
    priceInr: "₹15,000 – ₹25,000+",
    priceUsd: "$220 – $350+",
    priceEur: "€200 – €320+",
    description:
      "Custom mathematical/routing logic coded from scratch, benchmarked against 2 baseline protocols (e.g., Standard vs. Variant vs. Proposed), full attack/mobility modeling, automated plotting suite, and walkthrough support.",
    deliverables: [
      "Custom mathematical / routing / attack logic engineered from scratch",
      "Direct benchmark against 2 baseline protocols (Standard vs Variant vs Proposed)",
      "Full attack (Sinkhole / DDoS / Spoofing) or realistic mobility modeling",
      "Comprehensive automated Python plotting suite (PDR, delay, throughput, energy)",
      "NetAnim XML visualization file & complete CSV metric matrices",
      "Interactive 1-on-1 terminal walkthrough & revision support",
    ],
    accent: "#f43f5e",
    accentRgb: "244 63 94",
    cta: "Discuss Custom Algorithm",
  },
]

export const pricingAddonNote = {
  headline: "Need a minor parameter tweak, node scaling (e.g., 20 to 100 nodes), or extra comparison graph for reviewer comments?",
  details: "Quick revisions start at ₹1,000 – ₹2,500 ($15 – $35 / €14 – €32).",
  billingStructure: "Milestone-based billing: 40% to initiate setup, 30% upon terminal/graph verification preview, 30% for final source code & trace handover.",
}
