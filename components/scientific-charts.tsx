import { cn } from "@/lib/utils"

export function NetAnimTopologyVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative size-full overflow-hidden rounded-xl bg-slate-950 p-3 font-mono", className)}>
      {/* Topology Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>NetAnim 3.109 / ns-3.46.1</span>
        </span>
        <span className="text-slate-500">t = 120.4s · 50 Nodes</span>
      </div>

      {/* SVG Network Graph */}
      <svg viewBox="0 0 320 180" className="size-full pt-2" aria-label="NetAnim Topology View">
        <defs>
          <radialGradient id="sinkGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="packetLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>

        {/* Mesh Links */}
        <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3">
          <line x1="160" y1="30" x2="100" y2="70" />
          <line x1="160" y1="30" x2="220" y2="70" />
          <line x1="100" y1="70" x2="60" y2="120" />
          <line x1="100" y1="70" x2="140" y2="110" />
          <line x1="220" y1="70" x2="180" y2="120" />
          <line x1="220" y1="70" x2="260" y2="120" />
          <line x1="140" y1="110" x2="160" y2="150" />
          <line x1="180" y1="120" x2="160" y2="150" />
          <line x1="60" y1="120" x2="100" y2="160" />
          <line x1="260" y1="120" x2="220" y2="160" />
        </g>

        {/* Active Transmissions */}
        <g stroke="url(#packetLine)" strokeWidth="2">
          <line x1="100" y1="70" x2="160" y2="30" />
          <line x1="140" y1="110" x2="100" y2="70" />
          <line x1="180" y1="120" x2="220" y2="70" />
        </g>

        {/* Normal Nodes */}
        {[
          [100, 70, "N1"],
          [220, 70, "N2"],
          [60, 120, "N3"],
          [140, 110, "N4"],
          [180, 120, "N5"],
          [260, 120, "N6"],
          [100, 160, "N7"],
          [160, 150, "N8"],
          [220, 160, "N9"],
        ].map(([x, y, label]) => (
          <g key={label as string}>
            <circle cx={x as number} cy={y as number} r="8" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
            <text
              x={x as number}
              y={(y as number) + 3}
              fontSize="7"
              fill="#c7d2fe"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              {label as string}
            </text>
          </g>
        ))}

        {/* Root DODAG Coordinator Node */}
        <circle cx="160" cy="30" r="11" fill="#0f766e" stroke="#2dd4bf" strokeWidth="2" />
        <text x="160" y="34" fontSize="8" fill="#ffffff" fontWeight="bold" textAnchor="middle">
          Root
        </text>

        {/* Sinkhole Detection / Triggered Alert Node */}
        <circle cx="140" cy="110" r="14" fill="url(#sinkGlow)" />
        <circle cx="140" cy="110" r="8" fill="#991b1b" stroke="#f87171" strokeWidth="2" />
        <text x="140" y="113" fontSize="7" fill="#fef2f2" fontWeight="bold" textAnchor="middle">
          SINK
        </text>

        {/* Alert Pill */}
        <rect x="180" y="14" width="130" height="22" rx="4" fill="rgba(15,23,42,0.9)" stroke="rgba(239,68,68,0.5)" />
        <text x="186" y="29" fontSize="8" fill="#f87171" fontFamily="sans-serif">
          [ICMPv6] Isolated Node 4
        </text>
      </svg>
    </div>
  )
}

