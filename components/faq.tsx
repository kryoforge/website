"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ChevronDown, MessageSquare } from "lucide-react"
import { CtaLink } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { faqCategories, faqs } from "@/lib/data/faq"
import { cn } from "@/lib/utils"

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const filtered =
    activeCategory === "all" ? faqs : faqs.filter((f) => f.category === activeCategory)

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 sm:scroll-mt-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title={
            <>
              Answers to Common <span className="text-gradient">Research Questions</span>
            </>
          }
          description="Everything scholars and authors ask before initiating NS-3 simulations, algorithm benchmarks, and 300 DPI plotting pipelines."
          action={
            <CtaLink href="/contact" variant="glass">
              Inquire Directly
            </CtaLink>
          }
        />

        {/* Categories */}
        <Reveal className="mt-8 flex flex-wrap gap-2">
          {faqCategories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              aria-pressed={activeCategory === cat.key}
              onClick={() => {
                setActiveCategory(cat.key)
                setOpenIndex(null)
              }}
              className={cn(
                "cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 active:scale-95",
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white shadow-sm shadow-purple-500/25 scale-[1.02]"
                  : "glass text-muted-foreground hover:text-foreground active:scale-95",
              )}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        {/* Accordion */}
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-4">
            {filtered
              .filter((_, i) => i % 2 === 0)
              .map((item) => {
                const globalIdx = filtered.indexOf(item)
                const isOpen = openIndex === globalIdx
                return (
                  <Reveal key={item.q} delay={0.05}>
                    <div
                      className={cn(
                        "glass group/faq overflow-hidden rounded-2xl transition-all duration-200 hover:border-primary/40",
                        isOpen ? "shadow-md border-primary/40" : "",
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(globalIdx)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${globalIdx}`}
                        className="flex w-full cursor-pointer items-start gap-4 px-6 py-5 text-left transition-colors duration-200"
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold transition-all duration-200",
                            isOpen
                              ? "bg-gradient-to-br from-[#2563eb] to-[#7c3aed] text-white"
                              : "bg-foreground/8 text-muted-foreground",
                          )}
                        >
                          {String(globalIdx + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-sm sm:text-[15px] font-semibold leading-snug">
                          {item.q}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-muted-foreground"
                        >
                          <ChevronDown className="size-5" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-answer-${globalIdx}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                          >
                            <p className="px-6 pb-6 pl-16 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                )
              })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {filtered
              .filter((_, i) => i % 2 !== 0)
              .map((item) => {
                const globalIdx = filtered.indexOf(item)
                const isOpen = openIndex === globalIdx
                return (
                  <Reveal key={item.q} delay={0.08}>
                    <div
                      className={cn(
                        "glass group/faq overflow-hidden rounded-2xl transition-all duration-200 hover:border-primary/40",
                        isOpen ? "shadow-md border-primary/40" : "",
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(globalIdx)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${globalIdx}`}
                        className="flex w-full cursor-pointer items-start gap-4 px-6 py-5 text-left transition-colors duration-200"
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold transition-all duration-200",
                            isOpen
                              ? "bg-gradient-to-br from-[#2563eb] to-[#7c3aed] text-white"
                              : "bg-foreground/8 text-muted-foreground",
                          )}
                        >
                          {String(globalIdx + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-sm sm:text-[15px] font-semibold leading-snug">
                          {item.q}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-muted-foreground"
                        >
                          <ChevronDown className="size-5" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-answer-${globalIdx}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                          >
                            <p className="px-6 pb-6 pl-16 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                )
              })}
          </div>
        </div>

        {/* Still have questions */}
        <Reveal className="mt-10">
          <div className="glass flex flex-col items-center gap-5 rounded-3xl p-7 text-center sm:flex-row sm:text-left">
            <span
              aria-hidden="true"
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#7c3aed] text-white shadow-lg"
            >
              <MessageSquare className="size-5" />
            </span>
            <div className="flex-1">
              <p className="font-bold text-slate-900 dark:text-white">Have a specific journal deadline or custom simulator constraint?</p>
              <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground">
                Email us your proposal scope or base paper PDF. We examine the mathematical model and respond within 24 hours.
              </p>
            </div>
            <CtaLink href="/contact" arrow={false} size="md">
              Contact Research Lead
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
