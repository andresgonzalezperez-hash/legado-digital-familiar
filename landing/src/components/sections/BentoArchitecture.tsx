import React, { useState } from 'react'
import { SpotlightCard } from '../ui/SpotlightCard'
import {
  FolderLock,
  Clock,
  BookOpenText,
  ShieldCheck,
  Check,
  EyeOff,
  BellRing,
  FileText,
  LockKeyhole,
} from 'lucide-react'

export const BentoArchitecture: React.FC = () => {
  const [selectedDays, setSelectedDays] = useState<number>(60)

  return (
    <section id="pilares" className="py-24 bg-[#0A0D0C] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-medium mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Fundamentos de la Cámara Acorazada</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3F4F6] font-normal tracking-tight mb-4">
            Los 4 Pilares de la Continuidad Familiar
          </h2>
          <p className="text-lg text-[#A7B3AF] leading-relaxed">
            Diseñado según los principios de la banca privada suiza: custodia inexpugnable en vida,
            transición suave y sin fricciones cuando sea necesario.
          </p>
        </div>

        {/* Bento Grid: 4 Asymmetrical Cards with SpotlightCard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* PILAR 1: Inventario Estructurado (lg:col-span-7) */}
          <SpotlightCard
            className="lg:col-span-7 flex flex-col justify-between"
            spotlightColor="rgba(16, 185, 129, 0.12)"
            borderColor="rgba(16, 185, 129, 0.35)"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <FolderLock className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                  Pilar 01 • Inventario
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F3F4F6] mb-3">
                Inventario Estructurado sin Exponer Claves
              </h3>
              <p className="text-base text-[#A7B3AF] leading-relaxed mb-6">
                No necesitas subir contraseñas en texto claro a la nube. Registras la existencia de
                tus cuentas, pólizas, participaciones y testamento, asociando pistas maestras y
                documentación que solo se revelará a tus herederos autorizados.
              </p>

              {/* Interactive preview box */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2.5 font-mono text-xs text-[#A7B3AF]">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                  <span className="flex items-center gap-2 text-[#F3F4F6]">
                    <EyeOff className="w-4 h-4 text-emerald-400" />
                    Banco Santander • Cuenta Ahorro Familiar
                  </span>
                  <span className="text-emerald-400 font-semibold">[Cifrado Local]</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                  <span className="flex items-center gap-2 text-[#F3F4F6]">
                    <EyeOff className="w-4 h-4 text-emerald-400" />
                    Seguro de Vida Mapfre • Póliza Familiar
                  </span>
                  <span className="text-emerald-400 font-semibold">[Cifrado Local]</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                  <span className="flex items-center gap-2 text-[#F3F4F6]">
                    <EyeOff className="w-4 h-4 text-amber-300" />
                    Buzón Maestro Proton / iCloud de Emergencia
                  </span>
                  <span className="text-amber-300 font-semibold">[Cifrado AES-256]</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/8 flex items-center gap-2 text-xs text-emerald-300">
              <Check className="w-4 h-4" />
              <span>Cero almacenamiento en texto plano. Ni nosotros podemos leer tus registros.</span>
            </div>
          </SpotlightCard>

          {/* PILAR 2: Dead-Man Switch Silencioso (lg:col-span-5) */}
          <SpotlightCard
            className="lg:col-span-5 flex flex-col justify-between"
            spotlightColor="rgba(212, 175, 55, 0.12)"
            borderColor="rgba(212, 175, 55, 0.35)"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                  Pilar 02 • Verificación
                </span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#F3F4F6] mb-3">
                Verificación de Vida Silenciosa
              </h3>
              <p className="text-base text-[#A7B3AF] leading-relaxed mb-6">
                Un protocolo de inactividad que no alarma a nadie. Comprueba tu estado de manera
                discreta mediante un simple clic o notificación respetuosa con periodos de gracia.
              </p>

              {/* Grace period selector */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-4">
                <p className="text-xs text-[#A7B3AF] mb-3 font-sans">
                  Ventana de comprobación configurable:
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[30, 60, 90].map((days) => (
                    <button
                      key={days}
                      onClick={() => setSelectedDays(days)}
                      className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                        selectedDays === days
                          ? 'bg-amber-400 text-black font-semibold shadow-md'
                          : 'bg-white/5 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      {days} Días
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-amber-300/80 mt-3 flex items-center gap-1.5">
                  <BellRing className="w-3.5 h-3.5" />
                  3 avisos discretos antes de cualquier escalado.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/8 text-xs text-[#A7B3AF]">
              Si estás de viaje o sin cobertura, puedes pausar el protocolo con un solo clic.
            </div>
          </SpotlightCard>

          {/* PILAR 3: Guías en Lenguaje Humano (lg:col-span-5) */}
          <SpotlightCard
            className="lg:col-span-5 flex flex-col justify-between"
            spotlightColor="rgba(16, 185, 129, 0.12)"
            borderColor="rgba(16, 185, 129, 0.35)"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <BookOpenText className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                  Pilar 03 • Familia
                </span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#F3F4F6] mb-3">
                Guías en Lenguaje Humano para la Familia
              </h3>
              <p className="text-base text-[#A7B3AF] leading-relaxed mb-4">
                La tecnología no sirve de nada si tu familia no sabe qué hacer con ella.
                Traducimos la burocracia en una guía cálida, ordenada y escrita para personas
                reales.
              </p>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs text-[#F3F4F6] space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-medium">
                  <FileText className="w-4 h-4" />
                  <span>"Querida familia, si leéis esto..."</span>
                </div>
                <p className="text-[11px] text-[#A7B3AF] leading-normal italic">
                  Paso 1: Llamar al gestor Carlos (tel: 612...) para liquidar la póliza. Paso 2: La
                  llave física está en el sobre lacrado de la notaría Martínez.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/8 text-xs text-emerald-300 flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Instrucciones accesibles para personas de 18 a 80 años.</span>
            </div>
          </SpotlightCard>

          {/* PILAR 4: Cifrado Zero-Knowledge (lg:col-span-7) */}
          <SpotlightCard
            className="lg:col-span-7 flex flex-col justify-between"
            spotlightColor="rgba(212, 175, 55, 0.12)"
            borderColor="rgba(212, 175, 55, 0.35)"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1B1A12] to-[#12120C] border border-amber-500/30 flex items-center justify-center text-amber-300">
                  <LockKeyhole className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                  Pilar 04 • Soberanía
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F3F4F6] mb-3">
                Cifrado Zero-Knowledge y Soberanía Local
              </h3>
              <p className="text-base text-[#A7B3AF] leading-relaxed mb-6">
                Arquitectura criptográfica matemática. La clave de descifrado se divide o deriva en
                tu navegador antes de cualquier sincronización. Ni un juez, ni un ciberdelincuente ni
                nuestro equipo técnico tiene acceso a tus datos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <p className="text-amber-300 font-semibold mb-1">AES-256-GCM</p>
                  <p className="text-[11px] text-[#A7B3AF] font-sans">
                    Estándar de grado militar avalado por la banca suiza.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <p className="text-emerald-300 font-semibold mb-1">Zero-Trust</p>
                  <p className="text-[11px] text-[#A7B3AF] font-sans">
                    El servidor solo almacena bloques ciegos indescifrables.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <p className="text-white font-semibold mb-1">Copia Offline</p>
                  <p className="text-[11px] text-[#A7B3AF] font-sans">
                    Exportable a tarjeta de memoria o sobre de seguridad físico.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between text-xs text-[#A7B3AF]">
              <span className="flex items-center gap-1.5 text-amber-300">
                <ShieldCheck className="w-4 h-4" />
                Matemáticas frente a promesas corporativas
              </span>
              <span>Auditable y Open Source en cliente</span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}

export default BentoArchitecture
