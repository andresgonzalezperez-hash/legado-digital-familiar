import React, { useState } from 'react'
import { AnimatedBeamDual } from '../ui/AnimatedBeamDual'
import { CompareSlider } from '../ui/CompareSlider'
import { SpotlightCard } from '../ui/SpotlightCard'
import {
  ShieldAlert,
  CloudUpload,
  CheckCircle2,
  Lock,
  RefreshCw,
  Server,
} from 'lucide-react'

export const MilitaryArchitecture: React.FC = () => {
  const [testingHash, setTestingHash] = useState<boolean>(false)
  const [hashResult, setHashResult] = useState<string>('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855')

  const triggerHashCheck = () => {
    setTestingHash(true)
    setTimeout(() => {
      setTestingHash(false)
      setHashResult('a8f94d12bb560914e912bc8871034f71a9420dc981e494ca395991b8742c3011')
    }, 600)
  }

  return (
    <section id="criptografia" className="py-24 bg-[#0A0D16] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>ESTÁNDAR CRIPTOGRÁFICO SUIZO AIR-GAPPED</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F8FAFC] font-normal tracking-tight mb-4">
            Ingeniería criptográfica que protege contra hackers hoy y contra el paso del tiempo mañana.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Inmunidad ante ataques de fuerza bruta en red, degradación de hardware y errores
            humanos en situaciones de crisis.
          </p>
        </div>

        {/* Bento Grid: 4 Canonical Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* BLOQUE 1: Cifrado en RAM-Only (lg:col-span-12 o 7) */}
          <div className="lg:col-span-12 rounded-3xl border border-white/10 bg-[#0F1624] p-6 sm:p-8 shadow-2xl">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Bloque 01 · Arquitectura Volátil
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-semibold mt-1 mb-3">
                Cifrado en Memoria Volátil (RAM-Only)
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Derivación de clave mediante <strong className="text-emerald-300">Argon2id</strong> (64 MB / 3 iteraciones)
                y <strong className="text-emerald-300">PBKDF2</strong> (210.000 iteraciones con sal criptográfica de 16 bytes)
                combinada con cifrado simétrico <strong className="text-emerald-300">AES-256-GCM</strong>. La llave
                desencriptada reside exclusivamente en la memoria RAM con la directiva{' '}
                <code className="text-amber-300 bg-black/40 px-2 py-0.5 rounded font-mono text-xs">
                  extractable: false
                </code>: al cerrar la ventana o extraer el USB, desaparece sin dejar rastro forense.
              </p>
            </div>

            {/* Embedded AnimatedBeamDual */}
            <AnimatedBeamDual />
          </div>

          {/* BLOQUE 2: Auditoría Activa Anti Bit-Rot (SHA-256) (lg:col-span-6) */}
          <SpotlightCard
            className="lg:col-span-6 flex flex-col justify-between"
            spotlightColor="rgba(16, 185, 129, 0.12)"
            borderColor="rgba(16, 185, 129, 0.35)"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-emerald-300 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25">
                  Anti Bit-Rot
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold mb-2">
                Auditoría Activa Anti Bit-Rot (SHA-256)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Las memorias USB y los discos duros sufren degradación silenciosa con los años. El botón{' '}
                <strong className="text-emerald-300">🔒 Firmado (Verificar)</strong> audita en tiempo real la
                firma SHA-256 de cada archivo y contenedor Picocrypt (<code className="text-emerald-300">.pcv</code>),
                garantizando que ni un solo bit se ha corrompido antes de depositarlo en notaría.
              </p>

              {/* Interactive Hash Simulator */}
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/8 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Verificador SHA-256:</span>
                  <button
                    onClick={triggerHashCheck}
                    disabled={testingHash}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 text-[11px] transition-colors cursor-pointer"
                  >
                    <RefreshCw className={`w-3 h-3 ${testingHash ? 'animate-spin' : ''}`} />
                    <span>{testingHash ? 'Auditando...' : 'Re-auditar Integridad'}</span>
                  </button>
                </div>
                <p className="text-[11px] text-emerald-400 break-all bg-black/40 p-2 rounded border border-emerald-500/20">
                  SHA-256: {hashResult}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>0 bloques corruptos · Integridad del almacenamiento 100% íntegra</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/8 text-[11px] text-slate-400 font-mono">
              Inmune a fallos de semiconductores flash a 10 y 20 años vista.
            </div>
          </SpotlightCard>

          {/* BLOQUE 3: Contingencia Cifrada en Drive & Homelab (lg:col-span-6) */}
          <SpotlightCard
            className="lg:col-span-6 flex flex-col justify-between"
            spotlightColor="rgba(56, 189, 248, 0.12)"
            borderColor="rgba(56, 189, 248, 0.35)"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/25 flex items-center justify-center text-sky-400">
                  <CloudUpload className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-sky-300 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/25">
                  Backup de Rescate
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold mb-2">
                Contingencia Cifrada en Google Drive & Homelab
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Aunque el sistema es 100% offline, incluye el script de automatización{' '}
                <code className="text-sky-300 font-mono bg-black/40 px-1.5 py-0.5 rounded">sincronizar_drive.ps1</code>{' '}
                para respaldar únicamente contenedores ya cifrados (
                <code className="text-sky-300 font-mono text-xs">legado_backup_cifrado_*.json</code>) ante incendios o
                pérdida física del USB, más integración directa con tu Homelab o NAS local.
              </p>

              <div className="p-3.5 rounded-xl bg-black/50 border border-white/8 space-y-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 text-sky-300">
                  <Server className="w-4 h-4" />
                  <span>Canal de Sincronización Soberana</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5 text-[11px] space-y-1">
                  <p className="text-slate-400">1. Cifrado local con AES-256 en cliente.</p>
                  <p className="text-slate-400">2. Copia opcional de rescate en la nube personal.</p>
                  <p className="text-emerald-400">3. Si la nube es vulnerada, solo obtienen datos ciegos.</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/8 text-[11px] text-slate-400 font-mono">
              Arquitectura Zero-Trust: La nube nunca posee la clave de descifrado.
            </div>
          </SpotlightCard>

          {/* BLOQUE 4: Conmutador Compare Interactivo (lg:col-span-12) */}
          <div className="lg:col-span-12">
            <CompareSlider />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MilitaryArchitecture
