import { ArrowRight, CheckCircle2, Play, ShieldCheck, Sparkles, Star } from "lucide-react"
import { brand, heroStats } from "@/lib/data/profile"

export function Hero() {
  return (
    <section
      className="relative flex flex-col justify-start md:justify-center md:min-h-[100dvh] overflow-hidden px-4 pt-24 pb-8 sm:pt-28 sm:pb-12"
      aria-labelledby="hero-title"
    >
      {/* Light theme background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-right bg-no-repeat transition-opacity duration-500 dark:opacity-0 hidden md:block"
        style={{ backgroundImage: "url('/hero.webp')" }}
      />

      {/* Dark theme background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-right bg-no-repeat opacity-0 transition-opacity duration-500 dark:opacity-100 hidden md:block"
        style={{ backgroundImage: "url('/hero-dark.webp')" }}
      />

      {/* Scrim for legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-4xl bg-gradient-to-r from-background/90 via-background/60 to-transparent select-none dark:from-[#09081e]/90 dark:via-[#09081e]/60 hidden md:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="min-w-0 max-w-3xl">
          {/* Status Badge */}
          <div className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-500/30 bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur-md dark:border-emerald-400/30 dark:bg-slate-900/85 dark:text-emerald-300">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{brand.statusBadge}</span>
          </div>

          {/* Eyebrow Badge */}
          <p className="eyebrow mb-3 tracking-[0.22em] font-bold text-xs uppercase text-primary dark:text-violet-300">
            Computational Research & Simulation Studio
          </p>

          {/* Main Headline */}
          <h1
            id="hero-title"
            className="text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl xl:text-[3.55rem] dark:text-white"
          >
            Turning Complex Research Models into{" "}
            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Publishable Simulation Results.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-5 max-w-2xl text-pretty text-base sm:text-[17px] leading-relaxed font-medium text-slate-700 dark:text-slate-200">
            {brand.intro}
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap gap-3.5">
            <a
              href="/contact"
              className="group/hero-cta inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#ec4899] px-7 py-3.5 text-sm font-bold text-white shadow-[0_4px_16px_-2px_rgba(236,72,153,0.35),0_10px_26px_-4px_rgba(124,58,237,0.35),inset_0_1.5px_1px_rgba(255,255,255,0.65),inset_0_-3px_6px_rgba(0,0,0,0.18)] transition-all duration-200 hover:scale-[1.03] hover:brightness-105 active:scale-[0.97]"
            >
              <span>Request Custom Implementation</span>
              <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 group-hover/hero-cta:translate-x-1" />
            </a>
            <a
              href="/#portfolio"
              className="group/hero-work inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-900/10 bg-white/90 px-6 py-3.5 text-sm font-bold text-slate-900 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.06),inset_0_1.5px_1px_rgba(255,255,255,0.85),inset_0_-2px_5px_rgba(0,0,0,0.05)] backdrop-blur-md transition-all duration-200 hover:bg-white hover:border-primary/40 hover:scale-[1.03] hover:text-primary active:scale-[0.97] dark:border-white/15 dark:bg-slate-900/80 dark:text-white dark:hover:bg-slate-800/90"
            >
              <span>Explore Simulation Benchmarks</span>
              <Play aria-hidden="true" className="size-3.5 fill-current text-primary transition-transform duration-200 group-hover/hero-work:scale-125" />
            </a>
          </div>

          {/* Hero Trust Bar */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/10">
            <p className="eyebrow mb-3 !text-[0.68rem] !text-muted-foreground">
              Verification Standards & Rigor
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-800 dark:text-slate-200">
              {brand.heroTrustBar.map((item, idx) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-foreground/[0.04] px-3 py-1.5 backdrop-blur-sm"
                >
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                  {idx < brand.heroTrustBar.length - 1 && (
                    <span className="hidden sm:inline-block ml-1 opacity-20">·</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof / Scholar Satisfaction */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <div className="flex -space-x-2">
              <span className="inline-flex size-7.5 items-center justify-center rounded-full bg-[#2563eb] font-bold text-[9px] text-white ring-2 ring-white shadow-xs dark:ring-slate-900" title="IoT Security Scholar">
                IS
              </span>
              <span className="inline-flex size-7.5 items-center justify-center rounded-full bg-[#7c3aed] font-bold text-[9px] text-white ring-2 ring-white shadow-xs dark:ring-slate-900" title="Mobile LLN Lab">
                ML
              </span>
              <span className="inline-flex size-7.5 items-center justify-center rounded-full bg-[#ec4899] font-bold text-[9px] text-white ring-2 ring-white shadow-xs dark:ring-slate-900" title="Vehicular AI Lead">
                VA
              </span>
              <span className="inline-flex size-7.5 items-center justify-center rounded-full bg-[#06b6d4] font-bold text-[9px] text-white ring-2 ring-white shadow-xs dark:ring-slate-900" title="Quantum Research Group">
                QR
              </span>
            </div>
            <div className="flex items-center gap-0.5 text-amber-500 dark:text-amber-400" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              5.0 <span className="font-medium text-slate-600 dark:text-slate-300">(IEEE, Springer & Elsevier Scholar Satisfaction)</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