export function PublicationSerifChart({
  metricTitle = "Packet Delivery Ratio (%) vs. Node Count",
  yAxisLabel = "PDR (%)",
  xAxisLabel = "Number of Active Nodes",
  className,
}: {
  metricTitle?: string
  yAxisLabel?: string
  xAxisLabel?: string
  className?: string
}) {
  return (
    <div className={cn("relative size-full overflow-hidden rounded-xl bg-slate-900/95 p-3 text-slate-100", className)}>
      {/* 300 DPI Publication Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5 font-serif text-[11px]">
        <span className="font-semibold text-slate-200">{metricTitle}</span>
        <span className="font-mono text-[9px] uppercase tracking-wider text-primary">300 DPI · IEEE Serif</span>
      </div>

      <svg viewBox="0 0 320 170" className="size-full pt-1" aria-label="300 DPI Publication Benchmark Chart">
        {/* Chart Grid Lines */}
        <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
          <line x1="45" y1="25" x2="300" y2="25" />
          <line x1="45" y1="55" x2="300" y2="55" />
          <line x1="45" y1="85" x2="300" y2="85" />
          <line x1="45" y1="115" x2="300" y2="115" />
          <line x1="45" y1="145" x2="300" y2="145" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          <line x1="45" y1="25" x2="45" y2="145" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        </g>

        {/* Y-Axis Tick Labels (Computer Modern / Times Serif) */}
        <g fill="rgba(255,255,255,0.6)" fontSize="8.5" fontFamily="Georgia, serif" textAnchor="end">
          <text x="40" y="28">100</text>
          <text x="40" y="58">90</text>
          <text x="40" y="88">80</text>
          <text x="40" y="118">70</text>
          <text x="40" y="148">60</text>
        </g>

        {/* X-Axis Tick Labels */}
        <g fill="rgba(255,255,255,0.6)" fontSize="8.5" fontFamily="Georgia, serif" textAnchor="middle">
          <text x="50" y="158">10</text>
          <text x="110" y="158">25</text>
          <text x="170" y="158">50</text>
          <text x="230" y="158">75</text>
          <text x="290" y="158">100</text>
        </g>

        {/* Axis Titles */}
        <text
          x="172"
          y="169"
          fontSize="8"
          fill="rgba(255,255,255,0.8)"
          fontFamily="Georgia, serif"
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>

        {/* Proposed Protocol Curve (High Performance) */}
        <path
          d="M 50 32 L 110 36 L 170 42 L 230 48 L 290 56"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2.5"
        />
        {[[50, 32], [110, 36], [170, 42], [230, 48], [290, 56]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
        ))}

        {/* Baseline 1 (Standard RPL / Baseline) */}
        <path
          d="M 50 48 L 110 68 L 170 94 L 230 118 L 290 138"
          fill="none"
          stroke="#f43f5e"
          strokeWidth="1.8"
          strokeDasharray="4 2"
        />
        {[[50, 48], [110, 68], [170, 94], [230, 118], [290, 138]].map(([cx, cy], i) => (
          <rect key={i} x={cx - 2.5} y={cy - 2.5} width="5" height="5" fill="#f43f5e" />
        ))}

        {/* Baseline 2 (Variant Protocol) */}
        <path
          d="M 50 42 L 110 52 L 170 70 L 230 88 L 290 108"
          fill="none"
          stroke="#a855f7"
          strokeWidth="1.8"
        />
        {[[50, 42], [110, 52], [170, 70], [230, 88], [290, 108]].map(([cx, cy], i) => (
          <polygon
            key={i}
            points={`${cx},${cy - 3} ${cx + 3},${cy + 3} ${cx - 3},${cy + 3}`}
            fill="#a855f7"
          />
        ))}

        {/* Legend Box */}
        <rect x="180" y="10" width="118" height="34" rx="4" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.15)" />
        <g fontSize="7.5" fontFamily="Georgia, serif" fill="#ffffff">
          <line x1="186" y1="18" x2="200" y2="18" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="193" cy="18" r="2" fill="#38bdf8" />
          <text x="206" y="21">Proposed Architecture</text>

          <line x1="186" y1="28" x2="200" y2="28" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 1" />
          <rect x="191" y="26" width="4" height="4" fill="#f43f5e" />
          <text x="206" y="31">Standard Baseline</text>
        </g>
      </svg>
    </div>
  )
}

export function QuantumVqeCircuitVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative size-full overflow-hidden rounded-xl bg-slate-950 p-3 font-mono", className)}>
      <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px] text-slate-400">
        <span>VQE Ansatz · Qiskit / PennyLane</span>
        <span className="text-cyan-400">⟨H⟩ = -1.1373 Hartree</span>
      </div>
      <svg viewBox="0 0 320 170" className="size-full pt-2">
        {/* Quantum Wire Q0 */}
        <line x1="40" y1="40" x2="290" y2="40" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        <text x="25" y="44" fontSize="9" fill="#94a3b8">|q₀⟩</text>

        {/* Quantum Wire Q1 */}
        <line x1="40" y1="90" x2="290" y2="90" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        <text x="25" y="94" fontSize="9" fill="#94a3b8">|q₁⟩</text>

        {/* Quantum Wire Q2 */}
        <line x1="40" y1="140" x2="290" y2="140" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        <text x="25" y="144" fontSize="9" fill="#94a3b8">|q₂⟩</text>

        {/* Gates on Q0 */}
        <rect x="60" y="28" width="28" height="24" rx="4" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
        <text x="74" y="44" fontSize="9" fill="#c7d2fe" textAnchor="middle">Ry(θ₁)</text>

        {/* CNOT between Q0 and Q1 */}
        <circle cx="115" cy="40" r="4" fill="#38bdf8" />
        <line x1="115" y1="40" x2="115" y2="90" stroke="#38bdf8" strokeWidth="1.8" />
        <circle cx="115" cy="90" r="7" fill="none" stroke="#38bdf8" strokeWidth="1.8" />
        <line x1="108" y1="90" x2="122" y2="90" stroke="#38bdf8" strokeWidth="1.5" />
        <line x1="115" y1="83" x2="115" y2="97" stroke="#38bdf8" strokeWidth="1.5" />

        {/* Gates on Q1 */}
        <rect x="145" y="78" width="28" height="24" rx="4" fill="#311042" stroke="#d946ef" strokeWidth="1.5" />
        <text x="159" y="94" fontSize="9" fill="#f5d0fe" textAnchor="middle">Rz(θ₂)</text>

        {/* CNOT between Q1 and Q2 */}
        <circle cx="200" cy="90" r="4" fill="#f43f5e" />
        <line x1="200" y1="90" x2="200" y2="140" stroke="#f43f5e" strokeWidth="1.8" />
        <circle cx="200" cy="140" r="7" fill="none" stroke="#f43f5e" strokeWidth="1.8" />
        <line x1="193" y1="140" x2="207" y2="140" stroke="#f43f5e" strokeWidth="1.5" />
        <line x1="200" y1="133" x2="200" y2="147" stroke="#f43f5e" strokeWidth="1.5" />

        {/* Measurement Box */}
        <rect x="245" y="26" width="30" height="28" rx="4" fill="#0f172a" stroke="#64748b" />
        <path d="M 252 46 A 8 8 0 0 1 268 46 M 260 46 L 267 36" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  )
}
