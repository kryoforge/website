import { Atom, LineChart, Network, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { capabilities } from "@/lib/data/services"

const iconMap = {
  "ns3-engineering": {
    icon: Network,
    iconBg: "bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400",
  },
  "cyber-security": {
    icon: ShieldCheck,
    iconBg: "bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400",
  },
  "ai-quantum": {
    icon: Atom,
    iconBg: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
  },
  "publication-analytics": {
    icon: LineChart,
    iconBg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
  },
}

export function ServicesStrip() {
  return (
    <section
      id="capabilities"
      aria-labelledby="services-title"
      className="relative z-20 scroll-mt-24 sm:scroll-mt-28 px-4"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-primary dark:text-violet-400">Capabilities</p>
            <h2 id="services-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Research Simulation & Engineering Disciplines
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-muted-foreground">
            End-to-end technical execution: from mathematical model specification and C++ protocol loops to NetAnim traces and 300 DPI publication plots.
          </p>
        </div>

        <Reveal>
          <div className="glass grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-[2rem] p-5 sm:p-6">
            {capabilities.map((c) => {
              const meta = iconMap[c.id as keyof typeof iconMap] || iconMap["ns3-engineering"]
              const IconComponent = meta.icon
              return (
                <div
                  key={c.id}
                  className="flex flex-col justify-between rounded-2xl p-4 transition-all hover:bg-white/70 dark:hover:bg-white/5 border border-transparent hover:border-border/60"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`flex size-12 shrink-0 items-center justify-center rounded-2xl shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(0,0,0,0.1),0_4px_12px_-2px_rgba(0,0,0,0.08)] ${meta.iconBg}`}
                      >
                        <IconComponent aria-hidden="true" className="size-6" strokeWidth={2.2} />
                      </span>
                      <span className="font-mono text-xs font-bold text-muted-foreground/80">
                        {c.number}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {c.description}
                    </p>
                  </div>

                  <ul className="mt-4 pt-3 border-t border-border/60 space-y-1.5 text-[11px] text-muted-foreground">
                    {c.metrics.map((m) => (
                      <li key={m} className="flex items-center gap-1.5">
                        <span className="size-1 rounded-full bg-primary shrink-0" />
                        <span className="truncate">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
