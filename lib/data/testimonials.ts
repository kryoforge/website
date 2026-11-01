export interface ConfidentialityPillar {
  id: string
  title: string
  badge: string
  heading: string
  description: string
  detail: string
  icon: "check" | "shield" | "lock" | "refresh"
}

export const confidentialityPillars: ConfidentialityPillar[] = [
  {
    id: "track-record",
    title: "10+ Research Implementations",
    badge: "10+ Projects Delivered",
    heading: "Custom Simulation & Protocol Engineering",
    description:
      "Successfully delivered custom NS-3 C++ routing protocols, NetAnim topologies, Deep Reinforcement Learning pipelines, and quantum circuits across 10+ academic and industry research projects.",
    detail: "100% custom C++ & Python code handed over with step-by-step CLI execution guides.",
    icon: "check",
  },
  {
    id: "strict-nda",
    title: "100% Double-Blind & NDA Compliance",
    badge: "Zero Public Disclosures",
    heading: "Why We Do Not Display Public Reviews",
    description:
      "Academic submissions to IEEE Transactions, Springer, and Elsevier strictly enforce double-blind peer review. We never publish client names, paper drafts, or reviewer comments to protect author anonymity.",
    detail: "Strict Non-Disclosure Agreement (NDA) signed upon request. Zero code leaks or public disclosure.",
    icon: "shield",
  },
  {
    id: "revision-support",
    title: "Reviewer-Proof Revision Support",
    badge: "Journal Review Backing",
    heading: "Post-Submission Benchmark Revisions",
    description:
      "When journal peer reviewers request additional parameter sweeps, higher node densities, or comparisons against newer baseline protocols, we update your simulation code and generate new 300 DPI plots directly.",
    detail: "Continuous technical backing through minor and major review rounds until camera-ready acceptance.",
    icon: "refresh",
  },
]

// Deprecated: Retained as empty for backward compatibility
export const researcherOutcomes = []
