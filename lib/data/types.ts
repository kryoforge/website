export type IconKey =
  | "network"
  | "cpu"
  | "layers"
  | "shield"
  | "binary"
  | "chart"
  | "terminal"
  | "atom"
  | "server"
  | "zap"
  | "lock"
  | "code"
  | "gauge"
  | "sparkles"
  | "workflow"
  | "database"
  | "rocket"
  | "fileText"
  | "checkCircle"
  | "globe"
  | "car"
  | "brain"

export type AccentKey =
  | "violet"
  | "rose"
  | "cyan"
  | "indigo"
  | "emerald"
  | "amber"
  | "fuchsia"
  | "sky"

export type ArtSurface =
  | "network"
  | "topology"
  | "chart300dpi"
  | "security"
  | "drl"
  | "spiking"
  | "quantum"
  | "dashboard"
  | "code"

export interface CaseStudy {
  id: number
  slug: string
  title: string
  category: string
  summary: string
  metricsBadge: string
  techTags: string[]
  highlights: { label: string; value: string }[]
  accent: AccentKey
  icon: IconKey
  surface: ArtSurface
  benchmark?: string
  methodologySteps?: string[]
  reproducibility?: string
}

export interface Capability {
  id: string
  number: string
  title: string
  description: string
  metrics: string[]
  accent: AccentKey
  icon: IconKey
}

export interface TechStackDomain {
  domain: string
  tools: string[]
  accent: AccentKey
  icon: IconKey
}

export interface WhyPillar {
  number: string
  title: string
  body: string
}

export interface ResearcherOutcome {
  id: string
  title: string
  quote: string
  badge: string
  author: string
  role: string
  initials: string
  rating: number
}

export interface PricingTier {
  name: string
  badge?: string
  popular?: boolean
  turnaround: string
  priceInr: string
  priceUsd: string
  priceEur: string
  description: string
  deliverables: string[]
  accent: string
  accentRgb: string
  cta: string
}

export interface WorkflowStep {
  number: string
  title: string
  duration: string
  description: string
  accent: string
  accentRgb: string
}

export interface FaqItem {
  q: string
  a: string
  category: "ip" | "tools" | "parameters" | "delivery" | "all"
}
