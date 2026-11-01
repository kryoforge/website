import { ShieldCheck } from "lucide-react"
import { CtaLink } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { brand } from "@/lib/data/profile"

export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="px-4">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/90 bg-white/85 p-8 text-center shadow-[0_24px_50px_-12px_rgba(90,70,220,0.12),inset_0_2px_1.5px_#ffffff,inset_0_-3px_8px_rgba(90,70,220,0.06)] backdrop-blur-2xl transition-all duration-300 md:p-14 dark:border-white/12 dark:bg-gradient-to-br dark:from-[#100d33]/90 dark:via-[#161240]/85 dark:to-[#1c1442]/90">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -top-16 size-80 rounded-full bg-gradient-to-br from-[#38bdf8]/20 to-[#818cf8]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-10 size-80 rounded-full bg-gradient-to-tl from-[#ec4899]/20 to-[#f59e0b]/15 blur-3xl"
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="size-3.5" />
            <span>{brand.statusBadge}</span>
          </div>

          <h2
            id="cta-title"
            className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white"
          >
            Turn Your Research Paper Into{" "}
            <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Verified Simulation Proof
            </span>
            .
          </h2>

          <p className="mt-4 text-pretty text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300">
            Send us your base paper, draft mathematical models, or reviewer revision requirements. We deliver verified ns-3.46.1 C++ code, CSV datasets, NetAnim traces, and 300 DPI publication plots.
          </p>

          <div className="mt-8 flex justify-center">
            <CtaLink
              href="/contact"
              size="lg"
              className="bg-gradient-to-r from-[#2563eb] via-[#7c3aed] to-[#ec4899] text-white font-bold shadow-lg hover:scale-[1.03] active:scale-[0.97]"
            >
              Discuss Your Paper / Base Model
            </CtaLink>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
