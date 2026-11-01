"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { CheckCircle2, Code2, Cpu, FileCheck2, FileText, Search } from "lucide-react"
import { CtaLink } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { researchWorkflowSteps } from "@/lib/data/services"

const stepIcons = [Search, FileCheck2, Code2, Cpu, CheckCircle2]

function StepCard({
  step,
  index,
}: {
  step: (typeof researchWorkflowSteps)[0]
  index: number
}) {
  const ref = useRef<HTMLLIElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const IconCmp = stepIcons[index] || Code2

  return (
    <li ref={ref} className="relative flex gap-5 md:gap-7">
      {/* Connector Line */}
      {index < researchWorkflowSteps.length - 1 && (
        <div
          aria-hidden="true"
          className="absolute left-[1.625rem] top-14 hidden h-[calc(100%+2rem)] w-px md:block"
          style={{ background: `linear-gradient(to bottom, rgb(${step.accentRgb}/0.4), transparent)` }}
        />
      )}

      {/* Step Icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.1, type: "spring", stiffness: 300, damping: 22 }}
        aria-hidden="true"
        className="relative z-10 mt-1 flex size-[3.25rem] shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${step.accent}dd, ${step.accent}88)`,
          boxShadow: `0 8px 24px -6px rgb(${step.accentRgb}/0.5)`,
        }}
      >
        <IconCmp className="size-5" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.1 + 0.15, duration: 0.5, ease: "easeOut" }}
        className="glass flex-1 rounded-[1.75rem] p-6 md:p-7"
      >
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm font-bold" style={{ color: step.accent }}>
            {step.number}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            {step.title}
          </h3>
          <span className="ml-auto rounded-full border border-border px-3 py-0.5 text-xs font-semibold text-muted-foreground">
            {step.duration}
          </span>
        </div>
        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </motion.div>
    </li>
  )
}

export function HowWeWork() {
  return (
    <section id="methodology" aria-labelledby="process-title" className="scroll-mt-24 sm:scroll-mt-28 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          {/* Left: Heading + Trust Stats */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="eyebrow mb-4 text-primary dark:text-violet-400">Methodology</p>
              <h2
                id="process-title"
                className="text-balance text-3xl sm:text-4xl font-extrabold tracking-tight md:text-5xl"
              >
                5-Step Reproducible{" "}
                <span className="text-gradient">Research Workflow</span>
              </h2>
              <p className="mt-5 text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
                Engineered for strict academic reproducibility. Every step produces verifiable logs, terminal execution scripts, and watermarked graph previews before final handover.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink href="/contact">Send Base Paper for Review</CtaLink>
                <CtaLink href="/#portfolio" variant="glass" arrow={false}>
                  View Simulation Case Studies
                </CtaLink>
              </div>
            </Reveal>

            {/* Quick Stats */}
            <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-3">
              {[
                { value: "24h", label: "Feasibility review" },
                { value: "100%", label: "IP confidentiality" },
                { value: "ns-3.46.1", label: "CMake verified" },
                { value: "300 DPI", label: "Publication charts" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4">
                  <p className="text-gradient text-xl font-extrabold">{s.value}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Right: Step List */}
          <ol className="space-y-6 md:space-y-8">
            {researchWorkflowSteps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
