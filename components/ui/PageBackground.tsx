'use client'

import { memo } from 'react'

const PageBackground = memo(() => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Gradient de base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100" />

      {/* Motifs géométriques doux */}
      <div className="absolute inset-0 opacity-40">
        {/* Cercles flottants */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-paiable-100 to-paiable-200 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-100 to-paiable-100 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-slate-100 to-blue-50 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Grille subtile */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            color: 'rgb(59 130 246)', // blue-500
          }}
        />
      </div>

      {/* Overlay pour améliorer le contraste */}
      <div className="absolute inset-0 bg-white/50" />
    </div>
  )
})

PageBackground.displayName = 'PageBackground'

export default PageBackground
