"use client"

import { CheckCircle2, Quote, Star } from "lucide-react"
import { motion } from "motion/react"
import { CtaLink } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { researcherOutcomes } from "@/lib/data/testimonials"
import { cn } from "@/lib/utils"

export function Testimonials() {
  return (
    <section id="outcomes" aria-labelledby="testimonials-title" className="scroll-mt-24 sm:scroll-mt-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Researcher Outcomes"
          title={
            <>
              Anonymized <span className="text-gradient">Peer-Reviewed Milestones</span>
            </>
          }
          description="Verified outcomes from PhD scholars, university faculty, and lead researchers who relied on KryoForge to execute high-stakes simulations."
          action={
            <CtaLink href="/contact" variant="glass">
              Discuss Your Manuscript
            </CtaLink>
          }
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {researcherOutcomes.map((t, i) => (
            <Reveal
              key={t.id}
              delay={i * 0.1}
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
                  {/* Rating & Verified Scholar Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <div
                      role="img"
                      className="flex items-center gap-1 text-amber-400 shrink-0"
                      aria-label={`${t.rating} out of 5 stars`}
                    >
                      {Array.from({ length: t.rating }).map((_, starIdx) => (
                        <Star key={starIdx} className="size-4 fill-current" />
                      ))}
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-500/15 dark:text-emerald-400">
                      <CheckCircle2 aria-hidden="true" className="size-3.5 shrink-0" />
                      <span>Verified Research</span>
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative mt-5 flex-1">
                    <Quote
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-2 -top-2 size-8 text-primary/15 dark:text-violet-400/15"
                    />
                    <p className="relative z-10 text-pretty text-sm sm:text-[15px] leading-relaxed text-foreground/90">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Bottom Meta */}
                <div className="mt-6 border-t border-border/80 pt-5 dark:border-white/10">
                  <div className="mb-4">
                    <span className="inline-flex max-w-full items-center truncate rounded-xl border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs font-semibold text-primary dark:border-primary/30 dark:bg-primary/10 dark:text-violet-300">
                      {t.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed] font-mono text-xs font-bold text-white shadow-md">
                      {t.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-slate-900 dark:text-white">
                        {t.title}
                      </p>
                      <p className="truncate text-xs text-muted-foreground" title={`${t.author} · ${t.role}`}>
                        {t.author} · {t.role}
                      </p>
                    </div>
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
