import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { TiltCard } from "@/components/tilt-card"
import { whyWorkWithKryoForge } from "@/lib/data/services"

export function WhyMe() {
  return (
    <section id="why" aria-labelledby="why-title" className="scroll-mt-24 sm:scroll-mt-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Work With KryoForge"
          title={
            <>
              4 Pillars of <span className="text-gradient">Academic Rigor</span>
            </>
          }
          description="We understand journal reviewer standards, reproducibility constraints, and the strict necessity for absolute code confidentiality."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {whyWorkWithKryoForge.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.08}>
              <div className="h-full">
                <TiltCard max={3} className="glass flex h-full gap-5 rounded-[2rem] p-7">
                  <span className="text-gradient font-mono text-3xl sm:text-4xl font-extrabold leading-none shrink-0">
                    {w.number}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {w.body}
                    </p>
                  </div>
                </TiltCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
