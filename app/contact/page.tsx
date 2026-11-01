import { Clock, Globe2, Mail, ShieldCheck } from "lucide-react"
import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { brand } from "@/lib/data/profile"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kryoforge.vercel.app"

export const metadata: Metadata = {
  title: "Contact Research Studio | Discuss Your Paper or Model",
  description:
    "Send us your reference paper, draft algorithm formulation, or reviewer comments. KryoForge delivers verified NS-3 simulations, NetAnim traces, and 300 DPI publication plots.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact KryoForge Research Studio | Simulation & Algorithm Engineering",
    description:
      "Discuss your research paper, NS-3 simulation models, or target journal benchmarks with KryoForge. 24-hour feasibility review.",
    url: `${siteUrl}/contact`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact KryoForge Research Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact KryoForge Research Studio",
    description: "Discuss your research paper, NS-3 simulation models, or target journal benchmarks.",
    images: ["/og-image.png"],
  },
}

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${siteUrl}/contact#webpage`,
      url: `${siteUrl}/contact`,
      name: "Contact KryoForge Research Studio",
      description:
        "Discuss your research paper, NS-3 simulation models, or target journal benchmarks with KryoForge.",
      mainEntity: {
        "@type": "Organization",
        name: brand.fullName,
        email: brand.email,
        url: siteUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/contact#breadcrumb`,
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
          name: "Contact",
          item: `${siteUrl}/contact`,
        },
      ],
    },
  ],
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <section className="px-4 pt-14 pb-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            as="h1"
            eyebrow="Direct Research Contact"
            title={
              <>
                Discuss Your <span className="text-gradient">Paper / Base Model</span>
              </>
            }
            description="Share your base paper, problem statement, or target metrics. We evaluate mathematical feasibility and simulator requirements within 24 hours."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1} className="space-y-4">
              <div className="glass rounded-3xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed] text-white shadow-md">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <span className="eyebrow block !text-[0.62rem] !text-muted-foreground">Direct Simulation Handle</span>
                    <a
                      href={`mailto:${brand.email}`}
                      className="font-bold text-sm sm:text-base text-foreground hover:underline break-all"
                    >
                      {brand.email}
                    </a>
                  </div>
                </div>

                {brand.github && (
                  <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-md dark:bg-white/10">
                      <GithubIcon className="size-5" />
                    </div>
                    <div>
                      <span className="eyebrow block !text-[0.62rem] !text-muted-foreground">GitHub Organization</span>
                      <a
                        href={brand.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-sm sm:text-base text-foreground hover:underline break-all"
                      >
                        {brand.github.replace("https://", "")}
                      </a>
                    </div>
                  </div>
                )}

                <div className="border-t border-border/60 pt-4 space-y-3 text-xs sm:text-sm text-muted-foreground">
                  <p className="flex items-center gap-2.5">
                    <ShieldCheck className="size-4 text-emerald-500 shrink-0" />
                    <span>100% Confidentiality & Non-Disclosure</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Clock className="size-4 text-primary shrink-0" />
                    <span>24-Hour Scope & Feasibility Review</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Globe2 className="size-4 text-primary shrink-0" />
                    <span>Worldwide Support for IEEE, Elsevier & Springer Submissions</span>
                  </p>
                </div>
              </div>

              <div className="glass rounded-3xl p-6 text-xs sm:text-sm text-muted-foreground space-y-2">
                <h2 className="font-bold text-slate-900 dark:text-white">
                  What happens after you reach out?
                </h2>
                <ol className="list-decimal list-inside space-y-1.5 leading-relaxed">
                  <li>We review your base paper or target metric formulas.</li>
                  <li>You receive a fixed-price scope with topology specs and delivery date.</li>
                  <li>Simulation begins with verified interim terminal logs and output previews.</li>
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
