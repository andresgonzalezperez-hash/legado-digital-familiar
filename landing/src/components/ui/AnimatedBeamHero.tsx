import React, { useState, useRef, useEffect } from 'react'
import {
  Landmark,
  TrendingUp,
  KeyRound,
  FileCheck2,
  ShieldCheck,
  Heart,
  Users,
  Scale,
  Lock,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

interface AssetNode {
  id: string
  title: string
  sub: string
  icon: React.ReactNode
  color: string
}

interface BeneficiaryNode {
  id: string
  title: string
  sub: string
  icon: React.ReactNode
  color: string
}

export const AnimatedBeamHero: React.FC = () => {
  const [activeAsset, setActiveAsset] = useState<string | null>(null)
  const [activeBeneficiary, setActiveBeneficiary] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const assets: AssetNode[] = [
    {
      id: 'bank',
      title: 'Cuentas Bancarias',
      sub: 'IBANs y saldos familiares',
      icon: <Landmark className="w-5 h-5 text-emerald-400" />,
      color: '#10B981',
    },
    {
      id: 'invest',
      title: 'Inversiones & Fondos',
      sub: 'Brokers, carteras y planes',
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      color: '#10B981',
    },
    {
      id: 'passwords',
      title: 'Accesos & Claves 2FA',
      sub: 'Cuentas maestras y buzones',
      icon: <KeyRound className="w-5 h-5 text-amber-300" />,
      color: '#D4AF37',
    },
    {
      id: 'insurance',
      title: 'Pólizas & Inmuebles',
      sub: 'Seguros de vida y escrituras',
      icon: <FileCheck2 className="w-5 h-5 text-emerald-400" />,
      color: '#10B981',
    },
  ]

  const beneficiaries: BeneficiaryNode[] = [
    {
      id: 'partner',
      title: 'Cónyuge / Pareja',
      sub: 'Entrega prioritaria asistida',
      icon: <Heart className="w-5 h-5 text-rose-300" />,
      color: '#F43F5E',
    },
    {
      id: 'kids',
      title: 'Hijos / Familia',
      sub: 'Instrucciones paso a paso',
      icon: <Users className="w-5 h-5 text-amber-300" />,
      color: '#D4AF37',
    },
    {
      id: 'executor',
      title: 'Albacea / Notario',
      sub: 'Certificación y verificación',
      icon: <Scale className="w-5 h-5 text-emerald-400" />,
      color: '#10B981',
    },
  ]

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-6xl mx-auto rounded-3xl border border-white/10 bg-[#0E1311]/90 p-4 md:p-8 backdrop-blur-xl shadow-2xl shadow-emerald-950/20 overflow-hidden"
    >
      {/* Subtle radial background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.06),transparent_70%)]" />

      {/* Header bar inside diagram */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/8 mb-6 md:mb-8 text-xs text-[#A7B3AF]">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium text-[#F3F4F6] tracking-wide uppercase">
            Protocolo de Flujo Activo
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="hidden sm:inline text-white/60">Cifrado Militar AES-256-GCM</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
            Cero Claves en Servidor
          </span>
          <span className="px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verificación Silenciosa
          </span>
        </div>
      </div>

      {/* Main Grid: Desktop 3-columns with SVG Beam overlay */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* SVG BEAMS (Visible on desktop lg+) */}
        {mounted && (
          <svg
            className="pointer-events-none absolute inset-0 hidden lg:block w-full h-full z-0"
            viewBox="0 0 1000 480"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#34D399" stopOpacity="1" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
              </linearGradient>

              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Left to Center Beams */}
            {/* Asset 1 (y: 60) -> Center (x: 500, y: 240) */}
            <path
              d="M 280 60 C 390 60, 420 240, 470 240"
              fill="none"
              stroke={activeAsset === 'bank' ? '#10B981' : 'rgba(255, 255, 255, 0.08)'}
              strokeWidth={activeAsset === 'bank' ? '2.5' : '1.5'}
              strokeDasharray="6 6"
              className={activeAsset === 'bank' ? 'animate-pulse' : ''}
            />
            {/* Animated fluid pulse */}
            <path
              d="M 280 60 C 390 60, 420 240, 470 240"
              fill="none"
              stroke="url(#beamGradient)"
              strokeWidth="2.5"
              strokeDasharray="80 320"
              strokeLinecap="round"
              filter="url(#glow)"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="400;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </path>

            {/* Asset 2 (y: 160) -> Center */}
            <path
              d="M 280 160 C 370 160, 420 240, 470 240"
              fill="none"
              stroke={activeAsset === 'invest' ? '#10B981' : 'rgba(255, 255, 255, 0.08)'}
              strokeWidth={activeAsset === 'invest' ? '2.5' : '1.5'}
              strokeDasharray="6 6"
            />
            <path
              d="M 280 160 C 370 160, 420 240, 470 240"
              fill="none"
              stroke="url(#beamGradient)"
              strokeWidth="2.5"
              strokeDasharray="70 280"
              strokeLinecap="round"
              filter="url(#glow)"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="350;0"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </path>

            {/* Asset 3 (y: 280) -> Center */}
            <path
              d="M 280 280 C 370 280, 420 240, 470 240"
              fill="none"
              stroke={activeAsset === 'passwords' ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}
              strokeWidth={activeAsset === 'passwords' ? '2.5' : '1.5'}
              strokeDasharray="6 6"
            />
            <path
              d="M 280 280 C 370 280, 420 240, 470 240"
              fill="none"
              stroke="url(#beamGradient)"
              strokeWidth="2.5"
              strokeDasharray="70 280"
              strokeLinecap="round"
              filter="url(#glow)"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="350;0"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </path>

            {/* Asset 4 (y: 400) -> Center */}
            <path
              d="M 280 400 C 390 400, 420 240, 470 240"
              fill="none"
              stroke={activeAsset === 'insurance' ? '#10B981' : 'rgba(255, 255, 255, 0.08)'}
              strokeWidth={activeAsset === 'insurance' ? '2.5' : '1.5'}
              strokeDasharray="6 6"
            />
            <path
              d="M 280 400 C 390 400, 420 240, 470 240"
              fill="none"
              stroke="url(#beamGradient)"
              strokeWidth="2.5"
              strokeDasharray="80 320"
              strokeLinecap="round"
              filter="url(#glow)"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="400;0"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </path>

            {/* Center (x: 530, y: 240) -> Beneficiaries */}
            {/* Center -> Beneficiary 1 (y: 90) */}
            <path
              d="M 530 240 C 580 240, 620 90, 720 90"
              fill="none"
              stroke={activeBeneficiary === 'partner' ? '#F43F5E' : 'rgba(255, 255, 255, 0.08)'}
              strokeWidth={activeBeneficiary === 'partner' ? '2.5' : '1.5'}
              strokeDasharray="6 6"
            />
            <path
              d="M 530 240 C 580 240, 620 90, 720 90"
              fill="none"
              stroke="url(#beamGradient)"
              strokeWidth="2.5"
              strokeDasharray="70 280"
              strokeLinecap="round"
              filter="url(#glow)"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="350;0"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </path>

            {/* Center -> Beneficiary 2 (y: 240) */}
            <path
              d="M 530 240 L 720 240"
              fill="none"
              stroke={activeBeneficiary === 'kids' ? '#D4AF37' : 'rgba(255, 255, 255, 0.08)'}
              strokeWidth={activeBeneficiary === 'kids' ? '2.5' : '1.5'}
              strokeDasharray="6 6"
            />
            <path
              d="M 530 240 L 720 240"
              fill="none"
              stroke="url(#beamGradient)"
              strokeWidth="2.5"
              strokeDasharray="60 200"
              strokeLinecap="round"
              filter="url(#glow)"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="260;0"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </path>

            {/* Center -> Beneficiary 3 (y: 380) */}
            <path
              d="M 530 240 C 580 240, 620 380, 720 380"
              fill="none"
              stroke={activeBeneficiary === 'executor' ? '#10B981' : 'rgba(255, 255, 255, 0.08)'}
              strokeWidth={activeBeneficiary === 'executor' ? '2.5' : '1.5'}
              strokeDasharray="6 6"
            />
            <path
              d="M 530 240 C 580 240, 620 380, 720 380"
              fill="none"
              stroke="url(#beamGradient)"
              strokeWidth="2.5"
              strokeDasharray="70 280"
              strokeLinecap="round"
              filter="url(#glow)"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="350;0"
                dur="2.7s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        )}

        {/* LEFT COLUMN: Assets */}
        <div className="relative z-10 lg:col-span-4 flex flex-col gap-3">
          <div className="flex items-center justify-between mb-1 px-1">
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              1. Activos en Vida
            </span>
            <span className="text-[11px] text-[#A7B3AF]">Catalogación Segura</span>
          </div>

          {assets.map((asset) => (
            <div
              key={asset.id}
              onMouseEnter={() => setActiveAsset(asset.id)}
              onMouseLeave={() => setActiveAsset(null)}
              className={`group flex items-center gap-3.5 p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeAsset === asset.id
                  ? 'border-emerald-500/50 bg-[#16211C] shadow-lg shadow-emerald-950/40 translate-x-1'
                  : 'border-white/8 bg-[#111614]/80 hover:border-white/20 hover:bg-[#141C18]'
              }`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/40 border border-white/10 group-hover:border-emerald-500/40 transition-colors">
                {asset.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#F3F4F6] truncate group-hover:text-emerald-300 transition-colors">
                  {asset.title}
                </p>
                <p className="text-xs text-[#A7B3AF] truncate">{asset.sub}</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors" />
            </div>
          ))}
        </div>

        {/* CENTER COLUMN: Central Vault Node */}
        <div className="relative z-10 lg:col-span-4 flex flex-col items-center justify-center px-2 py-4">
          <div className="relative w-full max-w-[280px] p-6 rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-b from-[#131D18] to-[#0D1411] text-center shadow-2xl shadow-emerald-900/30">
            {/* Glowing ring animation */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-amber-500/10 to-emerald-500/20 blur-md opacity-75 -z-10 animate-pulse" />

            <div className="mx-auto w-14 h-14 rounded-2xl bg-[#0A0D0C] border border-emerald-500/40 flex items-center justify-center mb-3 shadow-inner">
              <Lock className="w-7 h-7 text-emerald-400" />
            </div>

            <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold tracking-wide uppercase mb-1">
              Bóveda Zero-Knowledge
            </span>

            <h3 className="text-base font-semibold text-[#F3F4F6] mt-1 font-serif">
              Núcleo de Custodia
            </h3>
            <p className="text-xs text-[#A7B3AF] mt-1.5 leading-relaxed">
              Reglas de activación, verificación de vida y desencriptado cliente.
            </p>

            <div className="mt-4 pt-3 border-t border-white/8 flex items-center justify-center gap-2 text-[11px] text-amber-300/90 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dead-man switch silencioso</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Beneficiaries */}
        <div className="relative z-10 lg:col-span-4 flex flex-col gap-3">
          <div className="flex items-center justify-between mb-1 px-1">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              2. Beneficiarios
            </span>
            <span className="text-[11px] text-[#A7B3AF]">Cero Fricción Técnica</span>
          </div>

          {beneficiaries.map((b) => (
            <div
              key={b.id}
              onMouseEnter={() => setActiveBeneficiary(b.id)}
              onMouseLeave={() => setActiveBeneficiary(null)}
              className={`group flex items-center gap-3.5 p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeBeneficiary === b.id
                  ? 'border-amber-400/50 bg-[#1F1E16] shadow-lg shadow-amber-950/40 -translate-x-1'
                  : 'border-white/8 bg-[#111614]/80 hover:border-white/20 hover:bg-[#161C19]'
              }`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/40 border border-white/10 group-hover:border-amber-400/40 transition-colors">
                {b.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#F3F4F6] truncate group-hover:text-amber-300 transition-colors">
                  {b.title}
                </p>
                <p className="text-xs text-[#A7B3AF] truncate">{b.sub}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-amber-300 transition-colors" />
            </div>
          ))}
        </div>
      </div>

      {/* Footer hint */}
      <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#A7B3AF]">
        <p className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Haz hover sobre cualquier nodo para inspeccionar el canal de custodia.
        </p>
        <p className="text-white/40">
          Tus seres queridos nunca tendrán que descifrar códigos ni lidiar con tecnicismos.
        </p>
      </div>
    </div>
  )
}

export default AnimatedBeamHero
