import React from 'react'
import { NumberTicker } from '../ui/NumberTicker'
import { AlertCircle, FileSearch, ShieldCheck, UserCheck } from 'lucide-react'

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/8 bg-[#0C100E] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.04),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#F3F4F6] font-normal tracking-tight mb-3">
            La realidad silenciosa del patrimonio moderno
          </h2>
          <p className="text-base text-[#A7B3AF]">
            Hoy en día, casi el 80% de nuestra vida financiera, legal y personal es digital.
            Sin una hoja de ruta, tu familia se enfrenta a un laberinto burocrático impenetrable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="p-6 rounded-2xl bg-[#111614] border border-white/8 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300 mb-4">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="font-serif text-4xl sm:text-5xl font-semibold text-[#F3F4F6] mb-2 flex items-center justify-center">
              <NumberTicker value={84} suffix="%" duration={1600} />
            </div>
            <p className="text-sm font-medium text-amber-300/90 mb-1.5">Bloqueo o Pérdida Parcial</p>
            <p className="text-xs text-[#A7B3AF] leading-relaxed">
              De familias desconocen la existencia de al menos 2 cuentas, seguros o activos del
              titular al momento del deceso.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-6 rounded-2xl bg-[#111614] border border-white/8 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-300 mb-4">
              <FileSearch className="w-5 h-5" />
            </div>
            <div className="font-serif text-4xl sm:text-5xl font-semibold text-[#F3F4F6] mb-2 flex items-center justify-center">
              <span>+</span>
              <NumberTicker value={4200} duration={2000} />
              <span className="text-2xl ml-1 text-emerald-400">M€</span>
            </div>
            <p className="text-sm font-medium text-rose-300/90 mb-1.5">Fondos Huérfanos Anuales</p>
            <p className="text-xs text-[#A7B3AF] leading-relaxed">
              Dinero en bancos, pólizas no reclamadas e inversiones que terminan en manos del
              Estado por falta de notificación.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-6 rounded-2xl bg-[#111614] border border-white/8 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-serif text-4xl sm:text-5xl font-semibold text-emerald-400 mb-2 flex items-center justify-center">
              <NumberTicker value={0} duration={800} />
            </div>
            <p className="text-sm font-medium text-emerald-300 mb-1.5">Contraseñas Expuestas</p>
            <p className="text-xs text-[#A7B3AF] leading-relaxed">
              Tus claves nunca viajan en texto plano ni se guardan en nuestros servidores. Cifrado
              local exclusivo en tu dispositivo.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-6 rounded-2xl bg-[#111614] border border-white/8 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300 mb-4">
              <UserCheck className="w-5 h-5" />
            </div>
            <div className="font-serif text-4xl sm:text-5xl font-semibold text-[#F3F4F6] mb-2 flex items-center justify-center">
              <NumberTicker value={100} suffix="%" duration={1800} />
            </div>
            <p className="text-sm font-medium text-amber-300/90 mb-1.5">Comprensión para No-Técnicos</p>
            <p className="text-xs text-[#A7B3AF] leading-relaxed">
              Guías redactadas con calidez y precisión legal, diseñadas para que cualquier familiar
              sepa exactamente qué pasos dar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
