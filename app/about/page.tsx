import { CheckCircle2, ShieldCheck, Terminal, Award, FileCode2, Cpu } from "lucide-react"
import type { Metadata } from "next"
import { CtaBand } from "@/components/cta-band"
import { CtaLink } from "@/components/cta-button"
import { HowWeWork } from "@/components/how-we-work"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ServicesStrip } from "@/components/services-strip"
import { SkillsGrid } from "@/components/skills-grid"
import { Testimonials } from "@/components/testimonials"
import { WhyMe } from "@/components/why-me"
import { brand, heroStats } from "@/lib/data/profile"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kryoforge.vercel.app"

export const metadata: Metadata = {
  title: "About Us — Computational Research & Simulation Engineering",
  description:
    "KryoForge is an elite research engineering studio executing custom NS-3 simulations, quantum algorithms, and deep spiking networks for IEEE, Springer, and Elsevier papers.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About KryoForge Research Studio",
    description:
      "Turning complex research models into verified, publishable simulation results. Custom C++ NS-3 protocols, NetAnim topologies, and 300 DPI publication plots.",
    url: `${siteUrl}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About KryoForge Research Studio",
    description:
      "Turning complex research models into verified, publishable simulation results. Custom C++ NS-3 protocols, NetAnim topologies, and 300 DPI publication plots.",
  },
}

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${siteUrl}/about#webpage`,
      url: `${siteUrl}/about`,
      name: `About ${brand.fullName}`,
      description: brand.intro,
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/about#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${siteUrl}/about`,
        },
      ],
    },
  ],
}

const verificationPillars = [
  {
    title: "ns-3.46.1 Native C++ Compilation",
    desc: "Strict CMake configuration and memory-safe object loops ensuring zero segmentation faults during 10,000s simulation runs.",
  },
  {
    title: "RNG Seed Determinism",
    desc: "Controlled Random Variable Streams (RngSeedManager) guaranteeing 100% reproducible metric distributions across all test iterations.",
  },
  {
    title: "FlowMonitor Automated Traces",
    desc: "Direct XML / CSV trace probing extracting end-to-end PDR, jitter, hop counts, and energy profiles without heuristic approximations.",
  },
  {
    title: "300 DPI Publication-Ready Plots",
    desc: "Automated serif-formatted matplotlib & seaborn visual generation pre-scaled to IEEE Transactions two-column column-width requirements.",
  },
  {
    title: "100% Client IP Confidentiality",
    desc: "Zero code leaks, encrypted repositories, and strict non-disclosure. We never publish or expose proprietary client thesis algorithms.",
  },
  {
    title: "24-Hour Reviewer Revisions",
    desc: "Dedicated rapid-turnaround support to rerun simulations, add comparative baselines, and address reviewer critiques before journal deadlines.",
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <div className="flex flex-col gap-14 md:gap-20 pt-24 sm:pt-28 pb-12 sm:pb-16">
        {/* Intro / Mission Section */}
        <section className="px-4">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              as="h1"
              eyebrow="About KryoForge"
              title={
                <>
                  Bridging Theoretical Models and{" "}
                  <span className="text-gradient">Publishable Proof</span>
                </>
              }
              description="KryoForge is a specialized computational research engineering studio. We partner with PhD scholars, university labs, and enterprise R&D groups to transform abstract equations and algorithm proposals into verified simulation code and camera-ready figures."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
              {/* Mission & Philosophy Card */}
              <Reveal className="glass flex flex-col justify-between rounded-[2.25rem] p-8 md:p-10 border border-white/90 dark:border-white/10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="size-3.5" />
                    <span>{brand.statusBadge}</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Built for High-Impact Academic Manuscripts
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                    {brand.intro}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Modern peer-review at IEEE Transactions, Elsevier, and Springer requires rigorous proof: reproducible random seeds, comprehensive baseline comparisons, and flawless NetAnim topological validation. We engineer every layer of your simulation pipeline with mathematical fidelity.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap gap-4 items-center justify-between">
                  <CtaLink href="/contact" size="md">
                    Discuss Your Paper / Base Model
                  </CtaLink>
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <Terminal className="size-4 text-primary" />
                    <span>CMake · Linux CLI · PyTorch</span>
                  </div>
                </div>
              </Reveal>

              {/* Research Standards Card */}
              <Reveal delay={0.1} className="glass rounded-[2.25rem] p-8 md:p-9 border border-white/90 dark:border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="eyebrow !text-xs text-primary dark:text-violet-400">
                      Scientific Verification Standards
                    </h3>
                    <Award className="size-4 text-emerald-500" />
                  </div>
                  <ul className="space-y-4">
                    {verificationPillars.map((p) => (
                      <li key={p.title} className="flex gap-3 text-xs sm:text-sm">
                        <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4.5 shrink-0 text-emerald-500" />
                        <div>
                          <strong className="font-bold text-slate-900 dark:text-white block mb-0.5">
                            {p.title}
                          </strong>
                          <span className="text-muted-foreground leading-relaxed">
                            {p.desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-border/50 grid grid-cols-2 gap-3 text-center">
                  {heroStats.slice(0, 2).map((s) => (
                    <div key={s.label} className="rounded-2xl bg-foreground/[0.03] p-3">
                      <p className="text-lg font-extrabold text-primary dark:text-violet-300">{s.value}</p>
                      <p className="text-[11px] font-medium text-muted-foreground">{s.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Specialized Disciplines */}
        <ServicesStrip />

        {/* The 4-Step Research Lifecycle */}
        <HowWeWork />

        {/* Verification Stack & Infrastructure */}
        <SkillsGrid />

        {/* Comparative Advantage */}
        <WhyMe />

        {/* Scholar Testimonials */}
        <Testimonials />

        {/* Final CTA Band */}
        <CtaBand />
      </div>
    </>
  )
}
