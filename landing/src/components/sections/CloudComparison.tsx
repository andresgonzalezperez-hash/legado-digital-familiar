import React from 'react'
import { XCircle, CheckCircle2, AlertTriangle } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export const CloudComparison: React.FC = () => {
  const { currentConfig } = useTheme()

  return (
    <section id="problema-cloud" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 font-mono mb-4">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>EL RIESGO EXISTENCIAL DE LA NUBE</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F8FAFC] font-normal tracking-tight mb-4 leading-tight">
          Cuando faltas, una suscripción caducada en la nube es un muro infranqueable para tu familia.
        </h2>
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          Los gestores comerciales están diseñados para cobrarte todos los meses, no para que tu
          pareja o hijos recuperen tus cuentas bancarias y seguros en medio de un duelo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gestores Cloud Comerciales */}
        <div className="rounded-3xl border border-rose-500/20 bg-gradient-to-b from-[#160E12] to-[#100A0D] p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-mono font-semibold">
            GESTOR COMERCIAL CLOUD
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-white font-semibold">
                  1Password, Bitwarden, Dashlane...
                </h3>
                <p className="text-xs text-rose-300/80">Dependencia de servidores ajenos e internet</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Suscripción recurrente obligatoria:</strong> Si la
                  tarjeta bancaria se bloquea al fallecer, la cuenta se suspende y el acceso queda
                  congelado para siempre.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">La trampa del 2FA:</strong> Exigen códigos SMS o
                  apps autenticadoras que están bloqueadas dentro del teléfono del titular.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Metadatos expuestos en la red:</strong> Direcciones
                  IP, timestamps y registros de acceso residen en servidores de empresas de EE.UU.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Complejidad inasumible:</strong> Interfaces densas
                  pensadas para ingenieros que abruman a herederos no técnicos.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-rose-500/20 text-xs text-rose-300/70 font-mono">
            Vulnerabilidad: Servidores caídos, cierres de servicio o impago bloquean a tus herederos.
          </div>
        </div>

        {/* Legado Digital Familiar Air-Gapped */}
        <div
          className="rounded-3xl border-2 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#0F1B2B] to-[#0A121D]"
          style={{ borderColor: currentConfig.borderSoft }}
        >
          <div
            className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-mono font-semibold"
            style={{
              backgroundColor: currentConfig.bgSoft,
              color: currentConfig.hex,
              border: `1px solid ${currentConfig.borderSoft}`,
            }}
          >
            AIR-GAPPED SOVEREIGN
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: currentConfig.bgSoft, color: currentConfig.hex }}
              >
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-white font-semibold">
                  Legado Digital Familiar v1.3.1
                </h3>
                <p className="text-xs" style={{ color: currentConfig.hex }}>
                  100% Desconectado · Soberanía en tu poder
                </p>
              </div>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: currentConfig.hex }} />
                <span>
                  <strong className="text-white">0 € en suscripciones para siempre:</strong> Sin
                  cuotas mensuales. El software y los datos te pertenecen a ti de por vida.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: currentConfig.hex }} />
                <span>
                  <strong className="text-white">100% Desconectado de Internet:</strong> Funciona en
                  Modo Avión desde un USB o un móvil Android sin enviar ni un solo byte al exterior.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: currentConfig.hex }} />
                <span>
                  <strong className="text-white">Propiedad física en caja fuerte o notaría:</strong>{' '}
                  Se custodia en mano junto al testamento formal, sin intermediarios tecnológicos.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: currentConfig.hex }} />
                <span>
                  <strong className="text-white">Modo Familiar "Solo Lectura":</strong> Los
                  beneficiarios disponen de una guía paso a paso y generación de PDF A4 en 1 clic.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-mono">
            <span style={{ color: currentConfig.hex }}>Autonomía Total: Inmune a caídas de internet</span>
            <span className="text-slate-400">Licencia MIT</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CloudComparison
