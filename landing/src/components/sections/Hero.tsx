import React from 'react'
import { DecryptedText } from '../ui/DecryptedText'
import { MockupShowcase } from './MockupShowcase'
import { ArrowRight, FileCheck, Lock, Usb, Smartphone } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export const Hero: React.FC = () => {
  const { currentConfig } = useTheme()

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden obsidian-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Text Area */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F1624] border border-white/10 text-xs font-mono text-emerald-400 mb-6 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>[ 100% OFFLINE-FIRST · SOBERANÍA DE DATOS · CERO NUBE ]</span>
          </div>

          {/* Headline with DecryptedText */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F8FAFC] font-normal tracking-tight leading-[1.18] mb-6">
            Tu patrimonio, cuentas y claves críticas en manos de tu familia cuando tú no estés.{' '}
            <span className="block mt-2 font-medium italic" style={{ color: currentConfig.hex }}>
              <DecryptedText
                text="Sin servidores ajenos. Sin cuotas mensuales."
                maxDuration={600}
                speed={25}
                characters="0123456789#%&$*@!?"
                className="not-italic"
                encryptedClassName="font-mono text-amber-400"
              />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto mb-8">
            Los gestores comerciales en la nube fallan cuando una suscripción caduca o tu familia no
            supera el doble factor de autenticación. Legado Digital Familiar funciona{' '}
            <strong className="text-white font-semibold">100% en Modo Avión</strong> desde un{' '}
            <strong className="text-white font-semibold">Pendrive USB Notarial</strong> o una{' '}
            <strong className="text-white font-semibold">App Nativa Android (.apk)</strong>, con
            cifrado militar en memoria RAM y un protocolo guiado a prueba de errores.
          </p>

          {/* Double CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#descargar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-medium text-base transition-all duration-200 shadow-xl hover:-translate-y-0.5"
              style={{
                backgroundColor: currentConfig.hex,
                boxShadow: `0 8px 30px ${currentConfig.glow}`,
              }}
            >
              <span>Crear mi Bóveda Offline Ahora</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#protocolo-familiar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F1624] hover:bg-[#162033] border border-white/12 text-[#F8FAFC] font-medium text-base transition-all duration-200 hover:border-white/25"
            >
              <FileCheck className="w-4 h-4 text-amber-400" />
              <span>Ver Mapa de Emergencia Familiar</span>
            </a>
          </div>

          {/* Trust Tokens */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 pt-2 font-mono">
            <div className="flex items-center gap-2">
              <Usb className="w-4 h-4 text-emerald-400" />
              <span>Sistema 1: USB Físico Notarial</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-sky-400" />
              <span>Sistema 2: APK Nativa (6.03 MB)</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>Zero Servidores Externos</span>
            </div>
          </div>
        </div>

        {/* HIGH-CRAFT INTERACTIVE SIMULATOR (Desktop USB vs APK Android) */}
        <div id="simulador-hero" className="pt-2">
          <MockupShowcase />
        </div>
      </div>
    </section>
  )
}

export default Hero
