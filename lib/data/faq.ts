import type { FaqItem } from "./types"

export const faqs: FaqItem[] = [
  {
    category: "ip",
    q: "Why don't you display public client reviews or scholar names?",
    a: "Top-tier academic journals (IEEE, Springer, Elsevier) enforce strict double-blind peer review and novelty protection. Having delivered 10+ custom research projects, our clients' identities, manuscript drafts, and algorithm formulations remain 100% confidential. We operate under strict NDAs and never publish client names or unreleased papers as marketing material.",
  },
  {
    category: "ip",
    q: "Will you ever publish or resell my custom algorithm?",
    a: "Never. Every custom research implementation is strictly confidential. We only display anonymized metric capabilities on our portfolio and never upload client source code to public repositories. You retain 100% intellectual property ownership of your models, formulas, and parameters.",
  },
  {
    category: "tools",
    q: "Which version of NS-3 do you use?",
    a: "All current simulations are developed and tested on ns-3.46.1 (using the modern ./ns3 run CMake wrapper) on Ubuntu/Debian Linux or Windows MSYS2, and remain compatible with standard ns-3-dev environments. We also support legacy ns-3.x setups if required by specific baseline codebases.",
  },
  {
    category: "parameters",
    q: "What if my reviewer asks for parameter changes later?",
    a: "All our C++ scripts are built with clean CommandLine arguments or interactive prompts (allowing you to change --nNodes, --simTime, or --protocol directly from the terminal) so you can regenerate results anytime, or request a quick revision from us.",
  },
  {
    category: "delivery",
    q: "Do you write the full 15-page thesis document?",
    a: "We focus strictly on the technical execution: working source code, mathematical implementation, terminal result tables, NetAnim visualizations, and 300 DPI graphs with technical methodology notes—giving you all the hard data needed to write your paper effortlessly.",
  },
  {
    category: "tools",
    q: "Do I get the NetAnim trace files and plotting scripts?",
    a: "Yes. Every project deliverable includes the complete XML trace file for NetAnim (version 3.109 compatible), raw CSV metrics extracted from FlowMonitor or trace sinks, and standalone Python plotting scripts (matplotlib/seaborn) to regenerate figures at 300 DPI anytime.",
  },
  {
    category: "parameters",
    q: "How does milestone verification work before full payment?",
    a: "We believe in zero-risk collaboration: 40% initiates the simulation setup, 30% is due only after you verify water-marked terminal execution logs and generated output graphs, and the remaining 30% is for the final source code (.cc/.py), NetAnim XML, and execution documentation handover.",
  },
]

export const faqCategories = [
  { key: "all", label: "All Questions" },
  { key: "ip", label: "IP & Confidentiality" },
  { key: "tools", label: "NS-3 & Tooling" },
  { key: "parameters", label: "Revisions & Reviewers" },
  { key: "delivery", label: "Deliverables & Scope" },
]
