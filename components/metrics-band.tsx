import { Activity, CheckCircle2, FileSpreadsheet, Lock, Network } from "lucide-react"
import { Reveal } from "@/components/reveal"

const researchMetrics = [
  {
    value: "ns-3.46.1",
    label: "Simulation Engine",
    note: "Modern CMake & ./ns3 wrapper verified",
    icon: Network,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
  },
  {
    value: "100%",
    label: "Novelty & Zero Leaks",
    note: "Strict IP protection & confidentiality",
    icon: Lock,
    color: "bg-rose-50 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",
  },
  {
    value: "300 DPI",
    label: "Academic Figures",
    note: "High-resolution serif serif plots (IEEE format)",
    icon: Activity,
    color: "bg-purple-50 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
  },
  {
    value: "FlowMonitor",
    label: "Reproducible Traces",
    note: "Raw CSV logs, NetAnim .xml & scripts",
    icon: FileSpreadsheet,
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
  },
]

export function MetricsBand() {
  return (
    <section aria-label="Verified research results" className="px-4">
      <Reveal className="mx-auto max-w-7xl">
        <div className="glass grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-3xl p-4 sm:p-5">
          {researchMetrics.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.label}
                className="flex items-center gap-3.5 rounded-2xl p-3 transition-colors hover:bg-white/60 dark:hover:bg-white/5"
              >
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-2xl shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.1),0_4px_12px_-2px_rgba(0,0,0,0.08)] ${m.color}`}
                >
                  <Icon aria-hidden="true" className="size-5" strokeWidth={2.2} />
                </span>
                <div className="min-w-0">
                  <p className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-200">
                    {m.label}
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate" title={m.note}>
                    {m.note}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
