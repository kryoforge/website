import type { Metadata, Viewport } from "next"
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google"
import { Providers } from "@/components/providers"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { StudioBackground } from "@/components/studio-background"
import { brand } from "@/lib/data/profile"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kryoforge.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: `${brand.fullName} | ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "KryoForge designs and executes custom NS-3 network architectures, deep learning pipelines, and quantum algorithms for IEEE, Springer, and Elsevier research workflows—delivering verified metrics, NetAnim topologies, and 300 DPI publication-ready plots.",
  keywords: [
    "NS-3 simulation",
    "ns-3.46.1",
    "NetAnim 3.109",
    "RPL routing protocol",
    "IoT sinkhole detection",
    "VANET simulation",
    "WAVE 802.11p",
    "Multi-Agent DRL",
    "Swin-Transformer SNN",
    "Variational Quantum Eigensolver",
    "VQE benchmarking",
    "FlowMonitor CSV",
    "IEEE publication plots",
    "300 DPI charts",
    "research engineering",
    "KryoForge",
  ],
  authors: [{ name: brand.fullName, url: siteUrl }],
  creator: brand.fullName,
  publisher: brand.fullName,
  formatDetection: {
    email: true,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/images/kryo-k-logo.png", type: "image/png" },
      { url: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/images/kryo-k-logo.png",
    apple: "/images/icon-192.png",
  },
  openGraph: {
    title: `${brand.fullName} | ${brand.tagline}`,
    description:
      "Turning complex research models into publishable simulation results. Custom NS-3 network engineering, quantum algorithms, and 300 DPI publication-ready figures.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: brand.fullName,
    images: [
      {
        url: "/images/kryo-k-logo.png",
        width: 800,
        height: 800,
        alt: `${brand.fullName} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.fullName} | ${brand.tagline}`,
    description:
      "Turning complex research models into publishable simulation results. Custom NS-3 network engineering, quantum algorithms, and 300 DPI publication-ready figures.",
    images: ["/images/kryo-k-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "research",
  classification: "Computational Research & Simulation Studio",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2ff" },
    { media: "(prefers-color-scheme: dark)", color: "#09081e" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning>
        <Providers>
          <StudioBackground />
          <SiteHeader />
          <main id="main" className="relative z-10">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  )
}
