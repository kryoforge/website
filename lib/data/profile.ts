export const brand = {
  name: "KryoForge",
  fullName: "KryoForge Research Studio",
  shortRole: "Research & Simulation Studio",
  role: "Computational Research & Simulation Studio",
  tagline: "Advanced Network Simulations, Algorithmic Modeling & Research Engineering",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact.kryoforge@gmail.com",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/kryoforge",
  logo: "/images/kryo-k-logo.png",
  statusBadge: "Available for Custom Research Implementations",
  location: "Global Remote Research Lab",
  timezones: "Supporting IEEE, Springer & Elsevier workflows globally",
  availability: "Available for custom ns-3.46.1 protocol coding, ML benchmarks, and fast-turnaround paper revisions",
  philosophy: "Turning Complex Research Models into Publishable Simulation Results.",
  intro:
    "KryoForge designs and executes custom NS-3 network architectures, deep learning pipelines, and quantum algorithms for IEEE, Springer, and Elsevier research workflows—delivering verified metrics, NetAnim topologies, and 300 DPI publication-ready plots.",
  heroTrustBar: [
    "ns-3.46.1 Verified",
    "100% Confidential (Zero Code Leaks)",
    "300 DPI Publication Plots",
    "Reproducible Metrics",
  ],
}

export const navLinks: Array<{ href: string; label: string; shortLabel?: string }> = [
  { href: "/", label: "Home" },
  { href: "/#portfolio", label: "Research Portfolio", shortLabel: "Portfolio" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#methodology", label: "Methodology" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export const heroStats = [
  { value: "ns-3.46.1", label: "Sim Engine", note: "CMake ./ns3 wrapper verified" },
  { value: "300 DPI", label: "Academic Figures", note: "Serif-styled IEEE / Springer charts" },
  { value: "100%", label: "IP Confidentiality", note: "Strict non-disclosure & zero leaks" },
  { value: "5.0", label: "Scholar Satisfaction", note: "Peer-reviewed research delivery" },
]
