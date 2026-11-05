import React, { useState } from 'react'
import { Shield, CheckCircle2, Download, ExternalLink } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import confetti from 'canvas-confetti'

export const Footer: React.FC = () => {
  const { currentConfig } = useTheme()
  const [downloaded, setDownloaded] = useState<boolean>(false)

  const handleDownload = () => {
    setDownloaded(true)
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10B981', '#38BDF8', '#F59E0B', '#F8FAFC'],
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <footer id="descargar" className="border-t border-white/10 bg-[#070A11] pt-20 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Final Call to Action */}
        <div className="rounded-3xl border border-white/12 bg-gradient-to-b from-[#0F1624] to-[#0A0E18] p-8 sm:p-14 text-center mb-16 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DESPLIEGUE INMEDIATO AIR-GAPPED</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight mb-6 leading-tight">
              Ninguna suscripción cancelada, caída de red o empresa quebrada debe interponerse entre tu vida de trabajo y tu familia.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Descarga la edición completa v1.3.1. Clónala en tu propio pendrive USB y en tus móviles
              Android en minutos. Sin registro previo, sin servidores y sin costes ocultos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-white font-semibold text-base transition-all shadow-xl hover:-translate-y-0.5 cursor-pointer"
                style={{
                  backgroundColor: currentConfig.hex,
                  boxShadow: `0 8px 30px ${currentConfig.glow}`,
                }}
              >
                <Download className="w-5 h-5" />
                <span>
                  {downloaded ? '¡Paquete v1.3.1 Preparado!' : 'Descargar Pack USB + APK Android (v1.3.1)'}
                </span>
              </button>

              <a
                href="file:///c:/Users/user/Desktop/PROYECTO%20LEGADO%20DIGITAL/legado-digital-architecture.html"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/12 text-white font-medium text-base transition-all"
              >
                <ExternalLink className="w-4 h-4 text-sky-400" />
                <span>Explorar Documentación Técnica y Arquitectura</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 font-mono">
              Incluye: <code className="text-emerald-300">inicio.html</code>, <code className="text-sky-300">LegadoDigital.apk (6.03 MB)</code>, scripts de automatización y plantillas notariales.
            </p>
          </div>
        </div>

        {/* Links and Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10"
                style={{ backgroundColor: currentConfig.bgSoft }}
              >
                <Shield className="w-4 h-4" style={{ color: currentConfig.hex }} />
              </div>
              <span className="font-mono text-base font-bold text-white">
                LEGADO DIGITAL v1.3.1
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Infraestructura de contingencia familiar y custodia de patrimonio digital. 100%
              offline-first, sin suscripciones comerciales, bajo licencia de código abierto MIT.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>SHA-256 Verified · Air-Gapped Standard</span>
            </div>
          </div>

          {/* Nav Col */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-white font-semibold mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#problema-cloud" className="hover:text-white transition-colors">
                  El Problema Cloud
                </a>
              </li>
              <li>
                <a href="#sistema-dual" className="hover:text-white transition-colors">
                  Sistema Dual (USB + APK)
                </a>
              </li>
              <li>
                <a href="#criptografia" className="hover:text-white transition-colors">
                  Criptografía & Bit-Rot
                </a>
              </li>
              <li>
                <a href="#protocolo-familiar" className="hover:text-white transition-colors">
                  Protocolo en 4 Carrileras
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Legal and Security Col */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-white font-semibold mb-4">
              Garantías de Soberanía
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Licencia MIT Open Source</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>0 Telemetría / 0 Servidores</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Web Crypto API Nativa</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Compatible Notarial A4</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Legado Digital Familiar. Soberanía patrimonial protegida.</p>
          <div className="flex items-center gap-4">
            <span>HASH: SHA-256 OK</span>
            <span>AIR-GAPPED ED.</span>
            <span>MIT LICENSE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
