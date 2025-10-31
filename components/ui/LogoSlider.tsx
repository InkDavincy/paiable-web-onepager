'use client'

import React from 'react'
import { GeminiLogo, OpenAILogo, ClaudeLogo, GroqLogo } from './icons'

const logos = [
  { Component: GeminiLogo, name: 'Google Gemini', className: 'h-8' },
  { Component: OpenAILogo, name: 'OpenAI', className: 'h-7' },
  { Component: ClaudeLogo, name: 'Claude', className: 'h-8' },
  { Component: GroqLogo, name: 'Groq', className: 'h-6' },
]

export default function LogoSlider() {
  // Créer une très longue liste pour éliminer complètement le glitch
  const repeatedLogos = Array.from({ length: 20 }, () => logos).flat()

  return (
    <section className="py-16 overflow-hidden">
      {/* Titre */}
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-slate-900 dark:text-slate-600 font-semibold text-lg md:text-xl lg:text-2xl text-shadow-paiable">
          Propulsé par les meilleurs modèles d'IA au monde
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex animate-slide hover:[animation-play-state:paused] space-x-8">
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-center 
                         min-w-[120px] h-20 group-hover:h-auto px-4 py-3 group-hover:py-4 my-2 rounded-xl 
                         bg-white dark:bg-slate-400/50 
                         border border-gray dark:border-black
                         shadow-lg shadow-paiable-600/40 hover:shadow-xl hover:shadow-paiable-800/50 
                         transition-all duration-300 hover:-translate-y-1
                         group cursor-pointer overflow-hidden"
            >
              {/* Logo - reste centré */}
              <div className="flex items-center justify-center flex-shrink-0 h-full group-hover:h-auto">
                <logo.Component
                  className={`${logo.className} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>

              {/* Nom qui apparaît au hover et agrandit la carte */}
              <div
                className="max-h-0 group-hover:max-h-8 opacity-0 group-hover:opacity-100 
                              mt-0 group-hover:mt-1 transition-all duration-300 text-center overflow-hidden"
              >
                <span className="text-xs font-medium text-paiable-700 dark:text-paiable-900 font-semibold whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
