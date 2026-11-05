import React, { useState } from 'react'
import { Shield, ArrowRight, CheckCircle2, Lock, Sparkles, Mail, User } from 'lucide-react'
import confetti from 'canvas-confetti'

export const WaitlistCTA: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [priority, setPriority] = useState('bancos')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)

      // Celebrate with subtle gold/emerald confetti
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#10B981', '#D4AF37', '#F3F4F6', '#059669'],
        })
      } catch (err) {
        console.log(err)
      }
    }, 700)
  }

  return (
    <section id="waitlist" className="py-24 bg-[#0A0D0C] relative scroll-mt-20 overflow-hidden">
      {/* Background radial halo */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-t from-emerald-950/20 via-emerald-900/10 to-transparent blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-[#121B16] to-[#0D1410] p-8 sm:p-14 shadow-2xl shadow-emerald-950/50 text-center relative overflow-hidden">
          {/* Subtle vault watermarks */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-300 font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Fase 1: Convocatoria para Familias Fundadoras</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#F3F4F6] font-normal tracking-tight mb-4">
            Protege el Futuro de los Tuyos Hoy Mismo
          </h2>
          <p className="text-base sm:text-lg text-[#A7B3AF] max-w-2xl mx-auto mb-8 leading-relaxed">
            Únete a la lista preferente de acceso anticipado. Recibirás tu bóveda local de por vida
            y una consulta orientativa sobre continuidad digital notarial sin coste.
          </p>

          {submitted ? (
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-white font-semibold mb-2">
                ¡Plaza Reservada con Éxito!
              </h3>
              <p className="text-sm text-emerald-200/90 leading-relaxed">
                Gracias, <strong className="text-white">{name || 'familia'}</strong>. Hemos anotado{' '}
                <strong className="text-white">{email}</strong> en la lista de acceso prioritario.
                Te contactaremos directamente cuando tu bóveda esté lista para su configuración.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 text-left">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A7B3AF] font-medium mb-1.5">
                  Nombre Completo o Alias Familiar
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Familia Rodríguez o Javier García"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/12 text-[#F3F4F6] placeholder-white/30 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A7B3AF] font-medium mb-1.5">
                  Correo Electrónico Principal
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="javier@ejemplo.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/12 text-[#F3F4F6] placeholder-white/30 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A7B3AF] font-medium mb-1.5">
                  ¿Qué Activos Deseas Proteger con Mayor Prioridad?
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/12 text-[#F3F4F6] text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                >
                  <option value="bancos">Cuentas Bancarias, Préstamos y Depósitos</option>
                  <option value="inversiones">Fondos de Inversión, Acciones y Brokers</option>
                  <option value="claves">Contraseñas Maestras, 2FA y Buzones de Correo</option>
                  <option value="inmuebles">Seguros de Vida, Inmuebles y Escrituras</option>
                  <option value="todo">Patrimonio Integral Familiar Completo</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-medium text-base transition-all duration-200 shadow-xl shadow-emerald-950/60 hover:shadow-emerald-700/40 hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? 'Validando con Cifrado Local...' : 'Solicitar Acceso Prioritario Gratuito'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Privacy Guarantee footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A7B3AF]">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              Garantía Cero-SPAM: Tu email nunca será cedido ni vendido
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-300" />
              Cifrado y Cumplimiento RGPD Europeo Estricto
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WaitlistCTA
