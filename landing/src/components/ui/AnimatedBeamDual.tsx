import React from 'react'
import {
  Usb,
  Smartphone,
  Cpu,
  ShieldCheck,
  FileText,
  Lock,
} from 'lucide-react'

export const AnimatedBeamDual: React.FC = () => {
  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#0A0E18] p-5 sm:p-7 overflow-hidden">
      {/* Background radial highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.08),transparent_65%)]" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/8 mb-6 text-xs text-slate-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-semibold">FLUJO DUAL AIR-GAPPED</span>
          <span className="text-white/40">·</span>
          <span className="text-emerald-300">window.crypto.subtle</span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
          extractable: false
        </span>
      </div>

      {/* Visual Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center relative z-10">
        {/* Origins: USB + APK */}
        <div className="md:col-span-4 space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
            1. Puntos de Entrada Físicos
          </span>

          <div className="p-3.5 rounded-xl bg-[#0F1624] border border-emerald-500/30 flex items-center gap-3 shadow-md">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Usb className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Sistema 1: USB Físico</p>
              <p className="text-[10px] text-slate-400 font-mono">inicio.html / Doble Clic</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0F1624] border border-sky-500/30 flex items-center gap-3 shadow-md">
            <div className="w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Sistema 2: APK Android</p>
              <p className="text-[10px] text-slate-400 font-mono">LegadoDigital.apk (6.03 MB)</p>
            </div>
          </div>
        </div>

        {/* Central Engine: RAM-Only Web Crypto */}
        <div className="md:col-span-4 flex flex-col items-center justify-center p-4">
          <div className="w-full p-4 rounded-2xl bg-gradient-to-b from-[#141F30] to-[#0D1522] border-2 border-emerald-500/40 text-center shadow-xl shadow-emerald-950/40 relative">
            <div className="w-11 h-11 rounded-xl bg-black/60 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 mb-2">
              <Cpu className="w-6 h-6" />
            </div>
            <p className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              CryptoKey en RAM
            </p>
            <p className="text-[11px] text-emerald-300 font-mono mt-0.5">Argon2id + PBKDF2</p>
            <div className="mt-2.5 pt-2 border-t border-white/8 text-[10px] text-slate-400 font-sans">
              210.000 iteraciones · Sal 16B · Al cerrar la pestaña desaparece sin rastro forense.
            </div>
          </div>
        </div>

        {/* Targets: Vault + Hash + PDF */}
        <div className="md:col-span-4 space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
            2. Destinos de Custodia
          </span>

          <div className="p-3 rounded-xl bg-[#0F1624] border border-white/8 flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-emerald-400" />
            <div className="min-w-0">
              <p className="text-xs font-medium text-white truncate">Bóveda Cifrada AES-256-GCM</p>
              <p className="text-[10px] text-slate-400">Autenticación por tag de 128 bits</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#0F1624] border border-white/8 flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <div className="min-w-0">
              <p className="text-xs font-medium text-white truncate">Auditoría SHA-256 Anti Bit-Rot</p>
              <p className="text-[10px] text-slate-400">Verificación de salud en 1 clic</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#0F1624] border border-white/8 flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-amber-400" />
            <div className="min-w-0">
              <p className="text-xs font-medium text-white truncate">Documento Maestro PDF A4</p>
              <p className="text-[10px] text-slate-400">Plica notarial e impresión física</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedBeamDual
