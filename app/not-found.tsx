import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="glass max-w-md rounded-3xl p-8 space-y-4">
        <p className="eyebrow text-primary">Simulation Trace Not Found</p>
        <h1 className="text-4xl font-extrabold">404</h1>
        <p className="text-sm text-muted-foreground">
          The requested route does not exist or has been archived. Return to the home simulation benchmarks.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2563eb] to-[#7c3aed] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:scale-105"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Simulation Studio</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
