import React from 'react'
import {
  KeyRound,
  Plane,
  ShieldCheck,
  FileCheck2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export const RecoveryProtocol: React.FC = () => {
  const { currentConfig } = useTheme()

  const lanes = [
    {
      number: '01',
      title: 'Acceso Físico y 2FA Notarial',
      tag: 'FASE INICIAL · LOCALIZACIÓN',
      icon: <KeyRound className="w-5 h-5 text-amber-400" />,
      color: 'amber',
      description:
        'Apertura de la caja fuerte o plica notarial con el albacea. Localización del USB físico o la app APK en el móvil familiar y combinación de la contraseña maestra con el segundo factor acordado.',
      steps: [
        'Apertura del sobre lacrado depositado ante notario',
        'Pendrive USB SanDisk 3.2 o archivo LegadoDigital.apk',
        'Clave de paso en primera persona',
      ],
    },
    {
      number: '02',
      title: 'Desbloqueo de Bóveda Offline',
      tag: 'FASE TÉCNICA · AIR-GAPPED',
      icon: <Plane className="w-5 h-5 text-emerald-400" />,
      color: 'emerald',
      description:
        'Apertura de inicio.html en un equipo desconectado (Modo Avión). Al pulsar "Soy Familiar", el sistema activa la interfaz de Solo Lectura, suprimiendo cualquier opción de borrado accidental.',
      steps: [
        'Ejecución en navegador sin acceso a internet',
        'Activación inmediata del Modo Familiar blindado',
        'Derivación de clave Argon2id en memoria RAM',
      ],
    },
    {
      number: '03',
      title: 'Auditoría Hash y Contingencia',
      tag: 'FASE DE INTEGRIDAD · SHA-256',
      icon: <ShieldCheck className="w-5 h-5 text-sky-400" />,
      color: 'cobalt',
      description:
        'Verificación en 1 clic de la integridad SHA-256 de todos los ficheros y pólizas. En caso de daño en la memoria física, restauración asistida mediante el backup cifrado de Google Drive o Homelab.',
      steps: [
        'Comprobación automática de firmas criptográficas',
        'Detección y prevención activa de bit-rot',
        'Restauración de contingencia sin exponer claves',
      ],
    },
    {
      number: '04',
      title: 'Ejecución Patrimonial Ordenada',
      tag: 'FASE DE RECUPERACIÓN · FAMILIA',
      icon: <FileCheck2 className="w-5 h-5 text-emerald-400" />,
      color: 'emerald',
      description:
        'Generación e impresión del Documento Maestro PDF Notarial A4. Tu familia dispone de la lista exacta de entidades bancarias, números de póliza, teléfonos de gestores y pasos legales sin conjeturas.',
      steps: [
        'Impresión del dossier A4 de alta resolución',
        'Reclamación de saldos e indemnizaciones de vida',
        'Continuidad y tranquilidad patrimonial plena',
      ],
    },
  ]

  return (
    <section id="protocolo-familiar" className="py-24 bg-[#090D16] border-t border-white/8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MAPA DE EMERGENCIA Y CONTINGENCIA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F8FAFC] font-normal tracking-tight mb-4">
            Mapa Visual de Emergencia: Qué hará tu familia paso a paso.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Un protocolo secuencial diseñado para que cualquier familiar, sin conocimientos
            informáticos, ejecute tus voluntades sin bloqueos ni intermediarios.
          </p>
        </div>

        {/* DESKTOP VIEW: 4 Horizontal Columns (lg:grid-cols-4) */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          {/* Connector Beam across cards */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/30 via-emerald-500/40 to-sky-500/30 -translate-y-8 z-0 pointer-events-none" />

          {lanes.map((lane) => (
            <div
              key={lane.number}
              className="relative z-10 rounded-2xl border border-white/10 bg-[#0F1624] p-6 flex flex-col justify-between shadow-xl hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center shadow-inner">
                    {lane.icon}
                  </div>
                  <span className="font-serif text-2xl font-bold text-slate-600">
                    {lane.number}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-emerald-400 font-semibold tracking-wider block mb-2">
                  {lane.tag}
                </span>

                <h3 className="font-serif text-lg text-white font-semibold mb-3">
                  {lane.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {lane.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/8 space-y-2">
                {lane.steps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-[11px] text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW: Continuous Connected Vertical Timeline with Glowing Beam */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-8">
          {/* Continuous Glowing Beam Line */}
          <div
            className="absolute left-2.5 sm:left-3.5 top-3 bottom-3 w-0.5 shadow-sm"
            style={{
              background: `linear-gradient(to bottom, ${currentConfig.hex}, #38BDF8, #F59E0B)`,
              boxShadow: `0 0 12px ${currentConfig.glow}`,
            }}
          />

          {lanes.map((lane, index) => (
            <div key={lane.number} className="relative group">
              {/* Timeline Glowing Node */}
              <div
                className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full bg-[#090D16] border-2 flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-lg"
                style={{ borderColor: currentConfig.hex }}
              >
                {index + 1}
              </div>

              {/* Card Container */}
              <div className="rounded-2xl border border-white/10 bg-[#0F1624] p-5 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-black/40 border border-white/8 flex items-center justify-center">
                    {lane.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold" style={{ color: currentConfig.hex }}>
                    {lane.tag}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-semibold text-white mb-2">
                  {lane.number}. {lane.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {lane.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-white/8">
                  {lane.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecoveryProtocol
