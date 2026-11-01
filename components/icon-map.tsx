import {
  Activity,
  Atom,
  Binary,
  Brain,
  Car,
  CheckCircle2,
  Cpu,
  Database,
  FileText,
  Gauge,
  Globe,
  Layers,
  Lock,
  Network,
  Rocket,
  Server,
  Shield,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react"
import type { IconKey } from "@/lib/data/types"

const icons: Record<IconKey, LucideIcon> = {
  network: Network,
  cpu: Cpu,
  layers: Layers,
  shield: Shield,
  binary: Binary,
  chart: Activity,
  terminal: Terminal,
  atom: Atom,
  server: Server,
  zap: Zap,
  lock: Lock,
  code: Terminal,
  gauge: Gauge,
  sparkles: Sparkles,
  workflow: Workflow,
  database: Database,
  rocket: Rocket,
  fileText: FileText,
  checkCircle: CheckCircle2,
  globe: Globe,
  car: Car,
  brain: Brain,
}

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  const Cmp = icons[name] || Network
  return <Cmp aria-hidden="true" className={className} />
}
