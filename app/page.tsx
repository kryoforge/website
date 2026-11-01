import { CtaBand } from "@/components/cta-band"
import { Faq } from "@/components/faq"
import { FeaturedWork } from "@/components/featured-work"
import { Hero } from "@/components/hero"
import { HowWeWork } from "@/components/how-we-work"
import { MetricsBand } from "@/components/metrics-band"
import { Pricing } from "@/components/pricing"
import { ServicesStrip } from "@/components/services-strip"
import { SkillsGrid } from "@/components/skills-grid"
import { Testimonials } from "@/components/testimonials"
import { WhyMe } from "@/components/why-me"
import { faqs } from "@/lib/data/faq"
import { brand } from "@/lib/data/profile"
import { capabilities } from "@/lib/data/services"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kryoforge.vercel.app"

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ResearchOrganization"],
      "@id": `${siteUrl}/#organization`,
      name: brand.fullName,
      alternateName: brand.name,
      url: siteUrl,
      description: brand.intro,
      email: brand.email,
      areaServed: ["Global"],
      availableLanguage: ["English"],
      knowsAbout: [
        "Network Simulation (NS-3, ns-3.46.1)",
        "NetAnim 3.109 Topology Visualization",
        "RPL & 6LoWPAN Routing Protocols",
        "Vehicular Ad-Hoc Networks (VANET, IEEE 802.11p)",
        "Cyber-Security Threat & Attack Modeling (Sinkhole, DDoS)",
        "Deep Learning & Spiking Neural Networks (SNN)",
        "Variational Quantum Eigensolver (VQE)",
        "300 DPI Publication Visualizations",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Research Simulation & Engineering Services",
        itemListElement: capabilities.map((c) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: c.title,
            description: c.description,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: brand.fullName,
      description: brand.tagline,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <div className="flex flex-col gap-14 md:gap-20 pt-8 md:pt-10">
        <ServicesStrip />
        <FeaturedWork />
        <MetricsBand />
        <SkillsGrid />
        <WhyMe />
        <Testimonials />
        <Pricing />
        <HowWeWork />
        <Faq />
        <CtaBand />
      </div>
    </>
  )
}
