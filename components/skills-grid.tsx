import { Icon } from "@/components/icon-map"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { TiltCard } from "@/components/tilt-card"
import { technicalStackMatrix } from "@/lib/data/services"

export function SkillsGrid() {
  return (
    <section id="stack" aria-labelledby="skills-title" className="scroll-mt-24 sm:scroll-mt-28 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical Stack"
          title={
            <>
              8-Domain <span className="text-gradient">Research Matrix</span>
            </>
          }
          description="From physical-layer propagation models and C++ network simulators to quantum eigensolvers and automated 300 DPI serif plotting pipelines."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {technicalStackMatrix.map((g, i) => (
            <Reveal key={g.domain} delay={(i % 4) * 0.07}>
              <TiltCard
                max={3}
                className="glass relative h-full overflow-hidden rounded-[2rem] p-6"
              >
                <div
                  aria-hidden="true"
                  className="acc-bg pointer-events-none absolute -right-10 -top-12 size-36 rounded-full opacity-15 blur-2xl"
                />
                <div className="relative mb-4 flex items-center gap-3">
                  <span className="orb flex size-11 items-center justify-center rounded-2xl">
                    <Icon name={g.icon} className="size-5" />
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{g.domain}</h3>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {g.tools.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-foreground/[0.05] border border-foreground/[0.06] px-2.5 py-1 font-mono text-xs font-medium text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
