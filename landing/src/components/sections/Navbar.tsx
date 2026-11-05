import React, { useState, useEffect } from 'react'
import { Shield, Menu, X, ArrowRight } from 'lucide-react'
import { useTheme, type AccentColor, ACCENTS } from '../../context/ThemeContext'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const { accent, setAccent, currentConfig } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090D16]/90 backdrop-blur-md border-b border-white/8 py-3 shadow-2xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 shadow-md transition-colors"
              style={{ backgroundColor: currentConfig.bgSoft }}
            >
              <Shield className="w-5 h-5" style={{ color: currentConfig.hex }} />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm tracking-tight font-bold text-white group-hover:text-emerald-300 transition-colors">
                LEGADO DIGITAL
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400">
                v1.3.1 // AIR-GAPPED VAULT
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm text-slate-400">
            <a href="#problema-cloud" className="hover:text-white transition-colors">
              El Problema Cloud
            </a>
            <a href="#sistema-dual" className="hover:text-white transition-colors">
              Sistema Dual (USB + APK)
            </a>
            <a href="#criptografia" className="hover:text-white transition-colors">
              Criptografía & Anti Bit-Rot
            </a>
            <a href="#protocolo-familiar" className="hover:text-white transition-colors">
              Protocolo Familiar
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action & Accent Switcher */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Accent dots */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0F1624] border border-white/10">
              {(['emerald', 'cobalt', 'amber'] as AccentColor[]).map((col) => (
                <button
                  key={col}
                  onClick={() => setAccent(col)}
                  title={ACCENTS[col].label}
                  className={`w-4 h-4 rounded-full transition-transform ${
                    accent === col
                      ? 'scale-125 ring-2 ring-white ring-offset-1 ring-offset-black'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: ACCENTS[col].hex }}
                />
              ))}
            </div>

            {/* CTA */}
            <a
              href="#descargar"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium text-xs sm:text-sm transition-all shadow-lg hover:opacity-95 hover:-translate-y-0.5"
              style={{
                backgroundColor: currentConfig.hex,
                boxShadow: `0 4px 20px ${currentConfig.glow}`,
              }}
            >
              <span>Descargar Edición Dual</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F1624] border-b border-white/10 px-4 py-5 shadow-2xl">
          <div className="flex flex-col gap-3 text-sm text-white">
            <a
              href="#problema-cloud"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-emerald-400"
            >
              El Problema Cloud
            </a>
            <a
              href="#sistema-dual"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-emerald-400"
            >
              Sistema Dual (USB + APK)
            </a>
            <a
              href="#criptografia"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-emerald-400"
            >
              Criptografía & Anti Bit-Rot
            </a>
            <a
              href="#protocolo-familiar"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-emerald-400"
            >
              Protocolo Familiar
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-emerald-400"
            >
              Preguntas Frecuentes
            </a>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Acento:</span>
              <div className="flex items-center gap-2">
                {(['emerald', 'cobalt', 'amber'] as AccentColor[]).map((col) => (
                  <button
                    key={col}
                    onClick={() => setAccent(col)}
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: ACCENTS[col].hex }}
                  />
                ))}
              </div>
            </div>

            <a
              href="#descargar"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-medium text-sm"
              style={{ backgroundColor: currentConfig.hex }}
            >
              <span>Descargar Pack Dual v1.3.1</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
