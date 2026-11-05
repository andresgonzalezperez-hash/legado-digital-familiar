import React, { useState } from 'react'
import {
  FileSignature,
  HeartPulse,
  SendHorizontal,
  CheckCircle2,
  Lock,
  ArrowRight,
  Shield,
} from 'lucide-react'

export const InteractiveTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1)

  const steps = [
    {
      step: 1,
      title: 'Organizas en vida',
      subtitle: '20 minutos guiados sin compartir tus contraseñas',
      icon: <FileSignature className="w-6 h-6" />,
      color: 'emerald',
      badge: 'Fase Inicial • Soberanía',
      summary:
        'Conectas tu inventario sin exponer credenciales. defines qué beneficiario tiene acceso a cada activo y redactas notas personales con total tranquilidad.',
      details: [
        'Cuestionario estructurado para bancos, inmuebles, inversiones y cuentas online.',
        'Asignación específica: tu cónyuge recibe unas instrucciones, tus hijos otras.',
        'Generación de tu llave maestra cifrada offline (imprimible o en USB blindado).',
      ],
      callout: 'Tus contraseñas nunca se guardan en servidores externos.',
    },
    {
      step: 2,
      title: 'Verificación silenciosa',
      subtitle: 'El Dead-Man Switch monitoriza sin alarmar a nadie',
      icon: <HeartPulse className="w-6 h-6" />,
      color: 'amber',
      badge: 'Fase Activa • Discreción',
      summary:
        'El sistema comprueba periódicamente tu bienestar mediante un pulso digital no intrusivo (un enlace por email o confirmación en tu móvil).',
      details: [
        'Ventana de inactividad configurable a 30, 60 o 90 días.',
        'Múltiples avisos de cortesía antes de iniciar cualquier protocolo de contingencia.',
        'Modo "Pausa de Vacaciones" disponible para expediciones o zonas sin cobertura.',
      ],
      callout: 'Cero falsas alarmas. Se requieren confirmaciones repetidas.',
    },
    {
      step: 3,
      title: 'Entrega guiada y escalonada',
      subtitle: 'Tus seres queridos reciben la llave justa en el momento oportuno',
      icon: <SendHorizontal className="w-6 h-6" />,
      color: 'emerald',
      badge: 'Fase de Ejecución • Paz Mental',
      summary:
        'Solo si el periodo de gracia expira sin respuesta, el sistema activa la entrega ordenada de las cartas de legado y la instrucción legal a tus beneficiarios.',
      details: [
        'Desbloqueo gradual: primero las instrucciones urgentes (suministros, seguro de decesos).',
        'Guía paso a paso en lenguaje humano indicando teléfonos, ventanillas y qué decir.',
        'Soporte notarial y orientación técnica incluida para que tu familia nunca esté sola.',
      ],
      callout: 'Cero complicaciones informáticas para tus seres queridos.',
    },
  ]

  const current = steps.find((s) => s.step === activeStep) || steps[0]

  return (
    <section id="como-funciona" className="py-24 border-t border-white/8 bg-[#0C100E] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-medium mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>El Ciclo Completo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3F4F6] font-normal tracking-tight mb-4">
            Cómo Funciona en 3 Pasos
          </h2>
          <p className="text-lg text-[#A7B3AF] leading-relaxed">
            Una secuencia diseñada para protegerte en vida y arropar a tu familia cuando más lo
            necesite.
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          {steps.map((item) => (
            <button
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 ${
                activeStep === item.step
                  ? 'border-emerald-500/50 bg-[#141F1A] shadow-xl shadow-emerald-950/40 -translate-y-1'
                  : 'border-white/8 bg-[#111614] hover:border-white/20 hover:bg-[#141A17]'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  activeStep === item.step
                    ? 'bg-emerald-500 text-black font-semibold'
                    : 'bg-white/5 text-white/60'
                }`}
              >
                {item.icon}
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-emerald-400 font-semibold block uppercase">
                  Paso 0{item.step}
                </span>
                <p className="text-base font-medium text-[#F3F4F6] truncate mt-0.5">{item.title}</p>
                <p className="text-xs text-[#A7B3AF] truncate mt-1">{item.subtitle}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-[#111614] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -right-10 -bottom-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />

          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-serif font-bold text-lg flex items-center justify-center">
                {current.step}
              </span>
              <div>
                <h3 className="font-serif text-2xl text-[#F3F4F6] font-semibold">{current.title}</h3>
                <p className="text-xs text-[#A7B3AF]">{current.subtitle}</p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
              {current.badge}
            </span>
          </div>

          <p className="text-lg text-[#F3F4F6] font-light leading-relaxed mb-8">
            {current.summary}
          </p>

          <div className="space-y-3.5 mb-8">
            {current.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3 text-base text-[#D1D5DB]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/20 flex items-center justify-between gap-4 text-xs">
            <span className="text-emerald-300 font-medium flex items-center gap-2">
              <Lock className="w-4 h-4" />
              {current.callout}
            </span>
            <button
              onClick={() => setActiveStep(activeStep === 3 ? 1 : activeStep + 1)}
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white font-medium"
            >
              <span>{activeStep === 3 ? 'Volver al Paso 1' : 'Ver Siguiente Paso'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveTimeline
