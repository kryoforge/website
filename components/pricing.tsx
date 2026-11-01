"use client"

import { useState } from "react"
import { Check, Clock, HelpCircle, ShieldCheck, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { CtaLink } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { pricingAddonNote, pricingTiers } from "@/lib/data/pricing"
import { cn } from "@/lib/utils"

type Currency = "INR" | "USD" | "EUR"

export function Pricing() {
  const [currency, setCurrency] = useState<Currency>("INR")

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-24 sm:scroll-mt-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Transparent,{" "}
              <span className="text-gradient">fixed-price packages</span>
            </>
          }
          description="Structured milestones with zero hidden fees. 40% to initiate simulation setup, 30% upon terminal & graph verification preview, 30% for final code and NetAnim handover."
        />

        {/* Currency Switcher */}
        <Reveal className="mt-8 flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Show prices in</span>
          <div className="glass flex gap-1 rounded-full p-1">
            {(["INR", "USD", "EUR"] as Currency[]).map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={currency === c}
                onClick={() => setCurrency(c)}
                className={cn(
                  "cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200",
                  currency === c
                    ? "bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white shadow-sm shadow-purple-500/25 scale-[1.02]"
                    : "text-muted-foreground hover:text-foreground active:scale-95",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {/* 3 Tier Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => {
            const priceDisplay =
              currency === "INR" ? tier.priceInr : currency === "USD" ? tier.priceUsd : tier.priceEur

            return (
              <Reveal key={tier.name} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={cn(
                    "glass relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 transition-shadow duration-300",
                    tier.popular && "ring-2 ring-violet-500/50 shadow-lg shadow-purple-500/10",
                  )}
                  style={
                    {
                      "--acc-a": tier.accent,
                      "--acc-b": tier.accent,
                    } as React.CSSProperties
                  }
                >
                  {/* Blob */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full blur-3xl opacity-30"
                    style={{ background: `rgb(${tier.accentRgb})` }}
                  />

                  {/* Popular Badge */}
                  {tier.badge && (
                    <div
                      className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white"
                      style={{
                        background: `linear-gradient(135deg, ${tier.accent}dd, ${tier.accent}88)`,
                        boxShadow: `0 4px 14px -4px rgb(${tier.accentRgb}/0.6)`,
                      }}
                    >
                      <Sparkles aria-hidden="true" className="size-3" />
                      {tier.badge}
                    </div>
                  )}

                  {/* Tier Title */}
                  <div className="relative">
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{tier.name}</h3>

                    {/* Price */}
                    <div className="mt-4 flex flex-wrap items-baseline gap-2">
                      <span
                        className="text-2xl font-extrabold tracking-tight tabular-nums sm:text-3xl"
                        style={{ color: tier.accent }}
                      >
                        {priceDisplay}
                      </span>
                    </div>

                    {/* Turnaround Badge */}
                    <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-foreground/[0.04] px-3 py-1 text-xs font-semibold text-foreground/80">
                      <Clock aria-hidden="true" className="size-3.5 text-primary" />
                      <span>{tier.turnaround}</span>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {tier.description}
                    </p>
                  </div>

                  <div className="my-6 h-px bg-border" />

                  {/* Deliverables */}
                  <ul className="relative flex-1 space-y-3">
                    {tier.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm leading-snug">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full"
                          style={{ background: `rgb(${tier.accentRgb}/0.15)` }}
                        >
                          <Check className="size-3 font-bold" style={{ color: tier.accent }} strokeWidth={3} />
                        </span>
                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <CtaLink
                      href="/contact"
                      size="md"
                      className={cn(
                        "w-full justify-center text-xs sm:text-sm",
                        !tier.popular && "!bg-foreground/6 !bg-none !text-foreground !shadow-none hover:!bg-foreground/10",
                      )}
                    >
                      {tier.cta}
                    </CtaLink>
                  </div>
                </motion.article>
              </Reveal>
            )
          })}
        </div>

        {/* Add-on Note & Reviewer Revision Banner */}
        <Reveal className="mt-8 flex flex-col gap-4 rounded-3xl border border-border/80 glass p-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <HelpCircle aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" />
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                {pricingAddonNote.headline}
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {pricingAddonNote.details}{" "}
                <strong className="text-foreground">{pricingAddonNote.billingStructure}</strong>
              </p>
            </div>
          </div>
          <CtaLink href="/contact" size="md" variant="glass" className="shrink-0 text-xs">
            Request Quick Revision →
          </CtaLink>
        </Reveal>
      </div>
    </section>
  )
}
