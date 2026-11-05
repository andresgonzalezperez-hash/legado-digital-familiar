import React, { createContext, useContext, useState, useEffect } from 'react'

export type AccentColor = 'emerald' | 'cobalt' | 'amber'

interface AccentConfig {
  name: string
  label: string
  hex: string
  glow: string
  bgSoft: string
  borderSoft: string
  textClass: string
  bgClass: string
  borderClass: string
}

export const ACCENTS: Record<AccentColor, AccentConfig> = {
  emerald: {
    name: 'emerald',
    label: 'Esmeralda (Cripto SHA-256)',
    hex: '#10B981',
    glow: 'rgba(16, 185, 129, 0.25)',
    bgSoft: 'rgba(16, 185, 129, 0.12)',
    borderSoft: 'rgba(16, 185, 129, 0.35)',
    textClass: 'text-emerald-400',
    bgClass: 'bg-emerald-500',
    borderClass: 'border-emerald-500',
  },
  cobalt: {
    name: 'cobalt',
    label: 'Cobalto (Ingeniería Dual)',
    hex: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.25)',
    bgSoft: 'rgba(56, 189, 248, 0.12)',
    borderSoft: 'rgba(56, 189, 248, 0.35)',
    textClass: 'text-sky-400',
    bgClass: 'bg-sky-500',
    borderClass: 'border-sky-500',
  },
  amber: {
    name: 'amber',
    label: 'Ámbar (Plica Notarial)',
    hex: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.25)',
    bgSoft: 'rgba(245, 158, 11, 0.12)',
    borderSoft: 'rgba(245, 158, 11, 0.35)',
    textClass: 'text-amber-400',
    bgClass: 'bg-amber-500',
    borderClass: 'border-amber-500',
  },
}

interface ThemeContextType {
  accent: AccentColor
  setAccent: (accent: AccentColor) => void
  currentConfig: AccentConfig
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accent, setAccent] = useState<AccentColor>('emerald')

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent)
  }, [accent])

  return (
    <ThemeContext.Provider
      value={{
        accent,
        setAccent,
        currentConfig: ACCENTS[accent],
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
