"use client"

import { useState } from "react"
import { ShieldAlert, Sparkles } from "lucide-react"
import { CtaLink } from "@/components/cta-button"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { caseStudies } from "@/lib/data/projects"
import { cn } from "@/lib/utils"

const categories = [
  "All Disciplines",
  "IoT & RPL Routing",
  "Vehicular & ITS",
  "Cyber-Security",
  "AI & Quantum",
]

export function FeaturedWork() {
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
    <section id="portfolio" aria-labelledby="work-title" className="scroll-mt-24 sm:scroll-mt-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Research Portfolio"
          title={
            <>
              Featured <span className="text-gradient">Case Studies</span>
            </>
          }
          description="8 anonymized research architectures with verified comparative metrics, terminal traces, and 300 DPI publication plots. Client algorithm files (.cc / .py / .docx) are strictly confidential and never published."
          action={
            <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <ShieldAlert className="size-4 shrink-0" />
              <span>100% Anonymized & Protected IP</span>
            </div>
          }
        />

        {/* Filter Pills */}
        <Reveal className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200",
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white shadow-sm shadow-purple-500/25 scale-[1.02]"
                  : "glass text-muted-foreground hover:text-foreground active:scale-95",
              )}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* 8-Card Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
          {filteredStudies.map((study, idx) => (
            <Reveal key={study.slug} delay={(idx % 4) * 0.07} className="h-full flex flex-col">
              <ProjectCard study={study} />
            </Reveal>
          ))}
        </div>

        {/* Bottom Verification Strip */}
        <Reveal className="mt-10">
          <div className="glass flex flex-col items-center justify-between gap-4 rounded-3xl p-6 sm:flex-row text-center sm:text-left">
            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Require a Custom Base-Paper Implementation?
              </p>
              <p className="text-xs text-muted-foreground">
                Send us your IEEE, Elsevier, or Springer reference paper. We analyze feasibility and reply within 24 hours.
              </p>
            </div>
            <CtaLink href="/contact" size="md">
              Request Implementation Scope
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
