import React from 'react'
import { SpotlightCard } from '../ui/SpotlightCard'
import { Usb, Smartphone, Printer, Cpu, Check } from 'lucide-react'

export const DualSystemSection: React.FC = () => {
  return (
    <section id="sistema-dual" className="py-24 bg-[#090D16] border-y border-white/8 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>ARQUITECTURA DE CUSTODIA DUAL v1.3.1</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F8FAFC] font-normal tracking-tight mb-4">
            Dos formatos físicos autónomos. Un único motor criptográfico indestructible.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Diseñado para sobrevivir décadas sin conexión a internet, sin instalaciones complejas ni
            permisos de administrador.
          </p>
        </div>

        {/* 2 Big Cards with SpotlightCard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* TARJETA IZQUIERDA — SISTEMA A: PENDRIVE USB FÍSICO */}
          <SpotlightCard
            className="flex flex-col justify-between"
            spotlightColor="rgba(245, 158, 11, 0.12)"
            borderColor="rgba(245, 158, 11, 0.35)"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-md">
                  <Usb className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold tracking-wide">
                  CAJA FUERTE & DEPÓSITO EN NOTARÍA
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-semibold mb-3">
                Sistema A: Pendrive USB Físico Notarial
              </h3>
              <h4 className="text-sm font-mono text-amber-300 mb-4">
                Conectar, doble clic y desbloquear en cualquier PC.
              </h4>

              <p className="text-base text-slate-300 leading-relaxed mb-6">
                Se deposita junto al testamento formal o en la caja fuerte familiar. Funciona en
                Windows, Mac y Linux ejecutando <code className="text-amber-300">inicio.html</code>{' '}
                o <code className="text-amber-300">iniciar_legado.bat</code> directamente desde la
                memoria flash, sin instalar absolutamente nada ni dejar rastro en el disco duro del
                ordenador.
              </p>

              {/* Spec highlight */}
              <div className="p-4 rounded-xl bg-black/50 border border-amber-500/25 flex items-center gap-3.5 mb-6 text-xs text-amber-200">
                <Printer className="w-5 h-5 text-amber-400 shrink-0" />
                <span>
                  <strong>Generador integrado de Documento Maestro PDF A4</strong> de alta
                  resolución listo para imprimir y guardar físicamente.
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Compatibilidad universal: Cualquier navegador moderno offline</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Cero rastros forenses en el disco local tras cerrar</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/8 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-amber-300">Depósito en Notaría Certificado</span>
              <span>USB 3.2 SanDisk Ultra</span>
            </div>
          </SpotlightCard>

          {/* TARJETA DERECHA — SISTEMA B: APLICACIÓN NATIVA ANDROID */}
          <SpotlightCard
            className="flex flex-col justify-between"
            spotlightColor="rgba(56, 189, 248, 0.12)"
            borderColor="rgba(56, 189, 248, 0.35)"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shadow-md">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 font-semibold tracking-wide">
                  BOLSILLO DEL TITULAR & BENEFICIARIOS
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white font-semibold mb-3">
                Sistema B: App Nativa Android (LegadoDigital.apk)
              </h3>
              <h4 className="text-sm font-mono text-sky-300 mb-4">
                Binario autónomo de 6.03 MB con bloqueo total de red.
              </h4>

              <p className="text-base text-slate-300 leading-relaxed mb-6">
                Tu bóveda siempre contigo o entregada en un archivo <code className="text-sky-300">.apk</code>{' '}
                a tus hijos y pareja. Construida con tecnología <code className="text-sky-300">WebViewAssetLoader</code>{' '}
                para ejecutar criptografía nativa (<code className="text-emerald-400">window.crypto.subtle</code>) en modo
                100% offline. No tiene permisos de salida a internet definidos en el Manifest.
              </p>

              {/* Spec highlight */}
              <div className="p-4 rounded-xl bg-black/50 border border-sky-500/25 flex items-center gap-3.5 mb-6 text-xs text-sky-200">
                <Cpu className="w-5 h-5 text-sky-400 shrink-0" />
                <span>
                  <strong>Compilación reproducible vía Docker</strong> en menos de 1 minuto sin
                  dependencias de Google Play Store.
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Sin permisos de red (android.permission.INTERNET omitido)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Instalación directa en cualquier dispositivo Android moderno</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/8 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-sky-300">Tamaño: 6.03 MB · SHA-256 OK</span>
              <span>Build Reproducible</span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}

export default DualSystemSection
