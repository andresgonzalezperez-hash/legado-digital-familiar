import React from 'react'
import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck, Heart } from 'lucide-react'

export const ProblemVsCalm: React.FC = () => {
  return (
    <section id="problema" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-medium mb-4">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>El Dilema de la Continuidad Familiar</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3F4F6] font-normal tracking-tight mb-4">
          El Caos de lo Inesperado vs. La Serenidad de una Hoja de Ruta
        </h2>
        <p className="text-lg text-[#A7B3AF] leading-relaxed">
          Nadie quiere pensar en el día de mañana, pero dejar las cosas al azar condena a quienes
          más quieres a meses de burocracia ciega en el peor momento de sus vidas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* LEFT: The Chaos (El Caos) */}
        <div className="relative rounded-3xl border border-rose-500/20 bg-gradient-to-b from-[#181112] to-[#120D0E] p-8 sm:p-10 flex flex-col justify-between shadow-xl">
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            Sin Protocolo
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#F3F4F6] font-semibold">
                  El Caos Burocrático y Emocional
                </h3>
                <p className="text-xs text-rose-300/80">Lo que vive hoy el 90% de las familias</p>
              </div>
            </div>

            <ul className="space-y-4 text-base text-[#D1D5DB]">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                <span>
                  <strong className="text-white">Cuentas e inversiones invisibles:</strong> Tu
                  pareja no sabe qué bancos utilizabas, si tenías pólizas de vida o dónde estaban
                  los fondos de ahorro.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                <span>
                  <strong className="text-white">Teléfonos y ordenadores bloqueados:</strong> Las
                  claves maestras y los factores de doble autenticación (2FA) se van contigo para
                  siempre.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                <span>
                  <strong className="text-white">Cobros recurrentes eternos:</strong> Servicios en
                  la nube, hipotecas o suministros se siguen cargando sin que nadie pueda cancelarlos
                  por falta de acceso.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                <span>
                  <strong className="text-white">Estrés y disputas evitables:</strong> Los
                  herederos se ven obligados a contratar gestores que cobran comisiones solo para
                  averiguar qué poseías.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-rose-500/15 text-xs text-rose-300/70 italic">
            Resultado: Meses de incertidumbre, cuentas congeladas y un dolor añadido evitable.
          </div>
        </div>

        {/* RIGHT: The Calm (La Calma con Legado Digital) */}
        <div className="relative rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-[#111A15] to-[#0E1512] p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-emerald-950/40">
          <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Con Legado Digital
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#F3F4F6] font-semibold">
                  La Calma de la Bóveda Suiza
                </h3>
                <p className="text-xs text-emerald-300/80">Orden, privacidad y protección total</p>
              </div>
            </div>

            <ul className="space-y-4 text-base text-[#F3F4F6]">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>
                  <strong className="text-emerald-300">Mapa patrimonial completo y privado:</strong>{' '}
                  Un inventario estructurado donde cada activo tiene su instrucción clara, sin
                  exponer contraseñas antes de tiempo.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>
                  <strong className="text-emerald-300">Verificación silenciosa y humana:</strong> El
                  protocolo de inactividad comprueba tu bienestar discretamente antes de cualquier
                  acción.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>
                  <strong className="text-emerald-300">Instrucciones en lenguaje llano:</strong> Tus
                  hijos o pareja reciben una carta personalizada con los pasos exactos, teléfonos
                  de contacto y documentos a presentar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>
                  <strong className="text-emerald-300">Cifrado militar en tu poder:</strong> Ni
                  nosotros ni ningún tercero podemos leer tu información. Solo tus beneficiarios
                  autorizados reciben la clave en su momento.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-emerald-500/20 flex items-center justify-between text-xs text-emerald-300/90 font-medium">
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-rose-300" />
              El mejor acto de amor y previsión que puedes dejar
            </span>
            <span className="text-[#A7B3AF]">Configurado en 20 min</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemVsCalm
