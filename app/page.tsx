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
import { caseStudies } from "@/lib/data/projects"
import { capabilities } from "@/lib/data/services"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kryoforge.vercel.app"

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ResearchOrganization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: brand.fullName,
      alternateName: brand.name,
      url: siteUrl,
      logo: `${siteUrl}/images/kryo-k-logo.png`,
      image: `${siteUrl}/og-image.png`,
      description: brand.intro,
      email: brand.email,
      sameAs: brand.github ? [brand.github] : [],
      areaServed: ["Global", "United States", "United Kingdom", "Germany", "India", "Singapore", "Australia", "Canada"],
      availableLanguage: ["English"],
      knowsAbout: [
        "Network Simulation (NS-3, ns-3.46.1)",
        "NetAnim 3.109 Topology Visualization",
        "RPL & 6LoWPAN Routing Protocols (RFC 6550, RFC 4944)",
        "Vehicular Ad-Hoc Networks (VANET, IEEE 802.11p, WAVE)",
        "Cyber-Security Threat & Attack Modeling (Sinkhole, DDoS, MAC Spoofing)",
        "Zero-Trust Multi-Tier Cloud-Edge-End Architectures",
        "Deep Learning & Spiking Neural Networks (SNN, Swin-Transformer)",
        "Multi-Agent Deep Reinforcement Learning (MA-DRL)",
        "Variational Quantum Eigensolver (VQE) Parameterized Circuits",
        "FlowMonitor Performance Traces (PDR, Delay, Throughput, Energy)",
        "300 DPI Publication Visualizations for IEEE, Elsevier & Springer",
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
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#case-studies`,
      name: "Featured Research Simulation Case Studies",
      description: "Verified academic simulations and benchmark architectures delivered with NetAnim topologies and 300 DPI figures.",
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
        <HowWeWork />
        <Pricing />
        <Faq />
        <CtaBand />
      </div>
    </>
  )
}
