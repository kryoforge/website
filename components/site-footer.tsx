"use client"

import { Mail, Network, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Brand } from "@/components/site-header"
import { brand, navLinks } from "@/lib/data/profile"

function GithubFooterIcon({ className }: { className?: string }) {
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

export function SiteFooter() {
  const pathname = usePathname()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      const [targetPath, hash] = href.split("#")
      const currentPathNormalized = pathname === "" ? "/" : pathname
      const targetNormalized = targetPath === "" ? "/" : targetPath

      if (currentPathNormalized === targetNormalized) {
        e.preventDefault()
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
          window.history.pushState(null, "", href)
        }
      }
    }
  }

  return (
    <footer className="relative z-10 px-4 pb-8 pt-16 md:pt-20">
      <div className="glass relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] p-8 md:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-16 size-72 rounded-full bg-violet-600/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-24 size-64 rounded-full bg-sky-500/15 blur-3xl" />

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand & Tagline */}
          <div className="space-y-4">
            <Brand />
            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground">
              {brand.tagline}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="size-3.5" />
              <span>100% Confidential · Zero Code Leaks</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation">
            <h3 className="eyebrow mb-4 text-slate-900 dark:text-white">Explore Studio</h3>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className="inline-block text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-1"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & Support */}
          <div>
            <h3 className="eyebrow mb-4 text-slate-900 dark:text-white">Direct Research Contact</h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-3">
                <Mail aria-hidden="true" className="size-4 text-primary shrink-0" />
                <a
                  href={`mailto:${brand.email}`}
                  className="break-all hover:underline hover:text-primary transition-colors font-medium text-slate-800 dark:text-slate-200"
                >
                  {brand.email}
                </a>
              </li>
              {brand.github && (
                <li className="flex items-center gap-3">
                  <GithubFooterIcon className="size-4 text-primary shrink-0" />
                  <a
                    href={brand.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all hover:underline hover:text-primary transition-colors font-medium text-slate-800 dark:text-slate-200"
                  >
                    github.com/kryoforge
                  </a>
                </li>
              )}
              <li className="flex items-center gap-3">
                <Network aria-hidden="true" className="size-4 text-primary shrink-0" />
                <span className="text-muted-foreground">
                  ns-3.46.1 & Python Analytics Environment
                </span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              Available for custom C++ protocol implementations, base-paper benchmarking, and fast-turnaround reviewer revisions for IEEE, Springer & Elsevier manuscripts.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} KryoForge Research Studio. All rights reserved.</p>
          <p>Verified NS-3 Topologies, NetAnim Traces & 300 DPI Publication Plots.</p>
        </div>
      </div>
    </footer>
  )
}
