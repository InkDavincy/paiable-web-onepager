'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

const icons = {
  'ai-extract': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  workflow: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2m-2 0v4m2-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m-2 4h2m-2 0V5m2 4V3"
      />
    </svg>
  ),
  'payment-tracking': (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h8a2 2 0 002-2v-2M7 15h8"
      />
    </svg>
  ),
  security: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
}

export default function Features() {
  const { t } = useI18n()

  // Données des fonctionnalités (fallback si i18n pas encore chargé)
  const features = [
    {
      title: t('features.items.0.title', 'Extraction IA des factures'),
      description: t(
        'features.items.0.description',
        'Numérisez et extrayez automatiquement les données de vos factures PDF et emails avec une précision de 99%.'
      ),
      icon: 'ai-extract' as keyof typeof icons,
    },
    {
      title: t('features.items.1.title', 'Approbations & rappels automatisés'),
      description: t(
        'features.items.1.description',
        "Définissez des flux d'approbation personnalisés et recevez des rappels intelligents pour ne jamais manquer un paiement."
      ),
      icon: 'workflow' as keyof typeof icons,
    },
    {
      title: t('features.items.2.title', 'Suivi des paiements & conciliation'),
      description: t(
        'features.items.2.description',
        'Suivez vos paiements en temps réel et conciliez automatiquement avec vos comptes bancaires.'
      ),
      icon: 'payment-tracking' as keyof typeof icons,
    },
    {
      title: t('features.items.3.title', 'Conformité Loi 25 / PIPEDA'),
      description: t(
        'features.items.3.description',
        'Toutes vos données restent au Canada avec un chiffrement de bout en bout et une conformité totale.'
      ),
      icon: 'security' as keyof typeof icons,
    },
  ]

  return (
    <section id="features" className="section-spacing">
      <div className="section-container">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('features.title', 'Tout ce dont vous avez besoin pour automatiser vos paiements')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t(
              'features.subtitle',
              "De l'extraction à la conciliation, Paiable simplifie chaque étape de votre processus comptable."
            )}
          </p>
        </motion.div>

        {/* Grille des fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card h-full">
                {/* Icône */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-paiable-100 rounded-2xl flex items-center justify-center text-paiable-600 group-hover:bg-paiable-500 group-hover:text-white transition-colors duration-300">
                    {icons[feature.icon]}
                  </div>
                </div>

                {/* Contenu */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-paiable-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Indicateur interactif */}
                <div className="mt-6 flex items-center text-paiable-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium mr-2">En savoir plus</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
