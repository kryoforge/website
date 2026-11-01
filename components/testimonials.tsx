"use client"

import { CheckCircle2, Lock, RefreshCw, ShieldCheck } from "lucide-react"
import { motion } from "motion/react"
import { CtaLink } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { confidentialityPillars } from "@/lib/data/testimonials"
import { cn } from "@/lib/utils"

export function Testimonials() {
  return (
    <section id="confidentiality" aria-labelledby="confidentiality-title" className="scroll-mt-24 sm:scroll-mt-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client Privacy & Track Record"
          title={
            <>
              10+ Projects Delivered Under <span className="text-gradient">Strict Non-Disclosure</span>
            </>
          }
          description="We do not publish public reviews, scholar names, or draft manuscripts. Top-tier academic research demands 100% discretion—our clients' algorithms, paper titles, and institutional affiliations remain strictly private."
          action={
            <CtaLink href="/contact" variant="glass">
              Discuss Your Paper Under NDA
            </CtaLink>
          }
        />

        {/* NDA & Double-Blind Policy Banner */}
        <Reveal delay={0.08} className="mt-8">
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-4 sm:p-5 dark:border-primary/30 dark:bg-primary/[0.08]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20 dark:text-violet-300">
                <Lock className="size-4.5" />
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-foreground/80">
                <strong className="font-semibold text-slate-900 dark:text-white">Zero Public Reviews Policy:</strong> Top-tier IEEE Transactions, Elsevier, and Springer journals enforce double-blind peer review and strict novelty protection. To safeguard our clients&apos; academic standing and priority of discovery, we never publish client quotes or proprietary manuscript details.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 3 Pillar Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {confidentialityPillars.map((p, i) => (
            <Reveal
              key={p.id}
              delay={0.12 + i * 0.08}
              className={cn(
                "h-full flex flex-col",
                i === 2 ? "md:max-lg:col-span-2 md:max-lg:max-w-xl md:max-lg:mx-auto md:max-lg:w-full" : "",
              )}
            >
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="glass relative flex h-full flex-col justify-between rounded-[1.75rem] sm:rounded-[2rem] p-6 lg:p-7 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/40"
              >
                <div className="flex-1 flex flex-col">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs font-semibold text-primary dark:border-primary/30 dark:bg-primary/10 dark:text-violet-300">
                      {p.badge}
                    </span>
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-foreground/5 text-foreground/70">
                      {p.icon === "check" && <CheckCircle2 className="size-4 text-emerald-500" />}
                      {p.icon === "shield" && <ShieldCheck className="size-4 text-primary dark:text-violet-400" />}
                      {p.icon === "refresh" && <RefreshCw className="size-4 text-cyan-500" />}
                    </div>
                  </div>

                  {/* Title & Heading */}
                  <div className="mt-5">
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {p.heading}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                    {p.description}
                  </p>
                </div>

                {/* Bottom Assurance */}
                <div className="mt-6 border-t border-border/80 pt-4 dark:border-white/10">
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                    <span className="leading-snug">{p.detail}</span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
