'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'

export default function Hero() {
  const { t } = useI18n()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden pt-20 lg:pt-24 pb-16 lg:pb-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge de confiance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-paiable-50 text-paiable-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-paiable-500 rounded-full"></span>
              <span>{t('hero.trustBadge', 'Conforme Loi 25 & PIPEDA')}</span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-paiable-950 to-paiable-300"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                {t('hero.title', 'Automatisez vos factures. Accélérez vos paiements.')}{' '}
              </motion.span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center text-xl lg:text-2xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {t(
                'hero.subtitle',
                "Paiable utilise l'IA pour centraliser la gestion de vos factures et dépenses, vous faisant gagner du temps et vous donnant des informations financières claires."
              )}
            </motion.p>

            {/* Boutons CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('pricing')}
                className="btn-primary text-lg px-8 py-4"
              >
                {t('hero.ctaPrimary', 'Essayer gratuitement')}
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="btn-secondary text-lg px-8 py-4"
              >
                {t('hero.ctaSecondary', 'Demander une démo')}
              </button>
            </motion.div>

            {/* Statistiques/Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left"
            >
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-paiable-600">99%</div>
                <div className="text-sm text-muted-foreground">Précision IA</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-paiable-600">50%</div>
                <div className="text-sm text-muted-foreground">Temps économisé</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-paiable-600">100%</div>
                <div className="text-sm text-muted-foreground">Canadien</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visuel/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Placeholder pour illustration - vous pouvez remplacer par une vraie illustration */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                {/* Simulation d'interface */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-paiable-500 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">Facture-2024-001.pdf</div>
                        <div className="text-xs text-muted-foreground">Traitement en cours...</div>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-3 bg-slate-50 rounded-lg p-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Fournisseur</span>
                      <span className="text-sm font-medium">Acme Corp.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Montant</span>
                      <span className="text-sm font-medium">2,450.00 CAD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Date d'échéance</span>
                      <span className="text-sm font-medium text-orange-600">Dans 7 jours</span>
                    </div>
                  </div>

                  <button className="w-full bg-paiable-500 text-white py-3 rounded-lg font-medium">
                    Approuver et programmer le paiement
                  </button>
                </div>

                {/* Effets décoratifs */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-paiable-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Éléments flottants animés */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -right-8 bg-white rounded-xl shadow-lg p-4 z-20"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Extraction réussie</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-8 bg-white rounded-xl shadow-lg p-4 z-20"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-paiable-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Paiement programmé</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
