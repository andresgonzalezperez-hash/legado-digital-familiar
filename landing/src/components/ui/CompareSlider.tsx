import React, { useState } from 'react'
import {
  ShieldCheck,
  Trash2,
  Edit3,
  Lock,
  Eye,
  Key,
  Landmark,
  FileText,
  AlertTriangle,
  Heart,
  Printer,
  CheckCircle2,
} from 'lucide-react'

export const CompareSlider: React.FC = () => {
  const [mode, setMode] = useState<'owner' | 'family'>('owner')

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0F1624] p-5 sm:p-7 shadow-xl">
      {/* Top Toggle Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/8 mb-6">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold block mb-1">
            Conmutador de Interfaz Canónico
          </span>
          <h4 className="font-serif text-xl sm:text-2xl text-white font-semibold">
            Modo Titular (Gestión) vs. Modo Familiar (Solo Lectura)
          </h4>
        </div>

        {/* Interactive Selector Pill */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#090D16] border border-white/10">
          <button
            onClick={() => setMode('owner')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              mode === 'owner'
                ? 'bg-[#1A263D] text-white shadow-md border border-white/10'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Key className="w-3.5 h-3.5 text-amber-400" />
            <span>Modo Titular</span>
          </button>

          <button
            onClick={() => setMode('family')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              mode === 'family'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/50'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
            <span>Soy Familiar / Beneficiario</span>
          </button>
        </div>
      </div>

      {/* Mode State Banner */}
      {mode === 'owner' ? (
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center justify-between gap-3 mb-6 animate-fade-in">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Modo Titular Activo:</strong> Permisos completos de edición, borrado de
              cuentas, rotación de claves maestras y exportación de backups.
            </span>
          </div>
          <button className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-200 text-[11px] font-mono hover:bg-amber-500/30">
            + Añadir Activo
          </button>
        </div>
      ) : (
        <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/35 text-xs text-emerald-200 flex items-center justify-between gap-3 mb-6 animate-fade-in">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong>Escudo de Protección Familiar Activo:</strong> Todos los botones de borrado y
              edición se han ocultado. Cero riesgo de accidentes por nerviosismo.
            </span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono font-semibold">
            Solo Lectura Blindada
          </span>
        </div>
      )}

      {/* Simulated Asset List displaying the contrast */}
      <div className="space-y-3">
        {/* Row 1: Banco */}
        <div className="p-4 rounded-xl bg-[#141E30] border border-white/8 flex items-center justify-between gap-4 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
              <Landmark className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Banco Santander · Cuenta de Ahorro</p>
              <p className="text-xs text-slate-400 font-mono">IBAN: ES91 **** **** **** 4821</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {mode === 'owner' ? (
              <>
                <button
                  title="Editar"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  title="Eliminar activo"
                  className="p-2 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-400 transition-colors border border-rose-500/20"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Listo para Reclamar
                </span>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs transition-colors">
                  <Printer className="w-3.5 h-3.5 text-slate-400" />
                  <span>Ver Pauta</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Row 2: Seguro de Vida */}
        <div className="p-4 rounded-xl bg-[#141E30] border border-white/8 flex items-center justify-between gap-4 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-500/15 border border-sky-500/25 flex items-center justify-center text-sky-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Mapfre Vida · Póliza Familiar 250k€</p>
              <p className="text-xs text-slate-400">Beneficiarios: Cónyuge al 100%</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {mode === 'owner' ? (
              <>
                <button
                  title="Editar"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  title="Eliminar activo"
                  className="p-2 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-400 transition-colors border border-rose-500/20"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                  Instrucción Notarial
                </span>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs transition-colors">
                  <Printer className="w-3.5 h-3.5 text-slate-400" />
                  <span>Teléfono Agente</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Row 3: Buzón Proton & Claves */}
        <div className="p-4 rounded-xl bg-[#141E30] border border-white/8 flex items-center justify-between gap-4 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-amber-400">
              <Key className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Buzón de Emergencia Proton / iCloud</p>
              <p className="text-xs text-slate-400 font-mono">Cifrado AES-256 en RAM</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {mode === 'owner' ? (
              <>
                <button
                  title="Editar"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  title="Eliminar activo"
                  className="p-2 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-400 transition-colors border border-rose-500/20"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                  <Lock className="w-3.5 h-3.5" />
                  Descifrado en Memoria
                </span>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs transition-colors">
                  <Eye className="w-3.5 h-3.5 text-slate-400" />
                  <span>Revelar</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-400 mt-4 text-center">
        {mode === 'owner'
          ? 'Como titular, tienes el control de altas, modificaciones y borrados.'
          : 'Al pulsar "Soy Familiar", la interfaz se convierte en una guía paso a paso invulnerable a errores humanos.'}
      </p>
    </div>
  )
}

export default CompareSlider
