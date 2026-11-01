import { Activity, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { NetAnimTopologyVisual, PublicationSerifChart, QuantumVqeCircuitVisual } from "@/components/scientific-charts"
import { TiltCard } from "@/components/tilt-card"
import type { CaseStudy } from "@/lib/data/types"
import { cn } from "@/lib/utils"

export function ProjectCard({
  study,
  className,
}: {
  study: CaseStudy
  className?: string
}) {
  return (
    <TiltCard
      max={4}
      className={cn(
        "glass group/card relative flex h-full flex-col overflow-hidden rounded-[2rem] transition-all duration-300",
        className,
      )}
    >
      {/* Simulation / Plot Preview Visual */}
      <div className="relative h-52 w-full overflow-hidden border-b border-border/50 shrink-0">
        {study.surface === "security" && (
          <NetAnimTopologyVisual className="size-full" />
        )}
        {study.surface === "topology" && (
          <PublicationSerifChart
            metricTitle={`${study.title.split("—")[0]} Metric Benchmark`}
            yAxisLabel="Packet Delivery Ratio (%)"
            xAxisLabel="Active Mobile Sensor Nodes"
            className="size-full"
          />
        )}
        {study.surface === "quantum" && (
          <QuantumVqeCircuitVisual className="size-full" />
        )}
        {study.surface === "drl" && (
          <PublicationSerifChart
            metricTitle="MA-DRL Dynamic Reward & Throughput"
            yAxisLabel="Throughput (Mbps)"
            xAxisLabel="Simulation Step Epochs"
            className="size-full"
          />
        )}
        {study.surface === "spiking" && (
          <PublicationSerifChart
            metricTitle="Swin-SNN Dice Loss Convergence (MRI)"
            yAxisLabel="Dice Similarity Index"
            xAxisLabel="Training Epochs (BraTS)"
            className="size-full"
          />
        )}
        {study.surface === "network" && (
          <PublicationSerifChart
            metricTitle="Zero-Trust Dynamic Trust Degradation"
            yAxisLabel="Node Trust Score (0.0 – 1.0)"
            xAxisLabel="Attack Frequency (packets/s)"
            className="size-full"
          />
        )}
      </div>

      {/* Card Content */}
      <div className="relative flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Category Eyebrow */}
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="eyebrow !text-[0.62rem] !tracking-[0.2em] text-primary dark:text-violet-400">
              {study.category}
            </span>
            <span className="font-mono text-xs font-bold text-muted-foreground/70">
              #{study.id}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-balance text-lg sm:text-xl font-extrabold leading-tight transition-colors duration-200 group-hover/card:text-primary">
            {study.title}
          </h3>

          {/* Summary */}
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {study.summary}
          </p>

          {/* Key Metrics Badge */}
          <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3 dark:border-primary/30 dark:bg-primary/10">
            <p className="font-mono text-[11px] font-bold text-primary dark:text-violet-300 leading-snug">
              {study.metricsBadge}
            </p>
          </div>
        </div>

        {/* Tech Tags & Non-Leak Confidentiality Notice */}
        <div className="mt-5 pt-4 border-t border-border/60">
          <ul className="flex flex-wrap gap-1.5 mb-3">
            {study.techTags.map((t) => (
              <li
                key={t}
                className="rounded-full bg-foreground/[0.05] border border-foreground/[0.06] px-2.5 py-0.5 font-mono text-[11px] font-medium text-foreground/85"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="size-3.5" />
              <span>Zero Code Leaks</span>
            </span>
            <span className="text-[10px] text-muted-foreground/70">
              IEEE / Springer Format
            </span>
          </div>
        </div>
      </div>
    </TiltCard>
  )
}
