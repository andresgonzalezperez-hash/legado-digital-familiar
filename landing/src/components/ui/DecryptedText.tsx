import React, { useEffect, useState, useRef } from 'react'

interface DecryptedTextProps {
  text: string
  speed?: number // interval in ms
  maxDuration?: number // total duration limit in ms (default 600ms)
  characters?: string
  className?: string
  parentClassName?: string
  encryptedClassName?: string
  animateOn?: 'view' | 'hover'
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 30,
  maxDuration = 600,
  characters = 'ABCDEF0123456789#$*!%&',
  className = '',
  parentClassName = '',
  encryptedClassName = 'text-[#10B981] font-mono',
}) => {
  const [displayText, setDisplayText] = useState<string>(text)
  const [isDecrypted, setIsDecrypted] = useState<boolean>(false)
  const containerRef = useRef<HTMLSpanElement>(null)
  const hasRunRef = useRef<boolean>(false)

  useEffect(() => {
    if (hasRunRef.current) return
    hasRunRef.current = true

    const startTime = performance.now()
    const totalChars = text.length

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime
      const progress = Math.min(elapsed / maxDuration, 1)

      // Number of characters resolved so far
      const resolvedCount = Math.floor(progress * totalChars)

      if (progress >= 1) {
        setDisplayText(text)
        setIsDecrypted(true)
        clearInterval(interval)
        return
      }

      const scrambled = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' '
          if (index < resolvedCount) return char
          return characters[Math.floor(Math.random() * characters.length)]
        })
        .join('')

      setDisplayText(scrambled)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, maxDuration, characters])

  return (
    <span ref={containerRef} className={`inline-block ${parentClassName}`}>
      <span className={`${className} ${!isDecrypted ? encryptedClassName : ''} transition-colors duration-300`}>
        {displayText}
      </span>
    </span>
  )
}
export default DecryptedText
