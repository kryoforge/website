"use client"

import { useState } from "react"
import { ShieldAlert, Terminal } from "lucide-react"
import { CtaLink } from "@/components/cta-button"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { caseStudies } from "@/lib/data/projects"
import { cn } from "@/lib/utils"

const categories = [
  "All Disciplines",
  "IoT & RPL Routing",
  "Vehicular & ITS",
  "Cyber-Security",
  "AI & Quantum",
]

const envSpecs = [
  { label: "Core Simulation Engine", value: "ns-3.46.1", detail: "CMake ./ns3 run loop" },
  { label: "Topology Animator", value: "NetAnim 3.109", detail: "XML dynamic node tracking" },
  { label: "Mobility & Road Traffic", value: "SUMO 1.18", detail: "TraceExporter mobility integration" },
  { label: "Deep Learning Pipeline", value: "PyTorch 2.4 + CUDA", detail: "Swin-SNN & BraTS segmentation" },
  { label: "Quantum Simulation", value: "Qiskit 1.2 (Aer)", detail: "Parameterized ansatz VQE circuits" },
  { label: "Metric Probing", value: "FlowMonitor (ns3)", detail: "End-to-end packet delivery analysis" },
]

export function ResearchCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All Disciplines")

  const filteredStudies = caseStudies.filter((study) => {
    if (selectedCategory === "All Disciplines") return true
    if (selectedCategory === "IoT & RPL Routing")
      return study.category.includes("IoT") || study.category.includes("RPL")
    if (selectedCategory === "Vehicular & ITS")
      return study.category.includes("Vehicular") || study.category.includes("ITS")
    if (selectedCategory === "Cyber-Security")
      return study.category.includes("Security") || study.category.includes("Defense")
    if (selectedCategory === "AI & Quantum")
      return study.category.includes("AI") || study.category.includes("Quantum")
    return true
  })

  return (
    <>
      {/* Discipline Filters */}
      <Reveal className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 active:scale-95",
              selectedCategory === cat
                ? "bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white shadow-sm shadow-purple-500/25 scale-[1.02]"
                : "glass text-muted-foreground hover:text-foreground active:scale-95",
            )}
          >
            {cat}
          </button>
        ))}
      </Reveal>

      {/* Case Studies Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
        {filteredStudies.map((study, idx) => (
          <Reveal key={study.id} delay={(idx % 4) * 0.06} className="h-full">
            <ProjectCard study={study} />
          </Reveal>
        ))}
      </div>

      {/* Compute Infrastructure & Trace Rigor Spec Banner */}
      <Reveal className="mt-12">
        <div className="glass rounded-[2rem] p-6 sm:p-8 border border-white/80 dark:border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-border/50">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary dark:text-violet-400 mb-1">
                <Terminal className="size-4" />
                <span>Compute & Simulation Environment Specifications</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Built for Camera-Ready Academic Review
              </h2>
            </div>
            <CtaLink href="/contact" size="md">
              Request Custom Simulation Run
            </CtaLink>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {envSpecs.map((spec) => (
              <div key={spec.label} className="rounded-xl bg-foreground/[0.03] p-3 text-center sm:text-left">
                <p className="text-[11px] font-medium text-muted-foreground">{spec.label}</p>
                <p className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">{spec.value}</p>
                <p className="text-[10px] text-primary/80 dark:text-violet-300 mt-1">{spec.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  )
}
