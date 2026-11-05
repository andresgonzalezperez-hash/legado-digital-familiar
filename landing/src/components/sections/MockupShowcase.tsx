import React, { useState } from 'react'
import { useTheme, type AccentColor, ACCENTS } from '../../context/ThemeContext'
import {
  Monitor,
  Smartphone,
  ShieldCheck,
  Lock,
  FileText,
  KeyRound,
  Landmark,
  CheckCircle2,
  Plane,
  WifiOff,
  Battery,
  Shield,
  FolderLock,
} from 'lucide-react'

export const MockupShowcase: React.FC = () => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop')
  const { accent, setAccent, currentConfig } = useTheme()
  const [shaVerified, setShaVerified] = useState<boolean>(true)

  return (
    <div className="w-full max-w-6xl mx-auto my-8">
      {/* TOOLBAR CONTROLLER */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 sm:p-4 rounded-2xl bg-[#0F1624] border border-white/10 mb-6 shadow-2xl backdrop-blur-xl">
        {/* Left: Device Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#090D16] border border-white/8">
          <button
            onClick={() => setViewMode('desktop')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'desktop'
                ? 'bg-[#162033] text-white shadow-md border border-white/10'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-4 h-4 text-emerald-400" />
            <span>Desktop USB (1280px)</span>
          </button>

          <button
            onClick={() => setViewMode('mobile')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
              viewMode === 'mobile'
                ? 'bg-[#162033] text-white shadow-md border border-white/10'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4 text-sky-400" />
            <span>Android APK (414px)</span>
          </button>
        </div>

        {/* Center: Security Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/8 text-xs text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] text-white/90">
            {viewMode === 'desktop'
              ? 'CryptoKey in RAM (extractable: false)'
              : 'APK v1.3.1 · WebViewAssetLoader (Sin Red)'}
          </span>
        </div>

        {/* Right: Live Accent Switcher */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">Acento:</span>
          <div className="flex items-center gap-2 p-1 rounded-xl bg-[#090D16] border border-white/8">
            {(['emerald', 'cobalt', 'amber'] as AccentColor[]).map((col) => (
              <button
                key={col}
                onClick={() => setAccent(col)}
                title={ACCENTS[col].label}
                className={`w-5 h-5 rounded-full transition-transform ${
                  accent === col ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-black' : 'opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: ACCENTS[col].hex }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* STAGE CONTAINER */}
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0B101B] to-[#070A11] p-3 sm:p-6 shadow-2xl overflow-hidden min-h-[580px] flex items-center justify-center">
        {/* DESKTOP VIEW (1280px Scale Simulation) */}
        {viewMode === 'desktop' && (
          <div className="w-full rounded-2xl border border-white/12 bg-[#0F1624] shadow-2xl overflow-hidden transition-all duration-300">
            {/* Desktop Window Titlebar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#090D16] border-b border-white/8">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* Address bar simulation */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/60 border border-white/8 text-[11px] font-mono text-slate-300 max-w-md w-full mx-4 truncate">
                <Plane className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-emerald-400 font-semibold">file:///E:/inicio.html</span>
                <span className="text-white/40">· [MODO AVIÓN / AIR-GAPPED]</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShaVerified(!shaVerified)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                    shaVerified
                      ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                      : 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                  }`}
                >
                  <Lock className="w-3 h-3" />
                  <span>{shaVerified ? '🔒 Firmado (Verificar SHA-256)' : '⚠️ Hash Auditado'}</span>
                </button>
              </div>
            </div>

            {/* Desktop App Layout */}
            <div className="grid grid-cols-12 min-h-[460px]">
              {/* Sidebar */}
              <div className="col-span-3 bg-[#0A0E18] border-r border-white/8 p-4 flex flex-col justify-between hidden md:flex">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 px-2 py-1">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md"
                      style={{ backgroundColor: currentConfig.hex }}
                    >
                      LD
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Legado Digital</p>
                      <p className="text-[10px] text-slate-400 font-mono">v1.3.1 USB Notarial</p>
                    </div>
                  </div>

                  <nav className="space-y-1 text-xs">
                    <div
                      className="flex items-center justify-between px-3 py-2 rounded-lg font-medium text-white shadow-sm border-l-2"
                      style={{
                        backgroundColor: currentConfig.bgSoft,
                        borderColor: currentConfig.hex,
                      }}
                    >
                      <span className="flex items-center gap-2">
                        <FolderLock className="w-3.5 h-3.5" style={{ color: currentConfig.hex }} />
                        Inventario Patrimonial
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40">12</span>
                    </div>

                    <div className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                      <span className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Bóveda AES-256
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">RAM OK</span>
                    </div>

                    <div className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                      <span className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5" />
                        Documento Maestro A4
                      </span>
                    </div>
                  </nav>
                </div>

                <div className="p-3 rounded-xl bg-[#0F1624] border border-white/8 text-[11px] space-y-1 font-mono">
                  <p className="text-slate-400">Hash SHA-256 Bóveda:</p>
                  <p className="text-emerald-400 truncate">a8f94d12...c49b</p>
                  <p className="text-[10px] text-slate-500">Sin conexiones salientes</p>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="col-span-12 md:col-span-9 p-4 sm:p-6 bg-[#0F1624] flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/8 mb-6">
                    <div>
                      <h3 className="text-lg font-serif font-semibold text-white flex items-center gap-2">
                        <span>Inventario General de Bienes y Accesos</span>
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium"
                          style={{
                            backgroundColor: currentConfig.bgSoft,
                            color: currentConfig.hex,
                            border: `1px solid ${currentConfig.borderSoft}`,
                          }}
                        >
                          Modo Titular Activo
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Memoria volátil: La llave criptográfica no es persistida en disco.
                      </p>
                    </div>

                    <button
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-md flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: currentConfig.hex }}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Imprimir PDF Notarial A4</span>
                    </button>
                  </div>

                  {/* Desktop Bento Grid Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Card 1: Bancos */}
                    <div className="p-4 rounded-xl bg-[#131C2E] border border-white/8 hover:border-white/15 transition-all">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                        <span className="flex items-center gap-1.5">
                          <Landmark className="w-4 h-4 text-emerald-400" />
                          Cuentas Bancarias
                        </span>
                        <span className="font-mono text-[10px] text-emerald-400">3 Activos</span>
                      </div>
                      <p className="text-xl font-bold font-mono text-white mb-1">€ 142.500</p>
                      <p className="text-[11px] text-slate-400">Santander, BBVA, Indexa Capital</p>
                    </div>

                    {/* Card 2: Pólizas */}
                    <div className="p-4 rounded-xl bg-[#131C2E] border border-white/8 hover:border-white/15 transition-all">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                        <span className="flex items-center gap-1.5">
                          <Shield className="w-4 h-4 text-sky-400" />
                          Seguros & Inmuebles
                        </span>
                        <span className="font-mono text-[10px] text-sky-400">2 Pólizas</span>
                      </div>
                      <p className="text-xl font-bold font-mono text-white mb-1">€ 250.000</p>
                      <p className="text-[11px] text-slate-400">Mapfre Vida + Escritura Notarial</p>
                    </div>

                    {/* Card 3: Claves */}
                    <div className="p-4 rounded-xl bg-[#131C2E] border border-white/8 hover:border-white/15 transition-all">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                        <span className="flex items-center gap-1.5">
                          <KeyRound className="w-4 h-4 text-amber-400" />
                          Credenciales & 2FA
                        </span>
                        <span className="font-mono text-[10px] text-amber-400">Cifrado Local</span>
                      </div>
                      <p className="text-xl font-bold font-mono text-white mb-1">18 Claves</p>
                      <p className="text-[11px] text-slate-400">Buzón Proton, Llave FIDO2, Apple ID</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Verification Footer */}
                <div className="mt-6 pt-4 border-t border-white/8 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Firma SHA-256 Válida · Cero Bit-Rot detectado</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500">
                    Memoria USB SanDisk Ultra · Plica Notarial #742
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MOBILE VIEW (Android APK 414px with Dynamic Island) */}
        {viewMode === 'mobile' && (
          <div className="w-full max-w-[360px] sm:max-w-[400px] rounded-[42px] border-[6px] border-slate-700 bg-black p-3.5 shadow-2xl relative overflow-hidden transition-all duration-300">
            {/* Outer phone metal rim */}
            <div className="rounded-[34px] bg-[#0F1624] overflow-hidden border border-white/10 flex flex-col justify-between min-h-[580px]">
              {/* Dynamic Island Header */}
              <div className="bg-[#090D16] pt-3 pb-2 px-5 flex flex-col items-center border-b border-white/8">
                {/* Dynamic Island Capsule */}
                <div className="w-24 h-5 rounded-full bg-black flex items-center justify-between px-2.5 mb-2 shadow-inner">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-mono text-emerald-300">AIR-GAPPED</span>
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                </div>

                {/* Android Status Row */}
                <div className="w-full flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>09:41</span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Plane className="w-3 h-3 text-amber-400" />
                    <WifiOff className="w-3 h-3 text-slate-500" />
                    <Battery className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Mobile App Body */}
              <div className="p-4 space-y-3.5 flex-1 overflow-y-auto">
                {/* APK Header badge */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/8 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      LegadoDigital.apk
                    </p>
                    <p className="text-[10px] text-slate-400 font-mono">
                      6.03 MB · WebViewAssetLoader
                    </p>
                  </div>
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-mono font-bold"
                    style={{
                      backgroundColor: currentConfig.bgSoft,
                      color: currentConfig.hex,
                    }}
                  >
                    SIN RED
                  </span>
                </div>

                {/* Mobile Metric Cards */}
                <div className="p-3.5 rounded-xl bg-[#131C2E] border border-white/8 space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Landmark className="w-3.5 h-3.5 text-emerald-400" />
                      Patrimonio en Bóveda
                    </span>
                    <span className="font-mono text-emerald-400 text-[11px]">Local</span>
                  </div>
                  <p className="text-2xl font-bold font-mono text-white">€ 392.500</p>
                  <p className="text-[10px] text-slate-400">
                    Bancos, Inmuebles y Seguros vinculados
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#131C2E] border border-white/8 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                      Protocolo de Desbloqueo
                    </span>
                    <span className="text-[10px] text-amber-300 font-mono">Solo Lectura</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Tus hijos y cónyuge pueden abrir este archivo en cualquier Android sin conexión,
                    revisar el inventario e imprimir las instrucciones paso a paso.
                  </p>
                </div>
              </div>

              {/* Mobile Bottom Bar */}
              <div className="p-3 bg-[#090D16] border-t border-white/8 flex items-center justify-around text-xs text-slate-400">
                <span
                  className="font-medium flex flex-col items-center gap-0.5 text-[10px]"
                  style={{ color: currentConfig.hex }}
                >
                  <FolderLock className="w-4 h-4" />
                  Bóveda
                </span>
                <span className="flex flex-col items-center gap-0.5 text-[10px] hover:text-white transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                  SHA-256
                </span>
                <span className="flex flex-col items-center gap-0.5 text-[10px] hover:text-white transition-colors">
                  <FileText className="w-4 h-4" />
                  PDF A4
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MockupShowcase
