import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: '¿Qué ocurre si dentro de 10 años este proyecto ya no se actualiza?',
      answer:
        'Sigue funcionando exactamente igual. Al estar construido sobre estándares nativos e inmutables del navegador (HTML5, Vanilla JavaScript y Web Crypto API estándar) y empaquetado de forma autónoma tanto en el USB como en el .apk de Android, no depende de ningún servidor externo, suscripción comercial ni API remota que pueda cerrar o quebrar.',
    },
    {
      question: '¿Mi familia puede borrar algo sin querer al entrar a buscar los datos?',
      answer:
        'No. El Modo Familiar (Solo Lectura Blindada) bloquea por completo cualquier acción destructiva o modificación accidental. El sistema oculta los botones de borrado y edición, permitiendo únicamente consultar el inventario, seguir el checklist paso a paso, auditar las firmas de salud SHA-256 e imprimir el Documento Maestro A4 para las gestiones notariales y bancarias.',
    },
    {
      question: '¿Qué pasa si se estropea el Pendrive USB o hay un incendio en casa?',
      answer:
        'El sistema cuenta con verificación de salud SHA-256 para detectar desgaste físico de memoria con antelación, permite clonar con 1 clic tantos pendrives USB y móviles Android como desees (para tener copias en notaría, caja fuerte o segunda residencia), e incluye el script sincronizar_drive.ps1 que sube únicamente el paquete ya cifrado con AES-256-GCM a tu Google Drive o Homelab como salvaguarda remota indestructible.',
    },
    {
      question: '¿Es software libre y auditable?',
      answer:
        'Sí, se distribuye bajo la licencia de código abierto MIT con código 100% transparente y auditable en texto plano. No contiene telemetría oculta, ni rastreadores de publicidad, ni dependencias oscuras que realicen peticiones de red encubiertas. Eres el dueño soberano absoluto de tu software y de tus datos.',
    },
  ]

  return (
    <section id="faq" className="py-24 bg-[#0A0D16] relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>RESPUESTAS DIRECTAS & GARANTÍA TÉCNICA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F8FAFC] font-normal tracking-tight mb-4">
            Preguntas Frecuentes de Familias y Notarios
          </h2>
          <p className="text-base text-slate-400">
            Todo lo que necesitas saber sobre la persistencia temporal, seguridad y robustez
            air-gapped.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-[#0F1624] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg text-white font-medium">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-500/20 text-emerald-300' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
