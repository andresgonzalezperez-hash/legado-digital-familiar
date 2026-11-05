import React, { useState } from 'react'
import { FileText, Heart, Users, Scale, ShieldCheck, Sparkles, Copy, Check } from 'lucide-react'

export const ProtocolSimulator: React.FC = () => {
  const [recipient, setRecipient] = useState<'spouse' | 'children' | 'legal'>('spouse')
  const [copied, setCopied] = useState<boolean>(false)

  const copySample = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="simulador" className="py-24 bg-[#0A0D0C] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simulador de Entrega Familiar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3F4F6] font-normal tracking-tight mb-4">
            Comprueba Cómo lo Recibirán Tus Seres Queridos
          </h2>
          <p className="text-lg text-[#A7B3AF] leading-relaxed">
            Sin códigos ininteligibles, sin pantallas negras de comandos. Una carta clara, ordenada
            y redactada en lenguaje humano.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setRecipient('spouse')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              recipient === 'spouse'
                ? 'bg-rose-500/20 border border-rose-500/50 text-rose-200 shadow-lg'
                : 'bg-white/5 border border-white/8 text-white/70 hover:bg-white/10'
            }`}
          >
            <Heart className="w-4 h-4 text-rose-400" />
            <span>Para Mi Cónyuge / Pareja</span>
          </button>

          <button
            onClick={() => setRecipient('children')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              recipient === 'children'
                ? 'bg-amber-500/20 border border-amber-500/50 text-amber-200 shadow-lg'
                : 'bg-white/5 border border-white/8 text-white/70 hover:bg-white/10'
            }`}
          >
            <Users className="w-4 h-4 text-amber-400" />
            <span>Para Mis Hijos / Familia</span>
          </button>

          <button
            onClick={() => setRecipient('legal')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              recipient === 'legal'
                ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 shadow-lg'
                : 'bg-white/5 border border-white/8 text-white/70 hover:bg-white/10'
            }`}
          >
            <Scale className="w-4 h-4 text-emerald-400" />
            <span>Para el Albacea o Gestor</span>
          </button>
        </div>

        {/* Simulated Document Viewer (Paper Parchment / Modern Swiss Document) */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-white/12 bg-[#121815] shadow-2xl p-6 sm:p-10 relative overflow-hidden font-sans">
          {/* Top document bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-xs text-[#A7B3AF]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-white/80">DOCUMENTO DE CONTINUIDAD #LD-2026-F</span>
            </div>
            <button
              onClick={copySample}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado' : 'Copiar Ejemplo'}</span>
            </button>
          </div>

          {/* Document Content according to recipient */}
          {recipient === 'spouse' && (
            <div className="space-y-6 text-[#F3F4F6] text-base leading-relaxed">
              <div className="border-l-2 border-rose-400/80 pl-4 py-1 italic text-rose-200/90 font-serif text-lg">
                "Mi amor, si estás leyendo esto, es porque el protocolo se ha activado. He dejado
                todo organizado para que no tengas que preocuparte de nada."
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                <div className="p-4 rounded-xl bg-black/40 border border-white/8">
                  <h4 className="font-semibold text-emerald-300 mb-1 flex items-center gap-2">
                    <span>1. Cuentas y Liquidez Inmediata</span>
                  </h4>
                  <p className="text-[#A7B3AF] text-sm">
                    Existe una cuenta conjunta en Santander (IBAN que termina en ...4821) con fondos
                    para cubrir todos los gastos cotidianos e hipoteca de los próximos 12 meses.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/8">
                  <h4 className="font-semibold text-emerald-300 mb-1 flex items-center gap-2">
                    <span>2. Seguro de Vida Mapfre</span>
                  </h4>
                  <p className="text-[#A7B3AF] text-sm">
                    Póliza Nº 8921-99. Tienes derecho a la indemnización principal. Contacta
                    directamente con el asesor Juan Ramos (tel: 618 20 44 11). Solo te pedirán el
                    certificado literal.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/8">
                  <h4 className="font-semibold text-amber-300 mb-1 flex items-center gap-2">
                    <span>3. Acceso a Fotos y Memorias de la Familia</span>
                  </h4>
                  <p className="text-[#A7B3AF] text-sm">
                    He preparado una copia de seguridad en el disco duro azul del despacho (clave en
                    el sobre amarillo) con todos los vídeos y álbumes de los viajes de los niños.
                  </p>
                </div>
              </div>
            </div>
          )}

          {recipient === 'children' && (
            <div className="space-y-6 text-[#F3F4F6] text-base leading-relaxed">
              <div className="border-l-2 border-amber-400/80 pl-4 py-1 italic text-amber-200/90 font-serif text-lg">
                "Hijos míos, lo más valioso que os dejo no son cosas materiales, sino el tiempo y el
                amor que hemos compartido. Aquí tenéis todo lo necesario para seguir adelante."
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                <div className="p-4 rounded-xl bg-black/40 border border-white/8">
                  <h4 className="font-semibold text-amber-300 mb-1">
                    1. Fondo de Estudios y Emprendimiento
                  </h4>
                  <p className="text-[#A7B3AF] text-sm">
                    En Indexa Capital tenéis una cuenta de fondos indexados a vuestro nombre para
                    vuestra formación y proyectos. Vuestra madre tiene los poderes para gestionar el
                    traspaso.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/8">
                  <h4 className="font-semibold text-emerald-300 mb-1">
                    2. Mi Legado Digital y Fotografías
                  </h4>
                  <p className="text-[#A7B3AF] text-sm">
                    Todas las cartas personales, grabaciones de voz y recuerdos están organizados en
                    carpetas por año en nuestro archivo seguro.
                  </p>
                </div>
              </div>
            </div>
          )}

          {recipient === 'legal' && (
            <div className="space-y-6 text-[#F3F4F6] text-base leading-relaxed">
              <div className="border-l-2 border-emerald-400/80 pl-4 py-1 font-serif text-lg text-emerald-200/90">
                "Anexo de Instrucciones Patrimoniales para el Notario / Albacea de Confianza."
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                <div className="p-4 rounded-xl bg-black/40 border border-white/8">
                  <h4 className="font-semibold text-emerald-300 mb-1">
                    Inventario de Bienes Muebles e Inmuebles
                  </h4>
                  <p className="text-[#A7B3AF] text-sm">
                    Relación de escrituras notariales depositadas en la Notaría Martínez (Tomo 2024,
                    Folio 182). Liquidación de participaciones sociales societarias y activos en
                    custodia.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Footer of the document */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A7B3AF]">
            <span className="flex items-center gap-1.5 text-emerald-300">
              <ShieldCheck className="w-4 h-4" />
              Documento generado automáticamente por Legado Digital
            </span>
            <span className="font-mono text-white/50">HASH: SHA-256 VERIFIED</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProtocolSimulator
