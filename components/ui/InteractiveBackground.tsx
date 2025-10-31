'use client'

import { useEffect, useRef } from 'react'

/**
 * Fond interactif global pour Paiable:
 * - Lignes diagonales statiques subtiles
 * - Faisceau lumineux bleu qui suit le curseur le long des lignes
 * - Lueur ambiante douce autour du pointeur
 *
 * Couleurs adaptées à la charte Paiable (bleus)
 */
export default function InteractiveBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0

    const setPos = (x: number, y: number) => {
      el.style.setProperty('--mouse-x', `${x}px`)
      el.style.setProperty('--mouse-y', `${y}px`)
    }

    // Initialiser au centre de la viewport
    setPos(window.innerWidth / 2, window.innerHeight / 2)

    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setPos(e.clientX, e.clientY))
    }

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      if (!t) return
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setPos(t.clientX, t.clientY))
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
      style={
        {
          '--mouse-x': '50vw',
          '--mouse-y': '50vh',
        } as React.CSSProperties
      }
    >
      {/* Grille de lignes diagonales statiques */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(14, 165, 233, 0.05) 41px,
              rgba(14, 165, 233, 0.05) 42px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(14, 165, 233, 0.05) 41px,
              rgba(14, 165, 233, 0.05) 42px
            )`,
        }}
      />

      {/* Lignes plus lumineuses visibles seulement dans le masque du faisceau */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(14, 165, 233, 0.25) 41px,
              rgba(14, 165, 233, 0.25) 42px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              rgba(14, 165, 233, 0.25) 41px,
              rgba(14, 165, 233, 0.25) 42px
            )`,
          mask: `radial-gradient(
            1200px circle at var(--mouse-x) var(--mouse-y),
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.8) 25%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.1) 75%,
            transparent 100%
          )`,
          WebkitMask: `radial-gradient(
            1200px circle at var(--mouse-x) var(--mouse-y),
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.8) 25%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.1) 75%,
            transparent 100%
          )`,
        }}
      />

      {/* Lueur douce autour du pointeur pour la profondeur */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            1000px circle at var(--mouse-x) var(--mouse-y),
            rgba(14, 165, 233, 0.2) 0%,
            rgba(14, 165, 233, 0.15) 20%,
            rgba(14, 165, 233, 0.1) 40%,
            rgba(14, 165, 233, 0.05) 65%,
            rgba(14, 165, 233, 0.01) 85%,
            transparent 100%
          )`,
        }}
      />
    </div>
  )
}
