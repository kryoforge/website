import { ShieldAlert } from "lucide-react"
import type { Metadata } from "next"
import { CtaBand } from "@/components/cta-band"
import { Faq } from "@/components/faq"
import { Pricing } from "@/components/pricing"
import { ResearchCatalog } from "@/components/research-catalog"
import { SectionHeading } from "@/components/section-heading"
import { brand } from "@/lib/data/profile"
import { caseStudies } from "@/lib/data/projects"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kryoforge.vercel.app"

export const metadata: Metadata = {
  title: "Research Portfolio & Simulation Benchmarks",
  description:
    "Verified academic NS-3 simulation models, NetAnim topologies, and 300 DPI publication plots across IoT, RPL routing, VANET, Zero-Trust defense, Swin-SNN, and quantum VQE circuits.",
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: "Research Portfolio & Simulation Benchmarks | KryoForge",
    description:
      "Explore verified NS-3 simulations, NetAnim topologies, and 300 DPI publication plots engineered for IEEE, Springer, and Elsevier research workflows.",
    url: `${siteUrl}/research`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Portfolio & Simulation Benchmarks | KryoForge",
    description:
      "Explore verified NS-3 simulations, NetAnim topologies, and 300 DPI publication plots engineered for IEEE, Springer, and Elsevier research workflows.",
  },
}

const researchSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/research#webpage`,
      url: `${siteUrl}/research`,
      name: "Research Portfolio & Simulation Benchmarks | KryoForge",
      description: "Verified academic simulation case studies delivered with NetAnim topologies and 300 DPI figures.",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/research#breadcrumb`,
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
          name: "Research",
          item: `${siteUrl}/research`,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/research#case-studies`,
      name: "Featured Research Simulation Case Studies",
      numberOfItems: caseStudies.length,
      itemListElement: caseStudies.map((study, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "CreativeWork",
          name: study.title,
          headline: study.title,
          description: study.summary,
          genre: study.category,
          keywords: study.techTags.join(", "),
          citation: study.benchmark,
        },
      })),
    },
  ],
}

export default function ResearchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchSchema) }}
      />
      <div className="flex flex-col gap-14 md:gap-20 pt-24 sm:pt-28 pb-12 sm:pb-16">
        {/* Research Portfolio Main Section */}
        <section className="px-4" aria-labelledby="research-title">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              as="h1"
              eyebrow="Research Portfolio & Simulation Benchmarks"
              title={
                <>
                  Verified Simulation Proof & <span className="text-gradient">Architectures</span>
                </>
              }
              description="Explore 8 anonymized computational research architectures delivered for IEEE, Springer, and Elsevier publications. Every project features verified Packet Delivery Ratios (PDR), throughput metrics, NetAnim dynamic topologies, and 300 DPI publication plots. Proprietary client thesis code (.cc / .py / .docx) is strictly confidential."
              action={
                <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <ShieldAlert className="size-4 shrink-0" />
                  <span>100% Anonymized & Protected IP · Zero Code Leaks</span>
                </div>
              }
            />

            {/* Interactive Discipline Filters + Case Studies Grid + Env Specs */}
            <ResearchCatalog />
          </div>
        </section>

        {/* Transparent Pricing Models */}
        <Pricing />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Final CTA Band */}
        <CtaBand />
      </div>
    </>
  )
}
